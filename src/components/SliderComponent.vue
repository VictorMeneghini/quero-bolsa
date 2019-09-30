<template>
  <div class="slidecontainer">
    <p>{{ valueMessage }}: {{ value }} </p>
    <input
      id="myRange"
      v-model="value"
      type="range"
      :min="minValue"
      :max="maxValue"
      class="slider"
    >
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: {
    valueMessage: {
      type: String,
      default: 'value'
    },
    minValue: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    value(arg) {
     this.value = Math.round(arg);  
     this.$emit('sliderValue', this.value);
    }
  }
}
</script>

<style lang="scss">
.slidecontainer {
  width: 100%;

  p {
    margin: 1rem 0;
  }
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  border-radius: 5px;
  background: $primary-blue;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: $white;
  border: 2px solid $primary-blue;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}
</style>