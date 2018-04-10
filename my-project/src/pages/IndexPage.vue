<template>
  <div class="index-page">
     <div class="index-left">
       <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="product in productList" :key="product.key">
          <h3>{{ product.title}}</h3>
          <ul>
            <li v-for="item in product.list" :key="item.key">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </div>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList" :key="item.key">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
     </div>
     <div class="index-right">
        <slider :sliders="sliders.imgArr" :time="sliders.time"></slider>
        <div class="index-board-list">
            <div
            class="index-board-item"
            v-for="(item, index) in boardList"
            :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]" :key="index">
              <div class="index-board-item-inner" >
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <div class="index-board-button">
                  <span @click="to(item)"   class="button" :class="{'saleout':item.saleout}">立即购买</span>
                </div>
              </div>
            </div>
        </div>
      </div>
     <div style="clear:both"></div>
  </div>
</template>
<script>
import pic1 from '../assets/slideShow/pic1.jpg'
import pic2 from '../assets/slideShow/pic2.jpg'
import pic3 from '../assets/slideShow/pic3.jpg'
import pic4 from '../assets/slideShow/pic4.jpg'
import API from '../api/api'
import Slider from '../components/Slider'

export default {
  components: {
    Slider
  },
  created () {
    API.getNewList(this, {id: 1}).then((response) => {
      this.newsList = response.body
    }, (err) => {
      console.log(err)
    })
    API.getProductList(this, {id: 2}).then((response) => {
      this.productList = response.body
    }, (err) => {
      console.log(err)
    })
    API.getBoardList(this, {id: 3}).then((response) => {
      this.boardList = response.body
    }, (err) => {
      console.log(err)
    })
  },
  data () {
    return {
      newsList: [],
      boardList: [],
      sliders: {
        time: 3000,
        imgArr: [{
          src: pic1,
          title: 'i am pic1'
        }, {
          src: pic2,
          title: 'i am pic2'
        }, {
          src: pic3,
          title: 'i am pic3'
        }, {
          src: pic4,
          title: 'i am pic4'
        }]},
      productList: {}
    }
  },
  methods: {
    to (item) {
      let { $router } = this
      if (item.saleout) {
        alert('已经售完')
        return false
      }
      $router.push({'path': 'details/' + item.toKey})
    }
  }
}
</script>
<style scoped>
.index-page {
  padding: 0px 10%;
}
.index-left {
  float: left;
  width: 40%;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
  height: 1px;
  padding: 0 20px;
  background: #797979;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-right {
  margin: 15px;
  float: right;
  width: 57%;
}
.index-board-list {
  overflow: hidden;
  margin-top: 20px
}
.index-board-item {
  float: left;
  width:285px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px 0;
  margin-bottom: 20px;
  margin-right: 26px
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0!important;
}
.index-board-button {
  margin-top: 20px;
}
.button{
  background: #4EC390;
  color: #ffffff;
  padding: 5px 10px;
  cursor: pointer
}
.saleout{
  background: #797979;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
