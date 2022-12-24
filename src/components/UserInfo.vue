<template>
  <tr>

    <td @click.stop="selectBox"><form-check-box-selection v-model="selected"  @change="selectUser" class="box" @click.stop/></td>
    <td>{{user.email}}</td>
    <td>{{user.password}}</td>
    <td>{{user.tel}}</td>
    <td>{{user.name}}</td>
    <td>{{user.sName}}</td>
    <td>{{user.mName}}</td>
    <td>{{user.birth}}</td>
    <td>{{user.group}}</td>
    <td>{{user.gender}}</td>
  </tr>
</template>

<script>
export default {
  name: "UserInfo",
  components: {},
  data(){
    return{
      selected: false,
    }
  },
  props:{
    user:{
      type:Object,
      required:true
    },
  },
  methods:{
    selectUser(event){
      this.markUser(event.target)
      console.log(11)
    },
    selectBox(event){
      let element = event.target.firstElementChild
      element.checked = !element.checked
      this.markUser(element)
    },
    markUser(input){
      this.$emit("mark", this.user, input)
    }
  }
}
</script>

<style scoped>
  td{
    border: 2px solid greenyellow;
    border-radius: 10px;
    padding: 7px;
  }
  .box{
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }
</style>