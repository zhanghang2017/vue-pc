<template>
    <div class="slider-box" @mouseover="clearTimeout" @mouseout="setTimeout">
          <transition name="fade-in">
             <img v-if="show" :src="sliders[index].src" />
          </transition>
           <transition  name="fade-out">
             <img v-if="!show" :src="sliders[index].src" />
          </transition>
        <div class="slider-nav">
            <p v-text="sliders[index].title"></p>
            <ul>
                <li @click="change(key)" :class="{'checked-li':key===index?true:false}"  v-for="(item,key) in sliders" :key="key">
                  {{key+1}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    sliders: {
      type: Array,
      default: () => []
    },
    time: {
      type: Number,
      default: 3000
    }

  },
  computed: {
    nextIndex () {
      let _self = this
      let lent = _self.sliders.length - 1
      if (_self.index < lent) {
        return _self.index + 1
      } else {
        return 0
      }
    }
  },
  methods: {
    change (key) {
      this.show = false
      setTimeout(() => {
        this.show = true
        this.index = key
      }, 10)
    },
    setTimeout () {
      if (!this.timeout) {
        clearTimeout(this.timeout)
      }
      let _self = this
      if (_self && !_self._isDestroyed) {
        this.timeout = setTimeout(() => {
          this.change(this.nextIndex)
          this.setTimeout()
        }, this.time)
      }
    },
    clearTimeout () {
      clearTimeout(this.timeout)
    }
  },
  data () {
    return {
      index: 0,
      timeout: null,
      show: true
    }
  },
  mounted () {
    this.setTimeout()
  }
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.slider-box {
  width: 600px;
  height: 300px;
  overflow: hidden;
  position: relative;
}
.slider-box > img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
ul li {
  list-style-type: none;
  float: left;
}
.slider-nav {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 30px;
  background: rgba(0, 0, 0, 0.5);
}
.slider-nav ul {
  float: right;
  height: 30px;
  margin-right: 20px;
}
.slider-nav ul li {
  line-height: 20px;
  width: 20px;
  margin-top: 5px;
  margin-right: 15px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  font-size: 13px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
}
.slider-nav p {
  float: left;
  line-height: 30px;
  color: #ffffff;
  padding-left: 20px;
}
.checked-li {
  color: #000000 !important;
  font-size: 13px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.6) !important;
}
.fade-in-enter-active {
  transition: all .5s ;
}
.fade-in-enter{
  transform: translateY(300px);
}
.fade-out-leave-active {
  transition: all .5s ;
  transform: translateX(-590px);
}

</style>
