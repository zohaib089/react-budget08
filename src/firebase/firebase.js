import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
export { firebase, database as default };

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(snappy => {
//       expenses.push({
//         id: snappy.key,
//         ...snappy.val()
//       });
//     });
//     console.log(expenses);
//   });
// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(snappy => {
//     expenses.push({
//       id: snappy.key,
//       ...snappy.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   desc: 'paper',
//   note: '',
//   amount: '1044405',
//   createdAt: '56789543'
// });
// database.ref('expenses').push({
//   desc: 'laser',
//   note: '',
//   amount: '3045673',
//   createdAt: '567err355433'
// });
// database.ref('expenses').push({
//   desc: 'masll',
//   note: '',
//   amount: '678687867',
//   createdAt: '567567332'
// });
// database.ref('notes/-LHP_VwngVt0lTwLBWS8').remove();

// // database.ref('notes').push({
//   title: 'fourse',
//   body: 'React'
// });
// const notes = [
//   {
//     id: '12',
//     title: 'first note',
//     body: 'this is note body'
//   },
//   {
//     id: '13',
//     title: 'note two',
//     body: 'this is note two'
//   }
// ];
// database.ref('notes').set(notes);
// database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });
// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('error fetching data', e);
//   });
// database
//   .ref()
//   .set({
//     name: 'zabi jarral',
//     age: 28,
//     stresslevel: 8,
//     job: {
//       title: 'devloper',
//       company: 'staarCo'
//     },
//     location: {
//       city: 'turin',
//       country: 'italy'
//     }
//   })
//   .then(() => {
//     console.log('it wortks');
//   })
//   .catch(() => {
//     console.log('errrrrrr', e);
//   });
// // database.ref().set(null);
// // database
// //   .ref()
// //   .remove()
// //   .then(() => {
// //     console.log('data is removed');
// //   })
// //   .catch(() => {
// //     console.log('unable to delete data', e);
// //   });
// database.ref().update({
//   stresslevel: 9,
//   'job/title': 'devStart',
//   'location/city': 'torino'
// });
