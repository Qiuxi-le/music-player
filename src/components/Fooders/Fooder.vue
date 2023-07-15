<template>
    <div class="MAodiu">
        <starter />
        <button class="morbtn" @click="mor()">默认▶</button>
    </div>
</template>
<script>
import starter from './Starter.vue';
import { mapState, mapActions } from 'pinia';
import { useMusicStore } from '../../store/music';
export default {
    data(){
        return {
        }
    },
    components:{
        starter,
    },
    methods:{
        ...mapActions(useMusicStore, {pplus: 'pplus'}),
        mor(){
            this.Mplus('对爱的执念从不是海 - Rather Be (0.85x)')
        }
    }
}

</script>
<style scoped>

.newname {
    float: left;
    margin:5px;
}

.MAodiu {
    position: absolute;
    top: 90%;
    left: 0%;
    height: 50px;
    width: 98%;
    border-top: 1px solid #000;
    padding-left: 20px;
    box-shadow: 5px -10px 5px #888888;
}

starter {
    margin: auto;
}

.morbtn {
    float: right;
    border-radius: 10px;
    height: 40px;
    width: 80px;
}
</style>