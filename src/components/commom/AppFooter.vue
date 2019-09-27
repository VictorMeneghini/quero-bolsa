<template>
  <footer class="footer">
    <div class="footer__info">
      <div class="footer__info__content">
        <div class="footer__info__content__item">
          <img
            svg-inline
            src="@/assets/svg/whatsapp.svg"
            alt="example"
          >
          <div class="header__content__info__contact__message">
            <p>0800 123 2222</p>
            <small>Seg - Sex 8h-22h</small>
          </div>
        </div>
        <div class="footer__info__content__item">
          <img
            svg-inline
            src="@/assets/svg/chat.svg"
            alt="example"
          >
          <div class="header__content__info__contact__message">
            <p>Chat ao vivo</p>
            <small>Seg - Sex 8h-22h</small>
          </div>
        </div>
        <div class="footer__info__content__item">
          <img
            svg-inline
            src="@/assets/svg/message.svg"
            alt="example"
          >
          <div class="header__content__info__contact__message">
            <p>Mande um e-mail</p>
            <small>Respondemos rapidinho</small>
          </div>
        </div>
        <div class="footer__info__content__item">
          <img
            svg-inline
            src="@/assets/svg/info.svg"
            alt="example"
          >
          <div class="header__content__info__contact__message">
            <p>Central de ajuda</p>
            <small>Encontre todas as respostas</small>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__made">
      <h4>Feito com amor por VictorMeneghini</h4>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: $primary-blue;
  flex-shrink: 0;
  color: white;

  p, small {
    font-weight: bold;
  }

  svg {
    fill: $white;
    margin: 0 1rem;
  }
  
  &__info {
    width: 100%;
    background: $secundary-blue;
    
    &__content {
      margin: 0 auto;
      max-width: 1200px;
      display: grid;
      width: 100%;
      grid-template-columns: 25% 25% 25% 25%;

      &__item {
        color: white;
        padding: 2rem 1rem;
        flex-grow: 2;
        display: flex;
        align-items: center;
      }
    }
  }

  &__made {
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: center;
  }
}
</style>