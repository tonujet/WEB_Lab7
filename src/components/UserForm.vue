<template>
  <div>
    <h2 class="title">Registration</h2>
    <form class="form" @submit.prevent>
      <div class="field">
        <form-input
            class="input"
            v-model.trim="user.email"
            type="text"
            placeholder="Email"
        />
        <div class="error" v-if="errorMessages.email">
          {{errorMessages.email}}
        </div>
      </div>
      <div class="field">
        <form-input
            class="input"
            v-model.trim="user.password"
            type="password"
            placeholder="Password"
        />
        <div class="error" v-if="errorMessages.password">
          {{errorMessages.password}}
        </div>
      </div>
      <div class="field">
        <form-input
            class="input"
            v-model.trim="user.tel"
            v-mask="'+38(0##) ###-##-##'"
            placeholder="+38(0__)___-__-__"
        />
        <div class="error" v-if="errorMessages.tel">
          {{errorMessages.tel}}
        </div>
      </div>
      <div class="field">
        <form-input
            class="input"
            v-model.trim="user.name"
            type="text"
            placeholder="Name"
        />
        <div class="error" v-if="errorMessages.name">
          {{errorMessages.name}}
        </div>
      </div>
      <div class="field">
        <form-input
            class="input"
            v-model.trim="user.sName"
            type="text"
            placeholder="Surname"
        />
        <div class="error" v-if="Boolean(errorMessages.sName)">
          {{errorMessages.sName}}
        </div>
      </div>
      <div class="field">
        <form-input
            class="input"
            v-model.trim="user.mName"
            type="text"
            placeholder="Middle name"
        />
        <div class="error" v-if="errorMessages.mName">
          {{errorMessages.mName}}
        </div>
      </div>
      <div class="field">
        <form-input
            class="input"
            v-model.trim="user.birth"
            type="date"
            placeholder="date"
        />
        <div class="error" v-if="errorMessages.birth">
          {{errorMessages.birth}}
        </div>
      </div>
      <div class="field">
        <form-selection
            class="input"
            v-model="user.group"
            :options="options"
        />
        <div class="error" v-if="errorMessages.group">
          {{errorMessages.group}}
        </div>
      </div>
      <div class="field radio__field">
        <div class="field__item">
          <form-input
              type="radio"
              name="gender"
              class="radio"
              v-model="user.gender"
              placeholder="gender"
              value="male"
              id="male"
              checked

          />
          <label class="radio__label" for="male">Male</label>
        </div>
        <div class="field__item">
          <form-input
              type="radio"
              name="gender"
              class="radio"
              value="female"
              v-model="user.gender"
              placeholder="gender"
              id="female"
          />
          <label class="radio__label" for="female">Female</label>
        </div>
        <div class="error rafio__error" v-if="errorMessages.gender">
          {{errorMessages.gender}}
        </div>
      </div>
      <form-button class="button" @click="addUser">Register</form-button>
    </form>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import {selectHandler} from '@/Handler/';
import {selectSubmitHandler} from '@/Handler/';


export default {
  name: "UserForm",
  components: {},
  directives: {
    mask
  },
  data() {
    return {
      user: {
        id: "",
        email: "",
        password: "",
        tel: "",
        name: "",
        sName: "",
        mName: "",
        birth: "",
        group: "",
        gender: "male"
      },
      errorMessages:{
        email: "",
        password: "",
        tel: "",
        name: "",
        sName: "",
        mName: "",
        birth: "",
        group: "",
        gender: ""
      },
      options: ["ІА-11", "ІА-12", "ІА-13", "ІА-14"],
    }

  },
  methods: {
    addUser() {
      if(this.validateForm()){
        return
      }
      this.user.id = Date.now()
      this.$emit("add", this.user)
      this.user = {
        id: "", email: "", password: "", tel: "", name: "",
        sName: "", mName: "", birth: "", group: "", gender: this.user.gender
      }
    },

    validateForm(){
      let errorFlag = false
      for (const param in this.errorMessages) {
        let error = selectSubmitHandler(param, this.user[param])
        if(error){
          this.errorMessages[param] = error
          errorFlag = true
        }
      }
      return errorFlag
    }
  },
  watch: {
    user: {
      handler(e) {
        for (const param in this.errorMessages) {
          this.errorMessages[param] = selectHandler(param, e[param], this.errorMessages[param])
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
}

.button {
  align-self: flex-end;
  background: green;
  color: white;
  border: 1px solid darkgreen;
  box-shadow: 0 5px 0px lightgrey;
  transition: 0.3s;
}
.button:hover{
  background: darkgreen;
}
.button:active{
  transform: translate(0, 2px);
  box-shadow: 0 3px 1px grey;

}

.input{

}
.radio__field{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

}

.field{
  width: 100%;
  margin-bottom: 15px;

}
.field__item{
  margin-bottom: 5px;
}

.radio{
  align-self: flex-start;
  width: 30px;
  height: 30px;
}
.radio__label{
  display: block;
  text-align: center;
  font-size: 1.4rem;
}
.rafio__error{
  flex: 1 1 100%;
  width: 100px;
  text-align: center;
}

.title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  color: darkslategray;
}

.error {
  color: red;
  font-size: 1.2rem;
  border-bottom: 1px solid red;
  display: inline-block;
  margin-left: 15px;
}


</style>