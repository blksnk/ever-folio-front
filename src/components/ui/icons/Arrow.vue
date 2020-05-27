<template>
  <svg
    class="icon_arrow"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 40"
    aria-labelledby="title desc"
  >
    <title id="title">Arrow</title>
    <path
      d="M0 20 H 80 Q 60 20 60 0"
      stroke-width="1px"
      stroke="#FFF"
      fill="transparent"
    />
    <path
      d="M80 20 Q 60 20 60 40"
      stroke-width="1px"
      stroke="#FFF"
      fill="transparent"
    />
  </svg>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ArrowIcon extends Vue {}
</script>

<style lang="scss">
.icon_arrow {
  height: $font_small;
  margin-right: $spacing / 2;
}
</style>
