const firebase = require('firebase-admin');

var serviceAccount = require('./serviceAccount.js');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

module.exports = firebase.firestore();