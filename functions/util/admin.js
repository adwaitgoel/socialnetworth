const admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialnetworth-136a6.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
