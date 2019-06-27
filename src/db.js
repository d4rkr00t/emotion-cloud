import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyC6ou5kaX-inkvsEIs7gzfGb2ReaXLPcTI',
  authDomain: 'emotion-colud.firebaseapp.com',
  databaseURL: 'https://emotion-colud.firebaseio.com',
  projectId: 'emotion-colud',
  storageBucket: '',
  messagingSenderId: '181912515521',
  appId: '1:181912515521:web:6038d27a09605b3f'
};

const app = firebase.initializeApp(firebaseConfig);

export const initializeDb = () => {
  return (
    firebase
      .firestore(app)
      .enablePersistence()
      // .then(() => {
      //   return firebase.auth().signInAnonymously();
      // })
      .then(() => {
        console.log('Connected to firestore!');

        const { Timestamp } = firebase.firestore;
        const today = new Timestamp(new Date().setHours(0, 0, 0, 0) / 1000, 0);

        const getEmotionsQuery = firebase
          .firestore(app)
          .collection('emotions')
          .where('created', '>', today);

        getEmotionsQuery.onSnapshot(snapshot => {
          if (snapshot.size) {
            console.log(snapshot.docs.map(doc => doc.data()));

            snapshot.docChanges().forEach(change => {
              if (change.type === 'added' || change.type === 'modified') {
                console.log(change.type, change.doc.data());
              }
            });
          }
        });
      })
      .catch(err => {
        console.log(err);
      })
  );
};

export const currentTimestamp = () => {
  const { Timestamp } = firebase.firestore;
  return new Timestamp(Math.round(Date.now() / 1000), 0);
};

export const subscribeToEmotions = cb => {
  const { Timestamp } = firebase.firestore;
  const today = new Timestamp(new Date().setHours(0, 0, 0, 0) / 1000, 0);

  const getEmotionsQuery = firebase
    .firestore(app)
    .collection('emotions')
    .where('created', '>', today);

  getEmotionsQuery.onSnapshot(snapshot => {
    if (snapshot.size) {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added' || change.type === 'modified') {
          console.log(change.type, change.doc.data());
          cb([change.doc.data()]);
        }
      });
    }
  });
};

/**
 * data: {
 *  emotion: <emotion-id>
 *  location: <location-id>
 * }
 */
export const addEmotion = data =>
  firebase
    .firestore()
    .collection('emotions')
    .add(data);
