<template>
<div  class="container">
  <div class="hint">
    Type "ctl+alt+l" on Windows or "ctl+meta+l" on Mac to select Log Categories
  </div>
  <div class="content">
    <h4>mvmsUpdated event No. {{ changeCounter }} ==> {{ message }}</h4>
    <button @click="add2">Add2</button>
    <button @click="delFirst2">DeleteFirst2</button>
    <button @click="update1">Update$1</button>
    <button @click="update2">Update$2</button>
    <button @click="resetAll1">ResetAll$1</button>
    <button @click="resetAll2">ResetAll$2</button>
    <div class="row cards">
      <div class="col-lg-3" v-for="(city, cityName) in cities" :key="cityName">

        <!-- before holdify -->
        <vue-holder name="City">
          <CityCard :ref="`City-${cityName}`" :name="cityName" :city="city" @delete="onDelete">
            <p>GDP (slot): <span v-text="city.GDP" /> billion</p>
            <template #scopedSlot="{ area }">
              <p>Area (scoped slot): <span v-text="area" /> mi<sup>2</sup></p>
            </template>
          </CityCard>
        </vue-holder>


        <!-- after holdify -->
        <!-- <vue-holder name="City"
          :uid="{ cityName }"
          :vars="{ '*city': 'cities[cityName]' }"
          template='<CityCard :ref="`City-${cityName}`" :name="cityName" :city="city" @delete="onDelete">
                      <p>GDP (slot): <span v-text="city.GDP" /> billion</p>
                      <template #scopedSlot="{ area }">
                        <p>Area (scoped slot): <span v-text="area" /> mi<sup>2</sup></p>
                      </template>
                    </CityCard>'
        /> -->

      </div>
    </div>
  </div>
</div>
</template>

<script>
import CityCard from '../components/CityCard'
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

let CITY_INDEX = 0;

let CITIES = { // mock data
  'New York': { area: 302.6, population: 8.623, GDP: 807 },
  'London': { area: 607, population: 8.136, GDP: 765 },
  'Los Angeles': { area: 503, population: 4, GDP: 645.36 },
  'Beijing': { area: 6490, population: 21.54, GDP: 446.6 },
  'Shanghai': { area: 2448, population: 24.24, GDP: 494 }
};

@Component({
  components: {
    CityCard,
    //CityCard : () => import('../components/CityCard' /* webpackChunkName: 'components.CityCard' */)
  }
})
export default class CityDashboard extends Vue {
  cities = {}
  message = ''
  changeCounter = 0

  async created() {
    // await new Promise((resolve) => setTimeout(resolve, 100));
    this.cities = {...CITIES};
  }

  mvmsUpdated() {
    this.makeMessage();
  }

  onDelete(name) {
    this.$delete(this.cities, name);
  }

  add2() {
    this.$set(this.cities, `New City ${CITY_INDEX++}`, { area: 0, population: 0, GDP: 0 });
    this.$set(this.cities, `New City ${CITY_INDEX++}`, { area: 0, population: 0, GDP: 0 });
  }

  delFirst2() {
    const keys = Object.keys(this.cities);
    const name1 = keys[0];
    const name2 = keys[1];
    this.$delete(this.cities, name1);
    this.$delete(this.cities, name2);
  }

  update1() {
    const names = Object.keys(this.cities)
    if (names.length) {
      const name = names[0];
      this.cities[name].GDP = -this.cities[name].GDP;
    }
  }

  update2() {
    const names = Object.keys(this.cities)
    if (names.length) {
      const name = names[0];
      const pre = this.cities[name];
      this.cities[name] = { area: -pre.area, population: -pre.population, GDP: -pre.GDP };
    }
  }

  resetAll1() {
    this.cities = { ... CITIES };
  }

  resetAll2() {
    CITIES = Object.keys(CITIES).reduce((res, name, index) => {
      const newName = !index ? name : name.split('').reverse().join('');
      const pre = CITIES[name];
      res[newName] = { area: -pre.area, population: -pre.population, GDP: -pre.GDP };
      return res;
    }, {});

    this.cities = { ... CITIES };
  }

  makeMessage() {
    this.changeCounter++;
    const cityNames = Object.keys(this.cities);
    const highest = Math.max(
      ...cityNames.map(cityName => {
        const intf = this.$intf('City', cityName);
        return intf ? intf.getHigh() : 0;
        // const ref = this.$refs[`City-${cityName}`];
        // return ref ? ref.getHigh() : 0;
      })
    );
    this.message = `the Highest Temprature is ${highest}°`;
  }
}
</script>
<style lang="sass" scoped>
.hint
  margin-top: 10px
.content
  margin-top: 40px
  .cards
    margin-top: 20px
</style>