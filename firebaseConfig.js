const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyDp2W8yLkA3BjouyvA38Dg56Q74m0lgdFY',
//   authDomain: 'facebook-clone-56af5.firebaseapp.com',
//   projectId: 'facebook-clone-56af5',
//   storageBucket: 'facebook-clone-56af5.appspot.com',
//   messagingSenderId: '868161935439',
//   appId: '1:868161935439:web:c008d9d10f0dfa6332b23a',
// };

export default firebaseConfig;
