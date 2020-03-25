import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const uploadHeartRateData = functions.https.onRequest(async (request, response) => {
  if (!admin.apps.length) {
    admin.initializeApp({});
  }

  const db = admin.firestore();

  await db.collection('fitbitUsers').doc(request.body.user_id).set(request.body);

  response.send({
    message: 'Heart rate data recieved'
  });

  response.end();
});

export const registerFitBitUser = functions.https.onRequest(async (request, response) => {
  if (!admin.apps.length) {
    admin.initializeApp({});
  }

  const db = admin.firestore();

  await db.collection('fitbitUsers').doc(request.body.user_id).set(request.body);

  response.send({
    message: 'Fitbit user registered'
  });

  response.end();
});

export const createUserRecord = functions.auth.user().onCreate(async user => {
  if (!admin.apps.length) {
    admin.initializeApp({});
  }

  const db = admin.firestore();

  await db.collection('users').doc(user.uid).set({});
});
