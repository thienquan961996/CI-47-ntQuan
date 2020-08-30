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
  conversationFirestore()
  // templateFirestore()
}

// const templateFirestore = async () =>{
// //get one
// const docId = 'qvgtmpLNyvyO4hhqsfJb'
// const response = await firebase.firestore().collection('users').doc(docId).get()
// const user = getOneDocument(response)
// // console.log(user)

// //get many
// const responseMany = await firebase.firestore().collection('users').where('address','==','Ha Noi').get()
// // console.log(responseMany)
// // const firstUser = getOneDocument(responseMany.docs[0])
// // console.log(firstUser)
// const users = getManyDocument(responseMany)
// console.log(users)

// //create
// const dataToCreate = {
//   age: 100,
//   name: 'ABC',
//   }
//   firebase.firestore().collection('users').add(dataToCreate)
  
// //update
// const idToUpdate = 'qvgtmpLNyvyO4hhqsfJb'
// const dataToUpdate = {
//   name: 'Updated',
//   phone: firebase.firestore.FieldValue.arrayUnion('0986')
// }
// firebase.firestore().collection('users').doc(idToUpdate).update(dataToUpdate)

// //delete

// const idToDelete = '2GdCKUdtT9SUsjRDH8Oy'
// firebase.firestore().collection('users').doc(idToDelete).delete()
// }
const getOneDocument = (response) =>{
  const data = response.data()
  data.id = response.id
  return data
}
const getManyDocument = (response) =>{
  const listData = []
  for(const doc of response.docs){
    listData.push(getOneDocument(doc))
  }
  return listData
}  //ví dụ về database


const conversationFirestore = async () =>{
  const docId = '4X4QjBdJxhtOuh86yTe9'
  const response = await firebase.firestore().collection('conversations').doc(docId).get()
  const user = getOneDocument(response)
  console.log(user)
  const conversationTitle = document.getElementById('conversationTitle')
  conversationTitle.innerText = user.title
  for(const item of user.messages)
  {
    console.log(item.content)
    view.addMessage(item)
  }
}

