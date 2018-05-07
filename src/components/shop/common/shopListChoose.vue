<template>
  
<el-dialog title="选择店铺样式" :visible.sync="showShopHead" :before-close="closehandle" width=600px>
    <div class="title-box" style="transform:translateY(-20px);">
        <div v-for="(title_item,title_index) in title_arr" :key="title_index" class="title-item" :class="{'active': activeShow==title_index}" >
                <div style="overflow:hidden;">
                     <img :src="title_item" style="width:94%;margin-top:50%;margin-left:3%;" :class="'img'+title_index">   
                    <label :for="title_index" @click="changeActive(title_index)">
                        <input :id="title_index" type="radio" value="0" name="chose">选项{{title_index}}
                        <i :class="{'i_active':activeShow==title_index}"></i>
                    </label>  
                </div>
        </div>  
    </div>
  <div slot="footer" class="dialog-footer">
    <el-button @click="closehandle">取 消</el-button>
    <el-button type="primary" @click="parentRet">确 定</el-button>
  </div>
</el-dialog>
</template>
<script> 
export default {
  name :'chooseTitle',
    data(){
        return{
                title_arr: [require('../../../assets/images/shop/alert/shopHead1.png'),require('../../../assets/images/shop/alert/shopHead0.png')],
                activeShow:0,
                chooseSync: this.showShopHead
        }
    },
    props:{
       showShopHead:{
           default :false
       }
    },
    methods:{
        changeActive(i){
                this.activeShow = i;
        },
        parentRet(){
            this.$emit('changeShopHead',this.activeShow)
        },
        closehandle(){
            this.$emit('changeShopHead')
        }

    //     cancel(){
    //         this.$emit('titleChange',this.activeShow)        }
    // }
    },
            watch:{
            // chooseSync(){
            //     this.$emit()
            // }
        },

}
</script>
<style lang="scss" scoped>
          .i_active{
                background: #3587FC;
            }
.title-box{
    display: flex;
    height: 200px;
    justify-content: space-between;
    .title-item{
        width: 260px;
        height: 100%;
        border: 1px solid rgba(grey,0.4);
        position: relative;
         background: #fafafa;
        label{
            position: absolute;
            bottom: -35px;
            left: 50%;
            transform: translateX(-50%);
            input{
                border: 1px solid#3587FC !important;
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
                top: 36%;
                left: 13.5%;
                transform: translateX(-50%) translateY(-50%)
            }
        }

    }
}
label{
    // font-size: 12px !important;
}
.active{
    // &>div{
    //     border: 1px solid #3587FC;
    // }
    border : 1px solid #3587FC !important;
    &>input{
         background:  #3587FC;
    }
}
.img0{
    margin-top: 15px !important;
}
.img1{
    margin-top:75px !important;
}
</style>
