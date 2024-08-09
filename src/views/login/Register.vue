<template>
<div>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Create a new account</h2>
                <p>Enter your details to register</p>
            </div>
            <form @submit.prevent="register()" >
                <!-- <transition name="slide" appear> -->
                    <div v-if="page == 1">
                        <div class="input-wrapper"> 
                            <label>Gender</label>
                            <select v-model="registerPage1.gender" class="select-input">
                                <option value="" disabled>Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <p class="error-msg" v-if="v$.registerPage1.gender.$error">{{  v$.registerPage1.gender.$errors[0].$message }}</p>
                        </div>

                        <div class="input-wrapper">
                            <label>Name</label>
                            <input v-model="registerPage1.name" type="text" placeholder="Name">
                            <p class="error-msg" v-if="v$.registerPage1.name.$error">{{  v$.registerPage1.name.$errors[0].$message }}</p>
                        </div>

                        <div class="input-wrapper">
                        <label>Surname</label>
                            <input v-model="registerPage1.surname" type="text" placeholder="Surname">
                            <p class="error-msg" v-if="v$.registerPage1.surname.$error">{{  v$.registerPage1.surname.$errors[0].$message }}</p>
                        </div>

                        <div class="input-wrapper">
                            <label>Birthday</label>
                            <input type="date" id="birthday" name="birthday" v-model="registerPage1.birthday">
                            <p class="error-msg" v-if="v$.registerPage1.birthday.$error">{{  v$.registerPage1.birthday.$errors[0].$message }}</p>
                        </div> 
                    </div>
               

                
                    <div v-if="page==2"> 
                        <div class="input-wrapper">
                            <label>Home Address</label>
                            <input v-model="registerPage2.address" type="text" placeholder="Home Address">
                            <p class="error-msg" v-if="v$.registerPage2.address.$error">{{  v$.registerPage2.address.$errors[0].$message }}</p>
                        </div>

                        <div style="display: flex; gap: 20px">
                            <div class="input-wrapper width-input-wrapper">
                                <label>City</label>
                                <input v-model="registerPage2.city" type="text" placeholder="City">
                                <p class="error-msg" v-if="v$.registerPage2.city.$error">{{  v$.registerPage2.city.$errors[0].$message }}</p>
                            </div>

                            <div class="input-wrapper width-input-wrapper">
                                <label>Zip / Postal Code</label>
                                <input v-model="registerPage2.zip" type="text" placeholder="Zip">
                                <p class="error-msg" v-if="v$.registerPage2.zip.$error">{{  v$.registerPage2.zip.$errors[0].$message }}</p>
                            </div>
                        </div>
                        
                        <div class="input-wrapper">
                            <label>Country</label>
                            <select name="country" id="country" v-model="registerPage2.country" class="select-input">
                            <option value="">Select</option>
                                <option v-for="country in countriesList" :key="country.id" :value="country.name">
                                    {{ country.name }}
                                </option>
                            </select>
                            <p class="error-msg" v-if="v$.registerPage2.country.$error">{{  v$.registerPage2.country.$errors[0].$message }}</p>
                        </div>

                        <div class="input-wrapper">
                            <label>Phone Number</label>
                            <input v-model="registerPage2.phoneNumber" type="text" placeholder="Number">
                            <p class="error-msg" v-if="v$.registerPage2.phoneNumber.$error">{{  v$.registerPage2.phoneNumber.$errors[0].$message }}</p>
                        </div>

                        
                        
                    </div> 
              
 
                    <div v-if="page==3">
                        <div class="input-wrapper">
                        <label>Email address</label>
                            <input v-model="registerPage3.email" type="email" placeholder="Email"> 
                            <p class="error-msg" v-if="v$.registerPage3.email.$error">{{  v$.registerPage3.email.$errors[0].$message }}</p>
                        </div>

                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input v-model="registerPage3.password" type="password" placeholder="Password">
                            <p class="error-msg" v-if="v$.registerPage3.password.$error">{{  v$.registerPage3.password.$errors[0].$message }}</p>
                        </div>

                        <div class="input-wrapper">
                            <label for="confirmPassword">Confirm Password</label>
                            <input v-model="registerPage3.confirmPassword" type="password" placeholder="Confirm Password">
                            <p class="error-msg" v-if="v$.registerPage3.confirmPassword.$error">{{  v$.registerPage3.confirmPassword.$errors[0].$message }}</p>
                        </div> 
                    </div>
               

               <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                    <div>
                        <router-link to="login" v-if="page == 1">Already have an account?</router-link>
                        <button type="button" v-if="page !== 1" @click="page--">Back</button>
                    </div>
                    
                    <div>
                        <button v-if="page == 3" type="submit">Register</button>
                        <button type="button" v-else @click="next()">Next</button> 
                    </div>
               </div>
            </form>
        </div>
    </div>
</div>
</template>

  
<script>
import useValidate from '@vuelidate/core';
import {required, email, sameAs} from '@vuelidate/validators';
import Swal from 'sweetalert2';

export default {
    validations(){
        return{ 
            registerPage1:{
                gender: {required}, 
                name: {required}, 
                surname: {required}, 
                birthday: {required}, 
            },

            registerPage2:{
                address: {required}, 
                city: {required}, 
                zip: {required}, 
                country: {required}, 
                phoneNumber: {required}, 
            },

            registerPage3:{
                email:{required, email}, 
                password: {required}, 
                confirmPassword: {required, sameAs: sameAs(this.registerPage3.password)},  
            },
        }
    },
    data() {
        return {
            v$: useValidate(), 

            showModal: false,

            registerPage1:{
                gender: '',
                name: '',
                surname: '',
                birthday: '',
            },

            registerPage2:{
                address: '',
                city: '',
                zip: '',
                country: '',
                phoneNumber: '',
            },

            registerPage3:{
                email:'', 
                password: '',
                confirmPassword: '', 
            },
      
            page: 1,

            countriesList: [{
                    id: 'country1',
                    name: 'Switzerland'
                },
                {
                    id: 'country2',
                    name: 'Germany'
                },
                {
                    id: 'country3',
                    name: 'Kosova'
                },
                {
                    id: 'country4',
                    name: 'Albania'
                },
                {
                    id: 'country5',
                    name: 'USA'
                },
            ]
        };
    },
    methods: {
        register(){
            this.v$.registerPage3.$touch();
            if (this.v$.registerPage3.$invalid) {  
                Swal.fire({
                    title: 'Validation Error!',
                    text: '',
                    icon: 'error', 
                })
            } else {
                console.log('tries to connect to db');
                //then
                this.v$.$reset();
                this.page = 1;
                this.registerPage1= { 
                    gender: '',
                    name: '',
                    surname: '',
                    birthday: ''
                }

                this.registerPage2= {
                    address:'',
                    city:'',
                    zip:'',
                    country:'',
                    phoneNumber:''
                }

                this.registerPage3={
                    email:'', 
                    password: '',
                    confirmPassword: '', 
                }
            }    
        },
        next() {
            this.page++;
            // if(this.page === 1){
            //     this.v$.registerPage1.$touch();
            //     if (this.v$.registerPage1.$invalid) {  
            //         Swal.fire({
            //             title: 'Validation Error!',
            //             text: '',
            //             icon: 'error', 
            //         })
            //     } else {
            //         this.page++;
            //     }
            // }else if(this.page === 2){
            //     this.v$.registerPage2.$touch();
            //     if (this.v$.registerPage2.$invalid) {  
            //         Swal.fire({
            //             title: 'Validation Error!',
            //             text: '',
            //             icon: 'error', 
            //         })
            //     } else {
            //         this.page++;
            //     }
            // }
           
        }
    }
};
</script>

  
<style scoped>
.fade-enter-active,
.fade-leave-active {
    opacity: 0;
  transition: 0.4s ease;
}

.fade-enter-to,
.fade-leave-from { 
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to   {
  opacity: 0; 
}

 
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
  position: absolute;
  width: 100%;
}

.slide-enter,
.slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(-100%);
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
.modal, .modal a{
   color: black;
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
    background-color: white;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    min-height: 500px;
    max-width: 450px;
    border-radius: 10px;

    position: relative;
    overflow: hidden;
}

form{
    min-height: 500px;
}

.modal-header{
    margin-bottom: 40px;
    text-align: center;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin: 10px 0 5px;
}

input, .select-input {
    padding: 10px 15px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
}

.input-wrapper{
    margin-bottom: 20px; 
}

.select-input {
    padding: 10px;
}

input::placeholder{
    color: white;
}

.width-input-wrapper{
    width: 50%;
}

button[type="submit"] {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    /* background-color: #4CAF50; */
    color: white;
    border: none;
    border-radius: 5px;
}

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

 input:focus-visible,
 .select-input:focus-visible {
    outline:2px solid var(--primary-border-color) !important;
}

[data-theme="dark"] input,
[data-theme="dark"]  .select-input {
    background-color: var(--third-backgorund-color);
}

.input-wrapper{
    margin-bottom: 20px;
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

button {
    padding: 10px;
    font-size: 16px;
    width: 100px;
    cursor: pointer;
    background-color: #ff3a67;
    color: rgb(255, 235, 240);
    border: 2px solid #ff3a67; 
    border-radius: 5px;
    transition: 0.3s ease;
}

.send-reset-link-btn{
    width: 180px;
}

button:hover {
    background-color: rgb(255, 235, 240);
    color: #ff3a67;
}

[data-theme="dark"] button:hover  {
    background-color: var(--background-color);
    }
</style>
