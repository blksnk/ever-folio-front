<template>
  <main>
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Wrapper extends Vue {}
</script>

<style lang="scss">
main {
  width: 100%;
  min-height: 100vh;
  padding-right: 2 * $spacing;
  background-color: $color_black;
}
</style>
