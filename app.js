const app = new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      color: 'f4f4f4',
      value: 0,
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
      showPrices: false,
    };
  },

  computed: {
    title() {
      return `${this.name} - ${this.symbol}`;
    },

    converterValue() {
      if (!this.value) {
        return 0;
      }
      return this.value / this.price;
    },
  },

  watch: {
    showPrices(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.color = this.color.split('').reverse().join('');
    },
  },
});
