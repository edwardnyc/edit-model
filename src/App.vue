<template>
  <div id="app">
    <headers/> 
    <router-view/>
  </div>
</template>

<script>
import Headers from './components/common/header'
export default {
  name: 'App',
  components:{
    Headers
  }
}
</script>

<style lang="scss">
*{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;  
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  list-style:none;
  ::-webkit-scrollbar {
		  width: 1px;
      position: absolute;
      right: 0px;
	}
  ::-webkit-scrollbar-track {
		  background-color: #fcfcfc;
	} /* 滚动条的滑轨背景颜色 */

	::-webkit-scrollbar-thumb {
		  background-color: rgba(0, 0, 0, 0.2); 
	} /* 滑块颜色 */

	::-webkit-scrollbar-button {
		  background-color: transparent;
	} /* 滑轨两头的监听按钮颜色 */

	::-webkit-scrollbar-corner {
		  background-color: black;
	} /* 横向滚动条和纵向滚动条相交处尖角的颜色 */
  ::-webkit-scrollbar-button {
    display: none; 
  }
}
</style>
