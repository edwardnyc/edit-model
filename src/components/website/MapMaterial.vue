<template>
  <el-dialog
    title="地图"
    :visible.sync="dialogVisible"
    width="906px"
    :before-close="handleClose"
    class="material">
    <div class="map-main">
      <div class="map-search">
        <el-input size="small" placeholder="请输入内容" v-model="mapKey">
          <template slot="append">
            <el-button size="small">搜索</el-button>
          </template>
        </el-input>
      </div>
      <div class="map-par">
        <div id="map" class="map-con"></div>
      </div>
    </div>
    <div class="icon-footer">
      <el-button size="small" @click="handleClose">取 消</el-button>
      <el-button size="small" type="primary" @click="dialogIcon = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    props: {
      dialogMap: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        dialogVisible: this.dialogMap,
        mapKey: ""
      }
    },
    watch: {
      dialogMap(val){
        this.dialogVisible = val;
        this.initMap();
      }
    },
    mounted(){

    },
    methods: {
      handleClose(){
        this.dialogVisible = false;
        this.$emit("close")
      },
      initMap(){
        this.$nextTick(()=>{
          // 百度地图API功能
          const map = new BMap.Map("map");    // 创建Map实例
          let point = new BMap.Point(116.404, 39.915);
          map.centerAndZoom(point, 15);  // 初始化地图,设置中心点坐标和地图级别
          let marker = new BMap.Marker(point);  // 创建标注
          map.addOverlay(marker);               // 将标注添加到地图中
          marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
          marker.enableDragging()
          //添加地图类型控件
          map.addControl(new BMap.MapTypeControl({
            mapTypes: [
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
            ]
          }));
          map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
          map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

          map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
          // 添加带有定位的导航控件
          const navigationControl = new BMap.NavigationControl({
            // 靠左上角位置
            anchor: BMAP_ANCHOR_TOP_LEFT,
            // LARGE类型
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            // 启用显示定位
            enableGeolocation: true
          });
          map.addControl(navigationControl);

          // 添加定位控件
          const geolocationControl = new BMap.GeolocationControl();
          geolocationControl.addEventListener("locationSuccess", function(e){
            // 定位成功事件
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
//            alert("当前定位地址为：" + address);
          });
          geolocationControl.addEventListener("locationError",function(e){
            // 定位失败事件
            alert(e.message);
          });
          map.addControl(geolocationControl);
        })
      }
    }
  }
</script>

<style scoped>
  .map-main {
    position: relative;
    padding: 15px;
    padding-left: 300px;
    min-height: 500px;
  }

  .map-search {
    position: absolute;
    width: 300px;
    height: 100%;
    top: 10px;
    left: 10px;
    text-align: center;
  }
  .map-par{
    padding-left: 60px;
  }
  .map-con{
    width: 500px;
    height: 500px;
    padding-left: 60px;
  }
</style>
