// index.js
//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes,nextISSTimesForMyLocation } = require("./iss");
const { nextISSTimesForMyLocation } = require("./iss");

// const returnIp = fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
//   return ip;
// });
//console.log("in index", returnIp);
// fetchCoordsByIP(".181.83.148", (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   //console.log(data);
// });
// fetchISSFlyOverTimes(
//   { latitude: 49.2584, longitude: -123.1456 },
//   (error, data) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     console.log(data);
//   }
// );
const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
