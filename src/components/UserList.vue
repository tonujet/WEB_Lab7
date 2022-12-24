<template>
  <div class="table">
    <h2 class="table__title">Students</h2>
    <div class="table__content">
      <table>
        <tr>
          <th>Selection</th>
          <th>Email</th>
          <th>Password</th>
          <th>Phone number</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Middle name</th>
          <th>Date of birth</th>
          <th>group</th>
          <th>gender</th>
        </tr>
        <user-info
            v-for="user in users"
            :key="user.id"
            :user="user"
            @mark="selectUser"
        />
      </table>
      <form-button @click="duplicateUser"  class="table__button button1" >Duplicate</form-button>
      <form-button @click="deleteUser" class="table__button button2" >Delete</form-button>
    </div>

  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
export default {
  name: "UserList",

  components: {
    UserInfo,
  },

  data(){
    return{
      selectedUsers:[],
      selectedRadioBoxes:[],
    }
  },

  props: {
    users: {
      type: Array,
      required: true,
    }
  },
  methods:{
    deleteUser(){
      this.$emit("delete", this.selectedUsers)
      this.selectedRadioBoxes.forEach(radioBox =>{
        radioBox.checked = false
      })
      this.selectedUsers = []
    },
    duplicateUser(){
      this.$emit("duplicate", this.selectedUsers)
      this.selectedRadioBoxes.forEach(radioBox =>{
        radioBox.checked = false
      })
      this.selectedUsers = []

    },
    selectUser(user, radioBox){
      let flag = radioBox.checked
      if(flag){
        this.selectedUsers.push(user)
        this.selectedRadioBoxes.push(radioBox)
      } else{
        this.selectedUsers = this.selectedUsers.filter(item => item.id !== user.id)
        this.selectedUsers = this.selectedUsers.filter(item => item !== radioBox)

      }
    },
  }
}
</script>

<style scoped>
  .table__title{
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5px;
  }
  .table__content table{
    min-width: 1100px;
    margin: 0 auto 10px;
    font-size: 1.2rem;
  }
  .table__content th {
    border: 2px solid greenyellow;
    border-radius: 10px;
    padding: 12px;
  }
  .table__content th{

  }
  .table__content{
    overflow-x: auto;
    text-align: center;
    margin-bottom: 100px;
  }
  .table__button{
    width: 130px;
    margin: 10px;
    box-shadow: 0 5px 1px grey;
    transition: 0.2s;
  }
  .table__button:active{
    transform: translate(0,2px);
    box-shadow: 0 3px 1px grey;
  }
  .button1{
    background: green;
    color: white;
    border: 3px solid darkgreen;
  }
  .button1:hover{
    background: darkgreen;
  }
  .button2:hover{
    background: darkred;
  }

  .button2{
    background: red;
    color: white ;
    border: 3px solid darkred
  }
</style>