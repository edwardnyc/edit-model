<template>
  <div class="agentform">
    <div class="form">
      <div class="form-label">代理类型：</div>
      <div class="form-input form-radio">
        <label @click="clickFormType(1)" :class="{active: this.formData.type==1}">
          一级代理商
        </label>
        <label @click="clickFormType(2)" :class="{active: this.formData.type==2}">
          二级代理商
        </label>
      </div>
    </div>
    <div class="form">
      <div class="form-label">您的姓名：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">您的电话：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">您的QQ：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">所在区域：</div>
      <div class="form-input form-select">
        <label class="addr-prevince">
          <p @click.stop="toggleSelectPre" id="prevince" :class="{active: selectPre}">黑龙江省</p>
          <ul :class="{showActive: selectPre}">
            <li>北京</li>
            <li>被蒙古</li>
            <li>被蒙古</li>
            <li>被蒙古</li>
            <li>被蒙古</li>
            <li>被蒙古</li>
          </ul>
        </label>
        <label class="addr-city">
          <p @click.stop="toggleSelectCity" id="city" :class="{active: selectCity}">选择市</p>
          <ul :class="{showActive: selectCity}">
            <li>选择市</li>
          </ul>
        </label>
      </div>
    </div>
    <div class="form">
      <div class="form-label">主营业务：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">客户群体：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">营销计划：</div>
      <div class="form-input form-textarea">
        <textarea></textarea>
      </div>
    </div>
    <div class="form">
      <div class="form-label"> </div>
      <div class="form-input form-btn">
        <button>立即加入</button>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectPre: false,
        selectCity: false,
        formData: {
          type: 1,
          name: '',
          phone: '',
          qq: '',
          business: '',
          member: '',
          plan: ''
        }
      }
    },
    methods:{
      clickFormType(type){
        this.formData.type = type;
      },
      toggleSelectPre(){
        this.selectPre = !this.selectPre;
        if (this.selectPre) {
          this.selectCity = false;
        }
      },
      toggleSelectCity(){
        this.selectCity = !this.selectCity;
        if (this.selectCity) {
          this.selectPre = false;
        }
      }
    },
    created () {
      const that = this
      document.querySelector('body').addEventListener('click',(e)=>{    
        if (e.target.id != 'prevince' || e.target.id != 'city') {
          this.selectCity = false;
          this.selectPre = false;
        }
      },false);
    }
  }
</script>

<style lang="scss" scoped>
@import  "../../assets/scss/_baseFunction";

$inputWidth: 430px;
$inputHeight: 44px;
$inputMobileWidth: 75%;
$inputMobileHeight: 36px;
.agentform{
  width: 580px;
  margin: 0 auto 40px;
  .form{
    color: $minColor;
    margin-top: 20px;
    &:after{
      content: "";
      display: block;
      clear: both;
    }
  }
  .form-label{
    float: left;
    line-height: $inputHeight;
    height: $inputHeight;
    width: 100px;
  }
  .form-input{
    float: left;
    color: $minColor;
  }
  .form-radio{
    label{
      display: inline-block;
      width: 200px;
      text-align: center;
      line-height: $inputHeight;
      position: relative;
      &:before{
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 36px;
        margin-top: -7px;
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 3px solid $blueColor;
      }
    }
    .active{
      &:before{
        background: $blueColor;
      }
    }
  }
  .form-text{
    input{
      width: $inputWidth;
      height: $inputHeight;
      box-sizing: border-box;
      border-radius: 6px;
      border: 2px solid #c9c9c9;
      padding: 5px 10px;
      color: $minColor;
      &:focus{
        border-color: $blueColor;
      }
    }
  }
  .form-textarea{
    textarea{
      width: $inputWidth;
      box-sizing: border-box;
      border-radius: 6px;
      border: 2px solid #c9c9c9;
      padding: 5px 10px;
      color: $minColor;
      min-height: 160px;
      resize: none;
      &:focus{
        border-color: $blueColor;
      }
    }
  }
  .form-btn{
    button{
      height: 50px;
      color: #fff;
      background: $blueColor;
      border-radius: 6px;
      width: $inputWidth;
      box-sizing: border-box;
      border: none;
      font-size: 18px;
      &:active,&:hover{
        background: $dblueColor;
      }
    }
  }
  .form-select{
    label{
      display: inline-block;
      width: 200px;
      text-align: center;
      box-sizing: border-box;
      line-height: $inputHeight;
      height: $inputHeight;
      position: relative;
      vertical-align: middle;
    }
    .addr-prevince{
      border-radius: 6px;
      background: $blueColor;
      z-index: 10;
      width: 210px;
      p{
        color: #fff;
        &:after{
          background-image: url(../../assets/images/agent/arrow-lf.png);
        }
      }
      li{
        &.active, &:hover{
          background: $blueColor;
          
        }
      }
    }
    .addr-city{
      width: 225px;
      border: 2px solid #c9c9c9;
      border-left: none;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      margin-left: -12px;
      p{
        color: $minColor;
        &:after{
          background-image: url(../../assets/images/agent/arrow-rt.png);
        }
      }
      li{
        &.active, &:hover{
          background: #c9c9c9;
        }
      }
    }
    p{
      position: relative;
      &:after{
        content: "";
        display: block;
        width: 12px;
        height: 9px;
        background-size: 100% 100%;
        position: absolute;
        top: 50%;
        right: 10px;
        margin-top: -5px;
        -mo-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }
      &.active{
        &:after{
          -mo-transform: rotate(180deg);
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
        }
      }
    }
    ul{
      position: absolute;
      top: 46px;
      border-radius: 2px;
      left: 0;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: #fff;
      opacity: 0;
      -moz-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); 
      -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); 
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      box-sizing: border-box;
      z-index: 10;
      -mo-transition-duration: 0.8s;
      -webkit-transition-duration: 0.8s;
      transition-duration: 0.8s;
      &.showActive{
        height: auto;
        max-height: 220px;
        overflow-y: auto;
        opacity: 1;
      }
      li{
        &.active, &:hover{
          color: #fff;
        }
      }
    }
  }
}
@media (max-width:1199px){
  .agentform{
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    .form-label{
      width: 25%;
    }
    .form-input{
      width: $inputMobileWidth;
    }
    .form-radio{
      font-size: 0;
      label{
        display: inline-block;
        width: 50%;
        line-height: $inputHeight;
        font-size: 14px;
        &:before{
          left: 0px;
          border: 3px solid $blueColor;
        }
      }
    }
    .form-text{
      input{
        width: 100%;
        height: $inputMobileHeight;
        border-width: 1px;
        padding: 2px 10px;
      }
    }
    .form-textarea{
      textarea{
        width: 100%;
        box-sizing: border-box;
        border-radius: 6px;
        border-width: 1px;
        padding: 2px 10px;
        min-height: 160px;
      }
    }
    .form-btn{
      button{
        height: 40px;
        border-radius: 6px;
        width: 100%;
        font-size: 16px;
      }
    }
    .form-select{
      label{
        width: 50%;
        line-height: $inputMobileHeight;
        height: $inputMobileHeight;
        position: relative;
        vertical-align: middle;
      }
      .addr-prevince{
        border-radius: 6px;
        background: $blueColor;
        z-index: 10;
        width: 50%;
        p{
          color: #fff;
        }
      }
      .addr-city{
        width: 50%;
        border: 1px solid #c9c9c9;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        margin-left: -12px;
      }
      ul{
        width: 100%;
      }
      p{
        &:after{
          width: 8px;
          height: 6px;
          right: 6px;
          margin-top: -3px;
        }
      }
    }
  }
}
</style>
