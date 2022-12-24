<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "form-button"
}
</script>

<style scoped>
  .button{
    padding: 7px 25px;
    font-size: 1.3rem;
    border-radius: 10px;
  }
</style>