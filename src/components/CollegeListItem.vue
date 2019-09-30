<template>
  <div class="college-list-item">
    <div class="college-list-item__info">
      <checkbox-component
        :show-label="false"
        :label-indentifier="item.uuid"
        @checkedValue="selectedItem($event)"
      />
      <img 
        class="college-list-item__image"
        :src="item.university.logo_url"
        alt=""
      >
      <div class="college-list-item__course">
        <p>{{ item.course.name }}</p>
        <small>bacharelado</small>
      </div>
    </div>
    <div class="college-list-item__prices">
      <p>
        Bolsa de 
        <span>{{ item.discount_percentage }}%</span>
      </p>
      <p class="college-list-item__prices__per-mounth">
        R$ {{ item.price_with_discount || item.full_price }}/mês
      </p>
    </div>
  </div>
</template>

<script>
import CheckboxComponent from '@/components/CheckboxComponent';
import {parseImageName} from '@/utils/index';

export default {
  name: 'CollegeListItem',
  components: {
    CheckboxComponent
  },
  props: {
    item: {
      type: Object,
      default:() =>{}
    }
  },
  methods: {
    selectedItem(item) {
      this.$emit('courseSelected', item);
    }
  },
}
</script>

<style lang="scss">
.college-list-item {
  display: flex;
  justify-content: space-between;
  height: 80px;

  &__info {
    display: flex;
    align-items: center;
  }

  &__image {
    height: 40px;
  }

  &__course {
    margin: 0 1.5rem;

    p {
      color: $primary-blue;
      font-weight: bold;
    }
  }

  &__prices {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__per-mounth, span {
      color: $green;
      font-weight: bold;
      margin: .3rem 0;
    }
  }
}
</style>