<template>
    <header>
        <h3 class="Htitle">Music-Player</h3>
        <ul>
            <li><p>首页</p></li>
            <li><p>排行榜</p></li>
        </ul>
        <div class="playnew">
            <marquee>{{ a }}</marquee>
        </div>
        <Seach class=".seachs"/>
    </header>
</template>
<script>
import { mapState } from 'pinia'
import { useMusicStore } from '../../store/music'
import Seach from './seach.vue'
export default {
    data(){
        return {
            musicname:'当前播放的音乐将会显示在这里'
        }
        
    },
    computed: {
        ...mapState(useMusicStore, {a: 'a'})
    },
    components:{
        Seach,
    }
}

</script>
<style scoped>

header {
    height: 30%;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    padding-left: 20px;
    box-shadow: 10px 10px 5px #888888;
}

.Htitle {
    text-shadow: 10px 3px 3px #a0a0a0;
    display: inline-block;
    float: left;
    margin: 10px;
}

ul {
    display: inline-block;
    margin-left: 30px;
}

li {
    display: inline-block;
    width: 50px;
    margin-left: 50px;
    margin-right: 50px;
}

li p {
    margin: auto;
}

li:hover {
    text-shadow: 2px 2px 2px #888;
}

.playnew {
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
    width: 100px;
    box-shadow: 1px 1px 5px #888;
}

</style>