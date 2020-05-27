<template>
  <Card
    id="pres"
    :corners="{
      BottomRight: true,
    }"
  >
    <div id="left">
      <h1>Ever Noël</h1>
      <h2>ux/ui designer</h2>
    </div>

    <div id="right">
      <p>Veniam quis nostrud ut ex elit ex aute eiusmod ut in.</p>
      <p>
        Veniam quis nostrud ut ex elit ex aute eiusmod ut in. Ut do consectetur
        consequat eu cillum velit deserunt dolor et ex adipisicing ullamco sit
        deserunt ex aliquip eiusmod non id culpa consequat ut irure sed
        reprehenderit dolor in commodo ullamco ut excepteur id fugiat ad ea
        aute.
      </p>
    </div>
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/ui/Card.vue';

@Component({
  components: {
    Card,
  },
})
export default class Presentation extends Vue {}
</script>

<style scoped lang="scss">
#pres {
  min-height: 80vh;
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: 1fr auto;
  padding-top: $spacing * 3;

  #left {
    margin-left: $spacing;

    h1 {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
      margin: 0 !important;
    }

    h2 {
      color: $color_tertiary;
    }
  }

  #right {
    margin-top: $spacing;
    grid-column: 2 / 2;
    grid-row: 1 / 3;

    p {
      margin-bottom: $spacing;
    }
  }
}
</style>
