<template>
<div class="dashborad-cards">
    <div class="dashboard-card-wrapper" v-for="request in requests" :key="request.id">
        <div class="dashboard-card">
            <p class="card-status">
                {{request.status}}
            </p>

            <h1 class="card-value">
                {{request.value}}
            </h1>

            <p class="card-description">
                {{request.info}}
            </p>
        </div>
    </div>
</div>
</template>

  
<script>
export default {
    data() {
        return {
            requests: [{
                    id: 'request1',
                    status: 'Requests sent',
                    value: 43,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                },
                {
                    id: 'request2',
                    status: 'Requests in progress ',
                    value: 43,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                },
                {
                    id: 'request3',
                    status: 'Requests completed ',
                    value: 0,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                },
                {
                    id: 'request4',
                    status: 'Time Saved',
                    value: 0,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                },
                {
                    id: 'request5',
                    status: 'Suppression list entries',
                    value: 0,
                    info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero vero'
                }
            ]
        }
    }
};
</script>

  
<style scoped>
* {
    box-sizing: border-box;
    color: var(--text-color);
}

.dashborad-cards {
    display: flex;
    width: 100%;
    gap: 50px 0;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
}

.dashboard-card-wrapper {
    width: 31%;
    height: 250px;
    display: block;
    display: flex;
    align-items: flex-end;
}

.dashboard-card {
    width: 100%;
    height: 97%;
    padding: 25px;
    border-radius: 20px;
    background-color: var(--background-color);
    box-shadow: 0 1px 2px rgba(56, 65, 74, .5);
    box-shadow: 0 5px 10px rgba(30, 32, 37, .8);
    transition: 0.3s ease;
    overflow: auto;
}

.dashboard-card:hover {
    margin-bottom: 3%;
}

.dashborad-cards>.dashboard-card-wrapper:nth-last-child(-n+2) {
    width: 48%;
}

.card-status {
    font-weight: 800;
    font-size: 16px;
    margin-bottom: 16px;
}

.card-value {
    font-weight: 800;
    font-size: 48px;
    padding-bottom: 16px;
    border-bottom: 1px solid;
}

.card-description {
    font-size: 14px;
    padding-top: 16px;
}



/* 2304-1440 */
@media (min-width: 2304px){
    .dashboard-card-wrapper {
        height: 300px;
    }
    .card-status { 
        font-size: 24px;
        margin-bottom: 22px;
    }
    
    .card-value {
        font-size: 56px;
        padding-bottom: 22px;
    }

    .card-description {
        font-size: 18px;
        padding-top: 22px;
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
