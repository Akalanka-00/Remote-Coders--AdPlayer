const {
  getRandomNumber,
  getRandomElement,
  generateRandomString,
  getAdUnitActivities,
  // getAdUnitActivities,
} = require("../operations/common");

const status_list = ["pending", "approved", "rejected"];
const bank_account_types = ["saving", "current"];
const platforms = ["Android", "Ios"];
const notification_type = ["default", "reward", "warning"];

const temp_profile =
  "https://firebasestorage.googleapis.com/v0/b/remotecoders-2140a.appspot.com/o/profile_picture.png?alt=media&token=44fc6e54-e257-4c4d-8087-f541e3f9e411";

const admin_privileges = {
  privil1: true,
  privil2: false,
  privil3: true,
};

const complain_status_list = [true, false];
const delete_list = [
  "AdTypeCollection",
  "GameTypeCollection",

  "UserCollection",
  "DeveloperCollection",
  "AdminCollection",
  "CustomerCollection",
  "BankDataCollection",
  "AdUnitCollection",
  "CustomerAdCollection",
  "GameCollection",
  "LogCollection",
  "NotificationCollection",
  "ComplainCollection",
  "Transaction",
  "TransactionCollection",
  "AdvertisementCollection",
];

const ad_types = [
  {
    ad_type: "Banner",
    media_type: "image",
    revenue_per_thousand_add: 1,
    description:
      "Rectangular ads that occupy a portion of an app's layout; can be refreshed automatically after a period of time.",
    ad_logo: "",
    media_type_ratio: 0.1,
    ratio_per_ad: 0.3,
    ratio_per_day: 1.4,
    resolution: [
      { x: 100, y: 100, ratio_per_res: 1.1 },
      { x: 100, y: 100, ratio_per_res: 1.5 },
      { x: 100, y: 100, ratio_per_res: 1.7 },
    ],
  },
  {
    ad_type: "Interstitial",
    media_type: "image",
    revenue_per_thousand_add: 1.5,
    description:
      "Full-page ad format that appears at natural breaks and transitions, such as level completion",
    ad_logo: "",
    media_type_ratio: 0.1,
    ratio_per_ad: 1.3,
    ratio_per_day: 1.4,
    resolution: [
      { x: 100, y: 100, ratio_per_res: 1.1 },
      { x: 100, y: 100, ratio_per_res: 1.5 },
      { x: 100, y: 100, ratio_per_res: 1.7 },
    ],
  },
  {
    ad_type: "Rewarded interstitial",
    media_type: "image",
    revenue_per_thousand_add: 2,
    description:
      "Full-page ad format that rewards users for viewing ads during natural breaks or transitions.",
    ad_logo: "",
    media_type_ratio: 0.1,
    ratio_per_ad: 1.3,
    ratio_per_day: 1.4,
    resolution: [
      { x: 100, y: 100, ratio_per_res: 1.1 },
      { x: 100, y: 100, ratio_per_res: 1.5 },
      { x: 100, y: 100, ratio_per_res: 1.7 },
    ],
  },
  {
    ad_type: "Rewarded",
    media_type: "video",
    revenue_per_thousand_add: 5,
    description:
      "Full-page ad format that rewards users who choose to view an ad. Unlike rewarded interstitial, users must opt in to view the ad",
    ad_logo: "",
    media_type_ratio: 0.6,
    ratio_per_ad: 1.3,
    ratio_per_day: 1.4,
    resolution: [
      { x: 100, y: 100, ratio_per_res: 1.1 },
      { x: 100, y: 100, ratio_per_res: 1.5 },
      { x: 100, y: 100, ratio_per_res: 1.7 },
    ],
  },
];

const game_types = [
  {
    type_name: "Multiplayer",
    type_description:
      "This is a multiplayer Game.Maximum Number of 5 people can join.",
  },

  {
    type_name: "Acrade",
    type_description:
      "This is a multiplayer Game.Maximum Number of 5 people can join.",
  },

  {
    type_name: "Shooting",
    type_description:
      "This is a multiplayer Game.Maximum Number of 5 people can join.",
  },
];

const user_admins = [
  {
    username: "test-admin",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "admin",
    profile: temp_profile,
    user_type: "admin",
    privileges: admin_privileges,
  },

  {
    username: "test-subadmin",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "sub-admin",
    profile: temp_profile,
    user_type: "admin",
    privileges: admin_privileges,
  },
];

const user_customers = [
  {
    username: "test-customer",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "customer",
    profile: temp_profile,
    user_type: "customer",
    advertisements: [],
    // transactions:[],
  },

  {
    username: "test-customer-II",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "customerII",
    profile: temp_profile,
    user_type: "customer",
    advertisements: [],
    // transactions:[],
  },
];

const user_developers = [
  {
    username: "test-developer",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "developer",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    transactions: [],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: getRandomNumber(100000000000, 99999999999),
    acc_no: getRandomNumber(1000000, 9999999),
    acc_type: getRandomElement(bank_account_types),
  },

  {
    username: "test-developer-II",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "developerII",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    transactions: [],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: getRandomNumber(100000000000, 99999999999),
    acc_no: getRandomNumber(1000000, 9999999),
    acc_type: getRandomElement(bank_account_types),
  },

  {
    username: "test-developer",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "developer",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    transactions: [],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: getRandomNumber(100000000000, 99999999999),
    acc_no: getRandomNumber(1000000, 9999999),
    acc_type: getRandomElement(bank_account_types),
  },

  {
    username: "test-developer-II",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "developerII",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    transactions: [],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: getRandomNumber(100000000000, 99999999999),
    acc_no: getRandomNumber(1000000, 9999999),
    acc_type: getRandomElement(bank_account_types),
  },

  {
    username: "test-developer",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "developer",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: getRandomNumber(100000000000, 99999999999),
    acc_no: getRandomNumber(1000000, 9999999),
    acc_type: getRandomElement(bank_account_types),
  },

  {
    username: "test-developer-II",
    password: generateRandomString(10),
    read_notifications:[],
    fname: "test",
    lname: "developerII",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: getRandomNumber(100000000000, 99999999999),
    acc_no: getRandomNumber(1000000, 9999999),
    acc_type: getRandomElement(bank_account_types),
  },
];

const advertisements = [
  {
    name: "test-ad",
    duration_in_days: getRandomNumber(5, 90),
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: getRandomNumber(0, 2),
    target_view_count: getRandomNumber(100, 5000),
    status: getRandomElement(status_list),
    country: "UK",
    target_games: [],
    price: getRandomNumber(10, 500),
  },
  {
    name: "test-ad2",
    duration_in_days: getRandomNumber(5, 90),
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: getRandomNumber(0, 2),
    target_view_count: getRandomNumber(100, 5000),
    status: getRandomElement(status_list),
    country: "UK",
    target_games: [],
    price: getRandomNumber(10, 500),
  },
  {
    name: "test-ad3",
    duration_in_days: getRandomNumber(5, 90),
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: getRandomNumber(0, 2),
    target_view_count: getRandomNumber(100, 5000),
    status: getRandomElement(status_list),
    country: "UK",
    target_games: [],
    price: getRandomNumber(10, 500),
  },
  {
    name: "test-ad4",
    duration_in_days: getRandomNumber(5, 90),
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: getRandomNumber(0, 2),
    target_view_count: getRandomNumber(100, 5000),
    status: getRandomElement(status_list),
    country: "UK",
    target_games: [],
    price: getRandomNumber(10, 500),
  },
  {
    name: "test-ad5",
    duration_in_days: getRandomNumber(5, 90),
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: getRandomNumber(0, 2),
    target_view_count: getRandomNumber(100, 5000),
    status: getRandomElement(status_list),
    country: "UK",
    target_games: [],
    price: getRandomNumber(10, 500),
  },
];

const games = [
  {
    game_name: "Test Game",
    game_icon: "",
    published_date: new Date(),
    platform: getRandomElement(platforms),
    rank: 0,
    status: getRandomElement(status_list),
    ad_cost_rate: 2.1,
    //game_type: "type",
    ad_units: [],
  },
  {
    game_name: "Test Game",
    game_icon: "",
    published_date: new Date(),
    platform: getRandomElement(platforms),
    rank: 0,
    status: getRandomElement(status_list),
    ad_cost_rate: 2.5,
    //game_type: "type",
    ad_units: [],
  },
  {
    game_name: "Test Game",
    game_icon: "",
    published_date: new Date(),
    platform: getRandomElement(platforms),
    rank: 0,
    status: getRandomElement(status_list),
    ad_cost_rate: 2.1,
    // game_type: "type",
    ad_units: [],
  },
];

const ad_units = [
  {
    ad_unit_name: "test-ad-unit",
    ad_unit_type: "",
    no_of_req_ad_daily: getAdUnitActivities(true),
    no_of_req_ad_monthly: getAdUnitActivities(false),
    created_date: new Date(),
    total_daily_view_count: 0,
    total_monthly_view_count: 0,
  },
  {
    ad_unit_name: "test-ad-unit",
    ad_unit_type: "",
    no_of_req_ad_daily: getAdUnitActivities(true),
    no_of_req_ad_monthly: getAdUnitActivities(false),
    created_date: new Date(),
    total_daily_view_count: 0,
    total_monthly_view_count: 0,
  },
  {
    ad_unit_name: "test-ad-unit",
    ad_unit_type: "",
    no_of_req_ad_daily: getAdUnitActivities(true),
    no_of_req_ad_monthly: getAdUnitActivities(false),
    created_date: new Date(),
    total_daily_view_count: 0,
    total_monthly_view_count: 0,
  },
];

const transaction_data = [
  {
    current_balance: 0,
    withdrowal_amount: 0,
    remain_balance: 0,
    status: getRandomElement(status_list),
    requested_date: new Date(),
    action_taken_date: null,
  },

  {
    current_balance: 0,
    withdrowal_amount: 0,
    remain_balance: 0,
    status: getRandomElement(status_list),
    requested_date: new Date(),
    action_taken_date: null,
  },
];

const complain_data = {
  title: "Hello",
  description: "This complain about...",
  evidence: "", //Uploading snapshot or something
  status: getRandomElement(complain_status_list),
  sender_id: "",
  complained_date: new Date(),
};

const notification_data = [
  {
    title: "Hello",
    description: "Greetings All users",
    type: getRandomElement(notification_type),
    broadcast_admin: true,
    broadcast_customer: true,
    broadcast_developer: true,
    send_user_id: "",

    pushed_date: new Date(),
  },

  {
    title: "Hello",
    description: "Greetings All Customers",
    type: getRandomElement(notification_type),
    broadcast_admin: false,
    broadcast_customer: true,
    broadcast_developer: false,
    send_user_id: "",

    pushed_date: new Date(),
  },

  {
    title: "Hello",
    description: "Greetings All Developers",
    type: getRandomElement(notification_type),
    broadcast_admin: false,
    broadcast_customer: false,
    broadcast_developer: true,
    send_user_id: "",

    pushed_date: new Date(),
  },

  {
    title: "Hello",
    description: "Greetings All Admins",
    type: getRandomElement(notification_type),
    broadcast_admin: true,
    broadcast_customer: false,
    broadcast_developer: false,
    send_user_id: "",

    pushed_date: new Date(),
  },
];

const log_data = [{
  action: "login",
  contributor:"",
  affected_party:"system",
  date_and_time: new Date(),

},

{
  action: "delete user",
  contributor:"",
  affected_party:"7MAbSIcCkXE0dXa0K8M8",
  date_and_time: new Date(),

},

{
  action: "login",
  contributor:"",
  affected_party:"system",
  date_and_time: new Date(),

},

{
  action: "login",
  contributor:"",
  affected_party:"system",
  date_and_time: new Date(),

},
]

module.exports = {
  status_list,
  delete_list,
  ad_types,
  game_types,
  user_admins,
  user_customers,
  advertisements,
  user_developers,
  games,
  ad_units,
  transaction_data,
  complain_data,
  notification_data,
  log_data,
  
};
