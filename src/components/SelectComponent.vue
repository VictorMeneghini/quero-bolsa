<template>
  <div class="select-component">
    <div
      class="select-component__wrapper"
      @click.stop="showOptions = !showOptions"
    > 
      <input
        type="text"
        readonly
        placeholder="Please choose as you wish!"
        :value="selected"
      >
      <div class="select-component__wrapper__icon-wrapper"> 
        <i /> 
      </div>
      <span />
    </div>
    <ul
      v-show="showOptions"
      v-clickOut="test"
      class="select-component__options"
    >
      <li
        v-for="(item, index) in options"
        :key="index"
        @click.stop="choose(item.value)"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  directives : {
    clickOut: {
      bind: function(el, binding) {
        function handler() {
          if (el.contains(el.target)) return false
          if (binding.expression) {
            binding.value()
          }
        }
        el.handler = handler
        document.addEventListener('click', el.handler)
      },
      unbind: function(el) {
        document.removeEventListener('click', el.handler)
      }    
    }
  },
  data(){
    return{
      options: [
        {
          value: 'São José dos Campos'
        },
        {
          value: 'ipsum'
        },
        {
          value: 'dolor'
        },
        {
          value: 'sit'
        },
        {
          value: 'amet'
        },
        {
          value: 'lorem'
        },
        {
          value: 'ipsum'
        },
        {
          value: 'sit'
        },
        ],
      showOptions: false,
      selected: ''
    }
  },
  mounted() {
    let that = this
    document.addEventListener('click', function() {
      that.showOptions = false
    })
  },
  methods: {
    test() {
      this.showOptions = false  
    },
    choose(value) {
      this.showOptions = false
      if (value !== this.selected) {
        this.selected = value
      }
    }
  }
}
</script>

<style lang="scss">
.select-component {
  position: relative;
  width: 100%;
  &__wrapper {
    position: relative;
    max-width: 100%;
    

    &__icon-wrapper {
      height: 46px;
      width: 40px;
      position: absolute;
      right: 0px;
      top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      i {
        background-image: url('../../src/assets/svg/expand-button.svg');
        background-repeat: no-repeat;
        height: 10px;
        position: absolute;
        width: 10px;
      }
    }
  
    input {
      padding-right: 40px;
      padding-left: 1rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      height: 46px;
      font-size: 16px;
      width: 100%;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__options {
    list-style-type: none;
    max-height: 400px;
    position: absolute;
    overflow-x: hidden;
    border: 1px solid grey;
    display: block;
    top: calc(100% - 1px);
    left: 0;
    z-index: 1000;
    padding: 5px 0;
    margin: 0;
    width: 100%;
    max-height: 350px;
    min-width: 160px;
    overflow-y: auto;
    box-shadow: 0px 3px 6px 0px rgb(202, 202, 202);
    border: 1px solid rgba(60, 60, 60, 0.26),;
    border-top-style: none;
    border-radius: 0 0 4px 4px;
    text-align: left;
    list-style: none;
    background: #fff;
  
    li {
      line-height: 1.42857143;
      display: block;
      padding: 3px 20px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      clear: both;
      color: #333;
      white-space: nowrap;
      overflow-x: hidden;

      &:hover {
        background: rgb(236, 236, 236);
      }
    }
  }
}
</style>