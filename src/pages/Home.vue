<template>
  <div class="home">
    <div class="home__container">
      <div class="home__container__title">
        <h1>Bolsas favoritas</h1>
        <p>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</p>
      </div>
      <div class="home__container__list">
        <scholarship-card @clicked="handleModal()" />
        <div 
          v-for="favoriteCourse in courseList"
          :key="favoriteCourse.uuid">
            <scholarship-card 
            :course="favoriteCourse"
            @clicked="handleModal()" />
        </div>
      </div>
      
      <modal 
        :open.sync="openModal"
        @closed="handleModal()"
      />
    </div>
  </div>
</template>

<script>
import ScholarshipCard from '@/components/ScholarshipCard'
import Modal from '@/components/FormModal'

export default {
  name: 'Home',
  components: {
   ScholarshipCard,
   Modal
  },
  data() {
    return {
      openModal: false,
      courseList: []
    };
  },
  mounted() {
    this.getFavoriteCourses();
  },
  methods: {
    handleModal() {
     this.openModal = !this.openModal
    },
    getFavoriteCourses() {
      this.courseList = JSON.parse(localStorage.getItem("savedData"));
      console.log(this.courseList);
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  flex: 1 0 auto;
  background: $grey;

  &__container {
    max-width: 1200px;
    margin: 2rem auto;

    &__title {
      margin: 3rem 0;
    }

    &__list {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
  }
}
</style>
