<template>
  <div class="customCheckbox">
    <div class="row">
      <input
        :id="labelIndentifier"
        v-model="value"
        type="checkbox"
      >
      <label :for="labelIndentifier">
        <span v-show="showLabel"> {{ labelIndentifier }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxComponent',
  props: {
    showLabel: {
      type: Boolean,
      default: true,
    },
    labelIndentifier: {
      type: String || Number,
      default: ''
    }
  },
  data() {
    return {
      value: false
    }
  },
  watch: {
    value() {      
      this.$emit('checkedValue', this.value);
    }
  }

}
</script>

<style lang="scss">
.customCheckbox input[type="checkbox"] {
  position: absolute;
  left: -9999px;
}

.customCheckbox input[type="checkbox"]+label {
  margin-right: 1rem;
  position: relative;
  padding: 1px 0 0 30px;
  cursor: pointer;
}

.customCheckbox input[type="checkbox"]+label:before {
  content: '';
  background: #fff;
  border: 1px solid $black;
  border-radius: 3px;
  height: 15px;
  width: 15px;
  position: absolute;
  top: 0;
  left: 0;
}

.customCheckbox input[type="checkbox"]:checked+label:before {
  content: '';
  border: 2px solid $primary-blue;
  background: $primary-blue;  
}

.customCheckbox input[type="checkbox"]+label:after {
  content: '';
  border-style: solid;
  border-width: 0 0 2px 2px;
  border-color: white;
  width: 7px;
  height: 5px;
  position: absolute;
  top: 6px;
  left: 5px;
  opacity: 0;
  transform: scale(2) rotate(-45deg);
  transition: transform 0.3s linear, opacity 0.3s linear;
}

.customCheckbox input[type="checkbox"]:checked+label:after {
  opacity: 1;
  transform: scale(1) rotate(-45deg);
}
</style>