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
        <el-carousel trigger="click" height="300px">
          <el-carousel-item v-for="item in slider" :key="item">
             <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
     </div>
     <div style="clear:both"></div>
  </div>
</template>
<script>
import pic1 from '../assets/slideShow/pic1.jpg'
import pic2 from '../assets/slideShow/pic2.jpg'
import pic3 from '../assets/slideShow/pic3.jpg'
import pic4 from '../assets/slideShow/pic4.jpg'
export default {
  data () {
    return {
      newsList: [],
      slider: [pic1,pic2,pic3,pic4],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            }
          ]
        }
      }
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
.hot-tag {
  background: red;
  color: #fff;
}
.index-right {
  margin: 15px;
  float: right;
  width: 50%;
}
</style>
