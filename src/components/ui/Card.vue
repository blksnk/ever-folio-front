<template>
  <div ref="card" class="card">
    <slot></slot>
  </div>
</template>

<script>
import { colorwhite, radius } from '@/stylesheets/variables.scss';

export default {
  name: 'Card',
  props: {
    corners: {
      type: Object,
      default: () => ({
        TopLeft: false,
        TopRight: false,
        BottomLeft: false,
        BottomRight: false,
      }),
    },
    cornerRadius: {
      type: String,
      default: radius,
    },
    color: {
      type: String,
      default: colorwhite,
    },
  },
  mounted() {
    this.setCorners();
    this.setColor();
  },
  methods: {
    setCorners() {
      Object.entries(this.corners).forEach(([corner, bool]) => {
        if (bool) {
          const propName = `border${corner}Radius`;
          this.$refs.card.style[propName] = this.cornerRadius;
        }
      });
    },
    setColor() {
      this.$refs.card.style.backgroundColor = this.color;
    },
  },
};
</script>

<style lang="scss">
.card {
  padding: $spacing;
}
</style>
