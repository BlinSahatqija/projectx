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
                <a>
                    Get Started
                </a>
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
<div class="plans container">
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
            -20%
        </div>

        <a class="plan-btn default-btn transition cursor-pointer">Get Solo Plan</a>
    </div>
    <div class="family-plan plan">
        <h3 class="plan-title">Family Plan</h3>
        <div class="plan-prices">
            <h2 class="plan-price">
                €25.99<span class="plan-price-type">/mo</span>

            </h2>
        </div>
        <a class="plan-btn default-btn transition cursor-pointer">Get Family Plan</a>
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
   
          <p class="answ" :class="{ 'answ-active': question.isOpen }" >{{ question.answer }}</p>
        
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
.statistics h1,
.questions h1 {
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
    gap: 2em;
}

.about-card {
    padding: 30px 45px;
    width: 24%;
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
  justify-content: center;
  gap: 3em;
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

.answ-active{
  height: 100px;
  padding: 5px 20px;
}
</style>
