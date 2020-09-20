import * as functions from 'firebase-functions'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const run_ml_model = functions.firestore
  .document('survey/{document}')
  .onCreate((snap, context) => {
      const document_value = snap.data();
      
  })
