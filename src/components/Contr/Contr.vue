<template>
    <div class="home">
        <h3>Hello ! you are Wellcome</h3>
        <MSelect />
    </div>
</template>
<script>
import MSelect from './Mselect.vue';
export default {
    data(){
        return {

        }
    },
    methods:{

    },
    components:{
        MSelect,
    }
}

</script>

<style scoped>


.home {
    box-shadow: 5px 1px 5px #888;
    width: 100%;
    height: 460px;
    border: 1px solid #888888;
    position: relative;
    top: 10px;
}

h3 {
    margin: 10px;
}

</style>