import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "################",
  authDomain: "###################",
  projectId: "###############",
  storageBucket: "#####################",
  messagingSenderId: "################",
  appId: "######################",
  measurementId: "##############"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
