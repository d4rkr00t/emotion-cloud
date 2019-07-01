import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../firebase-config";

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
      let data = snapshot.docChanges().map(change => {
        if (change.type === "added" || change.type === "modified") {
          return change.doc.data();
        }
      });
      cb(data);
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
