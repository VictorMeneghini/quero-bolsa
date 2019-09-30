<template>
  <div 
    class="scholarship-card"
    @click="$emit('clicked')"
  >
  <div 
    class="scholarship-card__course"
    v-if="course">
    <div class="scholarship-card__course__image">
      <img :src="course.university.logo_url" alt="">
    </div>
    <div class="scholarship-card__course__info">
      <p>{{course.university.name}}</p>
      <p>{{course.course.name}}</p>
    </div>
    <div class="scholarship-card__course__shift">
      <p>{{course.course.kind}} - {{course.course.shift}}</p>
      <p>inicio das aulas em: {{course.start_date}}</p>
    </div>
    <div class="scholarship-card__course__prices">
      <p>mensalidade com o Quero bolsa:</p>
      <s>R$: {{ course.full_price }} </s>
      <p>R$: {{ course.price_with_discount }}</p>
    </div>
    <div class="scholarship-card__course__buttons">
      <button-component />
      <button-component />
    </div>
    
  </div>
  <div 
    class="scholarship-card__new"
    v-else>
    <img 
      svg-inline
      src="@/assets/svg/plus.svg"
      alt="example"
    >
    <div class="scholarship-card__new__text">
      <h3>Adicionar bolsa</h3>
      <p>Clique para adicionar bolsas de cursos do seu interesse</p>
    </div>
  </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent'


export default {
  name: 'ScholarshipCard',
  props: {
    course: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ButtonComponent
  }
}
</script>

<style lang="scss">
.scholarship-card {
  margin: .5rem .5rem;
  background: $white;
  width: 270px;
  height: 500px;
  box-shadow: 0 4px 6px 0 rgba(0,0,0,0.2);

  svg {
    height: 70px;
    width: 70px;    
    fill: $primary-blue;
  }

  &__new {
    height: 100%;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &__text {
      margin: 2rem 0;
    }
  }

  &__course {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__info {
      padding: 1rem .5rem;
    }

    &__shift {
      padding: 1rem .5rem;
    }

    &__price {
      padding: 1rem .5rem;
    }

    &__buttons {
      padding: 1rem .5rem;
      display: flex;
      width: 100%;
      justify-content: center;
    }
    
    &__image {
      margin: 1rem 0;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>