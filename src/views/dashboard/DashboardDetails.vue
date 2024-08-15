<template>
<div>
    <h1>Details Table</h1>

    <div class="table">
        <div class="table-header">
            <div class="arrow-header"></div>
            <div class="company-header">Company</div>
            <div class="issue-header">Issue</div>
            <div class="risk-header">Risk</div>
            <div class="requests-header">Requests sent</div>
            <div class="status-header">Status</div>
            <div class="action-header"></div>
        </div>
        <div class="table-body-wrapper">
             <div v-for="(detail, index) in details" :key="detail.id">
                <div class="table-body">
                    <div class="arrow-body" @click="toggleInfo(index)">
                        <img src="../../assets/icons/arrow-down.svg" alt="arrow down">
                    </div>
                    <div class="company-body">{{ detail.company.name }}</div>
                    <div class="issue-body">{{ detail.issue.type }}</div>
                    <div class="risk-body">{{ detail.risk.name }}</div>
                    <div class="requests-body">{{ detail.requests }}</div>
                    <div class="status-body">{{ detail.status.type }}</div>
                    <div class="action-body" @click="toggleDropdown(index)">
                        <img src="../../assets/icons/three-dots-vertical.svg">
                        <div v-if="dropdownVisible[index]" class="dropdown-menu">
                            <div @click="editDetail(detail)" class="dropdown-button dropdown-button-edit">
                                <div class="dropdown-icon edit-icon">
                                    <img src="../../assets/icons/edit-icon.svg">
                                </div>
                                <p>Edit</p>
                            </div>
                            <div @click="deleteDetail(detail.id)" class="dropdown-button">
                                <div class="dropdown-icon delete-icon"> 
                                    <img src="../../assets/icons/delete-icon.svg"> 
                                </div>
                                <p>Delete</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div v-if="infoVisible[index]">{{ detail.info }}</div>
            </div>
 
        </div>
    </div>
</div>
</template>

  
<script>
export default {
    data(){
        return{
            details:[
                {
                    id:'detail1',
                    company: {
                        id: 1,
                        name: 'Fetcher',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id:1, 
                        name:'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status:{
                        id: 1,
                        type: 'Completed'
                    }
                },
                {
                    id:'detail2', 
                    company: {
                        id: 2,
                        name: 'Viewport',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id:1, 
                        name:'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id:'detail3', 
                    company: {
                        id: 3,
                        name: 'Intalytics / Kalibrate',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id:1, 
                        name:'Medium'
                    },
                    requests: 0, 
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 3,
                        type: 'Surpressed'
                    }
                },
                {
                    id:'detail4', 
                    company: {
                        id: 4,
                        name: 'Liveintent',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    }, 
                    risk: {
                        id:1, 
                        name:'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 1,
                        type: 'Completed'
                    }
                },        
                {
                    id:'detail5', 
                    company: {
                        id: 5,
                        name: 'MaxMind',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id:2, 
                        name:'Low'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 2,
                        type: 'In Progress'
                    }
                },        
                {
                    id:'detail6', 
                    company: {
                        id: 6,
                        name: 'Logiq',
                    },
                    issue: {
                        id: 2,
                        type: 'Resistant',
                    },
                    risk: {
                        id:1, 
                        name:'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 2,
                        type: 'In Progress'
                    }
                },        
                {
                    id:'detail7', 
                    company: {
                        id: 7,
                        name: 'Salesintel',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id:1, 
                        name:'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 2,
                        type: 'In Progress'
                    }
                },         
                {
                    id:'detail8', 
                    company: {
                        id: 8,
                        name: 'UpLead',
                    },
                    issue: {
                        id: 2,
                        type: 'Resistant',
                    },
                    risk: {
                        id:1, 
                        name:'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 2,
                        type: 'In Progress'
                    }
                },    
                {
                    id:'detail9', 
                    company: {
                        id: 9,
                        name: 'VenPath',
                    },
                    issue: {
                        id: 3,
                        type: 'Inconsistent',
                    },
                    risk: {
                        id:1, 
                        name:'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id:'detail10', 
                    company: {
                        id: 10,
                        name: 'Yasni',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id:1, 
                        name:'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 2,
                        type: 'In Progress'
                    }
                }, 
                {
                    id:'detail11', 
                    company: {
                        id: 11,
                        name: 'Exactag',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id:2, 
                        name:'Low'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 2,
                        type: 'In Progress'
                    }
                },   
                {
                    id:'detail12', 
                    company: {
                        id: 12,
                        name: 'Ernes',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id:2, 
                        name:'Low'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!', 
                    status:{
                        id: 2,
                        type: 'In Progress'
                    }
                },       
            ],
            dropdownVisible: [],
            infoVisible: [],
        }
    },
    methods: {
        toggleDropdown(index) {
      // Initialize the visibility array if it's not already initialized
      if (!this.dropdownVisible.length) {
        this.dropdownVisible = new Array(this.details.length).fill(false);
      }

      // Toggle the specific dropdown
      this.dropdownVisible = this.dropdownVisible.map((visible, i) => 
        i === index ? !visible : false
      );
    },

    toggleInfo(index) {
      // Initialize the visibility array if it's not already initialized
      if (!this.infoVisible.length) {
        this.infoVisible = new Array(this.details.length).fill(false);
      }

      // Toggle the specific info visibility
      this.infoVisible = this.infoVisible.map((visible, i) => 
        i === index ? !visible : visible
      );
    },

    editDetail(detail) {
      // Handle edit logic here
      console.log("Edit detail:", detail);
    },
    deleteDetail(id) {
      // Handle delete logic here
      console.log("Delete detail with id:", id);
    },
  },
};
</script>

  
<style scoped>
* {
    box-sizing: border-box;
    color: var(--text-color);
}

.table{
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
}

.table-header, .table-body{
    display: flex;
    padding: 10px;
    width: 100%; 
    align-items: center;
    background-color: var(--background-color); 
    margin-bottom: 10px;
}

.table-body{


}

.dropdown-menu {
  position: absolute;
 margin-top: 150px;
 margin-right: 60px;
  background-color: var(--background-color); 
  padding: 14px 12px;
  z-index: 10;
  width: 14% !important;
  border-radius: 10px;
}
 
 

.dropdown-button{
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100% !important;

}

.dropdown-button-edit{
    margin-bottom: 10px; 
}

.dropdown-icon {
    width: 18px !important;
    height: 18px !important;
}

.dropdown-icon img{
    width: 100%;
}

.table-body-wrapper{
    position: relative
}

.dropdown-action{
    width: 100px;
    height: 50px;
    position: absolute;
    background-color: rgb(126, 118, 118);
}

.table-header div,
.table-body div{
    width: 18%; 
    text-align: center; 
}


.action-body{
    padding: 6px;
    background-color: white;
    cursor: pointer;
    border-radius: 4px;
}

 
.arrow-header, .action-header,
.arrow-body, .action-body{
    width: 3% !important;
    display: flex;
    align-items: center;
    justify-content: center;
}
 
 
.arrow-body img,
.action-body img{
    width: 100%; 
    cursor: pointer;
}

.requests-header,
.requests-body{
    width: 18% !important; 
}

.company-header,
.company-body{
    width: 23% !important; 
}


  
</style>
