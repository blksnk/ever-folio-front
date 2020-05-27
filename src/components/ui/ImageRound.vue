<template>
  <img class="img" :src="src" alt="" />
</template>

<script>
export default {
  name: 'ImageRound',
  props: ['src'],
};
</script>

<style scoped lang="scss">
.img {
  overflow: hidden;
  border-radius: $radius;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
