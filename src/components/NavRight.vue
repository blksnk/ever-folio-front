<template>
  <nav id="nav">
    <a href="/work">work</a>
    <div id="spacer"></div>
    <a href="/about">about</a>
  </nav>
</template>

<style scoped lang="scss">
#nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  height: 80vh;
  width: $spacing * 2;
  padding: $spacing 0;

  #spacer {
    flex-grow: 1;
    margin: $spacing 0;
    width: 2px;
    background-color: $color_white;
  }

  a {
    text-orientation: mixed;
    writing-mode: vertical-rl;
    color: $color_white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: $font_med;
    transition: 0.1s color linear;

    &:hover {
      color: $color_secondary;
    }
  }
}
</style>
