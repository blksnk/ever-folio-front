<template>
  <main id="app_container">
    <Home />
    <Work />
  </main>
</template>

<script>
import Home from '@/views/Home.vue';
import Work from '@/views/Work.vue';

export default {
  name: 'App',
  components: {
    Work,
    Home,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}

body {
  margin: 0;
  background-color: $color_primary;
  overflow: hidden;
}

h1,
h2,
h3,
h4,
a,
span,
ul,
li,
button,
p {
  margin: 0;
  padding: 0;
  user-select: none;
  font-weight: normal;
  line-height: normal;
}

button {
  cursor: pointer;
  pointer-events: all;
}

h1,
h2,
h3 {
  font-family: 'Love';
  align-self: start;
}

h1 {
  font-size: $font_title;
  color: $color_primary;
}

h2 {
  font-size: $font_big;
  color: $color_white;
}

h3 {
  color: $color_tertiary;
  font-size: $font_big;
  text-transform: uppercase;
}

#app_container {
  background-color: $color_black;
  border-radius: $radius;
  border: 1px solid $color_primary;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
