window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDuVRbySymTJQZfnEULbymFH57Mv-D0rFE",
    authDomain: "chat-app-ac2a9.firebaseapp.com",
    databaseURL: "https: // chat-app-ac2a9.firebaseio.com ",
    projectId: "chat-app-ac2a9",
    storageBucket: "chat-app-ac2a9.appspot.com",
    messagingSenderId: "456944619036",
    appId: "1: 456944619036: web: 3162b27fe59fceadfd99d9"
  };
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app());
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      model.currentUser = {
        displayName: user.displayName,
        email: user.email,
      }
      if(user.emailVerified){
        view.setActiveScreen('chatPage')
      }else{
        alert('Please verify your email')
        firebase.auth().signOut()
        view.setActiveScreen('loginPage')
      }
    } else {
      view.setActiveScreen('registerPage')
    }
  })
  view.setActiveScreen('loginPage')
}
