const app = new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 0,
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

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
    },
  },
});