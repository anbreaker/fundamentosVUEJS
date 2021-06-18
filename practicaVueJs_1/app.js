Vue.component('CoinDetail', {
  props: ['coin'],

  data() {
    return {
      showPrices: false,
      value: 0,
    };
  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },

    converterValue() {
      if (!this.value) {
        return 0;
      }
      return this.value / this.coin.price;
    },
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit('change-color', this.showPrices ? '3d3d3d' : 'f4f4f4');
    },
  },

  created() {
    console.log('Created CoinDetail...');
  },
  mounted() {
    console.log('Mounted CoinDetail...');
  },

  template: `
    <div>
      <img
        v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
        v-bind:src="coin.img"
        v-bind:alt="coin.name"
      />
      
      <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }}

        <span v-show="coin.changePercent > 0">👍</span>
        <span v-show="coin.changePercent < 0">👎</span>
        <span v-show="coin.changePercent === 0">🤞</span>
        <span v-on:click="toggleShowPrices">{{ showPrices ? '🐵' : '🙈' }} </span>
      </h1>

      <input type="number" v-model="value" />
      <span>{{ converterValue }} BTC </span>

      <slot name='text'></slot> 
      <slot name='link'></slot> 

      <ul v-show="showPrices">
        <li
          v-bind:class="{orange: p.value === coin.price,
                         red: p.value < coin.price,
                         green: p.value > coin.price
                        }"
          v-for="(p,i) in coin.pricesWithDays"
          v-bind:key="p.day"
        >
          {{ i + 1 }}: {{ p.day }} - {{ p.value }}
        </li>
      </ul>
    </div> 
  `,
});

const app = new Vue({
  el: '#app',

  data() {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 0,
        price: 8400,
        pricesWithDays: [
          { day: 'Monday', value: 8400 },
          { day: 'Tuesday', value: 7900 },
          { day: 'Wendsday', value: 8200 },
          { day: 'Thursday', value: 9000 },
          { day: 'Friday', value: 9400 },
          { day: 'Saturday', value: 10000 },
          { day: 'Sunday', value: 10200 },
        ],
      },
      color: 'f4f4f4',
    };
  },

  created() {
    console.log('Created...');
  },
  mounted() {
    console.log('Mounted...');
  },

  methods: {
    updateColor(color) {
      this.color = color || this.color.split('').reverse().join('');
    },
  },
});
