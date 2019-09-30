<template>
  <div 
    class="scholarship-card"
    @click="$emit('clicked')"
  >
    <img 
      svg-inline
      src="@/assets/svg/plus.svg"
      alt="example"
    >
    <div class="scholarship-card__text">
      <h2>Adicionar bolsa</h2>
      <p>Clique para adicionar bolsas de cursos do seu interesse</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScholarshipCard'
}
</script>

<style lang="scss">
.scholarship-card {
  width: 300px;
  height: 500px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  svg {
    height: 70px;
    width: 70px;    
    fill: $primary-blue;
  }

  &__text {
    margin: 2rem 0;
  }
}
</style>