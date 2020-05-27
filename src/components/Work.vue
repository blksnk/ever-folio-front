<template>
  <section id="work">
    <Card id="left">
      <h2>project title</h2>

      <div id="project_info">
        <span>client:</span>
        <span>date:</span>
        <span>category:</span>
        <span>description:</span>
        <span>client:</span>
      </div>
    </Card>
    <Card
      id="right"
      :corners="{
        TopLeft: true,
        BottomLeft: true,
      }"
      :color="colorblack"
      cornerRadius="2rem"
    >
      <ImageRounded
        src="https://images.adsttc.com/media/images/5def/9ad6/3312/fd16/7900/03cf/large_jpg/TIFF-STROM-QC-1.jpg?1575983774"
      />
    </Card>
  </section>
</template>

<script>
import Card from '@/components/ui/Card.vue';
import ImageRounded from '@/components/ui/ImageRound.vue';
import { colorblack } from '@/stylesheets/variables.scss';

export default {
  name: 'Work',
  components: {
    Card,
    ImageRounded,
  },
  data() {
    return {
      colorblack,
    };
  },
};
</script>

<style scoped lang="scss">
#work {
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: auto;
  min-height: 80vh;
  background-color: $color_white;

  #left {
    grid-column: 1 / 1;
    margin-left: $spacing;
  }

  #right {
    grid-column: 2 / 2;
    padding-right: 0;
  }
}
</style>
