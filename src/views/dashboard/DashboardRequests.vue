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
</style>
