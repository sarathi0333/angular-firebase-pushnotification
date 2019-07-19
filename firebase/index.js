const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

exports.fcmSend = functions.database.ref('/messages/{userId}/{messageId}').onCreate(event => {
    console.log(event);
  const payload = {
        notification: {
          title: "test",
          body: "test",
          icon: "https://placeimg.com/250/250/people"
        }
      };


   admin.database()
        .ref(`/fcmTokens/abcd`)
        .once('value')
        .then(token => token.val() )
        .then(userFcmToken => {
          return admin.messaging().sendToDevice(userFcmToken, payload)
        })
        .then(res => {
          console.log("Sent Successfully", res);
        })
        .catch(err => {
          console.log(err);
        });

});