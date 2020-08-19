const controller = {}
controller.register = (data) => {
  if(data.firstName === '') {
    document.getElementById('first-name-error').innerText = 'Please input your first name'
  }else{
    document.getElementById('first-name-error').innerText = ''
  }
  if(data.lastName === '') {
    document.getElementById('last-name-error').innerText = 'Please input your last name'
  }else{
    document.getElementById('last-name-error').innerText = ''
  }
  if(data.email ===''){
    document.getElementById('email-error').innerText = 'Please input your email'
  }else{
    document.getElementById('email-error').innerText = ''
  }
  if(data.password ===''){
    document.getElementById('password-error').innerText = 'Please input your password'
  }else{
    document.getElementById('password-error').innerText = ''
  }
  if(data.confirmPassword ===''){
    document.getElementById('confirm-password-error').innerText = 'Please input your confirm Password'
  }else if(data.confirmPassword !==data.password){
    document.getElementById('confirm-password-error').innerText = 'Please input the same password!'
  }else{
    document.getElementById('confirm-password-error').innerText = ''
  }
}
controller.login = (data) =>{
  if(data.email ===''){
    document.getElementById('email-error').innerText = 'Please input your email'
  }else{
    document.getElementById('email-error').innerText = ''
  }
  if(data.password ===''){
    document.getElementById('password-error').innerText = 'Please input your password'
  }else{
    document.getElementById('password-error').innerText = ''
  }
}