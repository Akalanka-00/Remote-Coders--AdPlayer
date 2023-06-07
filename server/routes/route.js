const express = require("express");

const get_game_ranks = require("../api_operations/homepage/get_game_ranks");
const submit_complain = require("../api_operations/complain/submit_complain");
const get_complain = require("../api_operations/complain/get_complain");
const review_complain = require("../api_operations/complain/review_complain");
const send_notification = require("../api_operations/notification/send_notification");
const get_notification = require("../api_operations/notification/get_notification");
const game_developer_ad_revenue = require("../api_operations/financial/game_developer_ad_revenue");
const game_developer_withdrawal = require("../api_operations/financial/game_developer_withdrawal");
const customer_income = require("../api_operations/financial/customer_income");
const developer = require("../api_operations/developer/developer");
const gamedev_for_admin = require("../api_operations/admin/get_game_for_admin");
const update_rank = require("../api_operations/admin/send_gamedev_for_admin");
const delete_game = require("../api_operations/admin/delete_game");
const getAdminData = require("../api_operations/admin/getAdmins");
const getAds = require("../api_operations/admin/getAds");
const getCustomerAds = require("../api_operations/customer/getAds");
const getCustomerGames = require("../api_operations/customer/getGame");

const router = express.Router();

/** import all controllers */

/** POST Methods */
router.post("/submitComplain", (req, res, next) => {
  submit_complain(req, res);
});
router.post("/getComplains", (req, res, next) => {
  get_complain(req, res);
});
router.post("/pushNotification", (req, res, next) => {
  //console.log(req.body)
  send_notification(req, res);
});

router.post("/pushRank", (req, res, next) => {
  update_rank(req, res);
});

router.post("/todayRevenue", (req, res, next) => {
  //console.log(req.body)
  developer(req, res);
});

/** GET Methods */

router.get("/getRankedGames", (req, res, next) => {
  get_game_ranks(req, res);
});

router.get("/getNotification/:user_id", (req, res, next) => {
  get_notification(req, res);
});

router.get("/getDeveloperRevenue", (req, res, next) => {
  game_developer_ad_revenue(req, res);
});

router.get("/getDeveloperWithdrawal", (req, res, next) => {
  game_developer_withdrawal(req, res);
});

router.get("/getCustomerIncome", (req, res, next) => {
  customer_income(req, res);
});

router.get("/getGameData", (req, res, next) => {
  gamedev_for_admin(req, res);
});

router.get("/getAdminData", (req, res, next) => {
  getAdminData(req, res);
});

router.get("/getAdsData", (req, res, next) =>{
  getAds(req, res);
});

//Customer
router.get("/getCustomerAdsData", (req, res, next) =>{
  getCustomerAds(req, res);
});
router.get("/getCustomerGameData", (req, res, next) =>{
  getCustomerGames(req, res);
});

/** PUT Methods */
router.put("/markReviewComplain", (req, res, next) => {
  review_complain(req, res);
});

/** delete */
router.post("/deleteGame", (req, res, next) => {
  delete_game(req, res);
});



module.exports = router;
