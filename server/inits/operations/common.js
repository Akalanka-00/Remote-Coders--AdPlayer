const crypto = require("crypto");

const rank_list = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function getRank() {
  const rank = getRandomElement(rank_list);
  rank_list.splice(rank_list.indexOf(rank),1)
  return rank;
}
function generateRandomString(length) {
  const bytes = crypto.randomBytes(Math.ceil(length / 2));
  return bytes.toString("hex").slice(0, length);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getAdUnitActivities(isDaily) {
  const activity_list = [];
  const date = new Date();
  if (isDaily) {
    for (let i = 0; i < 30; i++) {
      const activity = {
        view_count: getRandomNumber(0, 15000),
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: i + 1,
      };
      activity_list.push(activity);
    }
  } else {
    for (let i = 0; i < 12; i++) {
    const activity = {
      view_count: getRandomNumber(0, 15000),
      year: date.getFullYear(),
      month: i + 1,
    };
    activity_list.push(activity);
  }
}

  return activity_list;
}

function calcViewCount(arr){
  let tot =0;
  arr.forEach(element => {
    tot+= element.view_count;
  });
  return tot;
}
module.exports = {
  getRandomElement,
  getRandomNumber,
  generateRandomString,
  getRank,
  getAdUnitActivities,
  calcViewCount,
};
