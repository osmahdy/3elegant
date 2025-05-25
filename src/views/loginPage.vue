<template>
  <main @click="passLoginPage">
    <div class="container" ref="container">
      <div class="img" ref="imgDiv">
        <div class="img2" ref="imgDiv2">
          <img src="../assets/logo.png" alt="logo" class="logo" />
          <img src="../assets/login.svg" alt="" />
        </div>
      </div>
      <div class="form login" ref="formLogin">
        <form>
          <h2 class="hint">Just Click Login</h2>
          <h1>Sign In</h1>
          <p>
            Dont have an account yet?
            <router-link class="loginBtn" to="/signup">Sign Up</router-link>
          </p>
          <input
            type="text"
            v-model="username"
            placeholder="Your username or email adress"
            required
          />
          <div class="input-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              id="password"
              placeholder="Password"
              required
            />
            <i-icon
              :icon="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
              class="toggle-icon"
              @click="togglePassword"
            />
          </div>
          <div class="bottom">
            <div class="rem">
              <input type="checkbox" id="rem" />
              <label for="rem">Remember Me</label>
            </div>
            <a href="#" target="_self">forgot password?</a>
          </div>
          <button @click="handleLoginClick">
            Login
            <i-icon class="icon" icon="arrow-right" />
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import '../assets/style.css';
export default {
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    handleLoginClick() {
      if (this.passwrod !== '' && this.username !== '') {
        this.$router.push('/home');
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    passLoginPage() {
      this.username = 'osama';
      this.password = 'osama';
      let btn = document.querySelector(`button`);
      btn.click();
    },
  },
};
</script>

<style scoped>
main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 100px auto;
  padding: 10px;
  box-shadow: 0 0 48px -18px #000;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s;
}
.img {
  padding: 0;
  width: 50%;
  position: relative;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 150px;
  border-bottom-right-radius: 150px;
  background-color: #f2f4f6;
  transition: 0.5s;
}
img {
  max-width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 150px;
  border-bottom-right-radius: 150px;
  display: block;
  height: 100%;
}
.logo {
  position: absolute;
  left: 50%;
  top: 3%;
  max-width: 15%;
  height: 15%;
  transform: translateX(-50%);
}
.form {
  padding: 20px;
  width: 50%;
  transition: 0.5s;
}
.signup {
  display: none;
}
@media (max-width: 787px) {
  .container {
    flex-direction: column;
    padding: 0;
  }
  .img {
    width: 100%;
    border-radius: 20px;
  }
  img {
    border-radius: 20px;
  }
  .form {
    width: 80%;
  }
}
.form h1 {
  font-size: 40px;
  text-align: start;
  margin: 10px 0;
}
.form p {
  font-size: 15px;
  text-align: start;
  margin: 10px 0;
  color: #6c7275;
}
.form p a {
  color: #38cb89;
}
.form input:not(#rem) {
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  width: 95%;
  border: 0;
  border-bottom: 2px solid #6c7275;
  outline: none;
}
.form .input-wrapper {
  position: relative;
}
.input-wrapper .toggle-icon {
  content: '\f06e'; /* this is the correct escape for 'fa-eye' */
  font-family: 'Font Awesome 6 Free';
  font-weight: 900; /* solid icons usually require 900 */
  font-size: 18px;
  color: #6c7275;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
.form .login .passwordConf {
  display: none;
  transition: 0.5s;
}
.form .bottom {
  display: flex;
  justify-content: space-between;
}
.form .bottom .rem {
  display: flex;
  color: #6c7275;
}
.form .bottom .rem label {
  margin-left: 10px;
}
.form .bottom a {
  color: black;
  font-size: 16px;
  font-weight: bold;
}
.form b {
  color: black;
}
.form .button i {
  color: white;
}
button {
  margin: 20px 0;
  padding: 10px;
  font-size: 18px;
  width: 100%;
  border: 0;
  border-radius: 10px;
  color: white;
  background-color: #222;
  cursor: pointer;
  outline: none;
  position: relative;
  transition: 0.5s;
}
.form button .icon {
  margin-left: 10px;
  position: absolute;
  top: 50%;
  right: 40%;
  transform: translate(50%, -50%);
  /* transform: translateY(-50%); */
  transition: 0.5s;
}
.form button:hover .icon {
  transform: translate(100%, -50%);
  /* right: 0%; */
}
.hint {
  color: red;
  margin: 10px 0;
}
</style>
