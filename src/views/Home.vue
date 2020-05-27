<template>
  <section id="home">
    <h1 class="title_left" id="top">
      Ever
    </h1>
    <h1 class="title_left" id="btm">
      Noel
    </h1>
    <img
      id="img"
      src="https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/43173296_660358531032868_8425629811380257320_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=Ek68oXcYkRMAX8G7Q0R&oh=43c595be4c3ac7e6f33b02555c2337b6&oe=5EF7E0EF&dl=1"
      alt=""
    />
    <h1 class="title_right" id="top">
      visual
    </h1>
    <h1 class="title_right" id="btm">
      designer
    </h1>
  </section>
</template>

<style scoped lang="scss">
#home {
  display: grid;
  grid-template-columns: $grid_cols;
  grid-template-rows: $grid_rows;
  width: 100%;
  height: 100%;

  #img {
    grid-column: 4 / 8;
    grid-row: 2 / 8;
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: 1;
    align-self: center;
    justify-self: center;
    max-width: 50vw;
  }

  h1 {
    font-family: 'Love';
    font-size: 8rem;
    color: $color_primary;
    margin: 0;
    z-index: 2;
    // mix-blend-mode: lighten;

    &.title_left {
    }

    &.title_left {
      grid-column: 2 / 5;

      &#top {
        grid-row: 3 / 4;
      }

      &#btm {
        grid-row: 4 / 5;
      }
    }

    &.title_right {
      grid-column: 7 / 10;
      justify-self: end;

      &#top {
        grid-row: 5 / 6;
      }

      &#btm {
        grid-row: 6 / 7;
      }
    }
  }
}
</style>
