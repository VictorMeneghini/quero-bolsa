<template>
  <transition name="bh-modal-fade">
    <div
      v-show="open"
      ref="modal"
      class="bh-modal"
    >
      <div>
        <div class="bh-modal__header">
          <div class="">
            <img
              svg-inline
              src="@/assets/svg/close.svg"
              alt="example"
            >
          </div>
        </div>
        <div class="bh-modal__content">
          <h2>Adicionar bolsa</h2> 
          <p>Filtre e adicione as bolsas de seu interesse.</p>
          <br><br>
          <div class="asd">
            <div>
              <p>selecione sua cidade</p>
              <select-component />
            </div>
            <div>
              <p>selecione sua cidade</p>
              <select-component />
              <checkbox-component />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SelectComponent from '@/components/SelectComponent'
import CheckboxComponent from '@/components/CheckboxComponent'

export default {
  name: 'Modal',
  components: {
    SelectComponent,
    CheckboxComponent
  },
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    
  },
  methods: {
  },
};
</script>

<style lang="scss">
.asd {
  display: flex;
  justify-content: space-between;

}

.bh {
  &-modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    padding: .5rem;
    overflow: auto;
    background-color: $rgba-overlay-color;

    &__header {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;   

      svg {
        fill: $white;
        height: 1rem;
        width: 1rem;
        cursor: pointer;
      }
      &__close-button {
        background: none;
        border: none;
        outline: none;
      }
    }

    &__content {
      max-width: 800px;
      margin: 1rem auto;
      // display: flex;
      padding: 2rem;
      // flex-direction: row;
      background-color: white;
      border: 1px solid grey;
    }
    
    &-fade-enter-active,
    &-fade-leave-active {
      transition: opacity .5s;
    }
    &-fade-enter,
    &-fade-leave-to {
      opacity: 0;
    }
  }
}
</style>