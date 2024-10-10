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
                        <div v-if="dropdownVisible[index]" class="dropdown-menu" ref="dropdownMenu">
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
                    <!-- <p>{{ detail.info }}</p> -->
                    <div class="detail-element">
                        <p class="detail-element-tile">Anforderungsstatus</p>
                        
                        <p class="detail-element-info">Sie wurden zur Sperrliste des Datenbrokers hinzugefügt. Dies bedeutet, dass dieser keine Informationen über Sie mehr sammelt, weitergibt oder speichert.</p>
                    </div> 

                    <div class="detail-element">
                        <p class="detail-element-tile">Status</p>

                        <div class="request-status-wrapper">
                            <!-- <svg height="10" width="100%" style="position: absolute; top: 50%; left: 0; z-index: 0;">
                                <defs>
                                    <linearGradient :id="'statusGradient-'" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" :stop-color="detail.status.id >= 1 ? 'orange' : 'grey'" />
                <stop offset="33%" :stop-color="detail.status.id >= 2 ? '#466AF7' : 'grey'" />
                <stop offset="66%" :stop-color="detail.status.id >= 3 ? '#FF003C' : 'grey'" />
                <stop offset="100%" :stop-color="detail.status.id >= 4 ? '#65B12F' : 'grey'" />
                                    </linearGradient>
                                </defs>
                                <line x1="0" y1="5" x2="100%" y2="5" :stroke="'url(#statusGradient-'" stroke-width="4" />
                            </svg> -->

                            <svg height="10" width="100%" style="position: absolute; top: 45%; left: 0; z-index: 0;">
        <line x1="0" y1="5" x2="100%" y2="5" stroke="grey" stroke-width="4" />
    </svg>

    <!-- The colored progress line -->
    <!-- <svg height="10" width="100%" style="position: absolute; top: 45%; left: 0; z-index: 0;">
        <line x1="0" y1="5" :x2="`${(detail.status.id / 4) * 100}%`" y2="5" :stroke="progressColor(detail.status.id)" stroke-width="4" />
    </svg> -->

    <svg height="10" width="100%" style="position: absolute; top: 45%; left: 0; z-index: 0;">
        <line x1="0" y1="5" :x2="`${(detail.status.id / 4) * 100}%`" y2="5" stroke="green" stroke-width="4" />
    </svg>

                            <p :class="['request-status', detail.status.id >= 1 ? 'completed-status' : 'grey-status']">
                                Requested
                            </p>
                            <p :class="['request-status', detail.status.id >= 2 ? 'completed-status' : 'grey-status']">
                                Answer
                            </p>
                            <p :class="['request-status', detail.status.id >= 3 ? 'completed-status' : 'grey-status']">
                                Apply Delete
                            </p>
                            <p :class="['request-status', detail.status.id >= 4 ? 'completed-status' : 'grey-status']">
                                Completed
                            </p>
                        </div>

                    </div>

                     
                    <div class="detail-element"> 
                        <p class="detail-element-tile">Allgemeine Statistiken</p>

                        <div class="detail-flex-wrapper">
                            <div>
                                <p class="detail-element-info">Letzte Anfrage gesendet </p>
                                <p class="detail-element-info">26. November 2023</p>
                            </div>

                            <div>
                                <p class="detail-element-info">Letzte Anfrage abgeschlossen </p>
                                <p class="detail-element-info">27. November 2023</p>
                            </div>
                        </div>
                    </div>
                     
                    <div class="detail-element">
                        <p class="detail-element-tile">Über Bookyourdata </p>

                        <p class="detail-element-info">Verkauft verifizierte und zielgerichtete Business-to-Business-E-Mail-Listen von Personen in den USA, Großbritannien, Kanada, Europa und Asien, die auf die Bedürfnisse der Kunden zugeschnitten sind. Die Daten umfassen E-Mail-Adressen, Telefonnummern, Postanschriften, Berufsbezeichnung, Abteilung, Branche und mehr.</p>
                    </div> 
                   
                    <div class="detail-element">
                        <p class="detail-element-tile">Verbundene Risiken </p>
                        
                        <div class="detail-flex-wrapper info-tags-wrapper">
                            <div>
                                <p class="detail-element-info detail-tag-info">Identitätsdiebstahl</p>
                            </div>
                            <div>
                                <p class="detail-element-info detail-tag-info">Spammails und-anrufe</p>
                            </div>
                            <div>
                                <p class="detail-element-info detail-tag-info">Datenlecks</p>
                            </div>
                            <div>
                                <p class="detail-element-info detail-tag-info">Zielgerichtete Werbung</p>
                            </div>
                        </div>
                    </div>
                    
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
                    requests: 0,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 4,
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
                        type: 'Answer'
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
                    requests: 1,
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo temporibus rerum officiis, veritatis quisquam eveniet dolores iure dicta numquam est fugit quaerat quae quasi eligendi, exercitationem corporis neque quos!',
                    status: {
                        id: 3,
                        type: 'Apply Delete'
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
                        type: 'Requested'
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
                        type: 'Answer'
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
                        type: 'Answer'
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
                        type: 'Answer'
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
                        type: 'Answer'
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
                        type: 'Answer'
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
                        type: 'Answer'
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
                        type: 'Answer'
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
                        type: 'Answer'
                    }
                },
            ],
            dropdownVisible: [],
            infoVisible: [],
        }
    },
    methods: {
        progressColor(status) {
            switch (status) {
                case 1:
                return 'orange';
                case 2:
                return '#466AF7';
                case 3:
                return '#FF003C';
                case 4:
                return '#65B12F';
                default:
                return 'grey';
            }
        },

        toggleDropdown(index) {
            if (!this.dropdownVisible.length) {
                this.dropdownVisible = new Array(this.details.length).fill(false);
            }
 
            this.dropdownVisible = this.dropdownVisible.map((visible, i) =>
                i === index ? !visible : false
            );
 
            if (this.dropdownVisible[index]) {
                document.addEventListener('click', this.handleClickOutside);
            } else {
                document.removeEventListener('click', this.handleClickOutside);
            }
        },

        handleClickOutside(event) {
            if (!event.target.closest('.action-body')) { 
                this.dropdownVisible = this.dropdownVisible.map(() => false);
                document.removeEventListener('click', this.handleClickOutside);  
            }
        },

        toggleInfo(index) { 
            if (!this.infoVisible.length) {
                this.infoVisible = new Array(this.details.length).fill(false);
            }
 
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
    beforeUnmount() { 
        document.removeEventListener('click', this.handleClickOutside);
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

    background-color: orange;
}
.status-type-2{ 
    background-color: #466AF7;
}
.status-type-3{ 
  background-color: #FF003C;
}

.status-type-4{ 
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

.detail-element{
    margin-bottom: 40px; 
}

.detail-element:last-child{
    margin: 0;
}

.detail-element-tile{
    margin-bottom: 10px;
    font-weight: bold
}

.detail-element-info{
    font-size: 14px !important;
}

.detail-flex-wrapper{
    display: flex;
    gap: 5em;
    margin-top: 20px;
}

.info-tags-wrapper{
    gap: 3em;
}

.detail-tag-info{
    padding: 5px 10px; 
    background-color: #d1d1ff;
    border-radius: 5px;
}

[data-theme="dark"] .detail-tag-info{ 
    background-color: #1A1D21; 
}

.request-status-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 0;
    position: relative;
}

.request-status{
    border: 2px solid;
    border-radius: 5px;
    padding: 10px 0;
    width: 120px;
    text-align: center;
    font-size: 14px !important; 
    z-index: 3;
    background-color: #212529 !important;
}

.requested-status{
    color: orange;
}

.answer-status{
    color: #466AF7;;
}

.apply-delete-status{
    color: #FF003C;
}

.completed-status{
    color: #65B12F;
}
.grey-status {
    color: grey;
    border-color: grey;
}


/* .request-status-wrapper::before {
    content: "";
    position: absolute;
    top: 50%;  
    left: 0;
    right: 0;
    height: 4px;  
    background: linear-gradient(to right, orange, #466AF7, #FF003C, #65B12F);
    z-index: 2;  
} */


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
