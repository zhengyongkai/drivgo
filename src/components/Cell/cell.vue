
<!-- 
    模仿vux 的  Cell
-->
<template>
    <div class="body">
        <div class="cell-item">
            <div>
                <slot name="title"></slot>
            </div>
           <div>
                <slot name="desc"></slot>
           </div>
            <div>
                <slot name="num" ></slot>
            </div>
            <div v-if="link">
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cell",
    props: {
       height:{
            type: String,
            default: "1rem"
        },
        link:{
            type:Boolean,
            default:true
        }
    },
    data() {
        return {};
    },
    created() {},
    methods: {}
};
    
</script>

<style lang="scss" scoped>
    .body{
        width:100%;
    }
    .cell-item{
        display:flex;
       
        background:red;
    }
</style>

