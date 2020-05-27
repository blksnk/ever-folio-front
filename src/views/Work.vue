<template>
  <section id="work">
    <h2 class="title" id="top">
      Selected
    </h2>
    <h2 class="title" id="btm">
      works
    </h2>
    <ul id="list">
      <li
        class="list_item"
        v-for="(p, index) in projects"
        :key="'project' + index"
      >
        <span class="index">{{ `0${index + 1}` }}</span>
        <span class="title">{{ p.title }}</span>
        <span class="client">{{ p.client }}</span>
        <span class="date">{{ p.date }}</span>
        <button class="btn">
          <ArrowIcon class="icon" />
          <span>Case study</span>
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import ArrowIcon from '@/components/ui/icons/Arrow.vue';

export default {
  name: 'Work',
  components: {
    ArrowIcon,
  },
  data() {
    return {
      projects: [
        {
          title: 'Fitness Tracker',
          client: 'Nike',
          date: 2020,
        },
        {
          title: 'App Redesign',
          client: 'StockX',
          date: 2019,
        },
        {
          title: 'Battery Utility',
          client: 'Ironhack',
          date: 2018,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#work {
  display: grid;
  grid-template-columns: $grid-cols;
  grid-template-rows: 0.75fr 0.75fr 0.5fr 1fr 1fr 1fr 0.5fr 0.75fr;
  width: 100%;
  min-height: 100%;

  .title {
    grid-column: 2 / 4;

    &#top {
      grid-row: 2 / 3;
      font-size: $font-huge;
    }

    &#btm {
      grid-row: 3 / 4;
    }
  }

  #list {
    grid-row: 4 / -2;
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    border-top: 1px solid $color_gray;
    grid-column: 4 / 10;

    .list_item {
      display: grid;
      grid-template-columns: 0.5fr 1.5fr 1.5fr 0.5fr 1.5fr;
      align-content: center;
      font-family: 'Voyage';
      font-size: $font_med;
      border-bottom: 1px solid $color_gray;

      span,
      button {
        grid-column: span 1;
        color: $color_white;
      }

      .btn {
        border: none;
        background: none;

        span {
          @extend .underlined;
          transition: 0.3s color;

          &:hover {
            color: $color_secondary;
          }
        }
      }

      .index {
        color: $color_gray;
      }

      .btn,
      .date {
        justify-self: end;
      }
    }
  }
}
</style>
