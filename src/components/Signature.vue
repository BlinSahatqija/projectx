<template>
<div class="signature-backdrop" >
    <div class="signature-wrapper">
        <div class="close-modal-btn" @click="closeSignature"><img src="../assets/icons/close-btn-rounded.svg"></div>
        <div class="signature-title">
            <h1>Before you continue...</h1>
        </div>
        <div class="signature-content">
            <div class="signature-terms">
                <p>
                    Authorization form
                    Date: March 21, 2024 at 12:07 AM
                    residing at F-15, Hillsborough, Tampa, 33501, FL, US, e-mail address
                    hereby appoint Incogni Inc, with registered address at (the 'Agent'), to act as an authorized ogent and perform all lawful actions that are necessary to exercise, on my behalf, my following rights under applicable privacy legislation, including (but not limited to) the California Consumer Privacy Act ('CCPA) and the California Privacy Right Act (CPRA) (Privacy Laws) and submit requests for implementation of these rights to any legal and natural persons governed by the Privacy Laws:
                </p>
                <p>
                    1. To obtain erasure (deletion) of my personal data (information):
                    2. To withdraw any consent i have given to the processing of my personal data (information);
                    3. To object to processing of personal data (information) concerning me, including but not limited to profiling and direct morketing
                </p>
                <p>     
                    I agree and acknowledge that:
                    • the Agent may withdraw from this limited representation at its sole discretion;
                    • this Authorization form will terminate automatically with respect to any particular natural or legal person against which my rights under the Privacy Laws are beien
                </p>
            </div>
            <div class="signature-form">
                <form @submit.prevent="sendSignatures()">
                    <div class="pages-container"> 
                        <div class="signature-page signature-page-1" v-if="step == 1">
                            <label class="signature-label">Draw your signature</label>

                            <div class="undo-btn-wrapper">
                                <button 
                                    class="small-btn undo-btn"  
                                    v-if="hasSignature" 
                                    @click="this.$refs.signaturePad.undoSignature();"
                                >
                                    Undo
                                </button>
                            </div>
                            
                            <VueSignaturePad 
                                ref="signaturePad" 
                                class="signature-box"  
                                :options="{ onBegin, onEnd }"
                            />

                            <p class="error-msg" v-if="v$.signatureData.$error">{{  v$.signatureData.$errors[0].$message }}</p>
                        </div>

                        <div class="signature-page signature-page-2" v-if="step == 2">
                            <label class="signature-label">Upload your ID card here</label>
                    
                            <div class="image-upload-wrapper">
                                <div class="image-wrapper"> 
                                    <div class="image-upload">
                                        <div @click="this.$refs.fileInput.click();" class="img-upload-btn">
                                            <img src="../assets/icons/upload-icon.svg">
                                            <p>Front Side</p>
                                        </div>
                                        <input
                                            type="file"
                                            id="getFile"
                                            ref="fileInput"
                                            style="display: none"
                                            accept="image/*"
                                            @change="onFileChange"
                                        />
                                        <div v-if="imageUrl" class="img-preview">
                                            <img :src="imageUrl" alt="Uploaded Image Preview" />
                                            <div class="close-img-btn" @click="this.imageUrl = null">
                                                <img src="../assets/icons/close-btn-rounded.svg">
                                            </div>
                                            
                                        </div>  
                                    </div>
                                    <p class="error-msg" v-if="v$.imageUrl.$error">{{  v$.imageUrl.$errors[0].$message }}</p>
                                </div>

                                <div class="image-wrapper">
                                    <div class="image-upload">
                                        <div @click="this.$refs.fileInput2.click();" class="img-upload-btn">
                                            <img src="../assets/icons/upload-icon.svg">
                                            <p>Back Side</p> 
                                        </div>
                                        <input
                                            type="file"
                                            id="getFile"
                                            ref="fileInput2"
                                            style="display: none"
                                            accept="image/*"
                                            @change="onFileChange2"
                                        />
                                        <div v-if="imageUrl2" class="img-preview">
                                            <img :src="imageUrl2" alt="Uploaded Image Preview" />
                                            <div class="close-img-btn" @click="this.imageUrl2 = null">
                                                <img src="../assets/icons/close-btn-rounded.svg">
                                            </div>
                                        </div>  
                                    </div>
                                    <p class="error-msg" v-if="v$.imageUrl2.$error">{{  v$.imageUrl2.$errors[0].$message }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-buttons">
                        <div>
                            <button type="button" class="secondary-btn btn" v-if="step == 2" @click="step--">Back</button>
                            <div v-else></div>
                        </div>
                        <div>
                            <button type="button" class="secondary-btn btn" v-if="step == 1" @click="next();  ">Next</button>
                            <button type="submit" class="btn" v-else>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</div>
</template>

  
<script>
import useValidate from '@vuelidate/core';
import {required} from '@vuelidate/validators';
import Swal from 'sweetalert2';

export default {
    validations(){
        return{
            signatureData:{required},
            imageUrl: {required},
            imageUrl2: {required},
        }
    },
    data() {
        return {
            v$: useValidate(), 

            step: 1,
            imageUrl: null,
            imageUrl2: null,
            hasSignature: false,

            signatureData: null,
        }
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = (e) => {
                this.imageUrl = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.imageUrl = null;
            }
        },

        onFileChange2(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = (e) => {
                this.imageUrl2 = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.imageUrl2 = null;
            }
        },

        onBegin() { 
            this.hasSignature = true;
        },

        next() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            console.log(isEmpty);
             

            this.signatureData = data; 

            this.v$.signatureData.$touch();

            if (this.v$.signatureData.$invalid) {  
                Swal.fire({
                    title: 'Validation Error!',
                    text: '',
                    icon: 'error', 
                })
            }else{
                this.step++; 
            }
        },

        sendSignatures(){
            this.v$.imageUrl.$touch();
            this.v$.imageUrl2.$touch();
            if (this.v$.imageUrl.$invalid) {  
                Swal.fire({
                    title: 'Validation Error!',
                    text: '',
                    icon: 'error', 
                })
            }else if (this.v$.imageUrl2.$invalid) {  
                Swal.fire({
                    title: 'Validation Error!',
                    text: '',
                    icon: 'error', 
                })
            }else{
                Swal.fire({
                    title: 'Thank you for your submission!',
                    text: '',
                    icon: 'success', 
                }).then(()=>{
                    this.closeSignature();
                })
                
            }
        },

        closeSignature() {
            this.$emit('close');
        }
  },
};
</script>

  
<style scoped>
* {
    box-sizing: border-box;
    color: var(--text-color);
}

.signature-backdrop{
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    position: fixed;
}

.signature-wrapper{
    width: 80vw; 
    max-height: 95vh;
    position: absolute;
    top: 50%;  
    left: 50%;  
    background-color: var(--background-color);
    transform: translate(-50%, -50%); 
    border-radius: 20px;
    padding: 30px;
    overflow: auto;
}

.close-modal-btn{
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
}
 

.close-modal-btn img{
    width: 100%;
}

.signature-title{
    width: 100%; 
}

.signature-title h1{
    font-size: 28px;
}

.signature-content{
    display: flex; 
    justify-content: space-between; 
    margin: 25px 0;
}

.signature-terms{
    width: 48%;
}

.signature-terms p{
    font-size: 14px;
    margin-bottom: 10px;
}

.signature-terms p:last-child{
    margin-bottom: 0;
}


.signature-form{
    width: 48%;
}

form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
} 

.pages-container{
    height: 80%;
}

.signature-page{
    height: 100%;
}

.signature-label{
    font-size: 16px;
    margin-bottom: 10px;
    display: block;
}

.undo-btn-wrapper{
    width: 100%; 
    display: flex; 
    justify-content: flex-end;
    margin-bottom: 10px;
}
 
.signature-box{
    border: 1px solid black;
    border-radius: 10px;
    width: 100% !important;
    height: 75% !important; 
}

[data-theme="dark"]  .signature-box{ 
    background-color: #6d6d6d;
}

.image-upload-wrapper{
    display: flex; 
    justify-content: space-between; 
    height: 100%; 
    align-items: center;
}

.image-wrapper{
    transition: 0.3s ease;        
    width: 48%;
}

.image-upload {
    width: 100%;
}

.img-upload-btn{
    transition: 0.3s ease;    
    border: 1px solid black;
    background-color: #ebeff3;
    border-style: dashed;
    font-size: 16px;
    text-align: center;
    height: 120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    cursor: pointer;
    border-radius: 10px;
}

[data-theme="dark"] .img-upload-btn{
    border: 1px solid #ebeff3;
    background-color: #252525;
}

.img-upload-btn:hover{
    margin-bottom: 8px;
}

.img-upload-btn p{
    font-weight: bold;
    font-size: 14px;
}

.img-upload-btn img{
    height: 40%;
    width: 40%;
    margin:  0 auto;
}
[data-theme="dark"] .img-upload-btn img,
[data-theme="dark"] .close-img-btn img,
[data-theme="dark"] .close-modal-btn img{
    filter: brightness(0) invert(1);
}

.img-preview{
    border: 2px solid #ccc;
    border-radius: 5px;
    width: 100px;
    height: 100px;
    margin-top: 16px;
    position: relative;
    cursor: pointer;
}

.close-img-btn{
    position: absolute;
    top: 2px;
    right: 2px;
    background-color: var(--background-color);
    border-radius: 50%;
    width: 20px;
    height: 20px; 

}

.img-preview img ,
.close-img-btn img{
  width: 100%;
  height: 100%;
}


.form-buttons{ 
    display: flex;
    justify-content: space-between;
}

</style>
