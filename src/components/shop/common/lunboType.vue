<template>
  
<el-dialog title="选择轮播样式" :visible.sync="showlunbo" :before-close="handleClose">
    <div class="title-box">
        <div v-for="(title_item,title_index) in title_arr" :key="title_index" class="title-item" :class="{'active': activeShow==title_index}" >
                <div style="width:100%;height:100%;">
                        <img :src="title_item.img" style="width:90%;height:70%;margin-top:11%;margin-left:5%;">   
                    <label :for="title_index" @click="changeActive(title_index)">
                        <input :id="title_index" type="radio" value="0" name="chose">选项{{title_index}}
                        <i :class="{'i_active':activeShow==title_index}"></i>
                    </label>  
                </div>
        </div>  
    </div>
  <div slot="footer" class="dialog-footer">
    <el-button @click="parentRet1">取 消</el-button>
    <el-button type="primary" @click="parentRet">确 定</el-button>
  </div>
</el-dialog>
</template>
<script>
export default {
  name :'chooseTitle',
    data(){
        return{
                title_arr: [{img:require('../../../assets/images/shop/showlunbo1.png'),name:''},
                {img:require('../../../assets/images/shop/showlunbo2.png'),name:''}],
                activeShow:0,
        }
    },
    computed:{
        showlunbo(){
            return this.showLunboType
        }
    },
    props:{
       showLunboType:{
           default :true
       }
    },
    methods:{
        changeActive(i){
                this.activeShow = i;
        },
        parentRet(){
            this.$emit('lunboChange',this.activeShow)
        },
        parentRet1(){
            this.$emit('lunboChange')
        },
        handleClose(){
            this.$emit('lunboChange')
        }
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
    height: 200px;
    justify-content: space-around;
    .title-item{
        width: 280px;
        height: 200px;
        border: 1px solid #EFEFEF;
        position: relative;
        label{
            position: absolute;
            bottom: -35px;
            left: 50%;
            transform: translateX(-50%);
            input{
                // border: 1px solid#3587FC !important;
                border: none;
                outline: none;
                width: 15px;
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
                top: 41.4%;
                left: 13.5%;
                transform: translateX(-50%) translateY(-50%)
            }
        }

    }
}
.active{
    &>div{
        border: 1px solid #3587FC;
    }
    &>input{
         background:  #3587FC;
    }
}
</style>
