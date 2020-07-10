const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '数学之美',
        price: 100,
        count: 1,
      },
      {
        id: 2,
        name: 'python核心编程',
        price: 99,
        count: 1,
      },
      {
        id: 3,
        name: '故事会',
        price: 198.0,
        count: 1,
      },
      {
        id: 4,
        name: '编程珠玑',
        price: 66,
        count: 1,
      },
    ],
  },
  computed: {
    totalPrice() {
      // let resPrice = 0
      // for (let i of this.books) {
      //   resPrice += i.price
      // }
      // return resPrice
      return this.books.reduce(function(pre,book){
        return pre+book.price
      },0)
    },
  },
  methods: {
    sub(index) {
      this.books[index].count -= 1
    },
    add(index) {
      this.books[index].count += 1
    },
    removeBook(index) {
      this.books.splice(index, 1)
    },
  },
  filters: {
    showPrice(price) {
      return '￥' + price
    },
  },
})
