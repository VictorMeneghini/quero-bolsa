<template>
  <div class="home">
    <div class="home__container">
      <h1>Bolsas favoritas</h1>
      <p>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</p>
      <br>
      <br>
      <scholarship-card @clicked="handleModal()" />
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
      openModal: false
    };
  },
  methods: {
    handleModal() {
     this.openModal = !this.openModal
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  flex: 1 0 auto;

  &__container {
    max-width: 1200px;
    margin: 2rem auto;
  }
}
</style>
