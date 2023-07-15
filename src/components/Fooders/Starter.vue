<template>
    <audio ref="audio">
        <source :src="'../../../musices/'+mane+'.mp3'"/>
    </audio>
    <button @click="starter" class="btn">{{ btnplaying }}</button>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useMusicStore } from '../../store/music'

export default {
    data() {
        return {
            playing:false,
            btnplaying:'▶'
        }
    },
    computed: {
        ...mapState(useMusicStore, {a: 'a'}),
        ...mapState(useMusicStore, {mane: 'mane'})
    },
    methods:{
        ...mapActions(useMusicStore, {plus: 'plus'}),
        ...mapActions(useMusicStore, {Mplus: 'Mplus'}),
        starter(){
            if (this.playing){
                this.playing = false
                this.btnplaying = '▶'
                this.$refs.audio.pause()
                this.plus('暂停中...暂停中...暂停中...暂停中...暂停中...')
                console.log(this.a);
            }else{
                this.playing = true
                this.btnplaying = '||'
                this.$refs.audio.play()
                this.plus('当前播放:'+this.mane)
                console.log(this.a);
            }
        }
    }
        
}

</script>
<style scoped>

.btn {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: black;
    color: white;
}

</style>