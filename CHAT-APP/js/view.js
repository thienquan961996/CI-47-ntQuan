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
      const redirectLoginPage = document.getElementById('redirect-login-page')
      redirectLoginPage.addEventListener('click', () =>{
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
      const redirectRegisterPage = document.getElementById('redirect-register-page')
      redirectRegisterPage.addEventListener('click', () => {
        view.setActiveScreen('registerPage')
      })
      break;
  }
}