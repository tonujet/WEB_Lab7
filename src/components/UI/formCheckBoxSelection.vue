<template>
  <input type="checkbox" @input="updateCheckBox" :checked="modelValue" >
</template>

<script>
export default {
  name: "formCheckBoxSelection",
  props:{
    modelValue: {
      type: Boolean,
    }
  },
  methods:{
    updateCheckBox(event){
      this.$emit("update:modelValue", event.target.checked)
    }
  }
}
</script>

<style scoped>

</style>