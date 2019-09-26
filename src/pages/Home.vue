<template>
  <div class="main-container">
    <div class="main-container__filter" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
   
  },
  data() {
    return {
      inputValue: ''
    };
  },
}
</script>

<style scoped lang="scss">
.main-container {
  max-width: 980px;
  margin: 0 auto;
  padding: 10px 0px;
  text-align: center;
  flex: 1 0 auto;

  &__filter {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 1rem;
    margin-top: 1rem;

    @media screen and (max-width: $medium) {
      align-items: center;
    }
  }
}
</style>
