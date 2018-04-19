<template>
  <el-dialog
    title="地图"
    :visible.sync="dialogVisible"
    width="906px"
    :before-close="handleClose"
    class="material">
    <div class="map-main">
      <div class="map-search">
        <el-input @blur="searchHandle" size="small" placeholder="请输入内容" v-model="mapKey">
          <template slot="append">
            <el-button @click="searchHandle" size="small">搜索</el-button>
          </template>
        </el-input>
        <div class="map-wrapper">
          <ul>
            <li class="map-list" @click="selectHandle(item, index)" v-for="(item, index) in mapList" :key=index>
              <div class="img-icon">
                <!-- <img src="http://open.map.qq.com/apifiles/2/4/89/theme/default/imgs/marker.png" alt=""> -->
              </div>
              <div class="img-right">
                <p>{{item.name}}</p>
                <p>{{item.address}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="map-par">
        <div id="container" class="map-con"></div>
      </div>
    </div>
    <div class="icon-footer">
      <el-button size="small" @click="handleClose">取 消</el-button>
      <el-button size="small" type="primary" @click="addMap">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import axios from 'axios';
  export default {
    props: {
      dialogMap: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        dialogVisible: this.dialogMap,
        mapKey: '',
        mapList:'',
        lat: 39.916527,
        lng: 116.397128,
        markers: [],
        SearchService:''
      };
    },
    watch: {
      dialogMap(val) {
        this.dialogVisible = val;
        this.initMap();
      },
    },
    mounted() {

    },
    methods: {
      searchHandle() {
        this.clearOverlays(this.markers);        
        this.SearchService.search(this.mapKey);
      },
      clearOverlays(overlays){
         var overlay;
        while (overlay = overlays.pop()) {
            overlay.setMap(null);
        }
      },
      selectHandle(){
        // clearOverlays(this.markers);
        // this.searchService.search(this.mapKey);
      },
      handleClose() {
        this.dialogVisible = false;
        this.$emit('close');
      },
      addMap() {
        this.dialogVisible = false;
        this.$emit('close');
        this.$emit('newMap', this.lat, this.lng);
      },
      initMap() {
        let vm = this;
        this.$nextTick(() => {
            const center = new qq.maps.LatLng(39.982163, 116.306070);
            var map = new qq.maps.Map(document.getElementById('container'), {
                center,
                zoom: 13
            });
            var marker = new qq.maps.Marker({
              map: map,
              position: center
            });    

            //获取标记的可拖动属性    
            qq.maps.event.addListener(marker, 'dragend', function(e) {
              var poi = marker.getPosition()
              vm.lat = poi.lat;
              vm.lng = poi.lng
            })
            marker.setDraggable(true);
            var latlngBounds = new qq.maps.LatLngBounds();
            //设置Poi检索服务，用于本地检索、周边检索
            this.SearchService = new qq.maps.SearchService({
                //设置搜索范围为北京
                location: "北京",
                //设置搜索页码为1
                pageIndex: 1,
                //设置每页的结果数为5
                pageCapacity: 5,
                //设置展现查询结构到infoDIV上
                panel: document.getElementById('infoDiv'),
                //设置动扩大检索区域。默认值true，会自动检索指定城市以外区域。
                autoExtend: true,
                //检索成功的回调函数
                complete: function(results) {
                    //设置回调函数参数
                    var pois = results.detail.pois;
                    vm.mapList = pois;
                    for (let i = 0, l = pois.length; i < l; i++) {
                        var poi = pois[i];
                        //扩展边界范围，用来包含搜索到的Poi点
                        latlngBounds.extend(poi.latLng);
                        var marker = new qq.maps.Marker({
                            map: map,
                            position: poi.latLng
                        });
                        marker.setVisible(true);                       
                        marker.setClickable(true)
                        vm.markers.push(marker);                      
                        qq.maps.event.addListener(marker, 'click', function(e) {
                          console.log(e)
                          vm.clearOverlays(vm.markers);        
                          var center = new qq.maps.LatLng(e.latLng.lat, e.latLng.lng)
                          map = new qq.maps.Map(document.getElementById('container'), {
                              center,
                              zoom: 15
                          });
                          var marker = new qq.maps.Marker({
                              map: map,
                              position: e.latLng
                          });
                          vm.lat = e.latLng.lat;
                          vm.lng = e.latLng.lng;
                        })
                    }
                    //调整地图视野
                    map.fitBounds(latlngBounds);
                },
                //若服务请求失败，则运行以下函数
                error: function() {
                   vm.$message({
                     message:"搜索出错了",
                     type: 'error'
                   })
                }
            });
        });
      },
    },
  };
</script>

<style scoped>
  .map-main {
    position: relative;
    padding: 15px;
    padding-left: 300px;
    min-height: 500px;
  }
  .img-icon{
    position: absolute;
    left: 5px;
    top: 10px;
    width: 25px;
    display: inline-block;
    height: 30px;
    background-image: url('http://open.map.qq.com/apifiles/2/4/89/theme/default/imgs/marker.png');
    background-position: 0 0;
  }
  .map-list{
    height: 50px;
    text-align: left;
    margin-top: 10px; 
  }
  li{
    cursor: pointer;
    position: relative;
    border-top: 1px solid #f4f4f4;
  }
  .img-right{
    font-size: 12px;
    text-align: center;
    margin-left: 35px;
  }
  .img-right p{
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .map-search {
    position: absolute;
    width: 300px;
    height: 100%;
    top: 10px;
    left: 10px;
    text-align: center;
  }
  .map-wrapper{
    width: 100%;
    height:490px;
    margin-top: 5px;
    border: 1px solid gray;
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
