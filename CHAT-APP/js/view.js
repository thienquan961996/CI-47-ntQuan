const view = {}
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case 'registerPage':
      document.getElementById('app').innerHTML = component.registerPage
      const registerForm = document.getElementById('register-form')
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(registerForm.firstName.value)
        const data = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        }
        controller.register(data)
      })
      // document.getElementById('redirect-to-login').addEventListener('click', () =>{
      //   view.setActiveScreen('loginPage')
      // })  // cách 2
      const redirectLoginPage = document.getElementById('redirect-to-login')
      redirectLoginPage.addEventListener('click', () => {
        view.setActiveScreen('loginPage')
      })
      break;
    case 'loginPage':
      document.getElementById('app').innerHTML = component.loginPage
      const loginForm = document.getElementById('login-form')
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        }
        controller.login(data)
      })
      // document.getElementById('redirect-to-register').addEventListener('click', () =>{
      //   view.setActiveScreen('registerPage')
      // })  // cách 2
      const redirectRegisterPage = document.getElementById('redirect-to-register')
      redirectRegisterPage.addEventListener('click', () => {
        view.setActiveScreen('registerPage')
      })
      break;
      case 'chatPage' :
        document.getElementById('app').innerHTML = component.chatPage
        document.getElementById('user').innerHTML = firebase.auth().currentUser.displayName
  }
}

view.setErrorMessage = (elementId, content) => {
  document.getElementById(elementId).innerText = content
}