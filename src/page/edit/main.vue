<template>
  <div class="out-container">
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="50%" center>
      <div style="width: 100%;height: 100%; textAlign:center">
        <img ondragstart="return false" style="width: 50%; " :src="codeImagesUrl">
      </div>
    </el-dialog>

    <header class="out-header">
      <div class="header-con">
        <div class="nav-left">
          <ul class="nav navbar-left">
            <li class="nav-btn" @click='$router.go(-1)'>
              <i class="icon-back"></i>
              <span>返回</span>
            </li>
          </ul>
        </div>

        <div class="nav-down-bar">
          <ul class="nav navbar-down">
            <li class="down-btn" @click="addElement('text')">
              <i style="font-size: 13px" class="icon-font"></i>
              <span class="block">文本</span>
            </li>
            <li @click="dialogImages = true;assemblyType=1" class="down-btn">
              <i class="icon-pic weight"></i>
              <span class="block">图片</span>
            </li>
            <li @click="dialogIcon = true" class="down-btn">
              <i class="icon-Smile weight"></i>
              <span class="block">图标</span>
            </li>
            <li class="down-btn pos-re">
              <i style="font-size: 14px" class="icon-box weight"></i>
              <span class="block">组件</span>
              <div class="assembly">
                <div class="assembly-main">
                </div>
                <i class="arrow"></i>
                <span class="title">常用组件</span>
                <ul class="assembly-items">
                  <li @click="dialogVideo = true;assemblyType = 3" class="item">
                    <i class="icon icon-video"></i>
                    <span>视频</span>
                  </li>
                  <li @click="assemblyType = 2;addElement('slider')" class="item">
                    <i class="icon icon-imgs"></i>
                    <span>幻灯片</span>
                  </li>
                  <li @click="dialogMap = true" class="item">
                    <i class="icon icon-map"></i>
                    <span>地图</span>
                  </li>
                </ul>
              </div>
            </li>
            <li class="down-btn pos-re">
              <i style="font-size: 14px" class="icon-box weight"></i>
              <span class="block">表单</span>
              <div class="assembly" style="min-width:402px">
                <!-- <div class="assembly-main">

                </div>  -->
                <i class="arrow"></i>
                <ul class="assembly-items">
                  <li @click="[addElement('poi'), ,addElement('btn')]" class="item">
                    <i class="icon icon-video"></i>
                    <span>地点</span>
                  </li>
                  <li @click="[addElement('date'), ,addElement('btn')]" class="item">
                    <i class="icon icon-imgs"></i>
                    <span>时间</span>
                  </li>
                  <li @click="[addElement('phone'), ,addElement('btn')]" class="item">
                    <i class="icon icon-map"></i>
                    <span>手机</span>
                  </li>
                  <!-- <li @click="addElement('weixin')" class="item">
                    <i class="icon icon-map"></i>
                    <span>微信</span>
                  </li> -->
                  <li @click="[addElement('mail'), ,addElement('btn')]" class="item">
                    <i class="icon icon-map"></i>
                    <span>邮箱</span>
                  </li>
                  <li @click="[addElement('select'), ,addElement('btn')]" class="item">
                    <i class="icon icon-map"></i>
                    <span>单选</span>
                  </li>
                  <li @click="[addElement('name'), ,addElement('btn')]" class="item">
                    <i class="icon icon-map"></i>
                    <span>姓名</span>
                  </li>
                  <li @click="addElement('navbar')" class="item">
                    <i class="icon icon-map"></i>
                    <span>导航</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul class="nav navbar-right">
            <li class="nav-btn">
              <i class="icon-enlarge"></i>
            </li>
            <li class="nav-btn" @click.stop="dialogFB = true">
              <i class="icon-feedback"></i>
              <span>反馈</span>
            </li>
            <li class="nav-btn">
              <i class="icon-set"></i>
              <span>设置</span>
            </li>
            <li class="nav-btn" @click.stop="save">
              <i class="icon-save"></i>
              <span>保存</span>
            </li>
            <li class="nav-btn" @click.stop="preview">
              <i class="icon-eye right-icon"></i>
              <span>预览</span>
            </li>
            <li class="nav-btn" @click.stop="release">
              <i class="icon-Share-Icon"></i>
              <span>发布</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="out-main">
      <div class="main-left">
        <div class="title">
          <span>页面</span>
          <i class="icon-add" @click="mainaddList"></i>
        </div>
        <div class="content-list">
          <!-- <div class="menu-item">          
            <div class="icon-menu menu-icon"></div>
            <div class="open-btn">+</div>
            <span class="name" @click="maintagHandle">主页面</span>
            <div class="set-btn">
              <i class="icon-edit menu-top"></i>
              <i class="icon-add add-menu" ></i>
              <i class="icon-ellipsis menu-top"></i>
            </div>
          </div> -->

          <div class="menu-item" v-for="(item, index) in rootList" :key="index" @click="rootClick(item, index)">
            <div class="icon-menu menu-icon"></div>
            <div class="open-btn">+</div>
            <span class="name">{{rootnameList(index)}}</span>
            <div class="set-btn">
              <i class="icon-edit menu-top"></i>
              <i class="icon-add add-menu"></i>
              <i class="icon-ellipsis menu-top"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="main-con">
        <div class="mobile-phone">
          <div class="mobile">
            <div class="tool"></div>
            <div class="head" @click="titleContentHandle">{{rootList[rootIndex].setNavigationBarTitle}}</div>
            <div class="show-screen" ref="screenHeight" @click="writeCurrentInfo({id: '', type: 0})">
              <normalElement @eventHandle="eventHandle" :screenHeight="screenHeight" v-for="(item, index) in showList" :key="index" @updateData="updateData" :render-json="JSON.stringify(item)"></normalElement>
            </div>
          </div>
        </div>
      </div>

      <div class="main-right">
        <div class="content">
          <div class="main-tabs">
            <div @click="showModel(1)" class="tabs-item">
              <span :class="{'sel-tabs':setType==1}">常规设置</span>
            </div>
            <div @click="showModel(2)" class="tabs-item">
              <span :class="{'sel-tabs':setType==2}">组件设置</span>
            </div>
            <div @click="showModel(3)" class="tabs-item">
              <span :class="{'sel-tabs':setType==3}">模板</span>
            </div>
          </div>
          <div class="tabs-content">
            <div v-if="setType==1" class="routine">
              <el-row class="mar15">
                <el-col :span="6">
                  <div class="grid-content bg-purple title-font">分享标题</div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <el-input v-model="shareTitle" class="out-input" placeholder="分享标贴30字以内"></el-input>
                  </div>
                  <p class="item-desc">分享标题,展示在分享信息中，请认真填写，最多30字</p>
                </el-col>
              </el-row>
              <el-row class="mar15">
                <el-col :span="6">
                  <div class="grid-content bg-purple title-font">分享描述</div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <el-input v-model="shareDesc" type="textarea" :rows="3" placeholder="分享描述"></el-input>
                  </div>
                  <p class="item-desc">只对H5有效，分享页面给他人时的页面描述，30字以内</p>
                </el-col>
              </el-row>
              <el-row class="mar15">
                <el-col :span="6">
                  <div class="grid-content bg-purple title-font">分享图片</div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <div class="cover" @click="dialogShareImg = true;dialogImages = true">
                      <img style="width:100%;height:100%" :src="shareImg" alt="">
                      <span class="cover-tip">更换图片</span>
                    </div>
                  </div>
                  <p class="item-desc">建议图片长宽比215*168，如不设置自动截取页面首屏</p>
                </el-col>
              </el-row>
              <!-- <el-row class="mar15">
                <el-col :span="6">
                  <div class="grid-content bg-purple title-font">悬浮分享按钮</div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <div class="lin34">
                      <el-radio class="small" v-model="share" label="1">开</el-radio>
                      <el-radio class="small" v-model="share" label="2">关</el-radio>
                    </div>
                  </div>
                </el-col>
              </el-row> -->
              <el-row class="mar15">
                <el-col :span="6">
                  <div class="grid-content bg-purple title-font">页面高度</div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <input class="inp-num" type="number">
                  </div>
                </el-col>
              </el-row>
              <el-row class="mar15">
                <el-col :span="6">
                  <div class="grid-content bg-purple title-font">背景设置</div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <div class="lin34">
                      <el-radio class="small" v-model="backType" label="1">无</el-radio>
                      <el-radio class="small" v-model="backType" label="2">颜色</el-radio>
                      <el-radio class="small" v-model="backType" label="3">图片</el-radio>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row v-if="backType==2" class="mar15">
                <el-col :span="6">
                  <div class="grid-content bg-purple title-font">背景颜色</div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <el-color-picker v-model="color3" show-alpha></el-color-picker>
                  </div>
                </el-col>
              </el-row>
              <el-row v-if="backType==3" class="mar15">
                <el-col :span="6">
                  <div class="grid-content bg-purple title-font">背景图片</div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <div class="back-cover cover">
                      <span class="cover-tip">背景图片</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div v-if="setType==2" class="routine">
              <div class="panel-item">
                <div @click="slideDown(1)" class="panel-head">
                  <span class="title">位置&大小</span>
                  <i class="panel-down" :class="[show1 ? 'icon-uE703-triangle-up' : 'icon-uE704-triangle-down']"></i>
                </div>
                <el-collapse-transition>
                  <div class="panel-con" v-show="show1">
                    <div class="panel" v-show="currentType != 8">
                      <span class="name">位置</span>
                      <div>
                        <div class="option">
                          <span class="title">X</span>
                          <input type="number" min="-375" max="375" class="option-inp" v-model="positionX" @change="changeEle();limitX();">
                        </div>
                        <div class="option">
                          <span class="title">Y</span>
                          <input type="number" min="0" class="option-inp" v-model="positionY" @change="changeEle">
                        </div>
                        <div class="mar8">
                          <el-button size="mini" @click="positionLeft">置左</el-button>
                          <el-button size="mini" @click="positionCenter">居中</el-button>
                          <el-button size="mini" @click="positionRight">置右</el-button>
                        </div>
                      </div>
                    </div>
                    <div class="panel" v-show="currentType != 8">
                      <span class="name">大小</span>
                      <div>
                        <div class="option">
                          <span class="title">宽</span>
                          <input type="number" class="option-inp" v-model="width" @change="changeEle">
                        </div>
                        <div class="option">
                          <span class="title">高</span>
                          <input type="number" class="option-inp" v-model="height" @change="changeEle">
                        </div>
                      </div>
                    </div>
                    <div class="panel" v-show="currentType != 8">
                      <span class="name">层级选择</span>
                      <div>
                        <div class="panel-slider">
                          <el-slider size="mini" :min="0" :max="100" v-model="zIndex"></el-slider>
                          <input class="slider-num" v-model="zIndex" type="number">
                        </div>
                        <!-- <el-radio class="small" v-model="isFixed" label="1" @change="console">是</el-radio>
                        <el-radio class="small" v-model="isFixed" label="2" @change="console">否</el-radio> -->
                      </div>
                    </div>
                    <div class="panel">
                      <el-button v-if="$store.state.currentId!=''" type="danger" size="mini" @click.stop="delEle">删 除</el-button>
                    </div>
                  </div>
                </el-collapse-transition>
              </div>
              <!--文本组件-->
              <div v-if="currentType == 'text' || currentType == 'phone' || assemblyType==1  || currentType == 'mail' || currentType == 'select' || currentType==6 || currentType== 8" class="panel-item">
                <div @click="slideDown(2)" class="panel-head">
                  <span class="title">样式&内容</span>
                  <i class="panel-down" :class="[show2 ? 'icon-uE703-triangle-up' : 'icon-uE704-triangle-down']"></i>
                </div>
                <el-collapse-transition>
                  <div class="panel-con" v-show="show2">
                    <div class="panel" v-if="isTitle">
                      <span class="name">标题内容</span>
                      <el-input class="out-input" v-model="titleContent">
                      </el-input>
                    </div>
                    <div class="panel" v-if="currentType == 'text' || currentType === 1 || currentType == 'phone' || currentType === 16 || currentType === 17 || currentType === 6">
                      <span class="name">文字内容</span>
                      <el-input class="out-input" v-model="content" @change="changeEle">
                      </el-input>
                    </div>
                    <div class="panel" v-if="currentType == 'text' || currentType === 1 || currentType === 2 || currentType === 3 || currentType === 18 || currentType === 6 || currentType === 8">
                      <span class="name">背景颜色</span>
                      <el-input class="out-input" v-model="backColor" @change="changeEle">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="backColor" show-alpha @change="changeEle"></el-color-picker>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel" v-if="currentType === 1 || currentType === 3 || currentType==6">
                      <span class="name">颜色</span>
                      <el-input class="out-input" v-model="textColor" @change="changeEle">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="textColor" show-alpha @change="changeEle"></el-color-picker>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel" v-if="currentType !== 8">
                      <span class="name">旋转</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="360" v-model="rotate"></el-slider>
                        <input class="slider-num" v-model="rotate" type="number">
                      </div>
                    </div>
                    <div class="panel">
                      <span class="name">透明度</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="100" v-model="transparent"></el-slider>
                        <input class="slider-num" v-model="transparent" type="number">
                      </div>
                    </div>
                    <div class="panel" v-if="currentType !== 8">
                      <span class="name">边距</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="30" v-model="margin"></el-slider>
                        <input class="slider-num" v-model="margin" type="number">
                      </div>
                    </div>
                    <div class="panel" v-if="currentType === 8">
                      <span class="name">导航设置</span>
                      <div class="panel-slider">
                        <div class="slides">
                          <div v-for="(item, index) in showList[currentIndex].nav_btn" class="select-items" :key="index">
                            <div style="width: 100%;height: 100%;textAlign:center">{{item.value}}</div>
                            <span class="del-slide" @click="delTag(index)">
                              <big>-</big>
                            </span>
                            <span class="up-slide" @click="textTag(index)">编辑</span>
                          </div>
                          <div class="up-selectbtn" @click="addTag()">
                            <big>+</big>
                          </div>
                        </div>
                        <div class="panel-con">
                          <div class="panel">
                            <span class="name">编辑选项</span>
                          </div>
                          <div class="name">
                            <el-input class="out-input" v-model="content" @input="radioHandle(content)">
                            </el-input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-collapse-transition>
              </div>
              <!--轮播图组件-->
              <div v-if="assemblyType==2" class="panel-item">
                <div @click="slideDown(2)" class="panel-head">
                  <span class="title">样式&内容</span>
                  <i class="panel-down" :class="[show2 ? 'icon-uE703-triangle-up' : 'icon-uE704-triangle-down']"></i>
                </div>
                <el-collapse-transition>
                  <div class="panel-con" v-show="show2">
                    <div class="slides">
                      <div v-for="(item, index) in showList[currentIndex].imgUrls" class="item" :key="index">
                        <img :src="item.img" style="width: 100%;height: 100%;">
                        <span class="del-slide" @click="delSlider(index)">
                          <big>-</big>
                        </span>
                        <span class="up-slide" @click="dialogimgSlider= true;dialogImages = true;assemblyType=1; lunboHandle(item, index) ">编辑</span>
                      </div>
                      <div class="up-btn" @click="sliderAddImg">
                        <big>+</big>
                      </div>
                    </div>
                    <div class="panel">
                      <el-checkbox v-model="autoplay" class="small-chx">自动播放</el-checkbox>
                    </div>
                    <div class="panel">
                      <el-checkbox v-model="checkPoint" class="small-chx">是否显示面板指示点</el-checkbox>
                    </div>
                    <div v-if="checkPoint" class="panel">
                      <span class="name">指示点颜色</span>
                      <el-input class="out-input" v-model="pointColor">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="pointColor" show-alpha></el-color-picker>
                        </template>
                      </el-input>
                    </div>
                    <div v-if="checkPoint" class="panel">
                      <span class="name">指示点选中颜色</span>
                      <el-input class="out-input" v-model="active">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="active" show-alpha></el-color-picker>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel">
                      <span class="name">定格时间</span>
                      <el-input class="out-input" v-model="interval">
                        <template slot="append">
                          <big>ms</big>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel">
                      <span class="name">过度时间</span>
                      <el-input class="out-input" v-model="duration">
                        <template slot="append">
                          <big>ms</big>
                        </template>
                      </el-input>
                    </div>
                    <!--<div class="panel">-->
                    <!--<span class="name">旋转</span>-->
                    <!--<div class="panel-slider">-->
                    <!--<el-slider size="mini" :min="0" :max="360" v-model="rotate"></el-slider>-->
                    <!--<input class="slider-num" v-model="rotate" type="number">-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="panel">-->
                    <!--<span class="name">透明度</span>-->
                    <!--<div class="panel-slider">-->
                    <!--<el-slider size="mini" :min="0" :max="1" v-model="transparent"></el-slider>-->
                    <!--<input class="slider-num" v-model="transparent" type="number">-->
                    <!--</div>-->
                    <!--</div>-->
                  </div>
                </el-collapse-transition>
              </div>
              <!--视频组件-->
              <div v-if="assemblyType==3" class="panel-item">
                <div @click="slideDown(2)" class="panel-head">
                  <span class="title">样式&内容</span>
                  <i class="panel-down" :class="[show2 ? 'icon-uE703-triangle-up' : 'icon-uE704-triangle-down']"></i>
                </div>
                <el-collapse-transition>
                  <div class="panel-con" v-show="show2">
                    <div class="panel">
                      <span class="name">背景颜色</span>
                      <el-input class="out-input" v-model="backColor">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="backColor" show-alpha></el-color-picker>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel">
                      <span class="name">视频连接</span>
                      <el-input :disabled="videoUrlDisabled" class="out-input" v-model="videoUrl">
                        <template slot="append">
                          <i class="icon-video"></i>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel">
                      <span class="name float-left">封面图片</span>
                      <div class="video-pic float-left">
                        <span class="up">编辑</span>
                      </div>
                    </div>
                    <div class="panel">
                      <el-checkbox class="small-chx" v-model="autoContent">自动播放
                        <span class="desc">只在小程序中有效，最多打开5层</span>
                      </el-checkbox>
                    </div>
                    <div class="panel">
                      <el-checkbox class="small-chx" v-model="loopPlay">循环播放
                      </el-checkbox>
                    </div>
                    <div class="panel">
                      <span class="name">旋转</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="360" v-model="rotate"></el-slider>
                        <input class="slider-num" v-model="rotate" type="number">
                      </div>
                    </div>
                    <div class="panel">
                      <span class="name">透明度</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="1" v-model="transparent"></el-slider>
                        <input class="slider-num" v-model="transparent" type="number">
                      </div>
                    </div>
                    <div class="panel">
                      <span class="name">边距</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="30" v-model="margin"></el-slider>
                        <input class="slider-num" v-model="margin" type="number">
                      </div>
                    </div>
                  </div>
                </el-collapse-transition>
              </div>
              <!-- 单选组件 -->
              <div v-if="currentType== 'select'" class="panel-item">
                <el-collapse-transition>
                  <div class="panel-con" v-show="show2">
                    <div class="panel">
                      <span class="name">选项内容</span>
                    </div>
                    <div class="slides">
                      <div v-for="(item, index) in showList[currentIndex].objArray[0].array" class="select-items" :key="index">
                        <div style="width: 100%; fontSize: 12px;height: 100%;textAlign:center">{{item}}</div>
                        <span class="del-slide" @click="delTag(index)">
                          <big>-</big>
                        </span>
                        <span class="up-slide" @click="textTag(index)">编辑</span>
                      </div>
                      <div class="up-selectbtn" @click="addTag()">
                        <big>+</big>
                      </div>
                    </div>
                    <div class="panel-con">
                      <div class="panel">
                        <span class="name">编辑选项</span>
                      </div>
                      <div class="name">
                        <el-input class="out-input" v-model="content" @input="radioHandle(content)">
                        </el-input>
                      </div>
                    </div>
                  </div>
                </el-collapse-transition>
              </div>
              <!--非视频组件显示分享-->
              <div v-if="assemblyType == 1 || assemblyType == 2" class="panel-item">
                <div @click="slideDown(3)" class="panel-head">
                  <span class="title">跳转</span>
                  <i class="panel-down" :class="[show3 ? 'icon-uE703-triangle-up' : 'icon-uE704-triangle-down']"></i>
                </div>
                <el-collapse-transition>
                  <div class="panel-con jump" v-show="show3">
                    <el-radio class="small" v-model="jumpType" label="none">无</el-radio>
                    <el-radio class="small" v-model="jumpType" label="jump">页面</el-radio>
                    <el-radio class="small" v-model="jumpType" label="phone">电话</el-radio>
                    <el-radio class="small" v-model="jumpType" label="share">分享给好友</el-radio>
                    <!-- <el-radio class="small" v-model="jumpType" label="5">分享朋友圈</el-radio>
                    <el-radio class="small" v-model="jumpType" label="6">分享好友和朋友圈</el-radio> -->
                    <div v-if="jumpType== 'jump'">
                      <el-select style="marginLeft: 20px" size="small" v-model="jumpValue" placeholder="请选择">
                        <el-option v-for="(item, index) in rootList" :key="index" :label="rootnameList(index)" :value="index">
                        </el-option>
                      </el-select>
                      <div>
                        <!-- <el-checkbox v-model="blank">新窗口打开
                          <span class="desc">只在小程序中有效，最多打开5层</span>
                        </el-checkbox> -->
                      </div>
                    </div>
                    <div v-if="jumpType=='phone'">
                      <el-input v-model="phoneNumber" size="small" placeholder="请输入电话号"></el-input>
                    </div>
                    <!-- <div v-if="jumpType==3">
                      <div class="province-sel">
                        <el-select size="small" v-model="province" placeholder="请选择">
                        </el-select>
                        <el-select size="small" v-model="city" placeholder="请选择">
                        </el-select>
                        <el-select size="small" v-model="area" placeholder="请选择">
                        </el-select>
                      </div>
                      <el-input size="small" placeholder="请输入详细地址"></el-input>
                    </div> -->
                  </div>
                </el-collapse-transition>
              </div>
              <div class="panel-item">
                <div @click="slideDown(4)" class="panel-head">
                  <span class="title">边框样式</span>
                  <i class="panel-down" :class="[show4 ? 'icon-uE703-triangle-up' : 'icon-uE704-triangle-down']"></i>
                </div>
                <el-collapse-transition>
                  <div class="panel-con" v-show="show4">
                    <div class="panel">
                      <span class="name">颜色</span>
                      <el-input class="out-input" v-model="borderColor">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="borderColor" show-alpha></el-color-picker>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel">
                      <span class="name">宽度</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="20" v-model="borderWidth"></el-slider>
                        <input class="slider-num" v-model="borderWidth" type="number">
                      </div>
                    </div>
                    <div class="panel">
                      <span class="name">样式</span>
                      <div>
                        <el-select class="out-input" size="small" v-model="borderType" placeholder="请选择">
                          <el-option label="点线" value="dotted"></el-option>
                          <el-option label="实线" value="solid"></el-option>
                          <el-option label="双线" value="double"></el-option>
                          <el-option label="虚线" value="dashed"></el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="panel">
                      <span class="name">圆角</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="162" v-model="borderRadius"></el-slider>
                        <input class="slider-num" v-model="borderRadius" type="number">
                      </div>
                    </div>
                  </div>
                </el-collapse-transition>
              </div>
            </div>
            <div v-if="setType==3">
              <div class="model-tabs">
                <div @click="tabModel(1)" class="model-item">
                  <span :class="{'sel-model':modelType==1}">我的模板</span>
                </div>
                <div @click="tabModel(2)" class="model-item">
                  <span :class="{'sel-model':modelType==2}">系统模板</span>
                </div>
              </div>
              <div v-if="modelType==1" class="model-con">
                <div v-for="(item, index) in  activeList" :key="index" @click="modelList(item, index)">
                  {{item.auth_status}}
                </div>
                <span class="tip">暂无数据</span>
              </div>
              <div v-if="modelType==2" class="model-sys">
                <div class="system-model">
                  <el-select size="small">
                    <el-option label="全部"></el-option>
                  </el-select>
                </div>
                <div class="models">
                  <div class="model-item-con">
                    <div class="model-item">
                      <div class="qr-back">
                        <img src="https://image-c.weimobwmc.com/saas-wxbiz/d710af4b97374ed08527229749587493.jpg" alt="">
                        <span class="title">扫描预览</span>
                        <div class="model-btn">
                          <el-button size="mini" type="primary">使用</el-button>
                          <br/>
                          <el-button size="mini">查看</el-button>
                        </div>
                      </div>
                    </div>
                    <span class="model-title">新年活动</span>
                  </div>
                  <div class="model-item-con">
                    <div class="model-item">
                      <div class="qr-back">
                        <img src="https://image-c.weimobwmc.com/saas-wxbiz/d710af4b97374ed08527229749587493.jpg" alt="">
                        <span class="title">扫描预览</span>
                        <div class="model-btn">
                          <el-button size="mini" type="primary">使用</el-button>
                          <br/>
                          <el-button size="mini">查看</el-button>
                        </div>
                      </div>
                    </div>
                    <span class="model-title">新年活动</span>
                  </div>
                  <div class="model-item-con">
                    <div class="model-item">
                      <div class="qr-back">
                        <img src="https://image-c.weimobwmc.com/saas-wxbiz/d710af4b97374ed08527229749587493.jpg" alt="">
                        <span class="title">扫描预览</span>
                        <div class="model-btn">
                          <el-button size="mini" type="primary">使用</el-button>
                          <br/>
                          <el-button size="mini">查看</el-button>
                        </div>
                      </div>
                    </div>
                    <span class="model-title">新年活动</span>
                  </div>
                  <div class="model-item-con">
                    <div class="model-item">
                      <div class="qr-back">
                        <img src="https://image-c.weimobwmc.com/saas-wxbiz/d710af4b97374ed08527229749587493.jpg" alt="">
                        <span class="title">扫描预览</span>
                        <div class="model-btn">
                          <el-button size="mini" type="primary">使用</el-button>
                          <br/>
                          <el-button size="mini">查看</el-button>
                        </div>
                      </div>
                    </div>
                    <span class="model-title">新年活动</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title="提示" :visible.sync="previewVisible" width="30%" :before-close="handleClose">

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <icon-material :dialogIcon="dialogIcon" @close="closeIcon" @newIco="addElement('ico')"></icon-material>
    <images-material :dialogImages="dialogImages" :dialogShareImg="dialogShareImg" :dialogimgSlider="dialogimgSlider" @close="closeImages" @shareImg="shareImgHandle()" @newSilder="newSilder()" @newImg="addElement('img')"></images-material>
    <video-material :dialogVideo="dialogVideo" @close="closeVideo" @newVideo="addElement('video')"></video-material>
    <map-set :dialogMap="dialogMap" @close="closeMap" @newMap="mapHandle"></map-set>
    <feed-back :dialogFB="dialogFB" @close="closeFB"></feed-back>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import VideoMaterial from "../../components/edit/VideoMaterial";
import ImagesMaterial from "../../components/edit/ImagesMaterial";
import IconMaterial from "../../components/edit/IconMaterial";
import MapSet from "../../components/edit/MapMaterial";
import feedBack from "../../components/edit/feed-back";
// 导入组件模板
import normalElement from "../../components/edit/normal-template";
// 导入app.json
import app from "../../js/app/app.json";
// 导入bus总线
import bus from "../../js/bus";
export default {
    components: {
        dialogimgSlider: false,
        VideoMaterial,
        ImagesMaterial,
        IconMaterial,
        MapSet,
        normalElement,
        feedBack
    },
    data() {
        return {
            rootList: {
                index: {
                    height: 603,
                    setNavigationBarTitle: "主页面",
                    bgImage: "",
                    elements: []
                }
            },
            screenHeight: "",
            shareTitle: "",
            shareDesc: "",
            shareImg: "",
            phoneNumber: "",
            jumpValue: "",
            codeUrl: "",
            activeList: "",
            lunboindex: 0,
            dialogimgSlider: false,
            dialogShareImg: false,
            radioIndex: 0,
            value: "1",
            jumpType: "",
            modelType: "1",
            share: "1",
            backType: "1",
            color3: "",
            setType: "2",
            assemblyType: 0,
            blank: false,
            loopPlay: false,
            autoContent: false,
            show1: true,
            show2: true,
            show3: true,
            show4: true,
            checkPoint: true,
            dialogImages: false,
            dialogVideo: false,
            dialogIcon: false,
            dialogMap: false,
            dialogFB: false,
            showList: [],
            // 当前组件信息
            id: "",
            rotate: 0,
            transparent: 0,
            zIndex: 0,
            margin: 0,
            backColor: "",
            textColor: "",
            positionX: 0,
            positionY: 0,
            width: 0,
            height: 0,
            borderColor: "",
            borderWidth: 0,
            borderType: "solid",
            borderRadius: 0,
            isFixed: "2",
            content: "",
            autoplay: true,
            pointColor: "",
            active: "",
            interval: 0,
            duration: 0,
            // 选择当前组件相关
            currentEle: {},
            currentIndex: 0,
            number: 0,
            nav_number: 0,
            videoUrl: "",
            previewVisible: false,
            rootIndex: "index",
            numIndex: 0,
            codeImagesUrl: "",
            centerDialogVisible: false,
            isTitle: false,
            titleContent: "",
            lat: "",
            lng: "",
            isNavbar: true
        };
    },
    methods: {
        ...mapMutations(["writeCurrentInfo"]),
        showModel(type) {
            this.setType = type;
            if (type == 3) {
                let params = {
                    _token: this.$store.state._token,
                    app_id: this.$store.state.app_id
                };
                this.$store.dispatch("templatelist", params).then(res => {
                    let { data, code, msg } = res.data;
                    if (code == 200) {
                        this.activeList = Array.prototype.slice.call(data);
                    } else {
                        this.$message.error(res.data.message);
                    }
                });
            }
        },
        mapHandle(lat, lng) {
            this.lat = lat;
            this.lng = lng;
            this.addElement("map");
        },
        mainaddList() {
            // if(!this.numIndex) {
            //   this.rootList.index.elements = JSON.stringify(this.showList)
            //   this.showList = [];
            // }
            // if(!this.rootList.index) {
            //   this.$set(this.rootList, 'index', {
            //     height: "100%",
            //   setNavigationBarTitle: "hahahhah",
            //   bgImage: '',
            //   elements: ''
            //   })
            //   return
            // }
            this.numIndex++;
            this.$set(this.rootList, [this.numIndex], {
                height: this.screenHeight,
                setNavigationBarTitle: "子叶",
                bgImage: "",
                elements: ""
            });
        },
        eventHandle() {
            if (this.showList[this.currentIndex].event) {
                this.jumpType = this.showList[this.currentIndex].event.name;
                this.phoneNumber = this.showList[
                    this.currentIndex
                ].event.param.phoneNumber;
                this.jumpValue = this.showList[
                    this.currentIndex
                ].event.param.herf;
                this.shareImg = this.showList[
                    this.currentIndex
                ].event.param.img;
                this.shareTitle = this.showList[
                    this.currentIndex
                ].event.param.title;
                this.shareDesc = this.showList[
                    this.currentIndex
                ].event.param.desc;
            }
        },
        rootClick(item, index) {
            if (this.rootIndex != index) {
                this.rootList[this.rootIndex].number = this.number;
                this.number = this.rootList[index].number
                    ? this.rootList[index].number
                    : 0;
                this.rootList[this.rootIndex].elements = JSON.stringify(
                    this.showList
                );
                if (this.rootList[index].elements) {
                    this.showList = JSON.parse(this.rootList[index].elements);
                } else {
                    this.showList = [];
                }
                this.rootIndex = index;
            }
            //  else {
            //   if(this.showList.length == 0) {
            //     if(this.rootList[index].elements) {
            //       this.showList = JSON.parse(this.rootList[index].elements)
            //     }
            //   } else {
            //     return
            //   }
            // }
        },
        changePhone(value) {},
        rootnameList(index) {
            if (index == "index") {
                return "主页面";
            } else {
                return "第" + index + "页";
            }
        },
        modelList(item, index) {
            let params = {
                _token: this.$store.state._token,
                template_id: item.template_id,
                app_id: this.$store.state.app_id
            };
            this.$store.dispatch("templatejson", params).then(res => {
                let { data, code, msg } = res.data;
                if (code == 200) {
                    this.showList = JSON.parse(data.json);
                } else {
                    this.$message.error(res.data.message);
                }
            });
        },
        lunboHandle(item, index) {
            this.lunboindex = index;
        },
        newSilder() {
            this.showList[this.currentIndex].imgUrls[
                this.lunboindex
            ].img = this.$store.state.currentImgUrl;
            this.dialogimgSlider = false;
        },
        shareImgHandle() {
            this.shareImg = this.$store.state.currentImgUrl;
            this.dialogShareImg = false;
        },
        handleClose() {
            return;
        },
        slideDown(type) {
            switch (type) {
                case 1:
                    this.show1 = !this.show1;
                    break;
                case 2:
                    this.show2 = !this.show2;
                    break;
                case 3:
                    this.show3 = !this.show3;
                    break;
                case 4:
                    this.show4 = !this.show4;
                    break;
                default:
            }
        },
        tabModel(type) {
            this.modelType = type;
        },
        closeVideo() {
            this.dialogVideo = false;
        },
        closeImages() {
            this.dialogImages = false;
        },
        closeIcon() {
            this.dialogIcon = false;
        },
        closeMap() {
            this.dialogMap = false;
        },
        closeFB() {
            this.dialogFB = false;
        },
        // 新增元素
        addElement(type) {
            if (type == "btn") {
                if (this.number != 0) {
                    return false;
                } else {
                    this.number++;
                }
            } else if(type == 'navbar') {
              if( this.isNavbar ) {
                this.isNavbar = false;
              }else {
                return false; 
              }
            }
            let ele = JSON.parse(JSON.stringify(app.initJSON[type]));
            if (type === "img") {
                ele.images = this.$store.state.currentImgUrl;
            } else if (type === "video") {
                ele.videoUrl = this.$store.state.currentVideoUrl;
                this.autoContent = ele.autoplay;
                this.loopPlay = ele.loop;
            } else if (type === "map") {
                ele.location.x = this.lat;
                ele.location.y = this.lng;
            }
            const typeNum = ele.type;
            ele.id = JSON.stringify(new Date().getTime());
            if (ele.mapId) {
                ele.mapId = "map" + JSON.stringify(new Date().getTime());
            }
            this.showList.push(ele);
            this.currentIndex = this.showList.length - 1;
            if (ele.event) {
                this.jumpType = this.showList[this.currentIndex].event.name;
                // this.phoneNumber = this.showList[this.currentIndex].event.phoneNumber;
                // this.jumpValue = this.showList[this.currentIndex].event.herf;
            }
            // if(this.showList[this.currentIndex].type == 8) {
            //   if(this.nav_number == 0) {
            //     this.nav_number ++ ;
            //   }else{
            //     this.showList.pop(ele);
            //     this.currentIndex = this.showList.length - 1;
            //   }
            // }

            this.writeCurrentInfo({ id: ele.id, type: typeNum });
            // 将元素属性渲染至页面显示
            this.renderProps();
        },
        // 批量渲染元素属性
        renderProps() {
            this.renderProp(
                this.showList[this.currentIndex].content,
                "content"
            );
            this.renderProp(this.showList[this.currentIndex].width, "width");
            this.renderProp(this.showList[this.currentIndex].height, "height");
            this.renderProp(
                this.showList[this.currentIndex].position.left,
                "positionX"
            );
            this.renderProp(
                this.showList[this.currentIndex].position.top,
                "positionY"
            );
            this.renderProp(
                this.showList[this.currentIndex].css.backgroundColor,
                "backColor"
            );
            this.renderProp(
                this.showList[this.currentIndex].css.color,
                "textColor"
            );
            this.renderProp(
                parseInt(
                    this.showList[this.currentIndex].css.transform.substring(7),
                    0
                ),
                "rotate"
            );
            this.renderProp(
                this.showList[this.currentIndex].css.opacity * 100,
                "transparent"
            );
            this.renderProp(
                this.showList[this.currentIndex].css.zIndex,
                "zIndex"
            );
            this.renderProp(
                this.showList[this.currentIndex].pointColor,
                "pointColor"
            );
            this.renderProp(this.showList[this.currentIndex].active, "active");
            this.renderProp(
                this.showList[this.currentIndex].interval,
                "interval"
            );
            this.renderProp(
                this.showList[this.currentIndex].duration,
                "duration"
            );
            this.renderProp(
                this.showList[this.currentIndex].videoUrl,
                "videoUrl"
            );
        },
        updateData(prop, value) {
            switch (prop) {
                case "positionX":
                    this.positionX = value;
                    this.showList[this.currentIndex].position.left = value;
                    break;
                case "positionY":
                    this.positionY = value;
                    this.showList[this.currentIndex].position.top = value;
                    break;
                case "width":
                    this.width = value;
                    this.showList[this.currentIndex].width = value;
                    break;
                case "height":
                    this.height = value;
                    this.showList[this.currentIndex].height = value;
                    break;
                case "rotate":
                    this.showList[
                        this.currentIndex
                    ].css.transform = `rotateZ(${value}deg)`;
            }
        },
        positionLeft() {
            this.positionX = 0;
            this.showList[this.currentIndex].position.left = this.positionX;
            this.changeEle();
        },
        positionCenter() {
            this.positionX = 187.5 - this.width / 2;
            this.showList[this.currentIndex].position.left = this.positionX;
            this.changeEle();
        },
        positionRight() {
            this.positionX = 375 - this.width;
            this.showList[this.currentIndex].position.left = this.positionX;
            this.changeEle();
        },
        // 触发渲染元素事件
        changeEle() {
            bus.$emit("renderEle");
        },
        // 将元素属性渲染到页面上显示
        renderProp(from, to) {
            if (from) {
                this[to] = from;
            }
        },
        // 写入元素css属性
        saveProp(from, to) {
            this.changeEle();
            return to;
        },
        // 限制X最大375
        limitX() {
            if (this.positionX + this.width >= 375) {
                this.positionX = 375 - this.width;
            }
        },
        // 删除元素
        delEle() {
            // console.log(this.$refs.screenHeight.offsetHeight)
            this.assemblyType = 1;
            if(this.showList[this.currentIndex].nav_btn){
              this.showList[this.currentIndex].nav_btn = '';
            }
            let arr_type = this.showList.splice(this.currentIndex, 1);
            if (arr_type[0].type == 6) {
                this.number = 0;
            } else if (arr_type[0].type == 8) {
                this.isNavbar = true;
            }
            // bus.$emit('renderEle');
        },
        // 轮播图添加图片
        sliderAddImg() {
            this.showList[this.currentIndex].imgUrls.push({
                id: this.showList[this.currentIndex].imgUrls.length + 1,
                event: {},
                img:
                    "https://image-c.weimobwmc.com/saas-wxbiz/4c9e6ccd08b94ce2b62a2b945bf57d93.png"
            });
        },
        // 轮播图删除图片
        delSlider(index) {
            this.showList[this.currentIndex].imgUrls.splice(index, 1);
        },
        delTag(index) {
            this.showList[this.currentIndex].objArray[0].array.splice(index, 1);
        },
        textTag(index) {
            this.content = this.showList[this.currentIndex].objArray[0].array[
                index
            ];
            this.radioIndex = index;
        },
        radioTag() {},
        addTag() {
            this.showList[this.currentIndex].objArray[0].array.push("选项");
        },
        radioHandle(val) {
            this.showList[this.currentIndex].objArray[0].array[
                this.radioIndex
            ] = val;
            this.content = val;
        },
        console() {},
        save() {
            if (!this.numIndex) {
                this.rootList.index.elements = this.showList;
            }
            let params = {
                _token: this.$store.state._token,
                json: JSON.stringify(this.rootList),
                app_id: this.$store.state.app_id
            };
            this.$store.dispatch("crud", params).then(res => {
                if (+res.data.code === 200) {
                    this.$message({
                        message: "保存成功",
                        type: "success"
                    });
                } else {
                    this.$message.error(res.data.message);
                }
            });
        },
        release() {
            this.rootList[this.rootIndex].elements = JSON.parse(
                JSON.stringify(this.showList)
            );
            if (!this.numIndex) {
                var obj = {
                    type: 13,
                    id: "submit",
                    form: []
                };
                var releaseArr = [];
                let app = this.showList;
                for (var i = 0; i < app.length; i++) {
                    if (
                        app[i].type == "mail" ||
                        app[i].type == "submit" ||
                        app[i].type == "threeLinkage" ||
                        app[i].type == "date" ||
                        app[i].type == "phone" ||
                        app[i].type == "select" ||
                        app[i].type == "text"
                    ) {
                        var arr = app.slice(i, i + 1);
                        obj.form.push(arr[0]);
                    } else {
                        var arr = app.slice(i, i + 1);
                        releaseArr.push(arr[0]);
                    }
                }
                if (obj.form.length) {
                    this.rootList.index.elements = releaseArr.concat([obj]);
                } else {
                    this.rootList.index.elements = releaseArr;
                }
            } else {
                for (var prop in this.rootList) {
                    if (this.rootList[prop].elements) {
                        if (!Array.isArray(this.rootList[prop].elements)) {
                            this.rootList[prop].elements = JSON.parse(
                                this.rootList[prop].elements
                            );
                        }
                        var app = this.rootList[prop].elements;
                        let obj = {
                            type: 13,
                            id: "submit",
                            form: []
                        };
                        var releaseArr = [];
                        for (var i in app) {
                            if (
                                app[i].type == "mail" ||
                                app[i].type == "submit" ||
                                app[i].type == "threeLinkage" ||
                                app[i].type == "date" ||
                                app[i].type == "phone" ||
                                app[i].type == "select" ||
                                app[i].type == "text"
                            ) {
                                var arr = JSON.parse(JSON.stringify(app[i]));
                                obj.form.push(arr);
                            } else {
                                var arr = JSON.parse(JSON.stringify(app[i]));
                                releaseArr.push(arr);
                            }
                        }
                        if (obj.form.length) {
                            this.rootList[prop].elements = releaseArr.concat([
                                obj
                            ]);
                        } else {
                            this.rootList[prop].elements = releaseArr;
                        }
                    }
                }
            }
            const releaseData = {
                app_id: this.$store.state.app_id,
                u_token: this.$store.state._token,
                json: JSON.stringify({
                    extEnable: true,
                    extAppid: this.$store.state.app_id,
                    directCommit: false,
                    ext: {
                        styles: [this.rootList]
                    }
                })
            };
            this.$store.dispatch("releaselist", releaseData).then(res => {
                let { data, code, msg } = res.data;
                if (code == 200) {
                    this.$message({
                        message: "发布成功",
                        type: "success"
                    });
                    this.codeUrl = data.qrcode_urls;
                } else {
                    this.$message.error(res.data.message);
                }
            });
        },
        preview() {
            this.centerDialogVisible = true;
            let params = {
                _token: this.$store.state._token,
                app_id: this.$store.state.app_id
            };
            this.$store.dispatch("previewlist", params).then(res => {
                let { code, data } = res.data;
                if (code === 200) {
                    this.codeImagesUrl =
                        this.$store.state.qiniu + "/" + data.qrcode_url;
                } else {
                    this.$message.error(res.data.message);
                }
            });
            if (this.$store.state.wechat_picurl === undefined) {
                // this.$message.error('暂无预览图')
            }
        },
        titleContentHandle() {
            this.isTitle = true;
            this.titleContent = this.rootList[
                this.rootIndex
            ].setNavigationBarTitle;
        }
    },
    watch: {
        loopPlay(value) {
            this.showList[this.currentIndex].loop = value;
        },
        autoContent(value) {
            this.showList[this.currentIndex].autoplay = value;
        },
        rootIndex(value) {
            this.titleContent = this.rootList[value].setNavigationBarTitle;
        },
        titleContent(value) {
            this.rootList[this.rootIndex].setNavigationBarTitle = value;
        },
        phoneNumber(value) {
            this.showList[this.currentIndex].event.param.phoneNumber = value;
        },
        jumpType(value) {
            this.showList[this.currentIndex].event.name = value;
        },
        shareImg(value) {
            this.showList[this.currentIndex].event.param.img = value;
        },
        shareTitle(value) {
            this.showList[this.currentIndex].event.param.title = value;
        },
        shareDesc(value) {
            this.showList[this.currentIndex].event.param.desc = value;
        },
        jumpValue(value) {
            this.showList[this.currentIndex].event.param.herf = value;
        },
        $store() {
            this.assemblyType = this.$store.state.currentType;
        },
        positionX() {
            this.showList[this.currentIndex].position.left = this.positionX;
        },
        positionY() {
            if (this.showList[this.currentIndex].position.bottom) {
                this.showList[
                    this.currentIndex
                ].position.bottom = this.positionY;
            }
            this.showList[this.currentIndex].position.top = this.positionY;
        },
        width() {
            this.showList[this.currentIndex].width = this.width;
        },
        height() {
            this.showList[this.currentIndex].height = this.height;
        },
        backColor() {
            this.showList[
                this.currentIndex
            ].css.backgroundColor = this.backColor;
        },
        textColor() {
            this.showList[this.currentIndex].css.color = this.textColor;
        },
        isFixed() {
            if (this.isFixed === "1") {
                this.showList[this.currentIndex].css.position = "fixed";
            } else {
                this.showList[this.currentIndex].css.position = "absolute";
            }
        },
        rotate() {
            this.showList[this.currentIndex].css.transform =
                "rotate(" + this.rotate + "deg)";
        },
        transparent() {
            if (this.showList[this.currentIndex]) {
                this.showList[this.currentIndex].css.opacity = this.transparent;
            }
        },
        zIndex() {
            if (this.showList[this.currentIndex]) {
                this.showList[this.currentIndex].css.zIndex = this.zIndex;
            }
        },
        margin() {
            this.showList[this.currentIndex].css.margin = this.margin;
        },
        borderColor() {
            this.showList[this.currentIndex].css.borderColor = this.borderColor;
        },
        borderWidth() {
            this.showList[this.currentIndex].css.borderWidth = this.borderWidth;
        },
        borderType() {
            this.showList[this.currentIndex].css.borderStyle = this.borderType;
        },
        borderRadius() {
            this.showList[
                this.currentIndex
            ].css.borderRadius = this.borderRadius;
        },
        content() {
            this.showList[this.currentIndex].content = this.content;
        },
        checkPoint() {
            this.showList[this.currentIndex].indicatorDots = this.checkPoint;
        },
        autoplay() {
            this.showList[this.currentIndex].autoplay = this.autoplay;
        },
        pointColor() {
            this.showList[this.currentIndex].pointColor = this.pointColor;
        },
        active() {
            this.showList[this.currentIndex].active = this.active;
        },
        interval() {
            this.showList[this.currentIndex].interval = this.interval;
        },
        duration() {
            this.showList[this.currentIndex].duration = this.duration;
        },
        currentId() {
            this.showList.map((current, index) => {
                if (current.id === this.$store.state.currentId) {
                    this.currentEle = current;
                    this.currentIndex = index;
                    this.renderProps();
                }
                return 0;
            });
        },
        currentType() {
            console.log(this.currentType);
            if (
                this.currentType === 1 ||
                this.currentType === 2 ||
                this.currentType === 3
            ) {
                this.assemblyType = 1;
            } else if (this.currentType === 5) {
                this.assemblyType = 2;
            } else if (this.currentType === 9) {
                this.assemblyType = 3;
            } else {
                this.assemblyType = 0;
            }
        }
    },
    computed: {
        currentId() {
            return this.$store.state.currentId;
        },
        currentType() {
            console.log(this.$store.state.currentType);
            return this.$store.state.currentType;
        },
        videoUrlDisabled() {
            if (this.currentEle.type === 9) {
                return !this.showList[this.currentIndex].videoUrl;
            }
        }
    },
    created() {
        if (!this.$store.state._token) {
            this.$router.push({ name: "login" });
            this.$message({
                message: "请先登录",
                type: "error"
            });
        }
        let params = {
            app_id: this.$store.state.app_id,
            _token: this.$store.state._token
        };
        this.$store.dispatch("getauth", params).then(res => {
            let { code, data, msg } = res.data;
            if (+code == 200) {
                // this.rootList = JSON.parse(data.json);
            }
        });
    },
    mounted() {
        this.screenHeight = this.$refs.screenHeight.offsetHeight;
    }
};
</script>


<style scoped>

</style>
