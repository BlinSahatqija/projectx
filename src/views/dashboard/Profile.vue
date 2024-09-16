<template>
    <div class="profile-wrapper">
        <div class="profile-menu">
            <div class="profile-menu-item" @click="toggleProfileTab('details')"
                :class="{'profile-menu-item-active' : activeTab == 'details'}"
            >
                <p>Personal Details</p>
            </div>
            <div class="profile-menu-item" @click="toggleProfileTab('logs')"
            :class="{'profile-menu-item-active' : activeTab == 'logs'}">
                <p>Other</p>
            </div>
            <div class="profile-menu-item"  @click="toggleProfileTab('plans')"
                :class="{'profile-menu-item-active' : activeTab == 'plans'}"
            >
                <p>Other</p>
            </div>
        </div>

        <div class="profile-content">
            <div v-if="activeTab == 'details'" class="details">
                <div class="edit-user-row">
                    <div class="edit-user-element">
                        <label class="edit-user-label">Gender</label> 
                        <select class="edit-user-input">
                            <option value="" disabled>Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div class="edit-user-element">
                        <label class="edit-user-label">Name</label>
                        <input type="text" class="edit-user-input" placeholder="Name">
                    </div>
                </div>

                <div class="edit-user-row">
                    <div class="edit-user-element">
                        <label class="edit-user-label">Surname</label>
                        <input type="text" class="edit-user-input" placeholder="Surname">
                    </div>

                    <div class="edit-user-element">
                        <label class="edit-user-label">Birthday</label> 
                        <input type="date" class="edit-user-input" placeholder="Birthday">
                    </div>
                </div>

                <div class="edit-user-row">
                    <div class="edit-user-element">
                        <label class="edit-user-label">Home Address</label>
                        <input type="text" class="edit-user-input" placeholder="Home Address">
                    </div>

                    <div class="edit-user-element">
                        <label class="edit-user-label">City</label>
                        <input type="text" class="edit-user-input" placeholder="City">
                    </div>
                </div>

                <div class="edit-user-row">
                    <div class="edit-user-element">
                        <label class="edit-user-label">ZIP / Postal Code</label>
                        <input type="text" class="edit-user-input" placeholder="ZIP / Postal Code">
                    </div>
                    
                    <div class="edit-user-element">
                        <label class="edit-user-label">Country</label> 
                        <select class="edit-user-input">
                            <option value="" disabled>Select</option>
                            <option v-for="country in countriesList" :key="country.id" :value="country.name">
                                {{ country.name }}
                            </option>
                        </select>
                    </div>
                </div>


                <div class="edit-user-row last-element">
                    <div class="edit-user-element">
                        <label class="edit-user-label">Number</label>
                        <input type="text" class="edit-user-input last-element" placeholder="Number">
                    </div>

                    <div class="edit-user-element ">
                        <label class="edit-user-label">Email</label>
                        <input type="email" class="edit-user-input last-element" placeholder="Email">
                    </div>
                </div>
                
                <div class="change-password-btn" @click="passwordResetModal = true">
                    <p>Change Password</p>
                </div>
            </div>
        </div>



    </div> 

    <div class="password-modal-wrapper" v-if="passwordResetModal">
        <div class="password-modal">
            <div class="close-modal-btn" @click="passwordResetModal = false">
                <img src="../../assets/icons/close-btn-rounded.svg">
            </div>
            <div class="edit-user-element">
                <label class="edit-user-label">Old Password</label>
                <input type="password" class="edit-user-input" placeholder="Old Password">
            </div>
            <div class="edit-user-element">
                <label class="edit-user-label">New Password</label>
                <input type="password" class="edit-user-input" placeholder="New Password">
            </div>

            <button type="button" class="reset-password-btn">
                Reset
            </button>
        </div>
    </div>
</template>
<script> 
export default {
    components: { 
    },
    data(){
        return{
            activeTab: 'details',
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
            ],
            passwordResetModal: false,
        }
    },
    methods:{
        toggleProfileTab(type){
            this.activeTab = type;
        }
    }
}
</script>
<style scoped>
    *{
        box-sizing: border-box;
    }

    .profile-wrapper{
        width: 100%;
        padding: 50px;
        position: relative;
    }

    .profile-menu{
        display: flex;
        align-items: center; 
        width: 100%;
        padding: 10px;
        gap: 5em;
    }

    .profile-menu-item{
        border: 1px solid transparent;
        cursor: pointer;
        transition: 0.3s ease;
        padding: 5px;
    }

    .profile-menu-item p{
        font-size: 18px;
    }

    .profile-menu-item:hover,
    .profile-menu-item-active{
        border-bottom-color: white;
    }


    .profile-content{
        padding: 10px;
        padding-top: 30px;
    }



    .details{ 
        width: 100%;
        position: relative;
        padding: 20px 0;
    }

    .edit-user-row{
        display: flex;
        align-items: center;
        gap: 2em;
        margin-bottom: 20px; 
        width: 68%
    }

    .edit-user-element{
        width: 380px;
    }

    .edit-user-label, .edit-user-input{
        font-size: 16px;
        display: block;
        width: 100%;
    }

    .edit-user-input{
        margin: 10px 0;
        padding: 12px 5px;
        border-radius: 5px;
        border: none;
    }


    .change-password-btn{
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid white;
        padding: 10px;
        border-radius: 5px;
        transition: 0.3s ease;
        cursor: pointer;
    }

    .change-password-btn p{
        font-size: 14px;

    }

    .last-element{
        margin-bottom: 0;
    }


    .password-modal-wrapper{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .password-modal{
        padding: 60px;
        background-color: var(--dashboard-main-bg);
        border-radius: 20px;
        position: relative;
    }

    .password-modal .edit-user-element{
        margin-bottom: 20px;
    }

    .reset-password-btn{
        margin-top: 30px;
        margin-left: auto;
        display: block; 
        padding: 8px;
        font-size: 14px;
        width: 150px;
    }

    .close-modal-btn{
        width: 28px;
        height: 28px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;

    }

    [data-theme="dark"]  .close-modal-btn img{ 
        filter: brightness(0) invert(1);
    }

    .close-modal-btn img{
        width: 100%;
    }

    /*1640-1080*/
@media(min-width: 1640px) {}

/*1680-1080*/
@media(min-width: 1680px) {}

/* 1920-1080 */
@media (min-width: 1920px) {
    .profile-wrapper {
        padding: 60px;
    }

    .profile-menu-item p{
        font-size: 20px;
    }

    .edit-user-row {
        gap: 5em;
    }

    .edit-user-label, .edit-user-input {
        font-size: 18px;
    }

    .edit-user-element {
        width: 450px;
    }

    .change-password-btn p {
        font-size: 16px;
    }

    .close-modal-btn {
        width: 32px;
        height: 32px;
        top: 14px;
        right: 14px;
    }

    .reset-password-btn {
        margin-top: 40px;
        padding: 10px;
        font-size: 16px;
    }
}

/* 2304-1440 */
@media (min-width: 2304px) {
    .profile-wrapper {
        padding: 80px;
    }

    .profile-menu-item { 
        padding: 5px 15px;
    }

    .profile-menu-item p{
        font-size: 26px;
    }

    .profile-content {
        padding: 20px;
        padding-top: 50px;
    }

    .edit-user-row {
        gap: 8em;
        margin-bottom: 30px;
    }

    .edit-user-label, .edit-user-input {
        font-size: 22px;
    }

    .edit-user-input {
        margin: 16px 0;
        padding: 16px 8px;
    }

    .edit-user-element {
        width: 550px;
    }

    .change-password-btn { 
        padding: 16px;
    }

    .change-password-btn p {
        font-size: 20px;
    }


    .password-modal {
        padding: 75px;
    }

    .close-modal-btn {
        width: 36px;
        height: 36px;
        top: 16px;
        right: 16px;
    }

    .reset-password-btn {
        margin-top: 40px;
        padding: 10px;
        font-size: 20px;
    }
}

/*2560-1440*/
@media (min-width: 2560px) {
    .profile-menu-item p {
        font-size: 30px;
    }

    .edit-user-row {
        width: 80%;
    }

    .edit-user-element {
        width: 600px;
    }

    .edit-user-label, .edit-user-input {
        font-size: 24px;
    }

    .change-password-btn p {
        font-size: 22px;
    }

    .reset-password-btn {
        font-size: 22px;
    }

    .close-modal-btn {
        width: 42px;
        height: 42px;
        top: 20px;
        right: 20px;
    }

    .password-modal .edit-user-element{
        margin-bottom: 40px;
    }
}

/*2573-1206*/
@media(min-width: 2573px) {
}

/*3200-1800*/
@media(min-width: 3200px) {
    .profile-menu-item p {
        font-size: 34px;
    }

    .edit-user-row {
        width: 80%;
    }

    .edit-user-element {
        width: 700px;
    }

    .edit-user-label, .edit-user-input {
        font-size: 28px;
    }

    .edit-user-input {
        margin: 20px 0;
        padding: 20px 12px;
    }

    .change-password-btn {
        padding: 22px;
    }

    .change-password-btn p {
        font-size: 26px;
    }

    .reset-password-btn {
        font-size: 26px;
    }

    .close-modal-btn {
        width: 46px;
        height: 46px;
        top: 24px;
        right: 24px;
    }

    .password-modal .edit-user-element{
        margin-bottom: 50px;
    }
}

/*3360-1890 1695*/
@media(min-width:3360px) {
}

 
/*my big monitor 1600 - 757 */
@media (max-width: 1600px) {}

/*my small monitor 1536-864*/
@media(max-width:1536px) {}

/* 1440-990 */
@media(max-width:1440px) {
    .edit-user-row {
        width: 80%;
    }
}

/*1366-768*/
@media (max-width:1366px) {
    .profile-wrapper {
        padding: 40px;
    }

    .password-modal {
        padding: 50px;
    }
}

/* 1280-800 */
@media (max-width:1280px) {
    .edit-user-element {
        width: 320px;
    }

    .change-password-btn p {
        font-size: 12px;
    }

    .reset-password-btn {
        width: 120px;
    }
}

/*1134x712*/
@media(max-width:1134px) {
    .profile-wrapper {
        padding: 30px;
    }

    .profile-menu-item p {
        font-size: 16px;
    }

    .edit-user-label, .edit-user-input {
        font-size: 14px;
    }

    .edit-user-row {
        margin-bottom: 15px;
    }

    .password-modal {
        padding: 40px;
    }
}

/*1024-768*/
@media (max-width:1024px) {
    .edit-user-row {
        width: 75%;
    }
}

/* 962x601 */
@media(max-width: 962px) {
}

/*834-1112*/
@media(max-width: 834px) {}

/* 810x1080 */
@media(max-width: 810px) {}

/* 800x1280 */
@media(max-width: 800px) {}

/*778-304*/
@media(max-width: 778px) {}

/* 768x1024 */
@media(max-width: 768px) {
}

/*712-1138*/
@media(max-width:712px) {
}

/* 601x962 */
@media(max-width:601px) {}

/* 577-951 */
@media(max-width:577px) {}

/* 540-960 */
@media(max-width:540px) {}

/*480-800*/
@media (max-width:480px) {}

/*425-*/
@media(max-width:425px) {}

/*414-736 617   */
@media (max-width:414px) {
}

/*390 x 844*/
@media(max-width:390px) {
}

/*384-640*/
@media(max-width:384px) {
}

/*375*/
@media(max-width:375px) {

}

/*360x640*/
@media(max-width:360px) {
}

/*320x568*/
@media(max-width:320px) {
}
</style>