<template>
  <select class="select" :value="modelValue" @change="setGroup">
    <option value=""  disabled >Group</option>
    <option
        v-for="option in options"
        :value="option"
        :key="option"
    >{{option}}</option>
  </select>
</template>

<script>
export default {
  name: "FormSelection",
  props: {
    options: {
      type: Array,
      default: () => {
      },
    },
    modelValue:{
      type:String
    }
  },
  methods:{
    setGroup(event){
      this.$emit("update:modelValue", event.target.value)
    }
  }

}

</script>

<style scoped>
.select{
  padding: 5px 10px;
  font-size: 1.3rem;
  border: 2px solid forestgreen;
  border-radius: 10px;
  width: 100%;
}
</style>