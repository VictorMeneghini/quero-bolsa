<template>
  <div class="college-list">
    <div
      v-if="coursesList.length > 0"
      class="college-list__content"
    >
      <div class="college-list__content__filters">
        <p>resultado</p>
        <p>
          ordenar por 
          <span class="college-list__content__filters__order">Nome da Faculdade
            <img
              svg-inline
              src="@/assets/svg/expand-button.svg"
              alt="example"
              @click="orderByName()"
            >
          </span>
        </p>
      </div>
      <div class="college-list__content__list">
        <div 
          v-for="course in coursesList"
          :key="course.uuid"
          class="college-list__content__list__item"
        >
          <college-list-item
            :item="course"
            @courseSelected="selectedItem($event, course)" 
          />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Desculpe, curso indisponivel</p>
    </div>
  </div>
</template>

<script>
import CollegeListItem from "@/components/CollegeListItem"


export default {
  name: 'CollegesList',
  components: {
    CollegeListItem
  },
  props: {
    coursesList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      selectedCourses: [],
      orderList: true,
    }
  },
  watch: {
    selectedCourses() {
      this.$emit('selectedCourseList', this.selectedCourses);
    },
  },
  methods: {
    selectedItem(handleItem, item) {
      if (handleItem) {
        this.selectedCourses.push(item);
      } else {
       this.selectedCourses = this.selectedCourses.filter(i => i.uuid !== item.uuid);
      }
    },
    orderByName() {
      if (this.orderList) {
        this.coursesList = this.coursesList.sort(this.cresc);
      } else {
        this.coursesList = this.coursesList.sort(this.desc);
      }
      this.orderList = !this.orderList;
    },
    cresc(a, b) {
      const genreA = a.university.name.toUpperCase();
      const genreB = b.university.name.toUpperCase();
      
      let comparison = 0;
      if (genreA > genreB) {
        comparison = 1;
      } else if (genreA < genreB) {
        comparison = -1;
      }  
      return comparison;
    },
    desc(a, b) {
      const genreA = a.university.name.toUpperCase();
      const genreB = b.university.name.toUpperCase();
      
      let comparison = 0;
      if (genreA > genreB) {
        comparison = 1;
      } else if (genreA < genreB) {
        comparison = -1;
      }  
      return comparison * -1;
    }
  }, 
}
</script>

<style lang="scss">
.college-list {
  margin: 2rem 0;

  &__content {
    display: flex;
    flex-direction: column;

    &__filters {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;

      &__order {
        cursor: pointer;
        color: $secundary-blue;
        fill: $secundary-blue;
      }
    }

    &__list {
       &__item {
         border-bottom: 2px solid $dark-grey;

        &:first-child {
          border-top: 2px solid $dark-grey;
        }
      }
    }
  }
}

</style>