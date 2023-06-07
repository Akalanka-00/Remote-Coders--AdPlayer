const collectionList = require("../../service/Collections");
const {
  getRank,
  getRandomElement,
  calcViewCount,
  getRandomNumber,
} = require("../operations/common");
const {
  user_developers,
  games,
  status_list,
  ad_units,
  transaction_data,
} = require("../stores/data");
const { ad_type_ids, all_user_ids } = require("../stores/dynamic_data");
const {
  developer_ids,
  game_ids,
  game_type_ids,
} = require("../stores/dynamic_data");

async function saveDevelopers() {
  for (const user_developer of user_developers) {
    const userData = {
      username: user_developer.username,
      password: user_developer.password,
      email: user_developer.fname + user_developer.lname + "@gmail.com",
      fname: user_developer.fname,
      lname: user_developer.lname,
      profile: user_developer.profile,
      user_type: user_developer.user_type,
      read_notifications:user_developer.read_notifications,
    };

    const bankData = {
      name_on_bank_acc: user_developer.name_on_bank_acc,
      bank_name: user_developer.bank_name,
      routing_no: user_developer.routing_no,
      acc_no: user_developer.acc_no,
      acc_type: user_developer.acc_type,
    };

    const devData = {
      games: [],
      transactions: [],
    };

    const BankRef = await collectionList.bankDataCollection.add(bankData);
    devData.dev_bank_data_id = BankRef.id;
    const DeveloperRef = await collectionList.developerCollection.add(devData);
    userData.user_data_id = DeveloperRef.id;
    const UserRef = await collectionList.userCollection.add(userData);
    developer_ids.push(DeveloperRef.id);
    all_user_ids.push(UserRef.id);
  }
  console.log("User Developer saves successfully");
}

async function saveGames() {
  for (const developer_id of developer_ids) {
    const game_id_list = [];
    for (const game of games) {
      if (game.status == status_list[1]) {
        game.rank = getRank();
      }
      game.game_type = getRandomElement(game_type_ids);
      const GameRef = await collectionList.gameCollection.add(game);
      game_id_list.push(GameRef.id);
      game_ids.push(GameRef.id);
    }

    const DeveloperRef = await collectionList.developerCollection
      .doc(developer_id)
      .update({
        games: game_id_list,
      });
  }

  console.log("Games saved successfully");
}

async function saveAdUnits() {
  try {
    for (const game_id of game_ids) {
      const ad_unit_list = [];
      for (const ad_unit of ad_units) {
        ad_unit.ad_unit_type = getRandomElement(ad_type_ids);
        ad_unit.total_daily_view_count = calcViewCount(
          ad_unit.no_of_req_ad_daily
        );
        ad_unit.total_monthly_view_count = calcViewCount(
          ad_unit.no_of_req_ad_monthly
        );
        const AdUnitRef = await collectionList.adUnitCollection.add(ad_unit);
        ad_unit_list.push(AdUnitRef.id);
      }
      const gameRef = await collectionList.gameCollection.doc(game_id).update({
        ad_units: ad_unit_list,
      });
    }
    console.log("AdUnits saved successfully");
  } catch (error) {
    console.log(error);
  }
}

async function saveTransactions() {
  for (const dev_data_id of developer_ids) {
    const transaction_list = [];
    for (const transaction of transaction_data) {
      transaction.current_balance = getRandomNumber(50, 1000);
      transaction.withdrowal_amount = getRandomNumber(
        0,
        transaction.current_balance
      );
      transaction.remain_balance =
        transaction.current_balance - transaction.withdrowal_amount;
      if (transaction.status == status_list[1]) {
        transaction.action_taken_date = new Date();
      }
      const TransactionRef = await collectionList.transactionCollection.add(
        transaction
      );
      transaction_list.push(TransactionRef.id);
    }
    const DeveloperRef = await collectionList.developerCollection
      .doc(dev_data_id)
      .update({
        transactions: transaction_list,
      });
  }
  console.log("Transaction saved successfully");
}

module.exports = { saveDevelopers, saveGames, saveAdUnits, saveTransactions };
