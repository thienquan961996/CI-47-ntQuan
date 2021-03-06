const controller = {}
controller.register = (data) => {
  if (data.firstName === '') {
    view.setErrorMessage('first-name-error', 'Please input your first name')  // cách 1
    // document.getElementById('first-name-error').innerText = 'Please input your first name' // cách 2
  } else {
    // document.getElementById('first-name-error').innerText = ''
    view.setErrorMessage('first-name-error', '')
  }
  if (data.lastName === '') {
    document.getElementById('last-name-error').innerText = 'Please input your last name'
  } else {
    document.getElementById('last-name-error').innerText = ''
  }
  if (data.email === '') {
    document.getElementById('email-error').innerText = 'Please input your email'
  } else {
    document.getElementById('email-error').innerText = ''
  }
  if (data.password === '') {
    document.getElementById('password-error').innerText = 'Please input your password'
  } else {
    document.getElementById('password-error').innerText = ''
  }
  if (data.confirmPassword === '') {
    document.getElementById('confirm-password-error').innerText = 'Please input your confirm Password'
  } else if (data.confirmPassword !== data.password) {
    document.getElementById('confirm-password-error').innerText = 'Please input the same password!'
  } else {
    document.getElementById('confirm-password-error').innerText = ''
  }
  //   view.setErrorMessage('first-name-error',data.firstName === '' ? 'Please input your first name' : '')
  //   view.setErrorMessage('last-name-error',data.lastName === '' ? 'Please input your last name' : '') 
  //   view.setErrorMessage('email-error',data.email === '' ? 'Please input your email' : '')
  //   view.setErrorMessage('password-error',data.password === '' ? 'Please input your password' : '')
  //   view.setErrorMessage('confirm-password-error',data.confirmPassword === '' ? 'Please input your confirm Password' : '') //toán tử 3 ngôi
  //   if (data.confirmPassword === ''){
  //     view.setErrorMessage('confirm-password-error','Please input your confirm Password')
  //   }else if(data.confirmPassword !== data.password){
  //     view.setErrorMessage('confirm-password-error','Please input the same password!')
  //   }else{
  //     view.setErrorMessage('confirm-password-error', '')
  //   }
  if (data.firstName !== ''
    && data.lastName !== ''
    && data.email !== ''
    && data.password !== ''
    && data.confirmPassword === data.password) {
    model.register(data)
  }
}
// controller.login = (data) => {
//   if (data.email === '') {
//     document.getElementById('email-error').innerText = 'Please input your email'
//   } else {
//     document.getElementById('email-error').innerText = ''
//   }
//   if (data.password === '') {
//     document.getElementById('password-error').innerText = 'Please input your password'
//   } else {
//     document.getElementById('password-error').innerText = ''
//   }
// }
controller.login = ({ email, password }) => {
  view.setErrorMessage('email-error', email === '' ? 'Please input your email' : '')
  view.setErrorMessage('password-error', password === '' ? 'Please input your password' : '')
  if (email !== '' && password !== '') {
    model.login({ email, password })
  }
} // cách 2

controller.createConversation = ({ title, email }) => {
 if(title.trim() === ''){
   view.setErrorMessage('create-conversation-title-error', 'please input title')
 }else{
   view.setErrorMessage('create-conversation-title-error', '')
 }
 if(email.trim() === ''){
  view.setErrorMessage('create-conversation-email-error', 'please input email')
}else{
  view.setErrorMessage('create-conversation-email-error', '')
}
if(title.trim() !== '' && email.trim() !== ''){
  model.createConversation({title, email})
}
}
controller.addUser = (email) =>{
  if(email.trim() === ''){
    view.setErrorMessage('email-error', 'please input email')
  }else{
    view.setErrorMessage('email-error', '')
    model.addUser(email)
  }
}
