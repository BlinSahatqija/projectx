<template>
<HomeHeader />

<div class="home-container container">
    <div class="home-content">
        <h1>Take back control of your personal data<br> and stop companies from exploiting it.</h1>
        <h3>
            Our services help you quickly and safely reclaim control of your data, reduce spam, and prevent scams by automatically removing your personal information from data brokers' databases.
        </h3>

        <div class="home-button-wrapper">
            <div class="home-button cursor-pointer default-btn">
                <p>
                    Get Started
                </p>
            </div>
        </div>
    </div>
    <div class="home-visual">
        <img src="../assets/home.png">
    </div>
</div>

<div class="about-container container">
    <h1>Why it matters</h1>
    <div class="about-card-container">
        <div class="about-card">
            <h3>Potential scams</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic cumque! Impedit, rem? Ipsa dolores perspiciatis error.</p>
        </div>
        <div class="about-card">
            <h3>Invasion of privacy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic cumque! Impedit, rem? Ipsa dolores perspiciatis error.</p>
        </div>
        <div class="about-card">
            <h3>Identity theft</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic cumque! Impedit, rem? Ipsa dolores perspiciatis error.</p>
        </div>
        <div class="about-card">
            <h3>Increased costs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic cumque! Impedit, rem? Ipsa dolores perspiciatis error.</p>
        </div>
        <div class="about-card">
            <h3>Data leak</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic cumque! Impedit, rem? Ipsa dolores perspiciatis error.</p>
        </div>
        <div class="about-card">
            <h3>Digital footprint</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic cumque! Impedit, rem? Ipsa dolores perspiciatis error.</p>
        </div>
    </div>
</div>

<div class="container bg">
    <div class="statistics">
        <h1>Our numbers say it all</h1>
        <div class="statistics-list">
            <div class="statistics-card">
                <h1>100M+</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident nulla. Excepturi ut amet earum.</p>
            </div>
            <div class="statistics-card">
                <h1>54+</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident nulla. Excepturi ut amet earum.</p>
            </div>
            <div class="statistics-card">
                <h1>2,389+</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident nulla. Excepturi ut amet earum.</p>
            </div>
        </div>
    </div>
    <div class="guy-image">
        <img src="../assets/guy.webp">
    </div>

</div>
<div class="plans container" id="plansContainer">
    <div class="individual-plan plan">
        <h3 class="plan-title">Solo Plan</h3>
        <div class="plan-prices">
            <h2 class="plan-price">
                €6.99<span class="plan-price-type">/mo</span>
            </h2>
            <h2 class="plan-price old-plan-price">
                <s>€11.99</s><s>
                    <p class="plan-price-type">/mo</p>
                </s>
            </h2>
        </div>

        <div class="sale">
            <p>-20%</p>
        </div>

        <div class="plan-btn default-btn transition cursor-pointer"> 
            <p>Get Solo Plan</p>
        </div>
        
    </div>
    <div class="family-plan plan">
        <h3 class="plan-title">Family Plan</h3>
        <div class="plan-prices">
            <h2 class="plan-price">
                €25.99<span class="plan-price-type">/mo</span>

            </h2>
        </div>
        <div class="plan-btn default-btn transition cursor-pointer">
            <p>Get Family Plan</p>
        </div>
       
    </div>
</div>

<div class="partners container"> 
  <p class="text-center partners-text">Our beloved partners</p>
  <div class="partners-list">
    <div class="partner-logo">
        <img src="../assets/adits-logo.svg">
    </div>
    <div class="partner-logo">
        <img src="../assets/google-cloud-logo.svg">
    </div>
    <div class="partner-logo">
        <img src="../assets/google-logo.svg">
    </div>
    <div class="partner-logo">
        <img src="../assets/klabs-logo.svg">
    </div>
    <div class="partner-logo">
        <img src="../assets/microsoft-logo.svg">
    </div>
    <div class="partner-logo">
        <img src="../assets/monday-logo.svg">
    </div> 
  </div>
</div>
<div class="questions container">
  <h1>FAQ</h1>
  <div class="questions-list">
    <div class="question" v-for="question in frequentQuestions" :key="question.id">
        <div class="question-title-wrapper">
            <h2>{{ question.question }}</h2>
            <div @click="toggleQuestion(question.id)" class="question-btn">
                <p v-if="question.isOpen">-</p>
                <p v-else>+</p>
            </div>
        </div>
   
        <div class="answ" :class="{ 'answ-active': question.isOpen }" >
            <p>{{ question.answer }}</p>
        </div>
    </div>
  </div>
</div>
<HomeFooter />
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';

export default {
    components: {
        HomeHeader,
        HomeFooter
    },
    data(){
      return{
        frequentQuestions:[
          {
            id:'question1',
            question:'What is a data broker?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam provident tenetur laborum illum! Ut temporibus voluptatibus fugit eum minus sapiente, impedit, amet quisquam illo neque autem pariatur eos eligendi?',
            isOpen: false,
          },
          {
            id:'question2',
            question:'How is my personal information online?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam provident tenetur laborum illum! Ut temporibus voluptatibus fugit eum minus sapiente, impedit, amet quisquam illo neque autem pariatur eos eligendi?',
            isOpen: false,
          },
          {
            id:'question3',
            question:'How do I sign up?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam provident tenetur laborum illum! Ut temporibus voluptatibus fugit eum minus sapiente, impedit, amet quisquam illo neque autem pariatur eos eligendi?',
            isOpen: false,
          },
          {
            id:'question4',
            question:'Can you delete google search results of me?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam provident tenetur laborum illum! Ut temporibus voluptatibus fugit eum minus sapiente, impedit, amet quisquam illo neque autem pariatur eos eligendi?',
            isOpen: false,
          },
        ]
      }
    },
    methods: {
    toggleQuestion(questionId) {
      this.frequentQuestions = this.frequentQuestions.map(question => ({
        ...question,
        isOpen: question.id === questionId ? !question.isOpen : false
      }));
    },
 
  },
};
</script>

<style scoped>
.home-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    color: var(--text-color);
}

.home-content {
    width: 58%;
}

.home-content h1,
.about-container h1,
.statistics h1 {
    font-size: 36px;
}

.home-content h3 {
    font-size: 18px;
    width: 90%;
    margin: 40px 0;
}

.home-visual {
    width: 41%;
}

.home-visual img {
    width: 65%;
    margin: 0 17.5%;
}

.home-button {
    border: 1px solid var(--text-color);
    width: 140px;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    border-radius: 10px;
    transition: 0.3s ease;
}

.home-button a{
    font-size: 16px;
}

.home-button:hover {
    margin-bottom: 10px;
}

.home-button-wrapper {
    height: 50px;
    display: flex;
    align-items: flex-end;
}

.about-container {
    padding-top: 70px;
    padding-bottom: 70px;
    color: var(--text-color);
}

.about-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2em 0;
    justify-content: space-between; 
    width: 100%;
}

.about-card {
    padding: 30px 45px;
    width: 25%;
    border: 2px solid var(--primary-border-color);
    border-radius: 10px;
    transition: 0.3s ease;
    box-shadow: -1px 12px 22px -7px #0f0f0f;
}

.about-card:hover {
    transform: scale(0.98);
}

.about-card h3 {
    font-size: 20px;
}

.about-card p {
    font-size: 14px;
    margin-top: 15px;
}

.about-container h1 {
    margin-bottom: 30px;
}

.bg {
    background-color: var(--third-backgorund-color);
    /* height: 500px; */
    padding-top: 50px;
    padding-bottom: 150px;
    border-radius: 40px;
}

.statistics{
    color: var(--white-color);
}

.statistics-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
}

.statistics-card {
    width: 31%;
}

.statistics-card p{
    font-size: 16px;
}

.guy-image {
    width: 500px;
    margin-top: 150px;
    margin-left: auto;
}

.guy-image img {
    width: 100%;
}

.plans {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: var(--text-color);

    margin-top: -217px;
    padding-bottom: 50px;
    padding-top: 50px;
}

.plan {
    border: 1px solid black;
    padding: 40px 40px;
    width: calc(49% - 80px);
    background-color: var(--background-color);
    border-radius: 40px;
    position: relative
}

.plan-title {
    font-size: 28px;
    margin-bottom: 30px;
}

.plan-prices {
    display: flex;
    gap: 10px;
    border-bottom: 1px solid;
    padding-bottom: 15px;
}

.plan-price {
    font-size: 42px;
    display: flex;
    align-items: baseline;

}

.old-plan-price {
    align-items: center;
    transform: scale(0.6);
}

.plan-price-type {
    font-size: 16px;
}

[data-theme="dark"] .default-btn:hover,
[data-theme="dark"] .sale {
    background-color: var(--background-color);
}

[data-theme="dark"] .plan {
    border: 2px solid var(--text-color);
    ;
}

.individual-plan {
    border: 5px solid #ff3a67 !important;
}

.default-btn {
    display: block;
    margin-top: 50px;
    width: 170px;
    text-align: center;
    padding: 10px 0;
    border-radius: 10px;
    background-color: #ff3a67;
    color: rgb(255, 235, 240);
    border: 2px solid #ff3a67;
    ;
}

.default-btn p{
    font-size: 16px;
}

.default-btn:hover {
    background-color: rgb(255, 235, 240);
    color: #ff3a67;
}

[data-theme="dark"] .sale {
    border: 2px solid rgb(255, 58, 103);
}

.sale {
    position: absolute;
    top: 10%;
    right: 5%;
    padding: 5px 20px;
    text-align: center;
    background-color: rgb(255, 235, 240);
    color: rgb(255, 58, 103);
    font-weight: 600;
    border-radius: 10px;
}

.sale p{
    font-size: 16px;
}


.partners{

  padding-top: 50px;
  padding-bottom: 50px;
}

.partners-text{
  color: var(--text-color);
  font-size: 18px;
  margin-bottom: 10px;
}

.partners-list{
  display: flex;
  flex-wrap: wrap;
  align-items: center;    
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}

.partner-logo{
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
}

.partner-logo img{
  width: 100%;
  filter: invert(50%);
  transition: 0.3s ease;
}

.partner-logo:hover img{
  filter: none;
}



.questions{
  color: var(--text-color);
  padding-top: 50px;
  padding-bottom: 100px;
}

.questions h1 {
    font-size: 66px;
    width: 70%;
    margin: 0 auto;
}

.questions-list{
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}

.question{
  border: 2px solid  rgb(255, 58, 103);;
  border-radius: 10px;
  margin-bottom: 20px;
}
 
.question-title-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
}

.question-title-wrapper h2{
    font-size: 24px;
}

.question-btn{
  border: 2px solid  rgb(255, 58, 103);;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer; 
}

.question-btn p{
  font-weight: 600;
  font-size: 20px;
  color: #ff3a67;
}

.answ{
  border: none;
  position: relative;
  background-color: var(--background-color);
  border-radius: 10px;
  height: 0; 
  overflow: hidden;
  transition: 0.5s ease; 
}

.answ p{
    font-size: 16px;
    width: 95%;
}

.answ-active{
  height: 100px;
  padding: 5px 20px;
}

/*1640-1080*/
@media(min-width: 1640px) {}

/*1680-1080*/
@media(min-width: 1680px) {}

/* 1920-1080 */
@media (min-width: 1920px) {
    .default-btn {
        width: 220px;
    }

    .default-btn p {
        font-size: 18px;
    }

    .home-visual img {
        width: 60%;
        margin: 0 20%;
    }

    .home-content h1, .about-container h1, .statistics h1 {
        font-size: 40px;
    }

    .home-content h3 {
        font-size: 20px;
    }

    .about-card h3 {
        font-size: 22px;
    }

    .about-card p {
        font-size: 16px;
        margin-top: 20px;
    }

    .statistics-card p {
        font-size: 18px;
    }

    .plan-title {
        font-size: 34px;
        margin-bottom: 40px;
    }

    .sale p {
        font-size: 18px;
    }

    .plan-price {
        font-size: 46px;
    }

    .partners-text {
        font-size: 22px;
    }

    .partner-logo {
        width: 180px;
        height: 130px;
    }

    .questions h1 {
        font-size: 56px;
    }

    .question-title-wrapper h2 {
        font-size: 26px;
    }

    .answ p {
        font-size: 18px;
    }

    .question-btn {
        height: 30px;
        width: 30px;
    }

    .question-btn p {
        font-size: 22px;
    }
}

/* 2304-1440 */
@media (min-width: 2304px) {
    .default-btn {
        width: 250px;
    }

    .default-btn p {
        font-size: 22px;
    }

    .home-visual img {
        width: 50%;
        margin: 0 25%;
    }

    .home-content h1, .about-container h1, .statistics h1 {
        font-size: 44px;
    }

    .home-content h3 {
        font-size: 24px;
    }

    .about-card h3 {
        font-size: 26px;
    }

    .about-card p {
        font-size: 20px;
        margin-top: 24px;
    }

    .statistics-card p {
        font-size: 22px;
    }

    .plan-title {
        font-size: 38px;
        margin-bottom: 46px;
    }

    .sale p {
        font-size: 22px;
    }

    .plan-price {
        font-size: 50px;
    }

    .partners-text {
        font-size: 26px;
    }

    .partner-logo {
        width: 200px;
        height: 150px;
    }

    .questions h1 {
        font-size: 60px;
    }

    .question-title-wrapper h2 {
        font-size: 30px;
    }

    .answ p {
        font-size: 22px;
    }

    .question-btn {
        height: 34px;
        width: 34px;
    }

    .question-btn p {
        font-size: 24px;
    }

    .about-card {
        width: 27%;
    }
}

/*2560-1440*/
@media (min-width: 2560px) {}

/*2573-1206*/
@media(min-width: 2573px) { 
    .default-btn {
        width: 280px;
    }

    .default-btn p {
        font-size: 24px;
    }

    .home-visual img {
        width: 50%;
        margin: 0 25%;
    }

    .home-content h1, .about-container h1, .statistics h1 {
        font-size: 46px;
    }

    .home-content h3 {
        font-size: 26px;
    }

    .about-card h3 {
        font-size: 28px;
    }

    .about-card p {
        font-size: 22px;
        margin-top: 26px;
    }

    .statistics-card p {
        font-size: 24px;
    }

    .plan-title {
        font-size: 40px;
        margin-bottom: 48px;
    }

    .sale p {
        font-size: 24px;
    }

    .plan-price {
        font-size: 52px;
    }

    .partners-text {
        font-size: 28px;
    }

    .partner-logo {
        width: 220px;
        height: 170px;
    }

    .questions h1 {
        font-size: 62px;
    }

    .question-title-wrapper h2 {
        font-size: 32px;
    }

    .answ p {
        font-size: 24px;
    }

    .question-btn {
        height: 36px;
        width: 36px;
    }

    .question-btn p {
        font-size: 26px;
    }

    .about-card {
        width: 28%;
    }

    .question { 
        margin-bottom: 30px;
    }

    .guy-image {
        width: 550px;
    }
}

/*3200-1800*/
@media(min-width: 3200px) {
    .home-content h3 { 
        margin: 50px 0;
    }

    .default-btn {
        width: 300px;
    }

    .default-btn p {
        font-size: 28px;
    }

 

    .home-content h1, .about-container h1, .statistics h1 {
        font-size: 50px;
    }

    .home-content h3 {
        font-size: 30px;
    }

    .about-card h3 {
        font-size: 32px;
    }

    .about-card p {
        font-size: 26px;
        margin-top: 30px;
    }

    .statistics-card p {
        font-size: 28px;
    }

    .guy-image {
        width: 620px;
    }

    .plan-title {
        font-size: 44px;
        margin-bottom: 52px;
    }

    .sale p {
        font-size: 28px;
    }

    .plan-price {
        font-size: 56px;
    }

    .partners-text {
        font-size: 32px;
    }

    .partner-logo {
        width: 250px;
        height: 200px;
    }

    .questions h1 {
        font-size: 66px;
    }

    .question-title-wrapper h2 {
        font-size: 36px;
    }

    .answ p {
        font-size: 30px;
    }

    .question-btn {
        height: 38px;
        width: 38px;
    }

    .question-btn p {
        font-size: 30px;
    }

    .about-card {
        width: 29%;
    }
}

/*3360-1890 1695*/
@media(min-width:3360px) { 

    .default-btn {
        width: 320px;
    }

    .default-btn p {
        font-size: 30px;
    }

 

    .home-content h1, .about-container h1, .statistics h1 {
        font-size: 52px;
    }

    .home-content h3 {
        font-size: 32px;
    }

    .about-card h3 {
        font-size: 34px;
    }

    .about-card p {
        font-size: 28px;
    }

    .statistics-card p {
        font-size: 30px;
    }

    .guy-image {
        width: 650px;
    }

    .plan-title {
        font-size: 46px;
    }

    .sale p {
        font-size: 30px;
    }

    .plan-price {
        font-size: 58px;
    }

    .partners-text {
        font-size: 34px;
    }

    .partner-logo {
        width: 270px;
        height: 220px;
    }

    .questions h1 {
        font-size: 68px;
    }

    .question-title-wrapper h2 {
        font-size: 38px;
    }

    .answ p {
        font-size: 32px;
    }

    .question-btn {
        height: 40px;
        width: 40px;
    }

    .question-btn p {
        font-size: 32px;
    }
}

 
/*my big monitor 1600 - 757 */
@media (max-width: 1600px) {}

/*my small monitor 1536-864*/
@media(max-width:1536px) {}

/* 1440-990 */
@media(max-width:1440px) {
    .home-content h1, .about-container h1, .statistics h1 {
        font-size: 32px;
    }

    .home-content h3 {
        font-size: 16px;
    }

    .about-card {
        padding: 25px 30px;
        width: 26%;
    }

    .about-card h3 {
        font-size: 18px;
    }

    .statistics-card p {
        font-size: 14px;
    }

    .guy-image {
        width: 420px;
        margin-top: 130px;
    }

    .plan-title {
        font-size: 26px;
    }

    .sale p {
        font-size: 14px;
    }

    .plan-price {
        font-size: 40px;
    }

    .default-btn p {
        font-size: 14px;
    }

    .question-title-wrapper h2 {
        font-size: 22px;
    }

    .answ p {
        font-size: 14px;
    }

    .question-btn { 
        height: 22px;
        width: 22px;
    }

    .question-btn p { 
        font-size: 18px; 
    }
}

/*1366-768*/
@media (max-width:1366px) {
    .home-visual img {
        width: 60%;
        margin: 0 20%;
    }

    .partners-list{ 
        width: 100%;
    }
}

/* 1280-800 */
@media (max-width:1280px) {
    .home-content h1, .about-container h1, .statistics h1 {
        font-size: 28px;
    }
  

    .guy-image {
        width: 400px;
        margin-top: 120px;
    }

   

    .question-title-wrapper h2 {
        font-size: 20px;
    }

    .questions h1 { 
        width: 80%;
    }

    .questions-list {
        width: 80%;
    } 

    .partner-logo {
        width: 130px;
        height: 90px;
    }
}

/*1134x712*/
@media(max-width:1134px) {
    .container {
        padding: 0 6%;
        width: calc(100% - 12%);
    }

    .home-content h1, .about-container h1, .statistics h1 {
        font-size: 26px;
    }

    .home-content h3 {
        font-size: 14px;
        margin: 30px 0;
    }

    .about-container {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .about-card {
        padding: 20px 25px;
    }

    .bg { 
        padding-top: 50px;
        padding-bottom: 150px; 
    }

    .plans  { 
        padding-bottom: 50px;
        padding-top: 50px;
    }

    .partners {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .questions {
        padding-top: 50px;
        padding-bottom: 100px;
    }
}

/*1024-768*/
@media (max-width:1024px) {
    .home-content h1{
        font-size: 24px;
    }

    .default-btn {
        padding: 8px 0;
    }

    .plan-title {
        font-size: 24px;
    }

    .plan-price {
        font-size: 36px;
    }

    .partner-logo {
        width: 110px;
        height: 85px;
    }

    .questions h1 {
        font-size: 60px;
    }

    .questions h1 { 
        width: 90%;
    }

    .questions-list {
        width: 90%;
    } 

    .guy-image {
        width: 350px;
    }
}

/* 962x601 */
@media(max-width: 962px) {
}

/*834-1112*/
@media(max-width: 834px) {
    .home-content h1 {
        font-size: 20px;
    }

    .about-card {
        width: 40%;
    }

    .guy-image {
        width: 300px;
    }

    .partner-logo {
        width: 95px;
        height: 80px;
    }
}

/* 810x1080 */
@media(max-width: 810px) {}

/* 800x1280 */
@media(max-width: 800px) {
    .home-visual{
        margin-bottom: 50px;
        display: none;
    }

    .home-container { 
        flex-direction: column-reverse;
    }

    .home-content {
        padding-top: 50px;
        width: 100%;
        text-align: center;
    }

    .home-content h3{
        width: 100%;
    }

    .home-button{
        margin:  0 auto;
    }

    .default-btn {
        width: 35%;
    }

 
    .guy-image { 
        margin-top: 100px;
    }

    .plan { 
        width: calc(100% - 80px);
    }

    .individual-plan{
        margin-bottom: 40px;
    }

    .questions h1 { 
        width: 100%;
    }

    .questions-list {
        width: 100%;
    } 
}

/*778-304*/
@media(max-width: 778px) {}

/* 768x1024 */
@media(max-width: 768px) {
}

/*712-1138*/
@media(max-width:712px) {
    .statistics-list { 
        gap: 30px 0;
    }

    .statistics-card {
        width: 50%;
    }

    .partners-text { 
        margin-bottom: 20px;
    }
    .partner-logo {
        width: 160px;
        height: 90px;
    }
}

/* 601x962 */
@media(max-width:601px) {
    .about-container h1, .statistics h1{
        text-align: center;
    }
    .statistics-card {
        width: 60%;
        margin: 0 auto;
    }
    .about-card {
        width: 60%;
        margin: 0 auto;
    }
    .partner-logo {
        width: 140px;
        height: 90px;
    }
    .questions h1 {
        font-size: 54px;
        text-align: center;
    }
    .questions-list { 
        margin-top: 20px;
    }
    
    .question-title-wrapper h2 {
        font-size: 16px;
    }

    .answ p {
        font-size: 12px;
    }

    .plan-btn{
        margin: 0 auto;
        margin-top: 40px;
    }
}

/* 577-951 */
@media(max-width:577px) {}

/* 540-960 */
@media(max-width:540px) {
    .partners-list{
        width: 70%;
    }
    .partner-logo {
        width: 35%;
        height: 90px;
    }

    .default-btn {
        width: 45%;
    }
}

/*480-800*/
@media (max-width:480px) {
    .about-card {
        width: 74%;
    }

    .statistics-card {
        width: 74%;
    }

    .guy-image {
        width: 250px;
    }

    .plan-price {
        font-size: 34px;
    }
}

/*425-*/
@media(max-width:425px) {
    .partner-logo {
        width: 40%;
        height: 90px;
    }

    .about-container h1, .statistics h1 {
        font-size: 24px;
    }
}

/*414-736 617   */
@media (max-width:414px) {
    .home-content h1 {
        font-size: 17px;
    }

    .home-content h3 {
        font-size: 12px;
    }

    .default-btn {
        width: 60%;
    }

    .answ-active {
        height: 130px;
    }
}

/*390 x 844*/
@media(max-width:390px) {
    .about-container h1, .statistics h1 {
        font-size: 22px;
    }

    .questions h1 {
        font-size: 50px;
    }
}

/*384-640*/
@media(max-width:384px) {
}

/*375*/
@media(max-width:375px) {
    .home-content h1 {
        font-size: 15px;
    }

    .plan-price {
        font-size: 29px;
    }

    .sale p {
        font-size: 12px;
    }

    .plan-title {
        font-size: 22px;
    }

    .partner-logo {
        width: 43%;
        height: 90px;
    }

    .questions h1 {
        font-size: 48px;
    }
}

/*360x640*/
@media(max-width:360px) {
}

/*320x568*/
@media(max-width:320px) {
}
</style>
