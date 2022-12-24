<template>
  <input class="input" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: "form-input",
  props:{
    modelValue: [String, Number],
  },
  methods:{
    updateInput(event){
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style scoped>
  .input{
    padding: 5px 10px;
    font-size: 1.3rem;
    border: 2px solid forestgreen;
    border-radius: 10px;
    width: 100%;

  }
</style>