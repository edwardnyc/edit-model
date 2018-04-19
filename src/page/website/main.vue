<template>
  <div class="out-container">
    <header class="out-header">
      <div class="header-con">
        <div class="nav-left">
          <ul class="nav navbar-left">
            <li class="nav-btn">
              <i class="icon-back"></i>
              <span>返回</span>
            </li>
          </ul>
        </div>

        <div class="nav-down-bar">
          <ul class="nav navbar-down">
            <li class="down-btn">
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
                  <li @click="assemblyType = 2" class="item">
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
          </ul>
        </div>
        <div>
          <ul class="nav navbar-right">
            <li class="nav-btn">
              <i class="icon-enlarge"></i>
            </li>
            <li class="nav-btn">
              <i class="icon-feedback"></i>
              <span>反馈</span>
            </li>
            <li class="nav-btn">
              <i class="icon-set"></i>
              <span>设置</span>
            </li>
            <li class="nav-btn">
              <i class="icon-save"></i>
              <span>保存</span>
            </li>
            <li class="nav-btn">
              <i class="icon-eye right-icon"></i>
              <span>预览</span>
            </li>
            <li class="nav-btn">
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
          <i class="icon-add"></i>
        </div>
        <div class="content-list">
          <div class="menu-item">
            <div class="icon-menu menu-icon"></div>
            <div class="open-btn">+</div>
            <span class="name">新年活动</span>
            <div class="set-btn">
              <i class="icon-edit menu-top"></i>
              <i class="icon-add add-menu"></i>
              <i class="icon-ellipsis menu-top"></i>
            </div>
          </div>
          <div class="menu-item">
            <div class="icon-menu menu-icon"></div>
            <div class="open-btn">+</div>
            <span class="name">新年活动</span>
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
            <div class="head">标题</div>
          </div>
        </div>
      </div>

      <div class="main-right">
        <div class="content">
          <div class="main-tabs">
            <div @click="showModel(1)" class="tabs-item"><span :class="{'sel-tabs':setType==1}">常规设置</span></div>
            <div @click="showModel(2)" class="tabs-item"><span :class="{'sel-tabs':setType==2}">组件设置</span></div>
            <div @click="showModel(3)" class="tabs-item"><span :class="{'sel-tabs':setType==3}">模板</span></div>
          </div>
          <div class="tabs-content">
            <div v-if="setType==1" class="routine">
              <el-row class="mar15">
                <el-col :span="6">
                  <div class="grid-content bg-purple title-font">分享标题</div>
                </el-col>
                <el-col :span="18">
                  <div class="grid-content bg-purple-light">
                    <el-input class="out-input" placeholder="分享标贴30字以内"></el-input>
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
                    <el-input type="textarea" :rows="3" placeholder="分享描述"></el-input>
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
                    <div class="cover">
                      <span class="cover-tip">更换图片</span>
                    </div>
                  </div>
                  <p class="item-desc">建议图片长宽比215*168，如不设置自动截取页面首屏</p>
                </el-col>
              </el-row>
              <el-row class="mar15">
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
              </el-row>
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
                  <small class="desc">图片组件</small>
                  <i class="panel-down" :class="[show1 ? 'icon-uE703-triangle-up' : 'icon-uE704-triangle-down']"></i>
                </div>
                <el-collapse-transition>
                  <div class="panel-con" v-show="show1">
                    <div class="panel">
                      <span class="name">位置</span>
                      <div>
                        <div class="option">
                          <span class="title">X</span>
                          <input type="number" class="option-inp">
                        </div>
                        <div class="option">
                          <span class="title">Y</span>
                          <input type="number" class="option-inp">
                        </div>
                        <div class="mar8">
                          <el-button size="mini">置左</el-button>
                          <el-button size="mini">居中</el-button>
                          <el-button size="mini">置右</el-button>
                        </div>
                      </div>
                    </div>
                    <div class="panel">
                      <span class="name">大小</span>
                      <div>
                        <div class="option">
                          <span class="title">宽</span>
                          <input type="number" class="option-inp">
                        </div>
                        <div class="option">
                          <span class="title">高</span>
                          <input type="number" class="option-inp">
                        </div>
                      </div>
                    </div>
                    <div class="panel">
                      <span class="name">是否悬停</span>
                      <div>
                        <el-radio class="small" v-model="share" label="1">是</el-radio>
                        <el-radio class="small" v-model="share" label="2">否</el-radio>
                      </div>
                    </div>
                  </div>
                </el-collapse-transition>
              </div>
              <div v-if="assemblyType==1" class="panel-item">
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
                      <span class="name">文字颜色</span>
                      <el-input class="out-input" v-model="textColor">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="textColor" show-alpha></el-color-picker>
                        </template>
                      </el-input>
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
              <div v-if="assemblyType==2" class="panel-item">
                <div @click="slideDown(2)" class="panel-head">
                  <span class="title">样式&内容</span>
                  <i class="panel-down" :class="[show2 ? 'icon-uE703-triangle-up' : 'icon-uE704-triangle-down']"></i>
                </div>
                <el-collapse-transition>
                  <div class="panel-con" v-show="show2">
                    <div class="slides">
                      <div v-for="item in 7" class="item">
                        <span class="del-slide"><big>-</big></span>
                        <span class="up-slide">编辑</span>
                      </div>
                      <div class="up-btn"><big>+</big></div>
                    </div>
                    <div class="panel">
                      <el-checkbox v-model="checkPoint" class="small-chx">是否显示面板指示点</el-checkbox>
                    </div>
                    <div v-if="checkPoint" class="panel">
                      <span class="name">指示点颜色</span>
                      <el-input class="out-input" v-model="textColor">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="textColor" show-alpha></el-color-picker>
                        </template>
                      </el-input>
                    </div>
                    <div v-if="checkPoint" class="panel">
                      <span class="name">指示点选中颜色</span>
                      <el-input class="out-input" v-model="textColor">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="textColor" show-alpha></el-color-picker>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel">
                      <span class="name">定格时间</span>
                      <el-input class="out-input" v-model="textColor">
                        <template slot="append">
                          <big>ms</big>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel">
                      <span class="name">过度时间</span>
                      <el-input class="out-input" v-model="textColor">
                        <template slot="append">
                          <big>ms</big>
                        </template>
                      </el-input>
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
                  </div>
                </el-collapse-transition>
              </div>
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
                      <el-input :disabled="true" class="out-input" v-model="textColor">
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
                      <el-checkbox class="small-chx" v-model="blank">自动播放
                        <span class="desc">只在小程序中有效，最多打开5层</span>
                      </el-checkbox>
                    </div>
                    <div class="panel">
                      <el-checkbox class="small-chx" v-model="blank">循环播放
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
              <div v-if="assemblyType!=3" class="panel-item">
                <div @click="slideDown(3)" class="panel-head">
                  <span class="title">跳转</span>
                  <i class="panel-down" :class="[show3 ? 'icon-uE703-triangle-up' : 'icon-uE704-triangle-down']"></i>
                </div>
                <el-collapse-transition>
                  <div class="panel-con jump" v-show="show3">
                    <el-radio class="small" v-model="jumpType" label="0">无</el-radio>
                    <el-radio class="small" v-model="jumpType" label="1">页面</el-radio>
                    <el-radio class="small" v-model="jumpType" label="2">电话</el-radio>
                    <el-radio class="small" v-model="jumpType" label="3">地址</el-radio>
                    <el-radio class="small" v-model="jumpType" label="4">分享给好友</el-radio>
                    <el-radio class="small" v-model="jumpType" label="5">分享朋友圈</el-radio>
                    <el-radio class="small" v-model="jumpType" label="6">分享好友和朋友圈</el-radio>
                    <el-radio class="small" v-model="jumpType" label="7">微客服</el-radio>

                    <div v-if="jumpType==1">
                      <el-input size="small"></el-input>
                      <span class="jump-tip">请选择页面</span>
                      <div>
                        <el-checkbox v-model="blank">新窗口打开
                          <span class="desc">只在小程序中有效，最多打开5层</span>
                        </el-checkbox>
                      </div>
                    </div>
                    <div v-if="jumpType==2">
                      <el-input size="small"></el-input>
                    </div>
                    <div v-if="jumpType==3">
                      <div class="province-sel">
                        <el-select size="small" v-model="province" placeholder="请选择">
                        </el-select>
                        <el-select size="small" v-model="city" placeholder="请选择">
                        </el-select>
                        <el-select size="small" v-model="area" placeholder="请选择">
                        </el-select>
                      </div>
                      <el-input size="small" placeholder="请输入详细地址"></el-input>
                    </div>
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
                      <el-input class="out-input" v-model="backColor">
                        <template slot="append">
                          <el-color-picker size="mini" v-model="backColor" show-alpha></el-color-picker>
                        </template>
                      </el-input>
                    </div>
                    <div class="panel">
                      <span class="name">宽度</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="20" v-model="rotate"></el-slider>
                        <input class="slider-num" v-model="rotate" type="number">
                      </div>
                    </div>
                    <div class="panel">
                      <span class="name">样式</span>
                      <div>
                        <el-select class="out-input" size="small" v-model="value" placeholder="请选择">
                          <el-option label="点线" value="1"></el-option>
                          <el-option label="实线" value="2"></el-option>
                          <el-option label="双线" value="3"></el-option>
                          <el-option label="虚线" value="4"></el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="panel">
                      <span class="name">圆角</span>
                      <div class="panel-slider">
                        <el-slider size="mini" :min="0" :max="162" v-model="margin"></el-slider>
                        <input class="slider-num" v-model="margin" type="number">
                      </div>
                    </div>
                  </div>
                </el-collapse-transition>
              </div>
            </div>
            <div v-if="setType==3">
              <div class="model-tabs">
                <div @click="tabModel(1)" class="model-item"><span :class="{'sel-model':modelType==1}">我的模板</span></div>
                <div @click="tabModel(2)" class="model-item"><span :class="{'sel-model':modelType==2}">系统模板</span></div>
              </div>
              <div v-if="modelType==1" class="model-con">
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
    <icon-material :dialogIcon="dialogIcon" @close="closeIcon"></icon-material>
    <images-material :dialogImages="dialogImages" @close="closeImages"></images-material>
    <video-material :dialogVideo="dialogVideo" @close="closeVideo"></video-material>
    <map-set :dialogMap="dialogMap" @close="closeMap"></map-set>
  </div>
</template>

<script>
  import VideoMaterial from '@/components/website/VideoMaterial'
  import ImagesMaterial from '@/components/website/ImagesMaterial'
  import IconMaterial from '@/components/website/IconMaterial'
  import MapSet from '@/components/website/MapMaterial'
  export default {
    components: {
      VideoMaterial,
      ImagesMaterial,
      IconMaterial,
      MapSet
    },
    data () {
      return {
        value: "1",
        radio3: "",
        province: "",
        city: "",
        area: "",
        jumpType: "0",
        modelType: "1",
        rotate: 0,
        transparent: 0,
        margin: 0,
        share: "1",
        backType: "1",
        color3: "",
        backColor: "",
        textColor: "",
        setType: "2",
        assemblyType: 3,
        blank: false,
        show1: true,
        show2: true,
        show3: true,
        show4: true,
        checkPoint: true,
        dialogImages: false,
        dialogVideo: false,
        dialogIcon: false,
        dialogMap: false,
      }
    },
    methods: {
      showModel(type){
        this.setType = type;
      },
      slideDown(type){
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

        }
      },
      tabModel(type){
        this.modelType = type;
      },
      closeVideo(){
        this.dialogVideo = false;
      },
      closeImages(){
        this.dialogImages = false;
      },
      closeIcon(){
        this.dialogIcon = false;
      },
      closeMap(){
        this.dialogMap = false;
      }
    }
  }
</script>

<style scoped>

</style>
