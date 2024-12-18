<template>
<div class="modal">
    <div class="modal-content">
        <form @submit.prevent="sendResetLink" v-if="resetEmailModal">
            <div class="modal-header">
                <h2>Send the reset link</h2> 
            </div>
            <div class="input-wrapper">
                <label>Your Email address</label>
                <input v-model="resetEmail" type="email" placeholder="Your Email">
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px;">
                <button type="submit" class="send-reset-link-btn">Send reset link</button>
            </div>


        </form>
        <form @submit.prevent="login" v-else>
            <div class="modal-header">
                <h2>Welcome back</h2>
                <p> </p>
            </div>
            <div class="input-wrapper">
                <label>Email address</label>
                <input v-model="loginData.email" type="email" placeholder="Email">
                
                <p class="error-msg" v-if="v$.loginData.email.$error">{{  v$.loginData.email.$errors[0].$message }}</p>
            </div>

            <div class="input-wrapper ">
                <label for="password">Password</label>
                <input v-model="loginData.password" class="margin-0" type="password" placeholder="Password">
                <p class="error-msg" v-if="v$.loginData.password.$error">{{  v$.loginData.password.$errors[0].$message }}</p>
            </div>
            <p class="cursor-pointer text-right modal-link" @click="resetEmailModal = true">Forgot Password?</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px;">
                <router-link to="/register" class="cursor-pointer modal-link">I don't have an account</router-link>
                <button type="submit" class="btn">Login</button>
            </div> 
        </form> 
    </div>
</div>
</template>

<script>
import useValidate from '@vuelidate/core';
import {required, email} from '@vuelidate/validators';
import Swal from 'sweetalert2';
export default {
    validations(){
        return{
            loginData: {
                email: {required, email}, 
                password: {required}, 
            }, 
        }
    },
    data() {
        return {
            v$: useValidate(), 

            showModal: false,

            resetEmailModal: false,
            resetEmail:'',

            loginData: {
                email: '', 
                password: '', 
            }, 
        };
    },
    methods: {
        login() {
            this.v$.loginData.$touch();
            if (this.v$.loginData.$invalid) {  
                Swal.fire({
                    title: 'Validation Error!',
                    text: '',
                    icon: 'error', 
                })
            } else {
                this.v$.$reset();
                console.log('Connects to db') ;
                this.$router.push({ path: '/dashboard/requests' })
            }
        }
    }
};
</script>

<style scoped>
.modal, .modal a{
   color: var(--text-color);
}
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.margin-0{
    margin: 0;
}

.modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: var(--background-color);
    margin: auto;
    padding: 30px;
    border: 2px solid #888;
    width: 80%;
    max-width: 500px;
    border-radius: 10px;
}

.modal-header {
    margin-bottom: 40px;
    text-align: center;
}
 

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 10px; 
    display: block;
}

input,
.select-input {
    padding: 16px;

    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
}

 input:focus-visible {
    outline:2px solid var(--primary-border-color) !important;
}

[data-theme="dark"] input {
    background-color: var(--third-backgorund-color);
}

.input-wrapper{
    margin-bottom: 20px;
}

.select-input {
    padding: 10px;
}

input::placeholder {
    color: white;
}

.width-input-wrapper {
    width: 50%;
}

.modal-link:hover{
    color: #ff3a67;
}
 
.send-reset-link-btn{
    width: 180px;
}
 
</style>
