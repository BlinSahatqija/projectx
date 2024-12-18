<template>
            <div class="password-modal">
            <div class="edit-user-element">
                <label class="edit-user-label">Old Password</label>
                <input type="password" class="edit-user-input" placeholder="Old Password">
            </div>
            <div class="edit-user-element">
                <label class="edit-user-label">New Password</label>
                <input type="password" class="edit-user-input" placeholder="New Password">
            </div>

            <button type="button">
                Reset
            </button>
        </div>
</template>
<script>
export default {
    
}
</script>
<style>
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


    .password-modal{
        position: absolute;
        top: 0;
    }
</style>