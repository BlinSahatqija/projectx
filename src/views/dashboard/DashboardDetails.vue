<template>

<div class="table-wrapper" style="width: 100%; overflow: auto;">
    <div class="table">
        <div class="table-header">
            <div class="arrow-header"></div>
            <div class="company-header">
                <p>Company</p>
            </div>
            <div class="issue-header">
                <p>Issue</p>
            </div>
            <div class="risk-header">
                <p>Risk</p>
            </div>
            <div class="requests-header">
                <p>Requests sent</p>
            </div>
            <div class="status-header">
                <p>Status</p>
            </div>
            <div class="action-header"></div>
        </div>
        <div class="table-body-wrapper">
            <div v-for="(detail, index) in details" :key="detail.id" class="table-row">
                <div class="table-body">
                    <div class="arrow-body" @click="toggleInfo(index)">
                        <img src="../../assets/icons/arrow-down.svg" alt="arrow down">
                    </div>
                    <div class="company-body">
                        <p>{{ detail.company.name }}</p>
                    </div>
                    <div class="issue-body">
                        <p>{{ detail.issue.type }}</p>
                    </div>
                     
                    <div class="risk-body"> 
                        <div class="risk-img">
                            <img v-if="detail.risk.id == 2" src="../../assets/icons/emoji-blue.svg">
                            <img v-if="detail.risk.id == 1" src="../../assets/icons/emoji-orange.svg">
                            <img v-if="detail.risk.id == 3" src="../../assets/icons/emoji-red.svg">
                        </div>
                    </div>
                    <div class="requests-body">
                        <p v-if="detail.requests !== 0">{{ detail.requests }}</p>
                         
                        <div v-else class="risk-img">
                            <img src="../../assets/icons/checkmark-circle.svg"> 
                        </div>
                    </div>
                    <div class="status-body">
                        <p 
                            class="status" 
                            :class="`status-type-${detail.status.id}`"
                        >
                            {{ detail.status.type }}
                        </p>
                    </div>
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
                <div v-if="infoVisible[index]" class="table-body-details">
                    <p>{{ detail.info }}</p>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            details: [{
                    id: 'detail1',
                    company: {
                        id: 1,
                        name: 'Fetcher',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id: 3,
                        name: 'High'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 1,
                        type: 'Completed'
                    }
                },
                {
                    id: 'detail2',
                    company: {
                        id: 2,
                        name: 'Viewport',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id: 1,
                        name: 'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id: 'detail3',
                    company: {
                        id: 3,
                        name: 'Intalytics / Kalibrate',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id: 1,
                        name: 'Medium'
                    },
                    requests: 0,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 3,
                        type: 'Surpressed'
                    }
                },
                {
                    id: 'detail4',
                    company: {
                        id: 4,
                        name: 'Liveintent',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id: 1,
                        name: 'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 1,
                        type: 'Completed'
                    }
                },
                {
                    id: 'detail5',
                    company: {
                        id: 5,
                        name: 'MaxMind',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id: 2,
                        name: 'Low'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id: 'detail6',
                    company: {
                        id: 6,
                        name: 'Logiq',
                    },
                    issue: {
                        id: 2,
                        type: 'Resistant',
                    },
                    risk: {
                        id: 1,
                        name: 'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id: 'detail7',
                    company: {
                        id: 7,
                        name: 'Salesintel',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id: 1,
                        name: 'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id: 'detail8',
                    company: {
                        id: 8,
                        name: 'UpLead',
                    },
                    issue: {
                        id: 2,
                        type: 'Resistant',
                    },
                    risk: {
                        id: 1,
                        name: 'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id: 'detail9',
                    company: {
                        id: 9,
                        name: 'VenPath',
                    },
                    issue: {
                        id: 3,
                        type: 'Inconsistent',
                    },
                    risk: {
                        id: 1,
                        name: 'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id: 'detail10',
                    company: {
                        id: 10,
                        name: 'Yasni',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id: 1,
                        name: 'Medium'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id: 'detail11',
                    company: {
                        id: 11,
                        name: 'Exactag',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id: 2,
                        name: 'Low'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 2,
                        type: 'In Progress'
                    }
                },
                {
                    id: 'detail12',
                    company: {
                        id: 12,
                        name: 'Ernes',
                    },
                    issue: {
                        id: 1,
                        type: 'Complaint',
                    },
                    risk: {
                        id: 2,
                        name: 'Low'
                    },
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
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

.risk-img{
    height: 28px !important;
    width: 28px !important;
}

.risk-img img{
    width: 100%;
}

.table-body-details{
    padding: 14px; 
    font-size: 14px;
    margin: 15px 0; 
    background-color: #ebebed;
    border-radius: 10px;
}

.risk-body, .requests-body, .status-body{
    display: flex;
    align-items: center;
    justify-content: center;
}

.status{ 
    width: 120px;
    padding: 8px 0;
    border-radius: 10px;
    color: white ;
    font-size: 12px !important;
    font-weight: 600;
}

.status-type-1{ 

  background-color: #466AF7;
}
.status-type-2{ 
    background-color: orange;
}
.status-type-3{ 
  background-color: #65B12F;
}

* {
    box-sizing: border-box;
    color: var(--text-color);
}

.table {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
}

.table-header,
.table-body {
    display: flex;
    padding: 10px;
    width: 100%;
    align-items: center;
    background-color: var(--background-color);
    margin-bottom: 10px;
    border-radius: 10px;
}

.table-header{
    padding:15px 10px;
}

.table-body { 
    margin-bottom: 0px;
}

.table-header {
    background-color: #212529;

}

[data-theme="dark"] .table-header,
[data-theme="dark"] .table-body,
[data-theme="dark"] .table-body-details {
    background-color: #212529 !important;
}

[data-theme="dark"] .card-value {
    border-color: var(--primary-border-color);
    ;
}

.table-header p {
    font-size: 18px;
    color: white !important;
}

.table-row{
    margin-bottom: 10px;
}

.table-body p,
.table-body-details p {
    font-size: 16px;
}

.dropdown-menu {
    position: absolute;
    margin-top: 150px;
    margin-right: 60px;
    background-color: #292E32;
    padding: 14px 12px;
    z-index: 10;
    width: 14% !important;
    border-radius: 10px;
}

.action-body {
    background-color: #F3F3F9 !important;
}

/* [data-theme="dark"] .dropdown-menu, */
[data-theme="dark"] .action-body {
    background-color: #1A1D21 !important;
}



[data-theme="dark"] .action-body img{
    filter: brightness(0) invert(1);
}

[data-theme="dark"] .action-body:hover img,
[data-theme="dark"] .arrow-body img,
.dropdown-button:hover .dropdown-icon {
    filter: brightness(0) saturate(100%) invert(44%) sepia(69%) saturate(5587%) hue-rotate(327deg) brightness(107%) contrast(101%);
}

.dropdown-button:hover p {
    color: #ff3a67 !important;
}

.dropdown-button {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100% !important;

}

.dropdown-button p{
    color: white;
}

.dropdown-button img{
    filter: brightness(0) invert(1);
}

.dropdown-button-edit {
    margin-bottom: 10px;
}

.dropdown-icon {
    width: 18px !important;
    height: 18px !important;
}

.dropdown-icon img {
    width: 100%;
}

.table-body-wrapper {
    position: relative
}

.dropdown-action {
    width: 100px;
    height: 50px;
    position: absolute;
    background-color: rgb(126, 118, 118);
}

.table-header div,
.table-body div {
    width: 18%;
    text-align: center;
}

.action-body {
    padding: 6px; 
    cursor: pointer;
    border-radius: 4px;
    transition: 0.3s ease;
}

.arrow-header,
.action-header,
.arrow-body,
.action-body {
    width: 3% !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow-body img,
.action-body img {
    width: 100%;
    cursor: pointer;
}

.requests-header,
.requests-body {
    width: 18% !important;
}

.company-header,
.company-body {
    width: 23% !important;
}

[data-theme="dark"] .dropdown-icon {
    filter: brightness(0) invert(1);
}


/*1680-1080*/
@media(min-width: 1680px) {
    .status  {
        width: 120px; 
        font-size: 14px !important; 
    }
}

/*1640-1080*/
@media(min-width: 1640px) {}

/* 1920-1080 */
@media (min-width: 1920px) {
    .table-header p {
        font-size: 20px;
    }
    .table-body p,
    .table-body-details p {
        font-size: 18px;
    }
}

/* 2304-1440 */
@media (min-width: 2304px) {
    .table {
        width: 92%;
    }

    .table-header p {
        font-size: 24px;
    }
    .table-body p,
    .table-body-details p {
        font-size: 22px;
    }

    .status  {
        width: 140px; 
        font-size: 16px !important; 
    }

    .dropdown-menu { 
        margin-top: 200px;
        margin-right: 100px; 
        padding: 18px 20px;
    }
    .dropdown-button-edit {
        margin-bottom: 16px;
    }
    .dropdown-button {
        gap: 18px;
    }

    .dropdown-icon {
        width: 24px !important;
        height: 24px !important;
    } 
 
}

/*2560-1440*/
@media (min-width: 2560px) {
    .table-header {
        padding: 20px 10px;
    }

    .table-body {
        padding: 12px 10px;
    }

    .risk-img {
        height: 32px !important;
        width: 32px !important;
    }

    .status {
        width: 170px;
        font-size: 18px !important;
    }
}

/*2573-1206*/
@media(min-width: 2573px) {
}

/*3200-1800*/
@media(min-width: 3200px) {
    .table {
        margin-top: 130px;
    }

    .table-header p {
        font-size: 28px;
    }
    .table-body p,
    .table-body-details p {
        font-size: 26px;
    }
    .table-row  {
        margin-bottom: 20px;
    }
    .risk-img {
        height: 40px !important;
        width: 40px !important;
    }
    .status {
        width: 220px;
        font-size: 22px !important;
    }
    .dropdown-menu {
        margin-top: 260px;
        margin-right: 130px;
        padding: 22px 24px;
    }
    .dropdown-button {
        gap: 24px;
    }
    .dropdown-icon {
        width: 28px !important;
        height: 28px !important;
    }

    .arrow-header , .action-header , .arrow-body , .action-body  {
        width: 2.8% !important;
    }
}

/*3360-1890 1695*/
@media(min-width:3360px) {
    
    .table-header p {
        font-size: 32px;
    }
    .table-body p,
    .table-body-details p {
        font-size: 30px;
    }
    .table-row  {
        margin-bottom: 25px;
    }

    .risk-img  {
        height: 44px !important;
        width: 44px !important;
    }

    .status  {
        width: 250px;
        font-size: 26px !important;
    }
}

 
/*my big monitor 1600 - 757 */
@media (max-width: 1600px) {}

/*my small monitor 1536-864*/
@media(max-width:1536px) {}

/* 1440-990 */
@media(max-width:1440px) {}

/*1366-768*/
@media (max-width:1366px) {}

/* 1280-800 */
@media (max-width:1280px) {
    .table  {
        width: 94%; 
        margin-top: 40px;
    }

    .table-header  {
        padding: 12px 10px;
    }

    .table-header p  {
        font-size: 16px;
    }

    .table-body p,
    .table-body-details p {
        font-size: 14px;
    }

    .risk-img  {
        height: 24px !important;
        width: 24px !important;
    }

    .dropdown-icon  {
        width: 16px !important;
        height: 16px !important;
    }
}

/*1134x712*/
@media(max-width:1134px) {
    .arrow-header , .action-header , .arrow-body , .action-body  {
        width: 30px !important;
        height: 30px;
    }

    .status  {
        width: 110px;
        padding: 6px 0;
    }
}

/*1024-768*/
@media (max-width:1024px) {
    .table-header  {
        padding:8px 10px;
    }
}

/* 962x601 */
@media(max-width: 962px) {
    .table-header  {
        padding:6px 10px;
    }
    .table-header p  {
        font-size: 14px; 
    }
    .table-body  {
        padding: 6px 10px;
    }
    .table-body p , .table-body-details p  {
        font-size: 12px;
    }

    .status  {
        width: 100px;
        padding: 6px 0; 
        font-size: 10px !important; 
    }
}

/*834-1112*/
@media(max-width: 834px) {
    .table{
        width: 850px;
        margin: 40px;
    }

    .dropdown-menu { 
        margin-top: 135px;
        margin-right: 100px;   
        width: 18% !important; 
    }

    .risk-img {
        height: 22px !important;
        width: 22px !important;
    }
}

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
    .table {
        margin: 35px 25px;
    }

    .table-body p, .table-body-details p {
        font-size: 14px;
    }
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
