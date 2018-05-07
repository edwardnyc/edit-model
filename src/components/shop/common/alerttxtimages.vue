<template>
  
<el-dialog title="图片导航" :visible.sync="showlunbo">
    <div class="title-box">
        <div v-for="(title_item,title_index) in title_arr" :key="title_index" class="title-item" :class="{'active': activeShow==title_index}" >
                <!-- <div style="width:280px;height:200px;"> -->
                        <img :src="title_item" style="width:100%;height:40px;margin-top:30%;" :class="`img${title_index}`">   
                    <label :for="title_index" @click="changeActive(title_index)">
                        <input :id="title_index" type="radio" value="0" name="chose">选项{{title_index}}
                        <i :class="{'i_active':activeShow==title_index}"></i>
                    </label>  
                <!-- </div> -->
        </div>  
    </div>
  <div slot="footer" class="dialog-footer">
    <el-button @click="parentRet">取 消</el-button>
    <el-button type="primary" @click="parentRet">确 定</el-button>
  </div>
</el-dialog>
</template>
<script>
export default {
  name :'chooseTitle',
    data(){
        return{
               title_arr:[
                //    require('../../../assets/images/shop/alert/图片导航样式1.png'),
                            require('../../../assets/images/shop/alert/imgtxt1.png'),
                            require('../../../assets/images/shop/alert/imgtxt2.png'),
                            require('../../../assets/images/shop/alert/imgtxt3.png'),
                            require('../../../assets/images/shop/alert/imgtxt4.png'),
                            // require('../../../assets/images/shop/alert/图片导航样式6.png'),
                            //   require('../../../assets/images/shop/search2.png'),
                            // require('../../../assets/images/shop/search3.png')
                        ],
                activeShow:0,
        }
    },
    computed:{
        showlunbo(){
            return this.showSearch
        }
    },
    props:{
       showSearch:{
           default :true
       }
    },
    methods:{
        changeActive(i){
                this.activeShow = i;
        },
        parentRet(){
            this.$emit('showSearchStyle',this.activeShow)
        },
    //     cancel(){
    //         this.$emit('titleChange',this.activeShow)        }
    // }
    }
}
</script>
<style lang="scss" scoped>
          .i_active{
                background: #3587FC;
            }
.title-box{
    display: flex;
    height: 500px;
    flex-wrap: wrap;
    // justify-content: space-around;
    .title-item{
        width: 30%;
        margin-left:30px;
        margin-top:10px;
        height: 200px;
        background: #fafafa;
        // height: 100%;
        border: 1px solid #EFEFEF;
        position: relative;
        label{
            position: absolute;
            bottom: -35px;
            left: 50%;
            transform: translateX(-50%);
            input{
                border: 1px solid#3587FC !important;
                width: 15px;
                vertical-align: middle;
                margin-top: -3px;                
                height: 15px;
                border-radius: 50%;
                &:checked{
                    // background: red;
                }
            }
            // input:checked+i{
            //     background: #3587FC;
            // }
            i{
                position: absolute;
                padding: 5px;
                border-radius: 50%;
                // background: #3587FC;
                top: 45%;
                left: 13.5%;
                transform: translateX(-50%) translateY(-50%)
            }
        }

    }
}
.active{
    // &>div{
        border: 1px solid #3587FC !important;
    // }
    &>input{
         background:  #3587FC;
    }
}
.img0{
    height: 110px !important;
    transform: translateY(-35px);
}
.img1,.img2,.img4,.img5{
    height: 80px !important;
    transform: translateY(-18px);    
}
.img3{
    height: 110px  !important;
    transform: translateY(-35px);        
}
</style>
