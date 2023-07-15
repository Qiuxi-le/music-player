<template>
    
    <div class="phblock">
        <h3> / 排行榜 </h3> 
        <ul class="contr">
            <li v-for="Musicname of phnames">
                <span>{{ nums++ }}.{{ Musicname }}</span>
                <button :@click="startbtn()" :id="Musicname" class="Mbtn">点我:{{ Musicname }} => 播放列表</button>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useMusicStore } from '../../store/music'
export default {
    data(){
        return {
            nums:-706-202-909,
            phnames:['不问ciage','蔡健雅-Letting Go','程今-爱是无畏的冒险','李荣浩-乌梅子酱','那奇沃夫&KKECHO-苦咖啡·唯一','男明星 - 起风了 (0.8x)','清空','盛哲-在你的身边','徐佳莹-一样的月光',
                    '一只白羊-赐我','周杰伦-稻香','周杰伦-反方向的钟','周杰伦-花海','周杰伦-兰亭序','Capper&罗言RollFlash-雪 Distance','cici_-把回忆拼好给你','G.E.M.邓紫棋-桃花诺','Zyboy忠宇-妈妈的话'],
            phbtn:0
        }
    },
    methods:{
        ...mapActions(useMusicStore,{pplue: 'pplue'}),
        startbtn(){
            console.log(this.id);

        }
    }
}

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.contr {
    height:340px;
    overflow-y:auto;
    margin-left: 20px;
    margin-top: 10px;
    width: 400px;
    float: left;
}

.Mbtn {
    float: right;
    width: 100%;
    height: 22px;
    background-color: #fff;
    color: #888;
    margin-top: 1px;
    border: 1px solid white;
    transition: background-color 0.5s;
    transform: color 1s;
}

span {
    display: inline-block;
    
}

h3 {
    color: black;
    margin-left: 20px;
}

.phblock {
    width: 400px;
    height: 400px;
    float: left;
}

li {
    background-color: #88888820;
    border: 1px solid white;
    transition: background-color 2s;
}

li:hover {
    color: rgba(255, 166, 0, 0.800);
    background-color: rgba(255, 255, 0, 0.400);
}
.Mbtn:hover {
    background-color: #8888884e;
    color: #000;
}

</style>