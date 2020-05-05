const functions = require("firebase-functions");
const app = require("express")();
const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login } = require("./handlers/users");
const FBAuth = require("./util/fbauth");

//Scream Routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//users Routes
app.post("/signup", signup);
app.post("/login", login);

//https://baserurl.com/api/
exports.api = functions.region("asia-east2").https.onRequest(app);
