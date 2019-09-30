<template>
  <div class="wrapper-login-form-btn">
    <button
      :disabled="disabled"
      type="submit"
      :class="{
        'form-btn': true,
        'form-btn--ready': ready
      }"
    >
      <span>{{ text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ready: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
button {
	outline: none !important;
	border: none;
	background: transparent;
}

button:hover {
	cursor: pointer;
}

.wrapper-login-form-btn {
  max-width: 300px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}

.form-btn {
  font-weight: bold;
  font-size: 15px;
  line-height: 1.5;
  color: #337ca7;
  width: 100%;
  height: 42px;
  border: solid 1px #337ca7;
  border-radius: 5px;
  background: transparent;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  &--ready {
    color: $black;
    background: $primary-yellow;
    border: solid 1px $secundary-yellow;
  }
}

button:disabled {
  background: #d2d2d3;
  color: #a7a7a7;
  cursor: not-allowed;
  border: solid 1px #a7a7a7;
}
</style>