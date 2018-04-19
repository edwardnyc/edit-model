<!--元素模板-->
<template>
  <div class="elementWrapper" :id="id" :class="{'ele-active': type !=8 && currentId === id}" :style="{
        bottom: type === 8 ? 0 : 'none',     
        top: type !== 8 ? position.top : 'none',
        left: type !== 8 ? position.left : 'none',
        transform: 'rotateZ(' + rotateY + 'deg)'
        }" @click.stop="writeCurrentInfo({id, type})" @mousedown="dragdownHandle(currentId,id)">
    <div @mousedown="p1Handle($event)" class="port port1"></div>
    <div @mousedown="p2Handle($event)" class="port port2"></div>
    <div @mousedown="p3Handle($event)" class="port port3"></div>
    <div @mousedown="p4Handle($event)" class="port port4"></div>
    <div @mousedown="p5Handle($event)" class="port port5"></div>
    <div @mousedown="p6Handle($event)" class="port port6"></div>
    <div @mousedown="p7Handle($event)" class="port port7"></div>
    <div @mousedown="p8Handle($event)" class="port port8"></div>
    <div @mousedown="p9Handle($event)" class="port port9"></div>
    <!-- 普通文本 -->
    <div v-if="type===1" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',minWidth:'40px',minHeight:'40px'}]" class="elementWrapper_main">
      <div class="element-contents text-item">
        <div class="element-item" v-html="content">
        </div>
      </div>
    </div>
    <!-- 普通图片 -->
    <div v-if="type===2" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',minWidth:'40px',minHeight:'40px'}]" class="elementWrapper_main">
      <div class="element-contents img-item">
        <div class="element-item">
          <img ondragstart="return false" :src="images" alt="" :style="{
            width: width,
            height: height
          }">
        </div>
      </div>
    </div>
    <!-- 普通图标 -->
    <div v-if="type===3" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',minWidth:'40px',minHeight:'40px'}]" class="elementWrapper_main">
      <div class="element-item">
        <div class="element-contents text-item">
          <i :class="content"></i>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div v-if="type===5" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',minWidth:'40px',minHeight:'40px'}]" class="elementWrapper_main">
      <div class="element-contents slider-item">
        <div class="element-item">
          <ol>
            <li v-for="(item, index) in imgUrls" :key="index" v-if="activeSliderImgIndex===index">
              <img ondragstart="return false" :src="item.img" :style="{width: width,height: height}">
            </li>
          </ol>
          <div class="point">
            <ol>
              <li key="ss" :style="{backgroundColor: active}"></li>
              <li v-for="(item, index) in imgUrls" :key="index" v-if="index!=0" :style="{backgroundColor: pointColor}"></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 视频 -->
    <div v-if="type===9" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',minWidth:'40px',minHeight:'40px'}]" class="elementWrapper_main">
      <div class="element-contents video-item" style="width: 100%;height: 100%;">
        <div class="element-item" style="background-color: rgb(253, 227, 167);width: 100%;height: 100%;position: relative;">
          <img ondragstart="return false" src="http://zhan.console.weimob.com/assets/images/video-play.svg" alt="" :style="{
                    width: '60px',
                    height: '60px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }">
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div v-if="type===4" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',minWidth:'40px',minHeight:'40px'}]" class="elementWrapper_main">
      <div class="element-contents img-item">
        <div class="element-item">
          <div class="map" :id="mapId" :style="{width: width,height: height}"></div>
        </div>
      </div>
    </div>
    <!-- 表单地点 -->
    <div v-if="type=== 'threeLinkage'" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',overflow: 'hidden'}]" class="elementWrapper_main">
      <div class="element-contents  text-item" :style="{display:'flex', alignItems:'center',height:'100%',boxSizing: 'border-box'}">
        <el-col :span="6">
          <div class="element-item">
            <span>{{content}}</span>
            <i class="el-icon-arrow-down"></i>
          </div>
        </el-col>
        <el-col :span="2">
          省
        </el-col>
        <el-col :span="6">
          <div class="element-item">
            <span>{{content}}</span>
            <i class="el-icon-arrow-down"></i>
          </div>
        </el-col>
        <el-col :span="2">
          市
        </el-col>
        <el-col :span="6">
          <div class="element-item">
            <span>{{content}}</span>
            <i class="el-icon-arrow-down"></i>
          </div>
        </el-col>
        <el-col :span="2">
          区
        </el-col>
      </div>
    </div>
    <!-- 表单时间
      -->
    <div v-if="type=== 'date'" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',overflow: 'hidden'}]" class="elementWrapper_main">
      <div class="element-contents  text-item" :style="{display:'flex', alignItems:'center', height:'100%',boxSizing: 'border-box'}">
        <el-col :span="6">
          <div class="element-item">
            <span>{{content}}</span>
            <i class="el-icon-arrow-down"></i>
          </div>
        </el-col>
        <el-col :span="2">
          年
        </el-col>
        <el-col :span="6">
          <div class="element-item">
            <span>{{content}}</span>
            <i class="el-icon-arrow-down"></i>
          </div>
        </el-col>
        <el-col :span="2">
          月
        </el-col>
        <el-col :span="6">
          <div class="element-item">
            <span>{{content}}</span>
            <i class="el-icon-arrow-down"></i>
          </div>
        </el-col>
        <el-col :span="2">
          日
        </el-col>
      </div>
    </div>
    <div v-if="type === 'text'" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',overflow: 'hidden'}]" class="elementWrapper_main">
      <div class="element-contents text-item" :style="{display:'flex', alignItems:'center', height:'100%',boxSizing: 'border-box'}">
        <div class="element-item" v-html="content">
        </div>
      </div>
    </div>
    <!-- 表单手机号 -->
    <div v-if="type === 'phone'" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',overflow: 'hidden'}]" class="elementWrapper_main">
      <div class="element-contents text-item" :style="{display:'flex', alignItems:'center', height:'100%',boxSizing: 'border-box'}">
        <div class="element-item" v-html="content">

        </div>
      </div>
    </div>
    <!-- 微信号    -->
    <!-- <div v-if="type===16" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',overflow: 'hidden'}]" class="elementWrapper_main">               
          <div class="element-contents text-item" :style="{display:'flex', alignItems:'center',height:'100%',boxSizing: 'border-box'}">
            <div class="element-item" v-html="content">
          </div>
        </div>
      </div> -->
    <!-- 邮箱 -->
    <div v-if="type=== 'mail'" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',overflow: 'hidden'}]" class="elementWrapper_main">
      <div class="element-contents text-item" :style="{display:'flex', alignItems:'center', height:'100%',boxSizing: 'border-box'}">
        <div class="element-item" v-html="content">
        </div>
      </div>
    </div>
    <!-- 单选 -->
    <div v-if="type==='select'" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box'}]" class="elementWrapper_main">
      <div class="element-contents text-item" :style="{display:'flex', alignItems:'center', height:'100%',boxSizing: 'border-box'}">
        <div class="element-item" style="width:100%; position: relative">
          <span>{{content}}</span>
          <i class="el-icon-arrow-down" style="position: absolute; left: 100%;top: 0; transform: translate(-200%)"></i>
        </div>
      </div>
    </div>
    <!-- 提交  -->
    <div v-if="type==='submit'" :style="[modifyCss,{height: height,width: width,boxSizing: 'border-box',overflow: 'hidden'}]" class="elementWrapper_main">
      <div class="element-contents text-item" :style="{display:'flex', alignItems:'center', justifyContent: 'center',height:'100%',boxSizing: 'border-box'}">
        <div class="element-item" v-html="content">
        </div>
      </div>
    </div>
    <div v-if="type==8" :style="[modifyCss,{display:'flex', height: height,width: width,boxSizing: 'border-box',overflow: 'hidden',}]" class="elementWrapper_main">
      <div class="element-contents  text-item" :key="index" v-for="(item, index) in nav_btn" :style="{flex: '1',height:'100%',boxSizing: 'border-box',}">
        <!-- <div class="element-item"  :style="{textAlign: 'center',  height: '50%'}">
            <img :src="" style="width: 25px; height: 25px;">
          </div> -->
        <div class="element-item" :style="{textAlign: 'center',height: '50%'}">
          <span style="lineHeight:25px">sjadk</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import bus from "../../js/bus";
export default {
    props: ["renderJson", "screenHeight"],
    data() {
        return {
            rotateY: 0,
            nav_btn: [],
            btn_arr: [],
            json: {}, // 单个元素JSON
            id: "",
            type: 1, // 元素类型
            css: {}, // 加单位前的元素样式
            content: "", // 内容
            placeholder: "",
            images: "",
            width: 0, // 宽
            height: 0, // 高
            position: {
                top: 0,
                left: 0
            },
            sumbit: "",
            modifyCss: {}, // 元素样式
            imgUrls: [], // 轮播图图片
            activeSliderImgIndex: 0, // 当前轮播图图片索引
            indicatorDots: true, // 是否显示指示器
            autoplay: true, // 是否自动播放
            interval: 5000, // 轮播间隔
            duration: 1000, // 定格时间
            pointColor: "#fff", // 指示器颜色
            active: "#f00", // 当前指示器颜色
            mapId: "",
            location: {},
            movelock: false,
            move: {
                disx: "",
                disy: ""
            }
        };
    },
    methods: {
        ...mapMutations(["writeCurrentInfo"]),
        dragdownHandle(currentId, id) {
            if (currentId == id) {
                this.movelock = true;
                this.move.disx = event.clientX - parseInt(this.position.left);
                this.move.disy = event.clientY - parseInt(this.position.top);
            }
            (document.onmousemove = e => {
                if (this.movelock) {
                    let newleft = e.clientX - this.move.disx;
                    let newtop = e.clientY - this.move.disy;
                    if (newtop <= 0) {
                        if (newleft <= 0) {
                            this.nycmovedate({
                                left: 0,
                                top: 0
                            });
                        } else if (parseInt(this.width) + newleft > 375) {
                            this.nycmovedate({
                                left: parseInt(375 - parseInt(this.width)),
                                top: 0
                            });
                        } else {
                            this.nycmovedate({
                                top: 0,
                                left: parseInt(newleft)
                            });
                        }
                    } else if (newleft <= 0) {
                        if (
                            newtop + parseInt(this.height) >=
                            this.screenHeight
                        ) {
                            this.nycmovedate({
                                left: 0,
                                top: this.screenHeight - parseInt(this.height)
                            });
                        } else {
                            this.nycmovedate({
                                left: 0,
                                top: parseInt(newtop)
                            });
                        }
                    } else if (parseInt(this.width) + newleft > 375) {
                        if (
                            newtop + parseInt(this.height) >=
                            this.screenHeight
                        ) {
                            this.nycmovedate({
                                left: parseInt(375 - parseInt(this.width)),
                                top: this.screenHeight - parseInt(this.height)
                            });
                        } else {
                            this.nycmovedate({
                                left: parseInt(375 - parseInt(this.width)),
                                top: parseInt(newtop)
                            });
                        }
                    } else if (
                        newtop + parseInt(this.height) >=
                        this.screenHeight
                    ) {
                        if (newleft <= 0) {
                            this.nycmovedate({
                                left: 0,
                                top: this.screenHeight - parseInt(this.height)
                            });
                        } else if (parseInt(this.width) + newleft > 375) {
                            this.nycmovedate({
                                left: parseInt(375 - parseInt(this.width)),
                                top: 0
                            });
                        } else {
                            this.nycmovedate({
                                left: parseInt(newleft),
                                top: this.screenHeight - parseInt(this.height)
                            });
                        }
                    } else {
                        this.nycmovedate({
                            left: parseInt(newleft),
                            top: parseInt(newtop)
                        });
                    }
                }
            }),
                (document.onmouseup = e => {
                    this.movelock = false;
                    document.onmousemove = null;
                    document.onmouseup = null;
                });
        },
        p1Handle(e) {
            e.stopPropagation();
            function move(e) {
                e.stopPropagation();
                var p1y = e.pageY - p1ydisy;
                var p1x = e.pageX - p1xdisx;
                // var width =  p1xdisw - p1x + p1xpoi;
                // if (parseInt(this.width) < 20 || parseInt(this.height)) {
                //     return
                // }
                // if(p1xdisw - p1x + p1xpoi -20 < 0 ){
                //   self.nycmovedate({
                //     width: p1xdisw - p1x + p1xpoi,
                //     left: parseInt(p1x),
                //   })
                //   return
                // }else if(p1ydisw - p1y + p1ypoi -30 < 0 ){
                //   console.log('sss')
                //   return
                // }
                if (parseInt(p1x) < 0) {
                    if (parseInt(p1y) < 0) {
                        self.nycmovedate({
                            left: 0,
                            top: 0,
                            height: p1ydisw + p1ypoi,
                            width: p1xdisw + p1xpoi
                        });
                    } else {
                        self.nycmovedate({
                            left: 0,
                            top: parseInt(p1y),
                            height: p1ydisw - p1y + p1ypoi,
                            width: p1xdisw + p1xpoi
                        });
                    }
                } else if (parseInt(p1y) < 0) {
                    if (parseInt(p1x) < 0) {
                        self.nycmovedate({
                            left: 0,
                            top: 0,
                            height: p1ydisw + p1ypoi,
                            width: p1xdisw + p1xpoi
                        });
                    } else {
                        self.nycmovedate({
                            left: parseInt(p1x),
                            top: 0,
                            height: p1ydisw + p1ypoi,
                            width: p1xdisw - p1x + p1xpoi
                        });
                    }
                } else {
                    self.nycmovedate({
                        left: parseInt(p1x),
                        top: parseInt(p1y),
                        height: p1ydisw - p1y + p1ypoi,
                        width: p1xdisw - p1x + p1xpoi
                    });
                }
            }
            e.stopPropagation();
            var self = this;
            var p1ydisw = parseInt(this.height); //初始元素kuan
            var p1ypoi = parseInt(this.position.top);
            var p1ydisy = e.pageY - parseInt(this.position.top);
            var p1xdisw = parseInt(this.width); //初始元素高
            var p1xpoi = parseInt(this.position.left); //初始left
            var p1xdisx = e.pageX - parseInt(this.position.left);
            document.addEventListener("mousemove", move, false);
            document.addEventListener(
                "mouseup",
                function p1() {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", p1);
                },
                false
            );
        },
        p2Handle(e) {
            function move(e) {
                e.stopPropagation();
                var p2y = e.pageY - p2ydisy;
                var p2x = e.pageX - p2xdisx;
                if (p2xdisw + p2x > 375) {
                    if (parseInt(p2y) < 0) {
                        self.nycmovedate({
                            top: 0,
                            height: p2ydisw + p2ypoi,
                            width: 375 - parseInt(self.position.left)
                        });
                    } else {
                        self.nycmovedate({
                            top: parseInt(p2y),
                            height: p2ydisw - p2y + p2ypoi,
                            width: 375 - parseInt(self.position.left)
                        });
                    }
                } else if (parseInt(p2y) < 0) {
                    if (p2xdisw + p2x > 375) {
                        console.log("sss");
                        self.nycmovedate({
                            top: 0,
                            height: p2ydisw + p2ypoi,
                            width: 375 - parseInt(self.position.left)
                        });
                    } else {
                        self.nycmovedate({
                            top: 0,
                            height: p2ydisw + p2ypoi,
                            width: p2xdisw + p2x - p2xpoi
                        });
                    }
                } else {
                    self.nycmovedate({
                        top: parseInt(p2y),
                        height: p2ydisw - p2y + p2ypoi,
                        width: p2xdisw + p2x - p2xpoi
                    });
                }
            }
            e.stopPropagation();
            var self = this;
            var p2xdisw = parseInt(this.width);
            var p2xpoi = parseInt(this.position.left);
            var p2xdisx = e.pageX - parseInt(this.position.left);
            var p2ydisw = parseInt(this.height);
            var p2ypoi = parseInt(this.position.top);
            var p2ydisy = e.pageY - parseInt(this.position.top);
            document.addEventListener("mousemove", move, false);
            document.addEventListener(
                "mouseup",
                function p2up() {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", p2up);
                },
                false
            );
        },
        p3Handle(e) {
            function move(e) {
                e.stopPropagation();
                var p3x = e.pageX - p3xdisx;
                var p3y = e.pageY - p3ydisy;
                if (p3xdisw + p3x > 375) {
                    if (p3ydisw + p3y > self.screenHeight) {
                        console.log("ssss");
                        self.nycmovedate({
                            height:
                                self.screenHeight - parseInt(self.position.top),
                            width: 375 - parseInt(self.position.left)
                        });
                    } else {
                        self.nycmovedate({
                            height: p3ydisw + p3y - p3ypoi,
                            width: 375 - parseInt(self.position.left)
                        });
                    }
                } else if (p3ydisw + p3y > self.screenHeight) {
                    if (p3xdisw + p3x > 375) {
                        self.nycmovedate({
                            height:
                                self.screenHeight - parseInt(self.position.top),
                            width: 375 - parseInt(self.position.left)
                        });
                    } else {
                        self.nycmovedate({
                            height:
                                self.screenHeight - parseInt(self.position.top),
                            width: p3xdisw + p3x - p3xpoi
                        });
                    }
                } else {
                    self.nycmovedate({
                        height: p3ydisw + p3y - p3ypoi,
                        width: p3xdisw + p3x - p3xpoi
                    });
                }
            }
            e.stopPropagation();
            var self = this;
            var p3xdisw = parseInt(this.width);
            var p3xpoi = parseInt(this.position.left);
            var p3xdisx = e.pageX - parseInt(this.position.left);
            var p3ydisw = parseInt(this.height);
            var p3ypoi = parseInt(this.position.top);
            var p3ydisy = e.pageY - parseInt(this.position.top);
            document.addEventListener("mousemove", move, false);
            document.addEventListener(
                "mouseup",
                function p3up() {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", p3up);
                },
                false
            );
        },
        p4Handle(e) {
            function move(e) {
                e.stopPropagation();
                var p4y = e.pageY - p4ydisy;
                var p4x = e.pageX - p4xdisx;
                // if (p4ydisw - p4y + p4ypoi < 20 || p4xdisw - p4x + p4xpoi < 20) {
                //     return
                // }
                if (p4x <= 0) {
                    if (p4ydisw + p4y > self.screenHeight) {
                        console.log("ss");
                        self.nycmovedate({
                            left: 0,
                            width:
                                parseInt(self.width) +
                                parseInt(self.position.left),
                            height:
                                parseInt(self.screenHeight) -
                                parseInt(self.position.top)
                        });
                    } else {
                        self.nycmovedate({
                            left: 0,
                            width:
                                parseInt(self.width) +
                                parseInt(self.position.left),
                            height: p4ydisw + p4y - p4ypoi
                        });
                    }
                } else if (p4ydisw + p4y > self.screenHeight) {
                    if (p4x <= 0) {
                        self.nycmovedate({
                            left: 0,
                            width:
                                parseInt(self.width) +
                                parseInt(self.position.left),
                            height:
                                parseInt(self.screenHeight) -
                                parseInt(self.position.top)
                        });
                    } else {
                        self.nycmovedate({
                            left: parseInt(p4x),
                            width: p4xdisw - p4x + p4xpoi,
                            height:
                                parseInt(self.screenHeight) -
                                parseInt(self.position.top)
                        });
                    }
                } else {
                    self.nycmovedate({
                        left: parseInt(p4x),
                        height: p4ydisw + p4y - p4ypoi,
                        width: p4xdisw - p4x + p4xpoi
                    });
                }
            }
            e.stopPropagation();
            var self = this;
            var p4ydisw = parseInt(this.height); //初始元素高
            var p4ypoi = parseInt(this.position.top); //初始top
            var p4ydisy = e.pageY - parseInt(this.position.top);
            var p4xdisw = parseInt(this.width); //初始元素高
            var p4xpoi = parseInt(this.position.left); //初始left
            var p4xdisx = e.pageX - parseInt(this.position.left);
            document.addEventListener("mousemove", move, false);
            document.addEventListener(
                "mouseup",
                function p5up() {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", p5up);
                },
                false
            );
        },
        p5Handle(e) {
            function move(e) {
                e.stopPropagation();
                var p5y = e.pageY - disy;
                if (disw - p5y + poi < 20) {
                    return;
                }
                if (parseInt(p5y) <= 0) {
                    self.nycmovedate({
                        top: 0,
                        height: disw + poi
                    });
                } else {
                    self.nycmovedate({
                        top: parseInt(p5y),
                        height: disw - p5y + poi
                    });
                }
            }
            e.stopPropagation();
            var self = this;
            var disw = parseInt(this.height); //初始元素高
            var poi = parseInt(this.position.top); //初始top
            var disy = e.pageY - parseInt(this.position.top);
            document.addEventListener("mousemove", move, false);
            document.addEventListener(
                "mouseup",
                function p5up() {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", p5up);
                },
                false
            );
        },
        p6Handle(e) {
            function move(e) {
                e.stopPropagation();
                var p6y = e.pageX - disx;
                if (disw + p6y - poi < 20) {
                    return;
                }
                if (disw + p6y >= 375) {
                    self.nycmovedate({
                        width: 375 - parseInt(self.position.left)
                    });
                } else {
                    self.nycmovedate({
                        width: disw + p6y - poi
                    });
                }
            }
            e.stopPropagation();
            var self = this;
            var disw = parseInt(this.width); //初始元素高
            var poi = parseInt(this.position.left); //初始left
            var disx = e.pageX - parseInt(this.position.left);
            document.addEventListener("mousemove", move, false);
            document.addEventListener(
                "mouseup",
                function p5up() {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", p5up);
                },
                false
            );
        },
        p7Handle(e) {
            function move(e) {
                e.stopPropagation();
                var p7y = e.pageY - disy;
                // if (disw + p7y - poi < 20) {
                //     return
                // }
                if (disw + p7y > self.screenHeight) {
                    self.nycmovedate({
                        height: self.screenHeight - parseInt(self.position.top)
                    });
                } else {
                    self.nycmovedate({
                        height: disw + p7y - poi
                    });
                }
            }
            e.stopPropagation();
            var self = this;
            var disw = parseInt(this.height); //初始元素高
            var poi = parseInt(this.position.top); //初始top
            var disy = e.pageY - parseInt(this.position.top);
            document.addEventListener("mousemove", move, false);
            document.addEventListener(
                "mouseup",
                function p5up() {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", p5up);
                },
                false
            );
        },
        p8Handle(e) {
            function move(e) {
                e.stopPropagation();
                var p8y = e.pageX - disx;
                if (disw - p8y + poi < 20) {
                    return;
                }
                if (p8y <= 0) {
                    self.nycmovedate({
                        left: 0,
                        width:
                            parseInt(self.width) + parseInt(self.position.left)
                    });
                } else {
                    self.nycmovedate({
                        left: parseInt(p8y),
                        width: disw - p8y + poi
                    });
                }
            }
            e.stopPropagation();
            var self = this;
            var disw = parseInt(this.width); //初始元素高
            var poi = parseInt(this.position.left); //初始left
            var disx = e.pageX - parseInt(this.position.left);
            document.addEventListener("mousemove", move, false);
            document.addEventListener(
                "mouseup",
                function p5up() {
                    document.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseup", p5up);
                },
                false
            );
        },
        p9Handle(e) {
            var self = this;
            e.stopPropagation();
            const originx =
                parseInt(this.position.left) + parseInt(this.width) / 2;
            const originy =
                parseInt(this.position.top) + parseInt(this.height) / 2;
            const showScreenX = e.pageX;
            const showScreenY = e.pageY;
            function parseJiao(x) {
                //输入值返回余弦值的角度比如1/2==60
                return Math.round(Math.acos(x) * 180 / Math.PI);
            }
            function rotate(e) {
                function getAngle(px, py, mx, my) {
                    var x = Math.abs(px - mx);
                    var y = Math.abs(py - my);
                    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                    var cos = y / z;
                    var radina = Math.acos(cos); //用反三角函数求弧度
                    var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度

                    if (mx > px && my > py) {
                        //`鼠标在第四象限`
                        angle = 180 - angle;
                    }

                    if (mx == px && my > py) {
                        //鼠标在y轴负方向上
                        angle = 180;
                    }

                    if (mx > px && my == py) {
                        //鼠标在x轴正方向上
                        angle = 90;
                    }

                    if (mx < px && my > py) {
                        //鼠标在第三象限
                        angle = 180 + angle;
                    }

                    if (mx < px && my == py) {
                        //鼠标在x轴负方向
                        angle = 270;
                    }

                    if (mx < px && my < py) {
                        //鼠标在第二象限
                        angle = 360 - angle;
                    }
                    // angle = -angle + 360;
                    self.nycmovedate({
                        rotate: angle
                    });
                }
                getAngle(
                    originx,
                    originy,
                    e.pageX - showScreenX,
                    e.pageY - showScreenY
                );
            }
            document.addEventListener("mousemove", rotate, false);
            document.addEventListener(
                "mouseup",
                () => {
                    document.removeEventListener("mousemove", rotate);
                },
                false
            );
        },
        nycmovedate(obj) {
            if (obj.width) {
                this.$emit("updateData", "width", parseInt(obj.width));
            }
            if (obj.height) {
                this.$emit("updateData", "height", parseInt(obj.height));
            }
            if (obj.top >= 0) {
                this.$emit("updateData", "positionY", parseInt(obj.top));
            }
            if (obj.left >= 0) {
                this.$emit("updateData", "positionX", parseInt(obj.left));
            }
            obj.rotate &&
                this.$emit("updateData", "rotate", parseInt(obj.rotate));
            if (obj.rotate) {
                this.rotateY = obj.rotate;
            }
            // if(obj.height){
            //   this.height = obj.height+ 'px';
            // }
        },
        modifyJson(css) {
            this.modifyCss = css;
            if (this.modifyCss.opacity > 1) {
                this.modifyCss.opacity = css.opacity * 0.01;
            }
            for (const val in css) {
                if (
                    val === "fontSize" ||
                    val === "margin" ||
                    val === "borderWidth" ||
                    val === "borderRadius"
                ) {
                    this.modifyCss[val] = css[val] + "px";
                }
            }
        },
        dragHandle() {
            return false;
        },
        initJson() {
            this.json = this.renderJson;
            this.json = JSON.parse(this.json);
            this.type = this.json.type;
            this.id = this.json.id;
            this.modifyJson(this.json.css);
            this.width = this.json.width + "px";
            this.height = this.json.height + "px";
            this.position.left = this.json.position.left + "px";
            this.position.top = this.json.position.top + "px";
            //       if (this.type === 'text' || this.type === 'phone' || this.type === 3 || this.type === 6 || this.type === 13 || this.type === 14 || this.type === 15 ) {
            //   this.content = this.json.content;
            // } else
            console.log(this.type);
            if (this.json.content) {
                this.content = this.json.content;
            }
            if (this.type === 2) {
                this.images = this.json.images;
            } else if (this.type === 5) {
                this.imgUrls = this.json.imgUrls;
            } else if (this.type === 4) {
                this.mapId = this.json.mapId;
                this.location = this.json.location;
                console.log(this.location);
                this.initMap();
            } else if (this.type === 8) {
                this.nav_btn = this.json.nav_btn;
            }
        },
        initMap() {
            /* eslint-disable */
            this.$nextTick(() => {
                // 百度地图API功能
                // const map = new BMap.Map(this.mapId);
                var center = new qq.maps.LatLng(
                    this.location.x,
                    this.location.y
                );
                const map = new qq.maps.Map(this.mapId, {
                    center,
                    zoom: 25,
                    draggable: false,
                    zoomControl: false,
                    panControl: false,
                    mapTypeControlOptions: {
                        //设置控件的地图类型ID，ROADMAP显示普通街道地图，SATELLITE显示卫星图像，HYBRID显示卫星图像上的主要街道透明层
                        mapTypeIds: [],
                        //设置控件位置相对上方中间位置对齐
                        position: qq.maps.ControlPosition.TOP_CENTER
                    }
                });
                var marker = new qq.maps.Marker({
                    map: map,
                    position: center
                });
            });
        }
    },
    created() {
        this.initJson();
        bus.$on("renderEle", this.initJson);
    },
    watch: {
        renderJson() {
            this.$emit("aa");
            this.initJson();
        },
        "position.top": function(value) {
            if (parseInt(value) < 0) {
                this.position.top = "0px";
            }
        },
        "position.left": function(value) {
            if (parseInt(value) < 0) {
                this.position.left = 0;
            } else if (parseInt(value) + parseInt(this.width) > 375) {
                this.position.left = 375 - parseInt(this.width) + "px";
            }
        },
        width: function(value) {
            if (parseInt(value) > 375) {
                this.position.width = "375px";
            }
        },
        currentId() {
            if (this.id === this.currentId) {
                this.$emit("eventHandle");
                // this.jumpType = this.showList[this.currentIndex].event.name;
                // this.phoneNumber = this.showList[this.currentIndex].event.phoneNumber;
                // this.jumpValue = this.showList[this.currentIndex].event.herf;
            }
        }
    },
    computed: {
        currentId() {
            return this.$store.state.currentId;
        },
        lng() {
            return this.$store.state.currentLocation.lng;
        },
        lat() {
            return this.$store.state.currentLocation.lat;
        }
    }
};
</script>

<style lang="scss">
.elementWrapper {
    position: absolute;
}
.ele-active {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    border: 1px solid #449fdb;
    .port {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        background: #fff;
        border: 1px solid #409eff;
        z-index: 999;
    }
    .port1,
    .port3 {
        cursor: nw-resize;
    }

    .port2,
    .port4 {
        cursor: ne-resize;
    }
    .port1 {
        transform: translate(-50%, -50%);
    }
    .port2 {
        transform: translate(50%, -50%);
        right: 0px;
        top: 0px;
    }

    .port3 {
        transform: translate(50%, 50%);
        right: 0px;
        bottom: 0px;
    }

    .port4 {
        transform: translate(-50%, 50%);
        left: 0px;
        bottom: 0px;
    }
    .port9 {
        left: 50%;
        top: 0;
        transform: translateY(-200%) translateX(-50%);
        cursor: no-drop;
        // background: grey;
    }
    #root {
        z-index: 0;
        min-width: 40px;
        min-height: 40px;
        cursor: move;
        overflow: static;
    }

    .port5 {
        left: 50%;
        transform: translate(-50%, -50%);
        top: 0px;
        cursor: n-resize;
    }

    .port7 {
        left: 50%;
        transform: translate(-50%, 50%);
        bottom: 0px;
        cursor: n-resize;
    }
    .port6 {
        right: 0px;
        top: 50%;
        transform: translate(50%, -50%);
        cursor: e-resize;
    }
    .port8 {
        left: 0px;
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: e-resize;
    }
}
.point {
    height: 8px;
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: 10;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    ol {
        height: 8px;
        li {
            float: left;
            margin-left: 5px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
    }
}

* {
    user-select: none !important;
}
.border-style {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -144;
    width: 100%;
    height: 100%;
    border: 1px solid #409eff;
}
</style>
