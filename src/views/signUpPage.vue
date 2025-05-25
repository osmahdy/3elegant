<template>
    <main>
        <div class="container" ref="container">
            <div class="img" ref="imgDiv">
                <div class="img2" ref="imgDiv2">
                    <img src="../assets/logo.png" alt="logo" class="logo">
                    <img src="../assets/login.svg" alt="">
                </div>
            </div>

            <div class="form signup" ref="formSignUp">
                <!-- <form > -->
                <form @submit.prevent="handleSignUp">
                    <h1>Sign Up</h1>
                    <input type="text" v-model="username" placeholder="Your username or email address" required>
                    <div class="input-wrapper">
                        <input :type="showPassword ? 'text' : 'password'" v-model="password" id="password"
                            placeholder="Password" required>
                        <i-icon :icon="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="toggle-icon"
                            @click="togglePassword" />
                    </div>
                    <div class="input-wrapper">
                        <input :type="showPassword2 ? 'text' : 'password'" v-model="passwordConf" id="passwordConf"
                            placeholder="Confirm Password" required>
                        <i-icon :icon="showPassword2 ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" class="toggle-icon"
                            @click="togglePassword2" />
                    </div>
                    <!-- <input type="password" v-model="password" id="password" placeholder="Password" required> -->
                    <!-- <input type="password" v-model="passwordConf" id="passwordConf" placeholder="Confirm Password" required> -->
                    <div class="bottom">
                        <div class="rem">
                            <input type="checkbox" id="rem" required>
                            <label for="rem">I agree with <b>Privacy Policy</b> and <b>Terms</b> of Use</label>
                        </div>
                    </div>
                    <button type="submit">
                        Sign Up
                        <!-- <router-link class="loginBtn" to="/">Sign Up</router-link> -->
                        <i-icon class="icon" icon="arrow-right" />
                    </button>
                </form>
            </div>
        </div>
        <AlertMessege v-if="alertVisible" class="alertMess" :message="messege" :bgColor="alertColor"
            :icon="iconAlert" />
    </main>
</template>

<script>
import '../assets/style.css'
import AlertMessege from '@/components/general comps/AlertMessege.vue'

export default {
    data() {
        return {
            username: '',
            password: '',
            passwordConf: '',
            messege: 'Passwords must match!',
            iconAlert: 'fa-exclamation-triangle',
            alertColor: '#ff5630',
            alertVisible: false,
            showPassword: false,
            showPassword2: false,
        }
    },
    components: {
        AlertMessege,
    },
    methods: {
        handleSignUp() {
            if (this.password !== this.passwordConf) {
                this.alertVisible = true;  // Show alert
                setTimeout(() => (this.alertVisible = false), 3000);  // Hide after 3s
                return;  // Stop form submission
            }
            else {
                this.alertVisible = true;  // Show alert
                this.messege = "Thank you for joining us!"
                this.iconAlert = "fa-check"
                this.alertColor = "#38CB89"
                setTimeout(() => {
                    this.alertVisible = false;
                    this.$router.push('/'); // Navigate after showing success message
                }, 3000);
            }
        },
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        togglePassword2() {
            this.showPassword2 = !this.showPassword2;
        }
    }
}
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
    flex-direction: row-reverse;
    width: 800px;
    margin: 100px auto;
    padding: 10px;
    box-shadow: 0 0 48px -18px #000;
    border-radius: 20px;
    overflow: hidden;
    transition: .5s;
}

.img {
    padding: 0;
    width: 50%;
    position: relative;
    border-top-left-radius: 150px;
    border-bottom-left-radius: 150px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #F2F4F6;
    transition: .5s;
}

img {
    max-width: 100%;
    border-top-left-radius: 150px;
    border-bottom-left-radius: 150px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
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
    transition: .5s;
}

.signup {
    display: block;
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
    color: #6C7275;
}

.form p a {
    color: #38CB89;
}

.form input:not(#rem) {
    margin: 10px 0;
    padding: 10px;
    font-size: 18px;
    width: 95%;
    border: 0;
    border-bottom: 2px solid #6C7275;
    outline: none;
}

.form .input-wrapper {
    position: relative;
}

.input-wrapper .toggle-icon {
    content: '\f06e';
    /* this is the correct escape for 'fa-eye' */
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    /* solid icons usually require 900 */
    font-size: 18px;
    color: #6C7275;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
}

.form .login .passwordConf {
    display: none;
    transition: .5s;
}

.form .bottom {
    display: flex;
    justify-content: space-between;
}

.form .bottom .rem {
    display: flex;
    color: #6C7275;
}

.form .bottom .rem label {
    font-size: 15px;
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

.form button {
    display: block;
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
    transition: .5s;
}

.form button a {
    color: white;
    text-decoration: none;
}

.form button .icon {
    margin-left: 20px;
    position: absolute;
    top: 50%;
    right: 35%;
    transform: translate(50%, -50%);
    transition: .5s;
}

.form button:hover .icon {
    transform: translate(100%, -50%);
}
</style>
