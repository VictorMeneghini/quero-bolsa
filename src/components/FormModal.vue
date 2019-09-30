<template>
  <transition name="form-modal-fade">
    <div
      v-show="openModal"
      ref="modal"
      class="form-modal"
    >
      <div>
        <div class="form-modal__close-btn">
          <div class="">
            <img
              svg-inline
              src="@/assets/svg/close.svg"
              alt="example"
              @click="closeModal()"
            >
          </div>
        </div>
        <form 
          @submit.prevent="onSubmit()"
          class="form-modal__content">
          <h2>Adicionar bolsa</h2> 
          <p>Filtre e adicione as bolsas de seu interesse.</p>
          <div class="form-modal__content__filters">
            <div class="form-modal__content__filters__fields">
              <div class="form-modal__content__filters__fields__field">
                <h5>SELECIONE SUA CIDADE</h5>
                <select-component 
                  :options="cityList"
                  @selectedValue="filter({city: $event})"
                />
              </div>
              <div class="form-modal__content__filters__fields__field">
                <h5>COMO VOCÊ QUER ESTUDAR?</h5>
                <div class="form-modal__content__filters__fields__field--checkbox">
                  <checkbox-component
                    label-indentifier="presencial"
                    @checkedValue="filter({presencial: $event})"
                  />
                  <checkbox-component
                    label-indentifier="A distância"
                    @checkedValue="filter({ead: $event})"
                  />
                </div>
              </div>
            </div>
            <div class="form-modal__content__filters__fields">
              <div class="form-modal__content__filters__fields__field">
                <h5>SELECIONE O CURSO DE SUA PREFERÊNCIA</h5>
                <select-component 
                  :options="courseList"
                  @selectedValue="filter({course: $event})"
                />
              </div>
              <div class="form-modal__content__filters__fields__field">
                <h5>ATÉ QUANTO PODE PAGAR?</h5>
                <slider-component
                  :max-value="maxValue"
                  :min-value="minValue" 
                  value-message="R$"
                  @sliderValue="filter({maxValue: $event})"
                />
              </div>
            </div>
          </div>
          <colleges-list 
            @selectedCourseList="addFavoritList($event)"
            :courses-list="filtered || courses" />
          <div class="form-modal__content__buttons">
            
            <button-component 
              text="Cancel"
            />
            <button-component
              :disabled="favoriteCourses.length <= 0"
              ready
              text="Adicionar bolsa(s)"
            />
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import SelectComponent from '@/components/SelectComponent'
import CheckboxComponent from '@/components/CheckboxComponent'
import SliderComponent from '@/components/SliderComponent'
import ButtonComponent from '@/components/ButtonComponent'
import CollegesList from '@/components/CollegesList'
import { uuid } from 'vue-uuid';
import api from '@/services/request';

export default {
  name: 'FormModal',
  components: {
    SelectComponent,
    CheckboxComponent,
    SliderComponent,
    ButtonComponent,
    CollegesList
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
   data() {
      return {
        openModal: this.open,
        filterBy: {},
        filtered: null,
        favoriteCourses: [],
        courses: []
      }
    },
  computed: {
    courseList() {
      const filteredArray = new Set(this.courses.map(e => e.course.name));
      return [...filteredArray];
    },
    cityList() {
      const filteredArray = new Set(this.courses.map(e => e.campus.city));
      return [...filteredArray];
    },
    maxValue() {
      const filteredArray = this.courses.map(e => e.full_price);
      return Math.max.apply(null, filteredArray);
    },
    minValue() {
      const filteredArray = this.courses.map(e => e.full_price);
      return Math.min.apply(null, filteredArray);
    }
  },
  watch: {
    open(value) {    
      document.body.style.overflow = "hidden";      
      console.log(document.body.style);
      this.openModal = value;
    }
  },
   mounted() {
    this.getCoursesList();
  },
  methods: {
    closeModal() {
      this.$emit('closed');
      this.openModal = !this.openModal;
    },
    filter(value) {
      this.filterBy = Object.assign(this.filterBy, value);
      console.log(this.filterBy);
      

      const filtered = this.courses
        .filter((item,index,arr) => this.filterBy.city ? item.campus.city === this.filterBy.city || filtered : arr)
        .filter((item,index,arr) => this.filterBy.course ? item.course.name === this.filterBy.course || filtered : arr)
        .filter((item,index,arr) => this.filterBy.maxValue ? item.price_with_discount <= this.filterBy.maxValue || filtered : arr)
        .filter((item,index,arr) => this.filterBy.presencial ? item.course.kind === "Presencial" || filtered : arr)
        .filter((item,index,arr) => this.filterBy.ead ? item.course.kind === "EaD" || filtered : arr);
       
        this.filtered = filtered;
        
    },
    async getCoursesList() {
      const { data } =  await api.$http.get('/scholarships');      
      this.courses = data.map(element => {
        element.uuid = uuid.v1();
        return element;        
      });
    },
    addFavoritList(courses) {
      this.favoriteCourses = courses;
      console.log(this.favoriteCourses);
    },
    onSubmit() {
      localStorage.setItem("savedData", JSON.stringify(this.favoriteCourses));
    },
    onCancel() {
      console.log('dhsaudhsas');
      
    }
  },
};
</script>

<style lang="scss">
.form {
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

    &__close-btn {
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
      padding: 2rem;
      background-color: white;
      border: 1px solid grey;

      &__filters {
        display: flex;
        justify-content: space-between;

        &__fields {
          flex-grow: 1;


          &__field {
            margin: 2rem 0;

            &__title {
              font-weight: bold;
              text-transform: uppercase;
            }

            &--checkbox { 
              display: flex;
              margin-top: 3.5rem;
            }
          }
          
          &:first-child {
            margin-right: 2rem;
          }
        }
      }

      &__buttons {
        display: flex;
        justify-content: flex-end;        

        button {
          margin: 0 .5rem;
        }
      }
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