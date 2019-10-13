var firebase = require("firebase-admin");
var serviceAccount = require("./secrets/gunners-imore-firebase.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://gunners-imore.firebaseio.com"
});

module.exports = firebase;