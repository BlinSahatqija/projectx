<template>
 <label>
     <input type="checkbox" :checked="isDarkMode" @change="toggleDarkMode">
     <div class="img-cont">
         <img v-if="isDarkMode" src="../assets/icons/day-mode.png">
         <img v-else src="../assets/icons/night-mode.png">
     </div>
 </label>
</template>

  
<script>
import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    computed: {
        ...mapGetters('darkMode', ['isDarkMode'])
    },
    methods: {
        ...mapActions('darkMode', ['toggleDarkMode'])
    }
};
</script>

<style scoped>
input {
    display: none;
}

label {
    cursor: pointer;
    width: 30px;
    height: 30px; 
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-cont {
    width: 22px;
    height: 22px; 
    transition: 0.3s ease;
}

.img-cont:hover{
  width: 24px;
  height: 24px;
}

.img-cont img { 
    width: 100%;
    transition: 0.3s ease;
}



/*1640-1080*/
@media(min-width: 1640px) {
  .img-cont {
    width: 24px;
    height: 24px;  
  }

  .img-cont:hover{
    width: 26px;
    height: 26px;
  }
}

/*1680-1080*/
@media(min-width: 1680px) {}

/* 1920-1080 */
@media (min-width: 1920px) {
  .img-cont {
    width: 26px;
    height: 26px;  
  }

  .img-cont:hover{
    width: 28px;
    height: 28px;
  }
}

/* 2304-1440 */
@media (min-width: 2304px) {
  .img-cont {
    width: 28px;
    height: 28px;  
  }

  .img-cont:hover{
    width: 30px;
    height: 30px;
  }
}

/*2560-1440*/
@media (min-width: 2560px) { 
  label {
    width: 34px;
    height: 34px; 
  }

  .img-cont {
    width: 30px;
    height: 30px;  
  }

  .img-cont:hover{
    width: 32px;
    height: 32px;
  }
}

/*2573-1206*/
@media(min-width: 2573px) {}

/*3200-1800*/
@media(min-width: 3200px) {
  label {
    width: 38px;
    height: 38px; 
  }

  .img-cont {
    width: 34px;
    height: 34px;  
  }

  .img-cont:hover{
    width: 36px;
    height: 36px;
  }
}

/*3360-1890 1695*/
@media(min-width:3360px) {
  .img-cont {
    width: 36px;
    height: 36px;  
  }

  .img-cont:hover{
    width: 38px;
    height: 38px;
  }
}

/*my big monitor 1600 - 757 */
@media (max-width: 1600px) {}

/*my small monitor 1536-864*/
@media(max-width:1536px) {}

/* 1440-990 */
@media(max-width:1440px) {
  label {
    width: 24px;
    height: 24px; 
  }

  .img-cont {
    width: 20px;
    height: 20px;  
  }

  .img-cont:hover{
    width: 22px;
    height: 22px;
  }
}

/*1366-768*/
@media (max-width:1366px) {}

/* 1280-800 */
@media (max-width:1280px) {
 
}

/*1134x712*/
@media(max-width:1134px) {}

/*1024-768*/
@media (max-width:1024px) {}

/* 962x601 */
@media(max-width: 962px) {}

/*834-1112*/
@media(max-width: 834px) {}

/* 810x1080 */
@media(max-width: 810px) {}

/* 800x1280 */
@media(max-width: 800px) {}

/*778-304*/
@media(max-width: 778px) {}

/* 768x1024 */
@media(max-width: 768px) {}

/*712-1138*/
@media(max-width:712px) {}

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
@media (max-width:414px) {}

/*390 x 844*/
@media(max-width:390px) {}

/*384-640*/
@media(max-width:384px) {}

/*375*/
@media(max-width:375px) {}

/*360x640*/
@media(max-width:360px) {}

/*320x568*/
@media(max-width:320px) {}
</style>
