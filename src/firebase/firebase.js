import * as firebase from 'firebase';
// By * as, you can import all Modules with export
//import * as expensesActions from '../actions/expenses';

const config = {
  apiKey: "AIzaSyAQUsCVx_MOswAxmutsGrT1jDpyopqcMII",
  authDomain: "expreact.firebaseapp.com",
  databaseURL: "https://expreact.firebaseio.com",
  projectId: "expreact",
  storageBucket: "expreact.appspot.com",
  messagingSenderId: "677051927837"
};

firebase.initializeApp(config);

const database = firebase.database();

// Config authentications
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase, database as default };



// firebase.database().ref().set({
//   name: 'Adam Bugaj',
//   age: 24,
//   stressLevel: 6,
//   job: {
//     title: 'Web-Developer',
//     company: 'Google'
//   },
//   isClever: true,
//   location: {
//     city: 'Frankfurt',
//     country: 'DE'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });
//
// database.ref('location/country').set('New York');
// database.ref('attributes').set({
//   height: 180,
//   weight: 83,
//   wage: 100000
// }).then(() => {
//   console.log('Saved');
// }).catch((e) => {
//   console.log('Failed');
// });
//
// database.ref('age').set(null).then(() => {
//   console.log('Removed!');
// }).catch((e) => {
//   console.log('error:', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'San Francisco'
// });
//
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });
//
// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val().age);
// });
//
// setTimeout(() => {
//   database.ref('age').set(26);
// }, 3500);
//
// database.ref().on('value', (snapshot) => {
//   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
// })
//
// database.ref().update({
//   'job/title':'Full-Stuck Developer'
// })
//
// // Setting up the database for expensify app
// const firebaseNotes = {
//   notes: {
//     asdasdad: {
//       title: 'Web Dev',
//       company: 'Google'
//     },
//     dasdfsdf: {
//       title: 'Full Stuck',
//       company: 'Amazon'
//     }
//   }
// };
//
// database.ref().set(firebaseNotes);
// database.ref('notes').push({
//   title: 'Front-End Dev',
//   body: 'React Native, Angular'
// });
//
// database.ref('notes/-L4qmX7do6EAKfAufN3G').update({
//   body: 'Buy food'
// });

// const storageNotes = {
//   expenses: {
//     example: {
//       title: 'Full-Stuck',
//       company: 'Google'
//     }
//   }
// };
//
// // database.ref('expenses').push({
// //   title: 'web dev',
// //   company: 'Amazon'
// // });
//
// database.ref('expenses/-L58smzlr93YqUQx364v').update({
//   company: "Microsoft"
// });
//
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       console.log(childSnapshot);
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });
//
//   // database.ref('expenses').push({
//   //   title: 'Software engeener',
//   //   company: 'Spacex'
//   // });
//
//   database.ref('expenses/-L58vxNG5oPJ88qYkO8A').update({
//     experience: '5 years'
//   });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
