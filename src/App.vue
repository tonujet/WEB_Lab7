<template>
  <div class="app">
    <user-form
        class="app__form"
        @add="addUser"
    />
    <user-list
        class="app__list"
        :users="users"
        @delete="deleteUsers"
        @duplicate="duplicateUsers"
    />
  </div>
</template>
<script>
import userForm from "@/components/UserForm.vue";
import userList from "@/components/UserList.vue";


export default {
  components: {
    userForm, userList
  },
  data() {
    return {
      users: [
        {
          id: 1, email: "example@rubic.com", password: "1234", tel: "+38(050) 234-44-65", name: "Anton",
          sName: "Vorobei", mName: "Adamovich", birth: "2000-12-12", group: "ІА-11", gender: "Male"
        },
        {
          id: 2, email: "neExample@rubic.com", password: "6789", tel: "+38(012) 321-34-65", name: "Oleg",
          sName: "Koval", mName: "Kovalevich", birth: "2004-12-13", group: "ІА-13", gender: "Female"
        }
      ],

    }
  },
  methods: {
    deleteUsers(users) {
      this.users = this.users.filter(item => !users.includes(item))
    },
    duplicateUsers(users) {
      // for (let i = 0; i < users.length; i++) {
      //   users[i].content = {...users[i].content}
      //   users[]
      //   users[i] = users[i].content
      //   // selectUsers[i].id+=Date.now()
      // }
      users.forEach(user =>{
          user = {...user}
          this.users.push(user)
      })
      console.log(users)
    },
    addUser(user) {
      this.users.push(user)
    },

  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  margin: 5px 10px;
}

.app__form {
  margin-bottom: 30px;
}
</style>