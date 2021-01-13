Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
})

Vue.component('cart-item', {
  data: function () {
    return {
      count: 0
    }
  },
  props: ['item'],
  template: `
    <div class="cart__item">
      <h4><b>Name: </b>{{ item.product_name }}</h4>
      <p><b>Price: </b>{{ item.price }}&#36;</p>
      <p><b>Quantity: </b>{{ item.quantity }}</p>
      <button v-on:click="$emit('enlarge-text')">Font size+</button>
      <button v-on:click="$emit('diminish-text')">Font size-</button>
    </div>
  `
})

const app = new Vue({
  el: '#app',
  data: {
    arr: ['one', 'two', 'three'],
    cart: [
      {'id': 012, product_name: 'Mouse', price: '1000', quantity: 1},
      {'id': 345, product_name: 'Keyboard', price: '2000', quantity: 1},
      {'id': 678, product_name: 'Tablet', price: '5000', quantity: 1},
      {'id': 901, product_name: 'Netbook', price: '8000', quantity: 1},
      {'id': 234, product_name: 'Notebook', price: '10000', quantity: 1},
    ],
    selected: '',
    postFontSize: 1,
  },
  methods: {
    upperCase(elem) {
      return elem.toUpperCase()
    },
    popup(elem, event) {
      console.log(event.target.nodeName)
      console.log(elem)
    },
    enlargeFontSize() {
      if (this.postFontSize.toFixed(1) === '2.0') this.postFontSize += 0
      else this.postFontSize += 0.1
    },
    diminishFontSize() {
      if (this.postFontSize.toFixed(1) === '0.5') this.postFontSize -= 0
      else this.postFontSize -= 0.1
    },
  }
})
