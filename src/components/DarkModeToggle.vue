<template>
    <div>
      <label>
        <input type="checkbox" :checked="isDarkMode" @change="toggleDarkMode">
        <div class="img-cont">
          <img v-if="isDarkMode" src="../assets/icons/day-mode.png">
        <img v-else src="../assets/icons/night-mode.png">
        </div>
        
      </label>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
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
  input{
    display: none;
  }

  label{
    cursor: pointer;
  }

  label img{
    width: 24px;
    height: 24px; 
    transition: 0.3s ease;
  }

  label:hover img,
  .img-cont{
    width: 26px;
    height: 26px; 
  }

 /* 2304-1440 */
@media (min-width: 2304px){
  label img{
    width: 40px;
    height: 40px; 
    transition: 0.3s ease;
  }

  label:hover img,
  .img-cont{
    width: 35px;
    height: 35px; 
  }
}


/*2560-1440*/
@media (min-width: 2560px) {
     
}


/*2573-1206*/
@media(min-width: 2573px){

}


/*3200-1800*/
@media(min-width: 3200px){
    
}

/*3360-1890 1695*/
@media(min-width:3360px){
}

/*1680-1080*/ 
@media(max-width: 1680px){

}

/*1640-1080*/
@media(max-width: 1640px){

}


/* 1600 - 757 */
@media (max-width: 1600px) {

}

/*1536-864*/
@media(max-width:1536px){ 

}

/* 1440-990 */
@media(max-width:1440px){  

}

/*1366-768*/
@media (max-width:1366px){

}

/* 1280-800 */
@media (max-width:1280px){

}

/*1134x712*/
@media(max-width:1134px){

}

/*1024-768*/
@media (max-width:1024px){  
   
}


/* 962x601 */
@media(max-width: 962px){

}

/*834-1112*/
@media(max-width: 834px){   
    
}


/* 810x1080 */
@media(max-width: 810px){

}

/* 800x1280 */
@media(max-width: 800px){

}

/*778-304*/
@media(max-width: 778px){

}


/* 768x1024 */
@media(max-width: 768px){

}

/*712-1138*/
@media(max-width:712px){

}


/* 601x962 */
@media(max-width:601px){ 

    
}

/* 577-951 */
@media(max-width:577px){

}

/* 540-960 */
@media(max-width:540px){
    
}

/*480-800*/
@media (max-width:480px) {

}

/*425-*/
@media(max-width:425px){

}

/*414-736 617   */
@media (max-width:414px) {

}

/*390 x 844*/
@media(max-width:390px){

}


/*384-640*/
@media(max-width:384px){

}

/*375*/
@media(max-width:375px){

}


/*360x640*/
@media(max-width:360px){

}

/*320x568*/
@media(max-width:320px){ 

}
</style>