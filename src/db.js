import firebase from "firebase/app";
import "firebase/firestore";

// var firebaseConfig = {
//   apiKey: "AIzaSyC6ou5kaX-inkvsEIs7gzfGb2ReaXLPcTI",
//   authDomain: "emotion-colud.firebaseapp.com",
//   databaseURL: "https://emotion-colud.firebaseio.com",
//   projectId: "emotion-colud",
//   storageBucket: "",
//   messagingSenderId: "181912515521",
//   appId: "1:181912515521:web:6038d27a09605b3f"
// };

var firebaseConfig = {
  apiKey: "AIzaSyBnfH5EGq0RbVUO9kpYrVC1HtPBxqCKRN0",
  authDomain: "emotion-cloud-2.firebaseapp.com",
  databaseURL: "https://emotion-cloud-2.firebaseio.com",
  projectId: "emotion-cloud-2",
  storageBucket: "",
  messagingSenderId: "654909016142",
  appId: "1:654909016142:web:2308c395acf9229e"
};

const dbCollection = "emotion"; // Set to emotions-prod for real data

const app = firebase.initializeApp(firebaseConfig);

export const initializeDb = () => {
  return firebase
    .firestore(app)
    .enablePersistence()
    .catch(err => {
      console.log(err);
    });
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
    .collection(dbCollection)
    .where("created", ">", today);

  getEmotionsQuery.onSnapshot(snapshot => {
    if (snapshot.size) {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added" || change.type === "modified") {
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
    .collection(dbCollection)
    .add(data);
