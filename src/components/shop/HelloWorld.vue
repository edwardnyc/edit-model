<template>
  <div style="background:#eeecec;display:flex; align-items:top;justify-content:space-between;width:100%;height:100%;position:relative;">
    <!-- <Uploadimg  :dialogImages="dialogImages" @close="closeImages"/> -->
    <images-material :dialogImages="dialogImages" @close="closeImages" @lunboChangeImg="lunboChangeImg"/>
    <choose-coupon  :alert_coupon='alert_coupon' @close="closecoupon" @couponChange="couponChange"></choose-coupon>
    <choose-title @titleChange="titleChange" :showTitle="showTitle"></choose-title>
    <ware-alert :ware='ware' @close="closeware"  @postImgs='postImgs'></ware-alert>
    <lunbo-type :showLunboType="showLunboType" @lunboChange="lunboChange"></lunbo-type>
    <search-type @showSearchStyle="showSearchStyle" :showSearch="showSearch"></search-type>
    <show-shop-head @changeShopHead ="changeShopHead" :showShopHead ='showShopHead'></show-shop-head>
    <shop-list-choose :showShopHead='shopListShow' @changeShopHead ="changeShopListHead"></shop-list-choose>
    <alert-coupon :showShopHead="couponStylesType" @changeShopHead='changeCoupon'></alert-coupon>
    <!-- 下面的是商品头部的 -->
    <images-material :dialogImages="showuploadHead" @close="showuploadHead=false" @lunboChangeImg="shopHeaderUploadImg"/>
    <!--  下面是图片列表的-->
    <images  :dialogImages="showImages" @close="showImages=false" @lunboChangeImg="imagesUploadImg"/>
    <alert-images :showSearch ="imagesAlert" @showSearchStyle="imagesChange"></alert-images>
    <!-- 下面的是图文列表 -->
    <alert-image :showSearch ="imagesTxtAlert" @showSearchStyle="imagesTxtChange"></alert-image>
    <!--  -->
    <alert-link :dialogFormVisible="dialogFormVisible" @linked ="linked"></alert-link>  
    <!--  -->
    <alert-tye  :showShopHead="typeAlert" @changeShopHead="changeType"/>
    <!--  -->
    <div  style="position:absolute;left:30%;top:800px;width:375px;display:flex;justify-content:space-between;">
        <button class='pub_hover' style="top:-300px;left:300px;width:100px;height:40px;border-radius:5px;background-color: #fff;color:#2f85ff;border:1px solid #2f85ff;"
             @click="savemodel">保存</button>
        <button class='pub_hover' style="top:0px;left:400px;width:100px;height:40px;border-radius:5px;background-color: #fff;color:#2f85ff;border:1px solid #2f85ff;" 
             @click="publish">预览</button>
        <button class='pub_hover' style="top:0px;left:500px;width:100px;height:40px;border-radius:5px;background-color: #fff;color:#2f85ff;border:1px solid #2f85ff;"
             @click="getlist">发布</button>
    </div>
    <div class="top_header" style="position:absolute;width:100%;height:47px;background:#fff;"></div>
    <div class="mid_area" style="position:absolute;width:10px;height:100%;background:#fff;right:420px;"></div>
        <div  v-if="draglist.length!==0" style="position:absolute;right:0px;width:420px;height:48px;" >
              <span style="line-height:48px;color:#595961;font-size:19px;">
                    组件设置
              </span>
              <span style = "font-size:10px;color:#c4c4c4;padding-left:20px" v-if="checknum>-1">
                  {{draglist[checknum].text}}
              </span>
        </div>
    <div class= "main-content" >
        <div class="opotions-box" >
          <div class="ports">
            <div class= "btn-box" >
              <button :class="{'gBtnactive':gActive==1}" @click="()=>{gActive=1}">组件</button>
              <button :class="{'gBtnactive':gActive==2}" @click="()=>{gActive=2}">页面</button>
            </div>
            <div style="width:100%;text-align:center;color:#595961">组件库-拖拽使用</div>
            <div class= "tags-content" v-show ="gActive===1">
              <div v-for="(every,i) in all" :key="i"  class="tag-item">
                      <img v-if="every.img" :src='every.img' style="width:100%;height:70%;"
                       @click="lipush(every)" draggable="true"
                         @dragstart="dragstarthandle(every,`origin${i}`,$event)">
                      <span v-if="every.text" style="user-select:none;line-height:30px;">{{every.text}}</span>
              </div>
            </div>
            <div v-show="gActive===2">
                   <ul>
                     <li v-for="(page,pagenum)  in Object.keys(pages)" :key="pagenum" style="cursor:pointer;" @click="changepage(page)"
                     :style="{color: page==nowpage? 'blue' :''}" >编辑器的第{{+page+1}}页{{page==nowpage?'（正在编辑）':''}}</li>
                    </ul>
                    <button>btn</button>
            </div>
          </div>
       </div>
        <div  class= "drag-box" @drop.self="boxDropHandle($event)" @dragover.prevent="dragoverhandle()">
          <!-- <div style="height:30px;background:black;color:#fff;text-align:center;potition:absolute;user-select:none;">标题</div> -->
          <img :src="phoneHeader"  style="width:100%;margin:0px;user-select:none;" draggable='false' ondragstart="return false;">
        <list-item v-for="(item,index) in draglist" :key ='index' :item='item' :alleclect="all" :index="index"
         @select="select" :draglist.sync="draglist" :class ="[checknum==index ?  'active':'','drag-item']"></list-item>
       </div>
    </div>
     <div class="setting-box" >
        <!-- <div class="setting-title" v-if="draglist.length!==0">
              <span>
                    组件设置
              </span>
              <span style = "font-size:10px;vertical-align:bottom;color:#c4c4c4;padding-left:20px" v-if="checknum>-1">
                  {{draglist[checknum].text}}
              </span>
        </div> -->
          <div class= "config-box">
            <!--    轮播图·组件 -->
            <div v-if = "checknum>-1&&draglist[checknum].type==='shopBanner'">
                  <!-- <img src='../../assets/images/app6.png' > -->
                  <div style = "width:100%;height:200px;background:#fff;display:flex;justify-content:center;align-items:center;border-top-left-radius:3px;border-top-right-radius:3px;border :1px solid #e3e2e5;">
                 <img :src='draglist[checknum].imgUrls[0].src||default_lunbo_img' style = "width:90%;height:90%;">
                  </div>
                 <button  style="width:100%;border-radius:5px;border:1px solid #e3e2e5;border-top:none;height:30px;background:#fff;border-top-left-radius:0px;border-top-right-radius:0px;padding:0 1px;margin-left:-0.0%;height:46px;line-height:46px;"
                 @click="showLunboType =true">修改样式</button>
                  <div class="img-item" v-for="(img_item,img_index) in draglist[checknum].imgUrls" :key = 'img_index'>
                        <div class="item-title">
                              <span style ="float:left;margin-left:10px;color:#595961;line-height:30px;">图片{{img_index+1}}</span>
                              <span @click="deleteCurItemImg(img_index)" style="float:right;margin-right:10px;color:#2f85ff;cursor:pointer;line-height:30px;">删除</span>
                        </div>
                        <div style="display:flex;justify-content:space-around;position:relative;margin-top:20px;">
                            <span style="font-size:12px;align-self:center">选择图片</span>
                            <img src='../../assets/images/app6.png' style="width:100px;height:60px;border-radius:3px;" v-if="draglist[checknum].imgUrls[0].src=='../../assets/images/app1.png'">
                            <img :src='img_item.src' style="width:120px;height:60px;border-radius:3px;border:1px solid #e3e2e5;"  v-else>
                            <span class="advise" style="position:absolute;">"建议尺寸：750px*360px"</span>
                            <!-- img_item.src||require("../../assets/images/app1.png") -->
                            <span @click="showdialog(img_index)"
                            style="cursor:pointer;font-size:12px;border:1px solid #e3e2e5;border-radius:2px;align-self:center;width:103px;height:38px;borde-radius:4px;text-align:center;line-height:38px;">上传图片</span>
                        </div>
                        <div style="margin-top:55px;margin-left:16px;">
                             <span  style="float:left;margin-left:0px;height:38px;line-height:38px;color:#595961">图片链接</span>
                             <span @click="chooseLink(img_index)" style="text-align:center;width:103px;line-height:38px;color:#595961;height:38px;font-size:12px;cursor:pointer;border:1px solid #e3e2e5;border-radius:2px;float:left;margin-left:40px;">选择链接</span>
                        </div>
                  </div>
                   <div @click="addimg" style="border:1px solid rgb(237, 237, 237);border-radius:5px;height:90px;display:flex;align-items:center;background:#fff;">
                          <span style="font-size:12px;border:1px solid #e3e2e5;cursor:pointer;margin-left:10px;width:103px;height:38px;text-align:center;line-height:38px;color:#595961">添加图片</span>
                          <span style="font-size:16px;color:#999999;float:right;transform:scale(0.6,0.6) translateX(40px);">最多十张，上下拖动可排序</span>
                    </div>
                  <button class="lunbo-submit">提交</button>
            </div>

            <!-- 店铺头部 -->
                    <div v-if ="checknum>-1&&draglist[checknum].type===3">
                      <img src='../../assets/images/app1.png' style = "width:100%;height:200px;">
                      <button  style="width:100%;border-radius:5px;border:1px solid #EDEDED;height:30px;background:#fff;">修改样式</button>
                        <div class="img-item" >
                              <div class="item-title">
                                    <span style ="float:left;margin-left:10px;">图片</span>
                              </div>
                              <div style="display:flex;justify-content:space-around;margin-top:10px;">
                                  <span style="font-size:12px;align-self:center">选择图片</span>
                                  <img src='../../assets/images/app1.png' style="width:100px;height:60px;">
                                  <span @click="showdialog" style="cursor:pointer;font-size:12px;border:1px solid #EDEDED;border-radius:2px;align-self:center;transform:scale(0.75,0.75)">上传图片</span>
                              </div>
                              <div>
                                    <span >名称颜色</span>
                                    <el-color-picker v-model="picker_color" size="medium" show-alpha ></el-color-picker>
                              </div>
                        </div>
                        <div @click="addimg" style="border:1px solid rgb(237, 237, 237);border-radius:5px;height:40px;display:flex;align-items:center;">
                                <span style="font-size:12px;border:1px solid rgb(237, 237, 237);cursor:pointer;margin-left:10px;">添加图片</span>
                                <span style="font-size:12px;color:#4c4c4c;float:right;transform:scale(0.6,0.6) translateX(40px);">最多十张，上下拖动可排序</span>
                        </div>
                        <button class="lunbo-submit">提交</button>
                  </div>
                  <!--       标题 -->
                     <div v-if ="checknum>-1&&draglist[checknum].type===19">
              <div  style="width:100%;height:80px;border:1px solid #EDEDEE;border-radius:5px;background:#fff">
                <div style="width:100%;height:40px;">
                  <img :src="draglist[checknum].typeUrls[draglist[checknum].stylesType]" style="width:100%;height:100%;" ondragstart='return false'>
                </div>
                <div style="width:100%;border-top:1px solid #EDEDEE;line-height:30px;text-align:center;cursor:pointer;" @click=" showTitle = true ">
                      修改样式
                </div>
            </div>

            <div style="width:100%;height:200px;background:#fff;border-radius:5px;margin-top:10px;padding-left:5px;border:1px solid #EDEDEE;">
                <ul style="overflow:hidden;">
                  <li style="margin-top:30px;">
                      <span style="display:inline-block;width:80px;font-size:14px;">
                            标题名称
                      </span>
                      <input type="text" style="border:1px solid #EDEDEE;height:35px;padding-left:5px;display:inline-block;width:170px;" onfocus="this.style.borderColor = '#4392F9'" onblur="this.style.borderColor='#EDEDEE'"
                       v-model.lazy="draglist[checknum].innertext" @input='inputhandle' class="textmodule_input" />
                  </li>
                  <li style="display:flex;align-items:center;">
                    <span style="display:inline-block;width:80px;padding-top:8px;font-size:14px;">
                          名称颜色
                    </span>
                    <div style="display:flex;align-items:center;border:1px solid #EDEDEE;margin-left:4px;margin-top:10px;width:220px;justify-content:flex-end;">
                        <span>
                        {{draglist[checknum].color}}
                        </span>
                       <el-color-picker v-model="draglist[checknum].color" size="medium" show-alpha ></el-color-picker>
                    </div>
                  </li>
                     <li style="display:flex;align-items:center;">
                    <span style="display:inline-block;width:80px;padding-top:8px;font-size:14px;">
                          背景颜色
                    </span>
                    <div style="display:flex;align-items:center;border:1px solid #EDEDEE;margin-left:4px;margin-top:10px;width:220px;justify-content:flex-end;">
                        <span>
                        {{draglist[checknum].bgcolor}}
                        </span>
                       <el-color-picker v-model="draglist[checknum].bgcolor" size="medium" show-alpha ></el-color-picker>
                    </div>
                  </li>
                </ul>

            </div>
                  </div>
                  <!--      优惠卷 -->
                  <div v-if = "checknum>-1&&draglist[checknum].type===15" style="width:378px;">
                    <div  style="width:378px;height:163px;border-radius:5px;border:1px solid #e3e2e5;overflow:hidden;background:#fff;">
                       <img :src="defaultCoupon1" v-show="draglist[checknum].stylesType==0" style="width:96%;height:90px;margin-left:2%;margin-top:15px;margin-bottom:15px;">
                       <img :src="defaultCoupon2" v-show="draglist[checknum].stylesType==1" style="width:96%;height:90px;margin-left:2%;margin-top:15px;margin-bottom:15px;">
                       <div @click="couponStylesType=true" style="width:100%;height:46px;text-align:center;line-height:40px;color:#595961;font-size:14px;background:#fff;margin-top:-5px;border-top:1px solid #e3e2e5;cursor:pointer;">
                              修改样式
                       </div>
                    </div>
                   <div  style='width:100%;background:#fff;margin-top:40px;border-radius:5px;'>
                        <div style="overflow:hidden;">
                           <div  @click="choosediscount" style="text-align:center;;width:100px;height:38px;border:1px solid #e3e2e5;margin-left:20px;margin-top:20px;margin-bottom:30px;border-radius:4px;line-height:38px;">
                              选择优惠卷
                           </div>
                           <div v-for="(couponItem,couponIndex) in draglist[checknum].coupon" :key="couponIndex" style="height:38px;box-sizing:border-box;position:relative;width:90%;margin-left:5%;" class="coupon_item">
                              <div style="position:absolute;left:10px;line-height:38px;" v-if="couponItem.type==='折扣劵'">
                                    {{couponItem.offer}}折
                              </div>
                              <div style="position:absolute;left:10px;line-height:38px;" v-else>
                                    满{{couponItem.money}}减{{parseInt(couponItem.offer)}}
                              </div>
                              <div  @click="couponDelete(couponIndex)" style="cursor:pointer;;position:absolute;right:20px;color:#2f85ff;font-size:14px;line-height:38px;">
                                      删除
                              </div>
                           </div>
                        </div>
                        <div style="height:30px;"></div>
                    </div>
                  <button class="lunbo-submit">提交</button>
            </div>
          </div>

                                        <!-- 商品列表 -->
           <div v-if="checknum>-1&&draglist[checknum].type===11">
                <div style="background:#fff;margin:3%;border-radius:4px;border:1px solid #e3e2e5;" v-if="draglist[checknum].stylesType==0">
                    <div style="width:100%;height:262px;display:flex;justify-content:space-around;overflow:hidden;padding:10px;margin-left:8px;">
                         <div>
                          <img :src="defaultImg" style="width:170px;height:161px;">
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
                          <img :src="defaultImg" style="width:170px;height:161px;">
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
                <div style="font-size:14px;width:100%;height:46px;border-top:1px solid #EDEDEE;line-height:46px;text-align:center;cursor:pointer;user-select:none;color:#595961;" @click="shopListShow=true">
                      修改样式
                </div>
              </div>
                            <div  style="background:#fff;width:92%;margin-left:3%;overflow:hidden;" v-if="checknum>-1&&draglist[checknum].type===11&&draglist[checknum].stylesType==1">
                  <div style="overflow:hidden;display:flex;margin-top:20px;justify-content:space-around;height:110px;">
                      <img :src="defaultImg" style="width:90px;height:90px;">
                      <div style="width:250px;">
                        <div style="height:40px;width:80%;">
                                  <p style="font-size:11px;transform:scale(0.8);transform-origin:top left;color:#999999;">商品名称商品名称商品名称商品名称商品名称</p>
                              <div style="display:flex;align-items:bottom;margin-top:28px;">
                                      <span style="color:#fc4045;font-size:16px;">
                                          400.00
                                      </span>
                                      <del style="font-size:12px;transform-origin:bottom left;transform:scale(0.8);color:#999999;margin-left:5px;">
                                          ￥600.00
                                      </del>
                                    <img :src="shoplogo" style="width:15px;height:15px;align-self:bottom;transform:translate(90px,3px)"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div style="width:100%;height:46px;border-top:1px solid #EDEDEE;line-height:46px;text-align:center;cursor:pointer;user-select:none;color:#595961;" @click="shopListShow=true" >
                        修改样式
                  </div>
              </div>
                          <!-- commmon -->
                <div style="background:#fff;width:94%;margin:3%" v-show="draglist[checknum].stylesType==0||1">
                    <ul style="height:60px;">
                        <li style="float:left;;" :class="{shop_check:shopActive==0,shop_style_0:true}" @click="shopActive=0">自动选择商品</li>
                        <li style="float:left;margin-left:20px;" :class="{shop_check:shopActive==1,shop_style_0:true}" @click="shopActive=1">手动选择商品</li>
                    </ul>
                    <div style="height:70px;" v-show="shopActive==0">
                        <div @click="ware=true" style="width:103px;height:38px;border:1px solid #e3e2e5;color:#595961;text-align:center;line-height:38px;margin-left:10px;cursor:pointer;border-radius:3px;">
                            选择商品
                        </div>
                    </div>

                    <!-- item -->
                    <div style="color:#595961;margin-left:20px;height:60px;font-size:13px;" v-show="shopActive==1">
                商品分类   <el-select v-model="getValue.value1" placeholder="请选择" style="margin-left:10px;">
                      <el-option
                        v-for="item in axiosData.type"
                        size = small
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled">
                      </el-option>
                    </el-select>
                    </div>
                  <div style="color:#595961;margin-left:20px;height:60px;font-size:13px;" v-show="shopActive==1">
                商品排序   <el-select v-model="getValue.value2" placeholder="请选择" style="margin-left:10px;">
                            <el-option
                              v-for="item in axiosData.sort"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                              :disabled="item.disabled">
                            </el-option>
                          </el-select>
                  </div>
                  <div style="color:#595961;margin-left:20px;height:60px;font-size:13px;" v-show="shopActive==1">
             商品数目   <el-select v-model="getValue.value3" placeholder="请选择" style="margin-left:10px;">
                      <el-option
                        v-for="item in axiosData.num"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled">
                      </el-option>
                    </el-select>
                  </div>
                            <!-- item-end -->
                      <div style="width:94%;margin-left:3%;position:relative;" v-show="shopActive==0||1">
                          <div v-for="(shopitem,shopindex) in draglist[checknum].shopId" :key ="shopindex" class="ware-item" style="height:46px;display:flex;align-items:center;box-sizing:border-box;">
                              <img :src="shopitem.src" style="width:30px;height:30px;margin-left:10px;">
                              <span style="font-size:14px;color:#595961;margin-left:10px;">
                                  {{shopitem.goods_name}}
                              </span>
                              <span style="position:absolute;right:40px;color:#2f85ff;cursor:pointer;font-size:14px;" @click="deleteShopIdItem(shopindex)">
                                  删除
                              </span>
                          </div>
                          <div style="width:100%;height:20px;">

                          </div>
                      </div>
                    <!--  -->
                </div>
          </div>
            <!-- common-end -->
              <!-- 下面是stylesType等于1的情况 -->


              <!--  -->
                                        <!-- 17店铺头部 -->
<div v-if ="checknum>-1&&draglist[checknum].type===17">

    <div style="width:92%;height:252px;border:1px solid #e3e2e5;margin-left:4%;background:#fff;position:relative;box-sizing:border-box;" :style="{height:draglist[checknum].stylesType==1? '252px' : '85px'}">
                 <img :src='shopdefaultbg' style = "width:94%;height:90%;margin:3%" v-if="draglist[checknum].stylesType==1">
                 <img :src="shopdefaultbg1"  style = "width:94%;height:90%;margin:1% 3%" v-else>
    <div @click="showShopHead=true" style="width:100%;height:46px;text-align:center;line-height:46px;position:absolute;background:#fff;bottom:-46px;border:1px solid #e3e2e5;cursor:pointer;">修改样式</div>

    </div>
      <div style="background:#fff;height:210px;overflow:hidden;margin-top:50px;width:92%;margin-left:4%;" >
            <div style="display:flex;justify-content:space-around;position:relative;margin-top:20px;" v-if="draglist[checknum].stylesType==1">
                    <span style="font-size:12px;align-self:center">选择图片</span>
                    <img :src='draglist[checknum].imgUrl' style="width:120px;height:60px;" >
                    <span class="advise" style="position:absolute;">"建议尺寸：750px*360px"</span>
                    <span @click="showuploadHead = true"
                    style="cursor:pointer;font-size:12px;border:1px solid #e3e2e5;border-radius:2px;align-self:center;width:116px;height:46px;borde-radius:4px;text-align:center;line-height:46px;">上传图片</span>
                </div>
              <div>
                <div v-if="draglist[checknum].stylesType==0" style="display:flex;align-items:center;width:220px;height:40px;position:relative;border:1px solid #e3e2e5;margin-top:50px;margin-left:100px;justify-content:flex-end;">
                    <span style="position:absolute;left:-88px;font-size:14px;" >
                      背景颜色
                    </span>
                      <span>
                        {{draglist[checknum].backgroundColor}}
                      </span>
                      <el-color-picker v-model="draglist[checknum].backgroundColor" show-alpha size="medium" ></el-color-picker>
                  </div>
                  <div style="display:flex;align-items:center;width:220px;height:40px;position:relative;border:1px solid #e3e2e5;margin-top:50px;margin-left:100px;justify-content:flex-end;">
                    <span style="position:absolute;left:-88px;font-size:14px;">
                      名称颜色
                    </span>
                      <span style="">
                        {{draglist[checknum].color}}
                      </span>
                      <el-color-picker v-model="draglist[checknum].color" show-alpha size="medium"></el-color-picker>
                  </div>
              </div>

      </div>


            </div>
              </div>


                                              <!-- 21 -->

            <div v-if="checknum>-1&&draglist[checknum].type==21" style="height:790px;overflow-y:scroll;transform:translateX(0px);width:420px;margin-top:60px;">
                 <div style="width:94%;margin-left:3%;background:#fff;overflow:hidden;border:1px solid #e3e2e5;border-radius:5px;">
                    <img :src="lead1" style="width:98%;margin:1%;height:124px;border-radius:0px;" v-if="draglist[checknum].stylesType==0">
                    <img :src="lead2" style="width:98%;margin:1%;height:124px;border-radius:0px;" v-if="draglist[checknum].stylesType==1">
                    <img :src="lead3" style="width:98%;margin:1%;height:124px;border-radius:0px;" v-if="draglist[checknum].stylesType==2">
                    <img :src="lead4" style="width:98%;margin:1%;height:124px;border-radius:0px;" v-if="draglist[checknum].stylesType==3">
                    <img :src="lead5" style="width:98%;margin:1%;height:124px;border-radius:0px;" v-if="draglist[checknum].stylesType==4">
                    <img :src="lead6" style="width:98%;margin:1%;height:124px;border-radius:0px;" v-if="draglist[checknum].stylesType==5">
                    <div @click='imagesAlert=true' style="width:100%;border-top:1px solid #e3e2e5;text-align:center;height:40px;line-height:40px;cursor:pointer;user-select:none;">
                          修改样式
                    </div>
                </div>
                <ul style="width:94%;margin-left:3%;font-size:14px;">
                    <li  style="background:#fff;margin-top:20px;">
                        <nav style="width:100%;text-indent:5px;height:35px;line-height:35px;background:#efefef;border:1px solid #e3e2e5;">
                            图片1
                        </nav>
                        <div style="display:flex;margin-top:20px;">
                              <div style="margin-left:20px;font-size:14px;margin-top:10px;">
                                选择图片
                              </div>
                              <div style="position:relative;">
                                  <img :src="this.draglist[this.checknum].imgUrls[0].src" style="border-radius:5px;margin-left:30px;width:100px;height:55px;">
                                    <div style="position:absolute;color:#999999;width:170px;left:28px;">
                                        建议尺寸：750px*194px
                                    </div>
                              </div>
                              <div  @click="showimgdialog(0)" style="cursor:pointer;;user-select:none;font-size:14px;background:#fff;text-align:center;width:116px;height:46px;line-height:46px;border:1px solid #e3e2e5;color:#595961;border-radius:5px;margin-left:20px;">
                              上传图片
                              </div>
                        </div>
                        <div style="display:flex;height:70px;margin-top:50px;">
                              <div style="color:#595961;margin-left:20px;margin-top:13px;">
                                            选择链接
                              </div>
                              <div @click="chooseLink(0)" style="cursor:pointer;;user-select:none;width:116px;height:46px;margin-left:30px;border-radius:5px;text-align:center;line-height:46px;border:1px solid #e3e2e5;color:#595961;">
                                              选择链接
                              </div>
                        </div>
                    </li> 
                    <li  style="background:#fff;margin-top:20px;" v-show ="[1,2,3,4,5].includes(draglist[checknum].stylesType)">
                        <nav style="width:100%;text-indent:5px;height:35px;line-height:35px;background:#efefef;border:1px solid #e3e2e5;">
                            图片2
                        </nav>
                        <div style="display:flex;margin-top:20px;">
                              <div style="margin-left:20px;font-size:14px;margin-top:10px;">
                                选择图片
                              </div>
                              <div style="position:relative;">
                                  <img :src="this.draglist[this.checknum].imgUrls[1].src" style="border-radius:5px;margin-left:30px;width:100px;height:55px;">
                                    <div style="position:absolute;color:#999999;width:170px;left:28px;">
                                        建议尺寸：750px*194px
                                    </div>
                              </div>
                              <div  @click="showimgdialog(1)" style="cursor:pointer;;user-select:none;font-size:14px;background:#fff;text-align:center;width:116px;height:46px;line-height:46px;border:1px solid #e3e2e5;color:#595961;border-radius:5px;margin-left:20px;">
                              上传图片
                              </div>
                        </div>
                        <div style="display:flex;height:70px;margin-top:50px;">
                              <div style="color:#595961;margin-left:20px;margin-top:13px;">
                                            选择链接
                              </div>
                              <div @click="chooseLink(1)" style="cursor:pointer;;user-select:none;width:116px;height:46px;margin-left:30px;border-radius:5px;text-align:center;line-height:46px;border:1px solid #e3e2e5;color:#595961;">
                                              选择链接
                              </div>
                        </div>
                    </li> 
                      <li  style="background:#fff;margin-top:20px;" v-show ="[2,3,4,5].includes(draglist[checknum].stylesType)">
                        <nav style="width:100%;text-indent:5px;height:35px;line-height:35px;background:#efefef;border:1px solid #e3e2e5;">
                            图片3
                        </nav>
                        <div style="display:flex;margin-top:20px;">
                              <div style="margin-left:20px;font-size:14px;margin-top:10px;">
                                选择图片
                              </div>
                              <div style="position:relative;">
                                  <img :src="this.draglist[this.checknum].imgUrls[2].src" style="border-radius:5px;margin-left:30px;width:100px;height:55px;">
                                    <div style="position:absolute;color:#999999;width:170px;left:28px;">
                                        建议尺寸：750px*194px
                                    </div>
                              </div>
                              <div  @click="showimgdialog(2)" style="cursor:pointer;;user-select:none;font-size:14px;background:#fff;text-align:center;width:116px;height:46px;line-height:46px;border:1px solid #e3e2e5;color:#595961;border-radius:5px;margin-left:20px;">
                              上传图片
                              </div>
                        </div>
                        <div style="display:flex;height:70px;margin-top:50px;">
                              <div style="color:#595961;margin-left:20px;margin-top:13px;">
                                            选择链接
                              </div>
                              <div @click="chooseLink(2)" style="cursor:pointer;;user-select:none;width:116px;height:46px;margin-left:30px;border-radius:5px;text-align:center;line-height:46px;border:1px solid #e3e2e5;color:#595961;">
                                              选择链接
                              </div>
                        </div>
                    </li> 
                    <li  style="background:#fff;margin-top:20px;" v-show ="3==draglist[checknum].stylesType">
                        <nav style="width:100%;text-indent:5px;height:35px;line-height:35px;background:#efefef;border:1px solid #e3e2e5;">
                            图片4
                        </nav>
                        <div style="display:flex;margin-top:20px;">
                              <div style="margin-left:20px;font-size:14px;margin-top:10px;">
                                选择图片
                              </div>
                              <div style="position:relative;">
                                  <img :src="this.draglist[this.checknum].imgUrls[3].src" style="border-radius:5px;margin-left:30px;width:100px;height:55px;">
                                    <div style="position:absolute;color:#999999;width:170px;left:28px;">
                                        建议尺寸：750px*194px
                                    </div>
                              </div>
                              <div  @click="showimgdialog(3)" style="cursor:pointer;;user-select:none;font-size:14px;background:#fff;text-align:center;width:116px;height:46px;line-height:46px;border:1px solid #e3e2e5;color:#595961;border-radius:5px;margin-left:20px;">
                              上传图片
                              </div>
                        </div>
                        <div style="display:flex;height:70px;margin-top:50px;">
                              <div style="color:#595961;margin-left:20px;margin-top:13px;">
                                            选择链接
                              </div>
                              <div @click="chooseLink(3)" style="cursor:pointer;;user-select:none;width:116px;height:46px;margin-left:30px;border-radius:5px;text-align:center;line-height:46px;border:1px solid #e3e2e5;color:#595961;">
                                              选择链接
                              </div>
                        </div>
                    </li> 
                </ul>
            </div>

                                        <!-- 20 -->
              <div v-if ="checknum>-1&&draglist[checknum].type===20" style="width:400px;height:120px;border:1px solid #EDEDEE;margin-left:5%;border-radius:5px;background:#fff;margin-top:60px;margin-right:10px;">
                <div style="height:70%;">
                  <img :src="draglist[checknum].searchSrc[draglist[checknum].stylesType]" style="width:80%;margin-left:10%;height:50px;margin-top:15px;">

                </div>
                <div style="width:100%;border-top:1px solid #EDEDEE;line-height:30px;text-align:center;cursor:pointer;" @click="showSearch=true">
                      修改样式
                </div>
            </div>

                                        <!-- 文字模块 -->
              <div v-if ="checknum>-1&&draglist[checknum].type==='shopText'" style="width:400px;height:300px;border:1px solid #EDEDEE;margin-left:5%;border-radius:5px;background:#fff;margin-top:60px;margin-right:10px;">
               <div style="width:100%;display:flex;margin-top:10px;border:10px solid transparent;">
                  <div class='radio-check'>
                      <input type='radio' name='test' id='test1' @click="draglist[checknum].stylesType=0" :checked='draglist[checknum].stylesType==0'/>
                      <label for='test1' @click="draglist[checknum].stylesType=0">平铺展示</label>
                  </div>
                  <div class='radio-check'>
                      <input type='radio' name='test' id='test2' @click="draglist[checknum].stylesType=1" :checked='draglist[checknum].stylesType==1'/>
                      <label for='test2' @click="draglist[checknum].stylesType=1">滚动字幕</label>
                  </div>
               </div>
                <div style="height:70%;position:relative;">
                      <textarea  class="text_area" v-model="draglist[checknum].innertext" @input="textareaHandle($event)">
                      </textarea>
                        <i style="position:absolute;right:20px;bottom:20px;">{{draglist[checknum].innertext.length}}/80</i>
                </div>

            </div>
                                        <!-- 22 -->
             <div v-if="checknum>-1&&draglist[checknum].type==22" style="height:790px;overflow-y:scroll;transform:translateX(0px);width:420px;margin-top:60px;">
                 <div style="width:94%;margin-left:3%;background:#fff;overflow:hidden;border:1px solid #e3e2e5;border-radius:5px;">
                    <!-- <img src="../../assets/images/login/login-bg.jpg" style="width:98%;margin:1%;height:124px;border-radius:0px;"> -->
                    <img :src="imgtxt1" v-if="draglist[checknum].stylesType==0" style="width:98%;margin:1%;height:124px;border-radius:0px;">
                    <img :src="imgtxt2" v-if="draglist[checknum].stylesType==1" style="width:98%;margin:1%;height:124px;border-radius:0px;">
                    <img :src="imgtxt3" v-if="draglist[checknum].stylesType==2" style="width:98%;margin:1%;height:124px;border-radius:0px;">
                    <img :src="imgtxt4" v-if="draglist[checknum].stylesType==3" style="width:98%;margin:1%;height:124px;border-radius:0px;">
                    <div @click='imagesTxtAlert=true' style="width:100%;border-top:1px solid #e3e2e5;text-align:center;height:40px;line-height:40px;cursor:pointer;user-select:none;">
                          修改样式
                    </div>
                </div>
                <ul style="width:94%;margin-left:3%;font-size:14px;">
                      <li  style="background:#fff;margin-top:20px;padding-bottom:25px;">
                          <nav style="width:100%;text-indent:5px;height:35px;line-height:35px;background:#efefef;border:1px solid #e3e2e5;">
                              图片1
                          </nav>
                          <div style="display:flex;margin-top:20px;">
                                <div style="margin-left:20px;font-size:14px;margin-top:10px;">
                                  选择图片
                                </div>
                                <div style="position:relative;">
                                    <img :src="draglist[checknum].imgUrls[0].src" style="border-radius:5px;margin-left:30px;width:100px;height:55px;">
                                      <div style="position:absolute;color:#999999;width:170px;left:28px;">
                                          建议尺寸：750px*194px
                                      </div>
                                </div>
                                <div  @click="showimgdialog(0)" style="cursor:pointer;;user-select:none;font-size:14px;background:#fff;text-align:center;width:116px;height:46px;line-height:46px;border:1px solid #e3e2e5;color:#595961;border-radius:5px;margin-left:20px;">
                                上传图片
                                </div>
                          </div>
                          <div style="display:flex;height:70px;margin-top:50px;">
                                <div style="color:#595961;margin-left:20px;margin-top:13px;">
                                              选择图片
                                </div>
                                <div @click="chooseLink(0)" style="cursor:pointer;;user-select:none;width:116px;height:46px;margin-left:30px;border-radius:5px;text-align:center;line-height:46px;border:1px solid #e3e2e5;color:#595961;">
                                                选择链接
                                </div>
                          </div>
                          <div style="display:flex;align-items:center;">
                                <div style="margin-left:20px;color:#595961">填写标题</div>
                                <input type="text" style="width:170px;height:44px;margin-left:30px;border:1px solid #e3e2e5;text-indent:10px;" v-model="titleObserver">
                          </div>
                          <div style="display:flex;margin-top:20px;">
                                <div style="margin-left:20px;color:#595961">填写内容</div>
                                <textarea  v-model="substanceObserver" style="width:170px;height:140px;margin-left:30px;border-radius:4px;resize:none;text-indent:10px;border:1px solid #e3e2e5;"></textarea>
                          </div>
                      </li> 
                       <li  style="background:#fff;margin-top:20px;padding-bottom:25px;" v-if="draglist[checknum].stylesType==3">
                          <nav style="width:100%;text-indent:5px;height:35px;line-height:35px;background:#efefef;border:1px solid #e3e2e5;">
                              图片2
                          </nav>
                          <div style="display:flex;margin-top:20px;">
                                <div style="margin-left:20px;font-size:14px;margin-top:10px;">
                                  选择图片
                                </div>
                                <div style="position:relative;">
                                    <img :src="draglist[checknum].imgUrls[1].src" style="border-radius:5px;margin-left:30px;width:100px;height:55px;">
                                      <div style="position:absolute;color:#999999;width:170px;left:28px;">
                                          建议尺寸：750px*194px
                                      </div>
                                </div>
                                <div  @click="showimgdialog(1)" style="cursor:pointer;;user-select:none;font-size:14px;background:#fff;text-align:center;width:116px;height:46px;line-height:46px;border:1px solid #e3e2e5;color:#595961;border-radius:5px;margin-left:20px;">
                                上传图片
                                </div>
                          </div>
                          <div style="display:flex;height:70px;margin-top:50px;">
                                <div style="color:#595961;margin-left:20px;margin-top:13px;">
                                              选择图片
                                </div>
                                <div @click="chooseLink(1)" style="cursor:pointer;;user-select:none;width:116px;height:46px;margin-left:30px;border-radius:5px;text-align:center;line-height:46px;border:1px solid #e3e2e5;color:#595961;">
                                                选择链接
                                </div>
                          </div>
                          <div style="display:flex;align-items:center;">
                                <div style="margin-left:20px;color:#595961">填写标题</div>
                                <input type="text" style="width:170px;height:44px;margin-left:30px;border:1px solid #e3e2e5;text-indent:10px;"
                                 v-model="draglist[checknum].imgUrls[1].title">
                          </div>
                          <div style="display:flex;margin-top:20px;">
                                <div style="margin-left:20px;color:#595961">填写内容</div>
                                <textarea  v-model="draglist[checknum].imgUrls[1].substance" style="width:170px;height:140px;margin-left:30px;border-radius:4px;resize:none;text-indent:10px;border:1px solid #e3e2e5;"></textarea>
                          </div>
                      </li> 
                   </ul>
              </div>
                                        <!-- 23 -->
              <div v-if ="checknum>-1&&draglist[checknum].type===23" style="width:400px;border:1px solid #EDEDEE;margin-left:5%;margin-top:60px;margin-right:10px;">                     
                    <div style="width:96%;margin-left:2%;margin-top:10px;border-radius:5px;background:#fff;">
                        <img  :src="type0" style="width:100%;height:134px;" v-if="draglist[checknum].stylesType==0">
                        <img  :src="type1" style="width:100%;height:134px;" v-if="draglist[checknum].stylesType==1">
                        <img  :src="type2" style="width:100%;height:134px;" v-if="draglist[checknum].stylesType==2">
                        <div @click="typeAlert=true"  style="width:100%;height:45px;line-height:45px;color:#595961;border-top:2px solid #e3e2e5;text-align:center;margin-top:-5px;user-select:none;">
                                    修改样式
                        </div>
                    </div>
                    <div style="width:96%;border-radius:5px;background:#fff;margin-left:2%;margin-top:20px;">
                        <header style="background:#efefef;width:100%;height:40px;line-height:40px;border:solid 1px #d9d9d9;border-top-left-radius:5px;border-top-right-radius:5px;">
                            <span style="font-size:12px;margin-left:20px;">
                                  第一行
                            </span>
                            <!-- <span>
                                  删除
                            </span> -->
                        </header>
                        <div  style="display:flex;position:relative;align-items:center;margin-top:20px;">
                              <img @click="showdialog(0)" :src="draglist[checknum].imgUrls[0].src" style="width:58px;height:58px;margin-left:30px;">
                              <input v-model="draglist[checknum].imgUrls[0].substance" maxlength="5" style="height:45px;width:116px;line-height:45px;border:1px solid #e3e2e5;margin-left:20px;border-radius:5px;color:#999999;font-size:14px;text-indent:5px;" placeholder="请输入文字"/>                      
                              <div @click="chooseLink(0)" style='color:#2f85ff;font-size:13px;position:absolute;right:20px;cursor:pointer;user-select:none;'>
                                 选择链接
                              </div>
                        </div>
                        <div style="display:flex;position:relative;align-items:center;margin-top:20px;">
                              <img  @click="showdialog(1)" :src="draglist[checknum].imgUrls[1].src" style="width:58px;height:58px;margin-left:30px;">
                              <input v-model="draglist[checknum].imgUrls[1].substance" maxlength="5" style="height:45px;width:116px;line-height:45px;border:1px solid #e3e2e5;margin-left:20px;border-radius:5px;color:#999999;font-size:14px;text-indent:5px;" placeholder="请输入文字"/>
                               <div @click="chooseLink(1)" style='color:#2f85ff;font-size:13px;position:absolute;right:20px;cursor:pointer;user-select:none;'>
                                 选择链接
                              </div>
                        </div>
                        <div style="display:flex;position:relative;align-items:center;margin-top:20px;">
                              <img  @click="showdialog(2)" :src="draglist[checknum].imgUrls[2].src" style="width:58px;height:58px;margin-left:30px;">
                              <input v-model="draglist[checknum].imgUrls[2].substance" maxlength="5" style="height:45px;width:116px;line-height:45px;border:1px solid #e3e2e5;margin-left:20px;border-radius:5px;color:#999999;font-size:14px;text-indent:5px;" placeholder="请输入文字"/>                    
                               <div @click="chooseLink(2)" style='color:#2f85ff;font-size:13px;position:absolute;right:20px;cursor:pointer;user-select:none;'>
                                 选择链接
                              </div>
                        </div>
                        <div style="display:flex;position:relative;align-items:center;margin-top:20px;" v-if="draglist[checknum].stylesType==1||draglist[checknum].stylesType==0">
                              <img  @click="showdialog(3)" :src="draglist[checknum].imgUrls[3].src" style="width:58px;height:58px;margin-left:30px;">
                              <input v-model="draglist[checknum].imgUrls[3].substance" maxlength="5" style="height:45px;width:116px;line-height:45px;border:1px solid #e3e2e5;margin-left:20px;border-radius:5px;color:#999999;font-size:14px;text-indent:5px;" placeholder="请输入文字"/>
                              <div @click="chooseLink(3)" style='color:#2f85ff;font-size:13px;position:absolute;right:20px;cursor:pointer;user-select:none;'>
                                 选择链接
                              </div>
                        </div>
                        <div style="display:flex;position:relative;align-items:center;margin-top:20px;" v-if="draglist[checknum].stylesType==0">
                              <img  @click="showdialog(4)" :src="draglist[checknum].imgUrls[4].src" style="width:58px;height:58px;margin-left:30px;">
                              <input v-model="draglist[checknum].imgUrls[4].substance" maxlength="5" style="height:45px;width:116px;line-height:45px;border:1px solid #e3e2e5;margin-left:20px;border-radius:5px;color:#999999;font-size:14px;text-indent:5px;" placeholder="请输入文字"/>
                              <div @click="chooseLink(4)" style='color:#2f85ff;font-size:13px;position:absolute;right:20px;cursor:pointer;user-select:none;'>
                                 选择链接
                              </div>
                        </div>
                        <div style="height:20px;">

                        </div>
                    </div>  

              </div>

                                        <!--  -->

  </div>
</template>
<script>
import animate from "animate.css";
import ListItem from "./list-item";
import { mapGetters } from "vuex";
import Uploadimg from "./common/uploadimg";
// import ImagesMaterial from '../edit/ImagesMaterial';
import ImagesMaterial from "../edit/imgupdate";
import images from "../edit/images";
import chooseCoupon from "../shop/common/chooseCoupon";
import wareAlert from "../shop/common/warealert";
import chooseTitle from "../shop/common/chooseTitle";
import lunboType from "../shop/common/lunboType";
import searchType from "../shop/common/searchType";
import showShopHead from "../shop/common/chooseShopHeader";
import alertCoupon from "../shop/common/alertCoupon";
import shopListChoose from "../shop/common/shopListChoose";
import alertImages from "../shop/common/alertimages";
import alertImage from '../shop/common/alerttxtimages'
import alertTye from "../shop/common/alertType";

import pg from "../../assets/images/shop/showlunbo2.png";
import alertLink from "./common/alert-link";
export default {
  name: "HelloWorld",
  components: {
    ListItem,
    Uploadimg,
    ImagesMaterial,
    images,
    chooseCoupon,
    wareAlert,
    chooseTitle,
    lunboType,
    searchType,
    showShopHead,
    shopListChoose,
    alertCoupon,
    alertImages,
    alertImage,
    alertLink,
    alertTye
  },
  data() {
    return {
      defaultCoupon1: require("../../assets/images/shop/alert/coupon1.png"),
      defaultCoupon2: require("../../assets/images/shop/alert/coupon2.png"),
      imgtxt1:require('../../assets/images/shop/alert/imgtxt1.png'),
      imgtxt2:require('../../assets/images/shop/alert/imgtxt2.png'),
      imgtxt3:require('../../assets/images/shop/alert/imgtxt3.png'),
      imgtxt4:require('../../assets/images/shop/alert/imgtxt4.png'),
      type0:require('../../assets/images/shop/alert/type0.png'),
      type1:require('../../assets/images/shop/alert/type1.png'),
      type2:require('../../assets/images/shop/alert/type2.png'),
      lead1:require('../../assets/images/shop/alert/图片导航样式1.png'),
      lead2:require('../../assets/images/shop/alert/图片导航样式2.png'),
      lead3:require('../../assets/images/shop/alert/图片导航样式3.png'),
      lead4:require('../../assets/images/shop/alert/图片导航样式4.png'),
      lead5:require('../../assets/images/shop/alert/图片导航样式5.png'),
      lead6:require('../../assets/images/shop/alert/图片导航样式6.png'),
      // img0:require('../../assets/images/shop/alert/'),
      imagesAlert: false,
      imagesTxtAlert: false,
      pages: { 0: [], 1: [] }, //多少张页面，
      nowpage: 0, //正在编辑第几个页面
      draglist: [], //最终的组件列表
      all: [
        {
          img: require("../../assets/images/shop/alllogo/corasul.png"),
          text: "轮播广告",
          stylesType: 0,
          type: "shopBanner",
          imgUrls: [
            {
              href: "www.baidu.com",
              src: require("../../assets/images/shop/showlunbo2.png"),
              link: "",
              id: 1,
              event: { name: "none", param: {} }
            }
          ]
        },
        {
          img: require("../../assets/images/shop/alllogo/shophead.png"),
          text: "商品模块",
          type: 11,
          shopId: [],
          stylesType: 0
        },
        {
          img: require("../../assets/images/shop/alllogo/shophead.png"),
          text: "店铺头部",
          type: 17,
          color: "rgba(0, 0, 0, 1)",
          backgroundColor: "rgba(255, 255, 255, 1)",
          imgUrl: require("../../assets/images/shop/alert/default.png"),
          stylesType: 0,
          logo: require("../../assets/images/shop/shophead1logo.png")
        },
        {
          img: require("../../assets/images/shop/alllogo/text.png"),
          text: "文字模块",
          type: "shopText",
          stylesType: 0,
          innertext: "dasdas",
          event: { name: "none", param: {} }
        },
        {
          img: require("../../assets/images/shop/alllogo/title.png"),
          text: "标题栏",
          type: 19,
          innertext: "请输入文字",
          color: "rgba(0, 0, 0, 1)",
          bgcolor: "rgba(255, 255, 255, 1)",
          stylesType: 0,
          typeUrls: [
            require("../../assets/images/shop/title1.png"),
            require("../../assets/images/shop/title2.png"),
            require("../../assets/images/shop/title3.png")
          ]
        },
        {
          img: require("../../assets/images/shop/alllogo/coupon.png"),
          text: "优惠卷",
          type: 15,
          propsArray: [],
          coupon: [
            {
              money: 10,
              offer: 200,
              time1: "213123",
              time2: "23112312",
              title: "免费领"
            }
          ],
          stylesType: 0
        },
        {
          img: require("../../assets/images/shop/alllogo/search.png"),
          type: 20,
          text: "搜索",
          stylesType: 0,
          searchSrc: [
            require("../../assets/images/shop/search1.png"),
            require("../../assets/images/shop/search2.png"),
            require("../../assets/images/shop/search3.png"),
            require("../../assets/images/shop/search4.png")
          ]
        },
        {
          img: require("../../assets/images/shop/alllogo/img.png"),
          type: 21,
          text: "图片导航",
          showNum: 1,
          stylesType: 0,
          imgUrls: [
            { src: require("../../assets/images/shop/alert/default.png") },
            { src: require("../../assets/images/shop/alert/default.png") },
            { src: require("../../assets/images/shop/alert/default.png") },
            { src: require("../../assets/images/shop/alert/default.png") }
          ]
        },
        {
          img: require("../../assets/images/shop/alllogo/imgtxt.png"),
          text: "图文列表",
          type: 22,
          imgUrls: [
            {
              src: require("../../assets/images/shop/alert/default.png"),
              title: "文字标题",
              substance: "内容"
            },
            {
               src: require("../../assets/images/shop/alert/default.png"),
              title: "文字标题",
              substance: "内容"
            }
          ],
          stylesType: 0
        },
        {
          img: require("../../assets/images/shop/alllogo/type.png"),
          text: "分类导航",
          stylesType: 0,
          type: 23,
          imgUrls: [
            {
               src: require("../../assets/images/shop/alert/default.png"),
              substance: "分类名称"
            },
            {
               src: require("../../assets/images/shop/alert/default.png"),
              substance: "分类名称"
            },
            {
               src: require("../../assets/images/shop/alert/default.png"),
              substance: "分类名称"
            },
            {
               src: require("../../assets/images/shop/alert/default.png"),
              substance: "分类名称"
            },
            {
               src: require("../../assets/images/shop/alert/default.png"),
              substance: "分类名称"
            }
          ]
        }
        //  {text:'更多组件'}
      ], //能点击的type列表
      checknum: -1, //选中的组件
      activeLink: 0,
      dialogFormVisible: false,
      dialogImages: false, //弹出框
      alert_coupon: false, // 优惠卷的alert
      ware: false, //展示
      gActive: 1, //组件button变蓝
      picker_color: "#409EFF", //   选择颜色
      lunboIndex: 0, //轮播选中第n个图
      imagesindex: 0,
      default_lunbo_img: require("../../assets/images/app1.png"), //默认轮播图片
      showTitle: false, //展示标题栏弹出框
      showLunboType: false, //展示轮播弹出框
      showSearch: false, //搜索框
      phoneHeader: require("../../assets/images/shop/phoneheader.png"), //手机头部
      shopdefaultbg: require("../../assets/images/shop/showhead2.png"),
      shopdefaultbg1: require("../../assets/images/shop/showhead1.png"),
      showShopHead: false, //店铺头部
      showuploadHead: false, //上传图片锁
      shopStylesType: false,
      showImages: false,
      couponStylesType: false,
      shopListShow: false,
      typeAlert: false,
      shoplogo: require("../../assets/images/shop/logo/shop.png"),
      defaultImg: require("../../assets/images/shop/alert/shopLIst1.png"),
      shopActive: 0,
      getValue: {
        value1: "",
        value2: "",
        value3: ""
      },
      axiosData: {
        sort: "",
        type: "",
        num: ""
      }
    };
  },
  computed: {
    hehe() {
      var _this = this;
      setTimeout(() => {
        console.log(this.lunboIndex);
      }, 2000);
      console.log(this.lunboIndex);
      return this.lunboIndex;
    },
    showNum() {},
    titleObserver: {
      get() {
        return this.draglist[this.checknum].imgUrls[0].title.length > 10
          ? this.draglist[this.checknum].imgUrls[0].title.slice(0, 10)
          : this.draglist[this.checknum].imgUrls[0].title;
      },
      set(val) {
        this.draglist[this.checknum].imgUrls[0].title = val.slice(0, 10);
      }
    },
    substanceObserver: {
      get() {
        return this.draglist[this.checknum].imgUrls[0].substance.length > 20
          ? this.draglist[this.checknum].imgUrls[0].substance.slice(0, 20)
          : this.draglist[this.checknum].imgUrls[0].substance;
      },
      set(val) {
        val = val.slice(0, 20);
        console.log(val);
        this.draglist[this.checknum].imgUrls[0].substance = val;
      }
    }
  },
  methods: {
    chooseLink(i) {
      this.activeLink = i;
      this.dialogFormVisible = true;
      console.log(this.dialogFormVisible);
    },
    linked(value) {
      console.log(value);
      if (value) {
        if (
          [21, 22, "shopBanner", 23].includes(this.draglist[this.checknum].type)
        ) {
          // this.draglist[this.checknum].imgUrls[this.activeLink] =value;
          Object.assign(
            this.draglist[this.checknum].imgUrls[this.activeLink],
            value
          );
        }
        console.log(this.draglist[this.checknum]);
      }
      this.dialogFormVisible = false;
    },
    couponChange(coupons) {
      console.log(coupons);
      this.draglist[this.checknum].coupon.length = 0;
      this.draglist[this.checknum].coupon = this.draglist[
        this.checknum
      ].coupon.concat(coupons);
      console.log(this.draglist[this.checknum].coupon);
    },
    lipush(item) {},
    dragstarthandle(item, index, e) {
      e.dataTransfer.setData("data", index);
    },
    select(i, lock) {
      if (lock) {
        console.log(this.draglist.length, i);
        if (this.draglist.length === i + 1) {
          this.checknum = i - 1;
          return;
        }
      }
      this.checknum = i;
    },
    boxDropHandle(e) {
      var getIndex = e.dataTransfer.getData("data");
      if (getIndex.length < 5) {
        console.log(this.draglist[getIndex]);
        this.draglist.push(JSON.parse(JSON.stringify(this.draglist[getIndex])));
        this.draglist.splice(getIndex, 1);
        // this.draglist[getIndex]
        return;
      }
      const i = getIndex.substring(6);
      this.draglist.push(JSON.parse(JSON.stringify(this.all[i])));
    },
    dragoverhandle() {},
    closeImages() {
      this.dialogImages = false;
    },
    closecoupon() {
      this.alert_coupon = false;
    },
    closeware() {
      this.ware = false;
    },
    showdialog(i) {
      this.lunboIndex = i;
      this.dialogImages = true;
    },
    showimgdialog(i) {
      this.imagesindex = i;
      this.showImages = true;
    },
    addimg() {
      if (this.draglist[this.checknum].imgUrls.length == 10) {
        this.$message("最多保存十张照片", "warn");
        return;
      }
      this.draglist[this.checknum].imgUrls.push(
        JSON.parse(JSON.stringify(this.draglist[this.checknum].imgUrls[0]))
      );
      this.draglist[this.checknum].imgUrls[
        this.draglist[this.checknum].imgUrls.length - 1
      ].id = this.draglist[this.checknum].imgUrls.length;
    },
    choosediscount() {
      this.alert_coupon = true;
    },
    deleteCurItemImg(i) {
      if (this.draglist[this.checknum].imgUrls.length == 1) {
        this.$message("最少保存一张照片", "error");
        return;
      }
      this.draglist[this.checknum].imgUrls.splice(i, 1);
    },
    lunboChangeImg(file) {
      // console.log(this.draglist[this.checknum].imgUrls[this.lunboIndex]);
      const imgSrc = this.$store.state.qiniu + "/" + file.file_path;
      this.draglist[this.checknum].imgUrls[this.lunboIndex].src = imgSrc;
    },
    shopHeaderUploadImg(file) {
      const imgSrc = this.$store.state.qiniu + "/" + file.file_path;
      console.log(this.draglist[this.checknum]);
      this.draglist[this.checknum].imgUrl = imgSrc;
    },
    imagesUploadImg(file) {
      const imgSrc = this.$store.state.qiniu + "/" + file.file_path;
      this.draglist[this.checknum].imgUrls[this.imagesindex].src = imgSrc;
    },
    inputhandle() {
      // console.log(this.draglist[this.checknum].innertext.length)
      if (this.draglist[this.checknum].innertext.length == 0) {
        this.draglist[this.checknum].innertext = "请输入文字";
      }
    },
    changepage(i) {
      console.log(i + "" + this.nowpage);
      this.pages[this.nowpage] = JSON.parse(JSON.stringify(this.draglist));
      this.draglist = this.pages[i];
      this.nowpage = i;
      this.checknum = -1;
    },
    beforeMount() {
      this.pages[0] = this.draglist;
    },
    titleChange(i) {
      this.draglist[this.checknum].stylesType = i;
      this.showTitle = false;
    },
    lunboChange(i) {
      console.log(i);
      if (typeof i == "number") {
        this.draglist[this.checknum].stylesType = i;
      }
      this.showLunboType = false;
    },
    showSearchStyle(i) {
      this.draglist[this.checknum].stylesType = i;
      this.showSearch = false;
    },
    LunboChange(i) {
      this.draglist[this.checknum].stylesType = i;
      this.showLunboType = false;
    },
    changeShopHead(i) {
      if (typeof i == "number") {
        this.draglist[this.checknum].stylesType = i;
      }
      this.showShopHead = false;
    },
    imagesChange(i) {
      if (typeof i == "number") {
        this.draglist[this.checknum].stylesType = i;
      }
      this.imagesAlert = false;
    },
        imagesTxtChange(i) {
      if (typeof i == "number") {
        this.draglist[this.checknum].stylesType = i;
      }
      this.imagesTxtAlert = false;
    },
    changeCoupon(i) {
      if (typeof i == "number") {
        this.draglist[this.checknum].stylesType = i;
      }
      this.couponStylesType = false;
    },
    changeType(i) {
      if (typeof i == "number") {
        this.draglist[this.checknum].stylesType = i;
        console.log(this.draglist[this.checknum]);
      }
      this.typeAlert = false;
    },
    changeShopListHead(i) {
      if (typeof i == "number") {
        this.draglist[this.checknum].stylesType = i;
      }
      this.shopListShow = false;
    },
    textareaHandle(e) {
      // console.log(e.target.value);
      if (e.target.value.length > 40) {
        e.target.value = e.target.value.substring(0, 80);
        //  console.log(e.target.value.length);
      }
    },
    postImgs(dict) {
      // **********************************
      // console.log(this.draglist[this.checknum])
      this.draglist[this.checknum].shopId.length = 0;
      this.draglist[this.checknum].shopId = this.draglist[
        this.checknum
      ].shopId.concat(dict);
      console.log(this.draglist[this.checknum].shopId);
    },
    deleteShopIdItem(i) {
      // console.log (this.draglist[this.checknum].shopId.length);
      this.draglist[this.checknum].shopId.splice(i, 1);
    },
    couponDelete(index) {
      let arr = this.draglist[this.checknum].coupon;
      (arr.length == 1 && index == 0) || arr.splice(index, 1);
    },
    couponDelete(index) {
      let arr = this.draglist[this.checknum].coupon;
      (arr.length == 1 && index == 0) || arr.splice(index, 1);
    },
    getauth() {
      this.$store
        .dispatch("getauth", {
          _token: this.$store.state._token,
          app_id: this.$store.state.app_id
        })
        .then(res => {
          console.log(res);
        });
    },
    getone() {
      this.$store
        .dispatch("geTone", {
          _token: this.$store.state._token,
          app_id: this.$store.state.app_id
        })
        .then(res => {
          console.log(res);
        });
    },
    getlist() {
      this.$store
        .dispatch("getList", {
          _token: this.$store.state._token,
          app_id: this.$store.state.app_id
        })
        .then(res => {
          console.log(res);
        });
    },
    savemodel() {
      const obj = {
        extEnable: true,
        extAppid: "wxde247627117344a1",
        directCommit: false,
        ext: {
          styles: [
            {
              index: {
                elements: this.pages[0]
              }
            }
          ]
        }
      };
      console.log(obj);
      this.$store
        .dispatch("savemodel", {
          _token: this.$store.state._token,
          app_id: this.$store.state.app_id,
          json: JSON.stringify(obj)
        })
        .then(res => {
          console.log(res);
        });
    },
    publish() {
      let pg = JSON.parse(JSON.stringify(this.pages[0]));
      pg.forEach((item, index) => {
        delete item.img;
        delete item.text;
        switch (item.type) {
          case 17:
            item.title = this.$store.state.app_name;
            item.guoxinLogo = this.$store.state.shopLogo;
            delete item.logo;
            if (item.stylesType == 0) {
              item.typesOf = "shopHeadSmall";
            } else {
              item.typesOf = "shopHeadBig";
            }
            break;
          case "shopText":
            item.content = item.innertext;
            delete item.innertext;
            break;
          case 11:
            item.shopId.forEach((item, index) => {
              item.id = index;
              delete item.check;
              var reg = /\s/gim;
              item.src = item.src.replace(reg, "");
            });
            break;
          case 22:
              // console.log(item);          
              if(item.stylesType!=3){
                item.imgUrls.length=1;
              }else{
                item.imgUrls.length=2;
              }
            case 21 :
            if (item.stylesType == 0) {
              item.imgUrls.length = 1;
            } else if (item.stylesType == 1) {
              item.imgUrls.length = 2;
            } else if (item.stylesType == 3) {
              item.imgUrls.length=4;
            } else {
              item.imgUrls.length = 3;
            }
            break;
            case 23:
              if(item.stylesType==2){
                item.imgUrls.length=3;
              }else if(item.stylesType==1){
                item.imgUrls.length=4;
              }
        }
            // console.log(item.imgUrls);       
            // console.log(item.type); 
        // if(item.type==17){

        // }
      });
      // console.log(pg[0]);
      const obj = {
        extEnable: true,
        extAppid: "wxde247627117344a1",
        directCommit: false,
        ext: {
          styles: [
            {
              index: {
                height: "100%",
                setNavigationBarTitle: "主页",
                bgImage:
                  "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
                elements: pg
              }
            }
          ]
        }
      };
      const releaseData = {
        app_id: this.$store.state.app_id,
        u_token: this.$store.state._token,
        json: JSON.stringify(obj)
      };
      // console.log(obj);
      this.$store.dispatch("releaselist", releaseData).then(res => {
        let { data, code, msg } = res.data;
        // console.log(res);
        var img = document.createElement("img");
        document.body.appendChild(img);
        console.log(res);
        img.src = this.$store.state.qiniu + "/" + res.data.data;
        img.style.width = "100px";
        img.style.height = "100px";
      });
    }
  },
  mounted() {
    this.changepage(0);
    window.heh = this;
  },
  watch: {
    draglist() {
      this.$store.commit("updateData", this.draglist);
    }
  }
};
</script>
<style scoped lang="scss">
* {
  padding: 0px;
  margin: 0px;
  font-family: MicrosoftYaHei;
  color: #595961;
  font-weight: 500;
}
.pub_hover:hover {
  background: rgb(47, 133, 255) !important;
  color: #fff !important;
  cursor: pointer;
}
.ware-item {
  border: 1px solid #e3e2e5;
  border-top: none;
}
.ware-item:nth-of-type(1) {
  border: 1px solid #e3e2e5;
}

.coupon_item {
  border: 1px solid #e3e2e5;
  border-top: none;
}
.coupon_item:nth-of-type(2) {
  border: 1px solid #e3e2e5;
}
.main-content {
  // border: 1px solid rgba(#4c4c4c,0.1);
  box-sizing: border-box;
  // float: left;
  // overflow: hidden;
  margin-top: 5vh;
  margin-left: 20px;
  height: 700px;
}
.opotions-box {
  float: left;
  width: 300px;
  height: 100%;
  margin-top: 50px;
  //  box-shadow: 0px 0px 9px 3px rgba(202, 194, 194, 0.4);
  // margin-right: 100px;
  .ports {
    width: 100%;
    .btn-box {
      width: 300px;
      display: flex;
      // justify-content: space-around;
      top: -0px;
      left: 20px;
      position: absolute;
      button {
        width: 69px;
        height: 47px;
        background: #fff;
        // border-radius: 30px;
        border: 0;
        position: relative;
        cursor: pointer;
        text-align: center;
        &:focus {
          border: unset;
          outline: none;
        }
      }
      .gBtnactive {
        color: #2f85ff;
        &::after {
          position: absolute;
          background-color: #2f85ff;
          content: "";
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 5px;
        }
        // color: #ffffff;
      }
    }
    .tags-content {
      display: flex;
      flex-wrap: wrap;
      .tag-item {
        background: #fff;
        text-align: center;
        display: inline-block;
        margin-top: 30px !important;
        margin: 0 auto;
        width: 135px;
        height: 110px;
        box-sizing: border-box;
        border: 1px solid #cccccc;
        border-radius: 5px;
        color: #595961;
        font-size: 12px;
        //  margin: 10px 10%
      }
    }
  }
}
.drag-box {
  background: #f5f5f5;
  & > :nth-child(2) {
    margin-top: -5px;
  }
  width: 375px;
  border: 1px solid rgba(#4c4c4c, 0.1);
  //  box-shadow:0px 0px 9px 3px rgba(202, 194, 194, 0.4);
  // border-right: none;
  // float: left;
  // margin-top: 30px;
  position: absolute;
  transform: translateY(80px);
  // right: 0px;
  left: 30%;
  height: 668px;
  overflow-y: scroll;
  .drag-item {
    width: 100%;
  }
}
.setting-box {
  // box-shadow:0px 0px 9px 3px rgba(202, 194, 194, 0.4);
  margin-top: 40px !important;
  overflow-y: scroll;
  margin-right: 2px;
  // float: right;
  // position: absolute;
  right: 0px;
  top: 100px;
  width: 420px;
  box-sizing: border-box;
  // border:1px solid rgba(#4c4c4c,0.1);
  // margin-right: 10px;
  border-radius: 5px;
  height: 80vh;
  // .setting-title{
  //   width: 80%;
  //   margin: 20px 10% 0;
  // }
  .config-box {
    width: 90%;
    margin: 20px 5% 0;
    .img-item {
      width: 100%;
      height: 252px;
      border: 1px solid #e3e2e5;
      font-size: 12px;
      border-radius: 5px;
      margin: 10px 0px;
      background: #fff;
      .item-title {
        height: 30px;
        overflow: hidden;
        background: rgb(238, 236, 236);
        // border: 1px solid #e3e2e5;
        border-bottom: none;
      }
    }
    .lunbo-submit {
      transform: translateX(-50%);
      margin-left: 50%;
      text-align: center;
      width: 100px;
      height: 40px;
      color: #2f85ff;
      border: 1px solid#2f85ff;
      border-radius: 4px;
      text-align: center;
      border: 1px solid#2f85ff;
      margin-top: 10px;
      cursor: pointer;
      background: #fff;
      &:focus {
        outline: none;
      }
    }
  }
}
.lunbo-submit {
  transform: translateX(-50%);
  margin-left: 50%;
  text-align: center;
  width: 100px;
  height: 40px;
  color: #2f85ff;
  border: 1px solid #2f85ff;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #2f85ff;
  margin-top: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
.active {
  border: 1px dashed #3587fc;
  box-sizing: border-box;
}

// @media screen and (max-width:1560px) {
//         .drag-box{
//           transform: translateX(-13%)
//         }
// }
.textmodule_input {
  border: 1px solid fuchsia;
}
.advise {
  width: 164px;
  height: 16px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 93px;
  letter-spacing: 0px;
  color: #999999;
  white-space: nowrap;
  // right:150px;
  left: 100px;
  top: 25px;
}
.shop_style_0 {
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  margin-top: 10px;
  margin-left: 10px;
  color: #595961;
}
.shop_check {
  color: #2f85ff;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 100%;
    display: block;
    height: 3px;
    background: #2f85ff;
  }
}
</style>
<style lang="scss" >
* {
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

.radio-check {
  position: relative;
  height: 35px;
  width: 120px;
}
.radio-check > input {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
}
.radio-check > label {
  position: absolute;
  left: 30px;
  line-height: 20px;
  top: 0px;
}
.radio-check > label:before {
  content: "";
  position: absolute;
  left: -30px;
  top: 0px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
.radio-check > label:after {
  content: "";
  position: absolute;
  left: -30px;
  top: 0px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 6px;
  margin-left: 6px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
.radio-check input[type="radio"]:checked + label:before {
  border-color: #0097ff;
}
.radio-check input[type="radio"]:checked + label:after {
  background: #0097ff;
}

.text_area {
  width: 382px;
  height: 200px;
  resize: none;
  margin-left: 8px;
  text-indent: 20px;
  letter-spacing: 1px;
  border-radius: 3px;
}
</style>

