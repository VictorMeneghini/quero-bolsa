<template>
  <header class="header">
    <div class="header__content">
      <div class="header__content__info">
        <div class="header__content__info__about">
          <img
            src="@/assets/svg/info.svg"
            alt="whatsapp"
          >
          <span>Como funciona</span>
        </div>
        <div class="header__content__info__contact">
          <img
            src="@/assets/svg/whatsapp.svg"
            alt="whatsapp"
          >
          <div class="header__content__info__contact__message">
            <span>0800 123 2222</span>
            <small>Envie mensagem ou ligue</small>
          </div>
        </div>
      </div>
      <div class="header__content__logo">
        <div class="header__content__logo__image">
          <img
            src="@/assets/svg/logo-querobolsa.svg"
            alt="logo-querobolsa"
          >
        </div>
      </div>
      <div class="header__content__user">
        <span>Nome Sobrenome</span>
        <img
          src="@/assets/svg/user.svg"
          alt="whatsapp"
        >
      </div>
    </div>
    <nav class="header__nav">
      <ul class="header__nav__content">
        <li>Minha conta</li>
        <li>Pré-matrículas</li>
        <li class="header__nav__content__item-activate">
          Bolsas favoritas
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'AppHeader',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__content {
    max-width: 1200px;
    background-color: $grey;
    padding: 0 1rem;
    padding: 1rem 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 40% 20% 40%;
    justify-content: space-between;
    color: $secundary-blue;

    &__info {
      
      display: flex;
      flex-grow: 1;
      justify-content: space-between;

      &__about {
        display: flex;
        align-items: center;
        border-right: solid 3px #eeefef;
        margin-right: .5rem;
        
        span {
          margin: 0 .5rem;
        }
      }

      &__contact {
        flex-grow: 2;
        display: flex;
        align-items: center;

        &__message {
          margin: 0 1rem;
          display: flex;
          flex-direction: column;
        }
      }
    }

    &__logo {
      display: flex;
      justify-content: center;
      align-items: center;

      &__image {
        width: 140px;
      }

      img {
        width: 100%;
      }
    }

    &__user {
      display: flex;
      flex-grow: 1;
      align-items: center;
      justify-content: flex-end;

      img {
        margin: 1rem;
      }
    }
  }

  &__nav {
    width: 100%;
    background: $primary-blue;

    &__content {
      max-width: 1200px;
      margin: 0 auto;
      list-style: none;
      display: flex;
      color: #fff;

      &__item-activate {
        background: $secundary-blue;
      }

      li {
        padding: .5rem 1rem;
        cursor: pointer;
      }

      li:first-child {
        padding-left: 0;
      }
    }
  }
}
</style>
