<template>
  <div draggable="true" @dragstart.capture="dragstarthandle(item,index,$event)" @dragover.prevent="dragoverhandle(item,index,$event)"
           @drop.stop="drophandle(item,index,$event)" @click ="selcethandle(index)" @mouseenter="showDelete=true" @mouseleave="showDelete=false"
           style="position:relative;" class ="list_item">
            <div v-show="showDelete" class ="fix-delete" @click.stop="deleteCurItem(index)">删除</div>
        <div class="block" v-if="item.type==='shopBanner'">
            <!-- <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="150px">
            <el-carousel-item v-for="(carousel_item,carousel_index) in item.imgUrls" :key="carousel_index">
               <img :src="carousel_item.src" style="width:100%;height:100%;">
            </el-carousel-item>
            </el-carousel> -->
            <div class="opca" style="position:absolute;width:100%;height:100%;z-index:9;background:transparent;left:0px;top:0px;"></div>                        
            <vue-swiper :imgUrls="item.imgUrls" style="height:200px;" :stylesType="item.stylesType"></vue-swiper>
        </div>
    <div v-if="item.type===11" style="width:100%;background:#fff;overflow:hidden;">
        <div v-if="item.stylesType==0" :style="{height:item.shopId.length==0?'220px':''}">
            <!-- 当没有输入的情况 -->
            <div v-if="!item.shopId.length" style="width:100%;height:100%;display:flex;padding:10px 0px 0px 15px;justify-content:space-around;">
                <div style="">
                <img :src="defaultImg" style="width:161px;height:141px;">
                <div style="height:40px;width:98%;margin-top:0px;">
                        <p style="font-size:11px;transform:scale(0.9);transform-origin:top left;color:#999999;">商品名称商品名称商品名称商品名称商品名称</p>
                    <div style="display:flex;align-items:bottom;">
                            <span style="color:#fc4045;font-size:16px;">
                                400.00
                            </span>
                            <del style="font-size:12px;transform-origin:bottom left;transform:scale(0.8);color:#999999;margin-left:5px;">
                                ￥600.00
                            </del>
                           <img :src="shoplogo" style="width:15px;height:15px;align-self:bottom;transform:translate(20px,3px)"/>
                    </div>
                </div>
                </div>
                  <div>
                <img :src="defaultImg" style="width:161px;height:141px;">
                <div style="height:40px;width:98%;margin-top:0px;">
                        <p style="font-size:11px;transform:scale(0.9);transform-origin:top left;color:#999999;">商品名称商品名称商品名称商品名称商品名称</p>
                    <div style="display:flex;align-items:bottom;">
                            <span style="color:#fc4045;font-size:16px;">
                                400.00
                            </span>
                            <del style="font-size:12px;transform-origin:bottom left;transform:scale(0.8);color:#999999;margin-left:5px;">
                                ￥600.00
                            </del>
                           <img :src="shoplogo" style="width:15px;height:15px;align-self:bottom;transform:translate(20px,3px)"/>
                    </div>
                </div>
                </div>
            </div>
            <div v-else style="display:inline-block;">
              <div v-for="(choose_item,choose_index) in item.shopId" :key = "choose_index" style="position:relative;width:170px;display:inline-block;" class="styles1_shopList_item">
                <img :src="choose_item.src" style="width:150px;height:141px;">
                <div style="height:40px;width:100%;margin-top:0px;">
                        <p style="font-size:11px;transform:scale(0.9);transform-origin:top left;color:#999999;">商品名称商品名称商品名称商品名称商品名称</p>
                    <div style="display:flex;align-items:bottom;">
                            <span style="color:#fc4045;font-size:16px;">
                                    {{choose_item.goods_price}}
                            </span>
                            <del style="font-size:12px;transform-origin:bottom left;transform:scale(0.8);color:#999999;margin-left:5px;">
                               {{choose_item.goods_origin_price!="undefined"&&choose_item.goods_origin_price}}
                            </del>
                           <img :src="shoplogo" style="width:15px;height:15px;align-self:bottom;position:absolute;right:30px;"/>
                    </div>
                </div>
                </div>
                <!-- else结束 -->
            </div>

        </div>
        <!-- 下面是stylesType是1的情况 -->
              <div v-else-if="item.stylesType==1" style="background:#fff;width:92%;margin-left:2%;overflow:hidden;">
                  <!-- length==0? -->
                  <div v-if="!item.shopId.length">
                  <div style="overflow:hidden;display:flex;margin-top:8px;justify-content:space-around;height:80px;">
                      <img :src="defaultImg" style="width:70px;height:70px;">
                      <div style="width:250px;margin-left:10px;"> 
                        <div style="height:40px;width:80%;">
                                  <p style="font-size:11px;transform:scale(0.8);transform-origin:top left;color:#999999;">商品名称商品名称商品名称商品名称商品名称</p>
                              <div style="display:flex;align-items:bottom;margin-top:10px;">
                                      <span style="color:#fc4045;font-size:16px;">
                                          400.00
                                      </span>
                                      <del style="font-size:12px;transform-origin:bottom left;transform:scale(0.8);color:#999999;margin-left:5px;">
                                          ￥600.00
                                      </del>
                                    <img :src="shoplogo" style="width:15px;height:15px;align-self:bottom;transform:translate(110px,3px)"/>
                              </div>
                          </div>
                      </div>
                  </div>
                                    </div>
                  <!-- length===1 -->
             <div v-else>
                  <div style="overflow:hidden;display:flex;margin-top:8px;justify-content:space-around;height:80px;" v-for="(shopitem,shopindex) in item.shopId" :key ="shopindex">
                      <img :src="shopitem.src" style="width:70px;height:70px;">
                      <div style="width:250px;margin-left:10px;"> 
                        <div style="height:40px;width:80%;">
                                  <p style="font-size:11px;transform:scale(0.8);transform-origin:top left;color:#999999;">{{shopitem.goods_name}}</p>
                              <div style="display:flex;align-items:bottom;margin-top:25px;">
                                      <span style="color:#fc4045;font-size:16px;">
                                          {{shopitem.goods_price}}
                                      </span>
                                      <del style="font-size:12px;transform-origin:bottom left;transform:scale(0.8);color:#999999;margin-left:5px;">
                                        {{shopitem.goods_origin_price!="undefined"&&shopitem.goods_origin_price}}
                                      </del>
                                    <img :src="shoplogo" style="width:15px;height:15px;align-self:bottom;transform:translate(110px,3px)"/>
                              </div>
                          </div>
                      </div>
                  </div>
                                    </div>
                                    <!-- len -end -->
              </div>

    </div>
        <div  v-if="item.type ===17" style="width:100%;">
                    <div v-if="item.stylesType==0" style='display:flex;align-items:center;height:50px;' :style="{backgroundColor: item.backgroundColor==null? 'transparent': item.backgroundColor}">
                        <img :src="$store.state.shopLogo" style="margin-left:20px;width:29px;height:29px;border-radius:50%;">
                           <span style="font-size:12px;margin-left:5px;" :style="{color: item.color==null? 'transparent': item.color}">
                               {{$store.state.app_name}}
                           </span>
                    </div>
                    <div v-else style="width:100%;height:181px;">
                            <img :src="item.imgUrl" style="height:145px;width:100%;">
                            <div style="height:100%;width:100%;">
                                <div style="width:56px;height:56px;position:relative;display:inline-block;margin-top:-30px;margin-left:5px;">
                                        <img :src="$store.state.shopLogo" style="width:100%;height:100%;position:absolute;">
                                </div>
                                <span style="font-size:12px;;vertical-align:top;" :style="{color: item.color==null? 'transparent': item.color}">
                                    {{this.$store.state.app_name}}
                                </span>
                                <span style="float:right;margin-right:20px;font-size:12px;" :style="{color: item.color==null? 'transparent': item.color}">
                                    进店|分享
                                </span>
                            </div>
                    </div>
        </div>         
          <el-alert
            title="成功提示的文案"
            type="success" v-if="item.type===4">
         </el-alert>
         <div v-if="item.type==19"  :style="{backgroundColor:item.bgcolor}"  style= "height:30px;display:flex;position:relative;overflow:scroll-x;width:100%;min-height:24px;">
             <span class ="txtmodule-midline" v-if="item.stylesType==0">
             </span>
             <span :style="{color:item.color}"  v-if="item.stylesType==0" style="line-height:30px;padding: 0 10px;">
                 {{item.innertext}}
             </span>
             <span class="txtmodule-midline"  v-if="item.stylesType==0">
             </span >
            <span style="padding-left:20px;line-height:30px;" v-if="item.stylesType==1" :style="{color:item.color}">{{item.innertext}}</span>
            <span style="position:absolute;right:15px;font-size:10px;line-height:30px;" :style="{color:item.color}" v-if="item.stylesType==1">更多</span>
            <span style="position:absolute;right:5px;top:3px;" v-if="item.stylesType==1">></span>
             <span style="padding-left:20px;" v-if="item.stylesType==2" :style="{color:item.color}">{{item.innertext}}</span>
            <span style="position:absolute;right:15px;font-size:10px;" :style="{color:item.color}" v-if="item.stylesType==2">更多</span>
            <span style="position:absolute;right:5px;top:-3px;" v-if="item.stylesType==2" :style="{color:item.color}">></span>
            <div style="width:100%;border-top:1px solid #EDEDEE;position:absolute;bottom:3px;" v-if="item.stylesType==2"></div>
         </div>
         <div class="block" v-if="item.type===15">
            <div class ="coupen_box" v-show ="item.stylesType==0">
                <div class = "conpon_item" v-for="(coupon_item,coupon_index) in item.coupon" :key="coupon_index">
                    <div class= "coupen_item" >
                            <div class="coupen_item_left">
                                    <div class ="coupen_item_left_top">
                                       {{parseInt(coupon_item.offer)}}元
                                    </div>
                                    <div class = "coupen_item_left_middle">

                                    </div>
                                    <div class = "coupen_item_left_bottom">
                                            满{{coupon_item.money}}元
                                    </div>
                            </div>
                            <div class  ="coupen_item_right">
                                    领取
                            </div>
                    </div>
                </div>

            </div>
            <div v-show="item.stylesType==1">
                <div v-for="(couponItem,couponIndex) in item.coupon" :key ="couponIndex" class="coupon_type1_item">
                    <div class= "coupon_type1_item_size">
                        <div class ="coupon_type1_item_left">
                            <div>
                                ￥<span style="font-size:36px">{{parseInt(couponItem.offer)}}</span>
                            </div>
                            <div>
                                满{{couponItem.money}}减{{parseInt(couponItem.offer)}}元
                            </div>
                        </div>
                        <div class="coupon_type1_item_right">
                            <div>
                                <span>
                                    代金券
                                </span>
                                <span>
                                    领卷中心{{parseInt(couponItem.offer)}}元卷
                                </span>
                            </div>
                            <div>
                                <div>
                                    立即获取
                                </div>
                            </div>
                            <div>
                               {{couponItem.time1.substr(0,10)}}-{{couponItem.time2.substr(0,10)}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
         <div v-if="item.type==20" style="height:56px;">
                <div style="height:100%;width:100%;background:#fff;">
                    <img :src="item.searchSrc[item.stylesType]" style="width:336px;height:28px;margin-top:14px;margin-left:18px;">
                </div>
         </div>
        <!--  -->
            <div v-if="item.type=='shopText'" :style="{overflow: item.stylesType==1? 'hidden':'',position:'relative',minHeight:'38px',background:'#fff'}">
                <div v-if="item.stylesType==0" style="font-size:14px;line-height:18px;letter-spacing:1px;padding:10px;word-break:break;">
                    {{item.innertext}}
                </div>
                <div v-if="item.stylesType==1" ref="moveDom" style="left:0px;letter-spacing:1px;background:#fff;height:38px;line-height:38px;white-space:nowrap;font-size:13px;display:inline-block;position:absolute;">
                    {{item.innertext}}
                </div>
            </div>

        <!--  -->
  </div>
</template>
<script>
import defaultImg from '../../assets/images/shop/showlunbo1.png'
String.prototype.getByteLen = function() {  
    var len = 0;  
    for (var i=0; i<this.length; i++) 
    {
        if ((this.charCodeAt(i) & 0xff00) != 0)
            len ++;
        len ++;  
    }  
    return len;  
}
import vueSwiper from '../shop/common/vueSwiper'
    export default{
        name :"list-item",
        props:{
            index:{
                default:''                
            },            
            item:{
                required:false,
                default:''
            },
            draglist:{
                default:''
            },
            alleclect:{
                required :true,
                type:Array
            }
        },
        components:{
            vueSwiper
        },
        data(){
            return{
                   activeName: 'second',    //ele的
                   showDelete:false,   //展示删除
                   defaultImg:defaultImg,
                   shoplogo:require('../../assets/images/shop/logo/shop.png'),

                //    imgList:[require('../assets/images/1.png'),]
            }
        },
        methods:{
            dragstarthandle(item,index,e){
            e.dataTransfer.setData('data', index);
            },
            drophandle(item,index,e){          //item的接收
                // console.log('接收到了');
                var getIndex = e.dataTransfer.getData('data');
                // console.log(getIndex);
                if(getIndex.startsWith('origin')){
                  const i =   getIndex.substring(6);
                  this.draglist.splice(++index,0,this.alleclect[i])
                  return;
               }else {
                    const needpushitem= this.draglist.splice(getIndex,1)[0];
                    this.draglist.splice(index,0,needpushitem);    
               }
            },
            dragoverhandle(item,index,e){},
            selcethandle(index){
                this.$emit('select',index)
            },
            btn_delete_show(){
                    this.showDelete =!this.showDelete;
            },
            deleteCurItem(index){
                    this.$emit('select',index,true);
                    this.draglist.splice(index,1);
            }
        },
        watch:{
            draglist(){
                this.$emit('update:draglist',this.draglist);
            },
            // 'item.stylesType':{
            //     handle:function(){
            //     console.log('jinlaile');                    
            //         if(this.item.type==7){
            //         const el=   this.$refs.moveDom;
            //         el.style.left= `-${el.offsetWidth}px`;   
            //         console.log(el.offsetWidth);    
            //     }
            //     },
            //     deep:true
            // }
        },
        updated(){
            let watcherObj = {};
            const _this =this;
            if(this.$refs.moveDom){
            const el= _this.$refs.moveDom;                    

            // if(el.timer){
                clearInterval(el.timer);
            function move(){
                    const miniTime= 1;        
                if(_this.item.type=='shopText'&&_this.item.stylesType==1){
                //   console.log(el.getComputedStyle(_this.$refs.moveDom,null)['width']);  //auto
                    const final = el.offsetWidth;
                     el.timer =setInterval(()=>{
                        if(Math.abs(el.offsetLeft)<final||el.offsetLeft>0){
                            el.style.left=   el.offsetLeft-miniTime+'px'; 
                        }else{
                                clearInterval(el.timer);
                                el.style.left='375px';
                                move();
                        }
                    },60)
                }else{
                    if(el&&el.timer){
                        console.log(el.timer)
                        clearInterval(el.timer);
                    }
                }
            }         
            move();   
         }
                     }      
            // }
                     
    }
</script>
<style lang="scss" scoped>
.list_item{
    box-sizing: border-box !important;
        &:hover{
            border: 1px dotted #3587FC;
            
        }
}
.styles1_shopList_item{
    &:nth-of-type(2n+1){
        margin-left:15px;
    }
}
.coupon_type1_item{
    height:124px;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
   

        .coupon_type1_item_size{
            height: 104px;
            margin-top: 10px;
            width: 90%;
            margin-left:5%;
            background: #fef3f4;
            border: 1px solid #f3d9da;
            border-radius: 10px;
            display: flex;
            .coupon_type1_item_left{
                text-align: center;
                width: 106px;
                color: #000000;
                border-right: 1px solid #f3d9da;
                display: flex;
                flex-direction: column;
                align-content: center;
                position: relative;
                &:before{
                    position: absolute;
                    right: -10px;
                    width: 20px;
                    top: -10px;
                    content:'';
                    border-radius: 50%;
                    background: #EEECEC;
                    display: block;
                    height: 20px;
                    border: 1px solid #f3d9da;
                    border-top-color: transparent;
                    border-right-color: transparent;
                    transform: rotateZ(-45deg);
                }
                  &:after{
                    position: absolute;
                    right: -10px;
                    width: 20px;
                    bottom: -10px;
                    content:'';
                    border-radius: 50%;
                    background: #EEECEC;
                    display: block;
                    height: 20px;
                     border: 1px solid #f3d9da;
                    border-bottom-color: transparent;
                    border-right-color: transparent;
                    transform: rotateZ(45deg);
                }
               &>div{
                    font-size: 12px;
               }
                &>div:nth-of-type(1){
                    margin-top: 20px;
                }
               &>div:nth-of-type(2){
                   transform-origin: left;
                   transform: scale(0.8) translateX(-50%);
                    text-align: center;
                margin-left: 50%;
                width: 100px;
               }
            }
            .coupon_type1_item_right{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                    &>div:nth-of-type(1){
                        span{
                            font-size: 14px;
                        }
                        span:nth-of-type(1){
                            // margin-left: -10px;
                            color: #e1143a;
                            font-size: 12px;
                            display: inline-block;
                            transform: scale(0.8) ;
                            transform-origin: left;
                        }
                        span:nth-of-type(2){
                            display: inline-block;
                                transform: translateX(-12px) scale(0.9);
                                font-size: 12px;
                                transform-origin: left;
                        }
                    }
                      &>div:nth-of-type(2){
                          background: #e1143a;
                             font-size: 12px;
                            transform: scale(0.8) translateX(120px);
                            color: #fff;
                            text-align: center;
                            transform-origin: 50% 50%;
                            width: 90px;                            
                            height: 30px;
                            line-height: 30px;
                            border-radius: 15px;
                    }
                      &>div:nth-of-type(3){
                          color: #6c6869;
                           transform-origin: 50% 50%;
                         font-size: 12px;
                            transform: scale(0.75) translateX(-30px);   
                    }
            }
        
    }
}
.fix-delete{
    position: absolute;
    top: 0px;
    right: 10px;
    color: aqua;
    cursor: pointer;
    z-index: 999;
}
.txtmodule-midline{
        border-top: 1px solid rgb(196, 196, 196);
        // margin-top: 50%;
        transform: translateY(50%);
            flex:1;
}
.conpon_item{
    height: 100px;
    display: inline-block
}
.coupen_box{
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-around;    
        align-items: center;
                // height: 100px;   
                overflow: hidden;         
    .coupen_item{
        // overflow: hidden;
        text-align: center;
                color:red;
                height: 80%;
                margin-top: 10px;
                display: flex;
                align-items: center;
                background: #fff;
                border-radius: 10px;
                width:160px;
                background-color: #fef3f4;
                box-sizing: border-box;
                border: 1px solid #f3d9da;
                margin-left:16px;
        .coupen_item_left{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 120px;
            // border-right: 1px dashed grey;
            height: 100%;
            position: relative;
            color: #000000;
                &::before{
                    content: '';
                    padding: 10px;
                    position: absolute;
                    background: #eeecec;
                    border-radius: 50%;
                    right: -10px;
                    top: -10px;
                    border-bottom: 1px solid #f3d9da;
                }
                &::after{
                    content: '';
                    padding: 10px;
                    position: absolute;
                    background: #eeecec;
                    border-radius: 50%;
                    right: -10px;
                    bottom: -10px;
                    border-top: 1px solid #f3d9da;                    
                }
            .coupen_item_left_top{
                font-size: 500;
            }
            .coupen_item_left_middle{
                width: 50%;
                height: 3px !important;
                background: #000000;
            }
            .coupen_item_left_bottom{
              
            }
        }
        .coupen_item_right{
            // text-align: center;
            transform: translateX(-7px);
            writing-mode:tb-rl;
            width: 40px;
            font-size: 12px;color: #000000;
        }
    }
}
</style>
