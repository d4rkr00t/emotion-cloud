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

export const initializeDb = () => {
  const app = firebase.initializeApp(firebaseConfig);
  return (
    firebase
      .firestore(app)
      .enablePersistence()
      // .then(() => {
      //   return firebase.auth().signInAnonymously();
      // })
      .then(() => {
        console.log('Connected to firestore!');
        const getEmotionsQuery = firebase.firestore(app).collection('emotions');

        getEmotionsQuery.onSnapshot(snapshot => {
          if (snapshot.size) {
            snapshot.docChanges().forEach(change => {
              if (change.type === 'added' || change.type === 'modified') {
                console.log(change.doc.data());
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
