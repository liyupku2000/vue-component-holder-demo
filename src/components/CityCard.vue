<template>
<div class="wrap">
  <button class="btn-delete" @click="$emit('delete', name)">
    <font-awesome-icon :icon="['far', 'window-close']" />
  </button>
  <h5>{{ name }}</h5>
  <p>Population: {{ city.population }} million</p>
  <slot />
  <slot name="scopedSlot" :area="city.area" />
  <p>Today's Temprature: {{high}}° {{low}}°</p>
  <p>Location: {{latitude}} {{longitude}}</p>
</div>
</template>

<script>
import { Public } from 'vue-component-holder/decorators'
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component({
  props: {
    name: String,
    city: Object
  }
})
export default class CityCard extends Vue {
  low = 0
  high = 0

  async asyncData(parent) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    // if (Math.random() < .5) {
    //   await axios.get('/api/asyncData');
    // }

    return {
      latitude: `${Math.round(Math.random()*30)+20}° N`,
      longitude: `${Math.round(Math.random()*180)}° W`
    };
  }

  async inited() {
    await new Promise((resolve) => setTimeout(resolve, 50));
    // await axios.get('/api/init');

    this.high = parseInt(70 + Math.random() * 10);
    this.low = parseInt(60 + Math.random() * 10);
  }

  @Public
  getHigh() {
    return this.high;
  }
}
</script>

<style scoped lang="sass">
.wrap
  margin: 5px
  padding: 5px
  border: 1px solid grey
  .btn-delete
    float: right
    background-color: Transparent
    background-repeat: no-repeat
    cursor: pointer
    overflow: hidden
    outline: none
    border: none
</style>