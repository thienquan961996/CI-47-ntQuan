const component = {}
component.welcomePage = `
  <h1>Welcome to my chat app</h1>
`
component.registerPage = `
<div class="register-container">
<form id="register-form">
  <div class="register-header">MindX chat</div>
  <div class="name-wrapper">
    <div class="input-wrapper">
      <input type="text" placeholder="First name" name="firstName">
      <div class="error" id="first-name-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="text" placeholder="Last name" name="lastName">
      <div class="error" id="last-name-error"></div>
    </div>
  </div>
  <div class="input-wrapper">
    <input type="email" placeholder="Email" name="email">
    <div class="error" id="email-error"></div>
  </div>
  <div class="input-wrapper">
    <input type="password" placeholder="Password" name="password">
    <div class="error" id="password-error"></div>
  </div>
  <div class="input-wrapper">
    <input type="password" placeholder="Confirm password" name="confirmPassword">
    <div class="error" id="confirm-password-error"></div>
  </div>
  <div class="form-action">
    <div>Already have an account ? <span class="cursor-pointer" id = "redirect-login-page">Login</span> </div>
    <button class="btn cursor-pointer" type="submit">Register</button>
  </div>
</form>
</div>
`
component.loginPage = `
<div class="login-container">
  <form id="login-form">
    <div class="login-header">MindX chat</div>
    
    <div class="input-wrapper">
      <input type="email" placeholder="Email" name="email">
      <div class="error" id="email-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" placeholder="Password" name="password">
      <div class="error" id="password-error"></div>
    </div>
    
    <div class="form-action">
      <div>Don't have an account ? <span class="cursor-pointer" id="redirect-register-page">Register</span> </div>
      <button class="btn cursor-pointer" type="submit">Login</button>
    </div>
  </form>
</div>
`