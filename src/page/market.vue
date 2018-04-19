<template>
  
    <div class="el-main level-two">
     <div v-if="$route.path=='/market/shop'">
          
    </div>

      <div class="route-left" v-if="$route.path!=='/market/shop'">
        <el-menu 
          :default-active="defaultIndex"
          text-color="#333"
          background-color="#f7f7f7"
          active-text-color="#1DA2C8"
          :router="isRoute"
          @select="onSelect"
        > 
          <el-menu-item 
            v-for="(menu, index) in menus" 
            :key="index" :index="(index + 1).toString()"
            :route="menu.route"
          >
            <span slot="title">{{ menu.title }}</span>
            <i class="el-icon-caret-right" v-show="~~currentIndex === (index + 1)"></i>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="route-right ">
        <!-- <div class="grid-content bg-purple overview-shadow">
          <MarketBoard />
        </div> -->
        <router-view></router-view>
      </div>
  </div>
  
</template>

<script>
import Aside from '../components/Aside'
import Head from '../components/Head'
import MarketBoard from '../components/MarketBoard'

export default {
  components: {
    Aside,
    Head,
    MarketBoard
  },
  data () {
    return {
      isRoute: true,
      currentIndex: '',
      menus: [
        { route: 'page1', title: '营销应用' },
        { route: 'page2', title: '营销应用' }
      ]
    }
  },
  computed: {
    defaultIndex () {
      let i
      let path = this.$route.path.split('market/')[1]
      this.menus.forEach((item, index) => {
        if (item.route === path) i = index
      })
      i = (i + 1).toString()
      this.currentIndex = i
      return i
    }
  },
  methods: {
    onSelect (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss">
@import  "../assets/scss/baseFunction";
.el-main.level-two {
  padding-left: 0; 
}
.level-two {
  display: flex;
  .route-right {
    flex: 1;
    .grid-content {
      margin-bottom: 20px;
      background: #fff;
    }
  }
  .el-menu-item {
    text-align: center;
    padding: 0 35px !important;
    font-size: 12px;
    position: relative;
    color: #fff;
    &:hover {
      background: #f7f7f7 !important;
      color: #1DA2C8 !important;
    }
  }
  .el-menu-item.is-active {
    background: #edeff4 !important;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 3.7px;
      height: 100%;
      background: #1DA2C8;
    }
  }
  .el-icon-caret-right {
    color: #1DA2C8;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  .el-menu {
    border-right: none;
  }
}
</style>
