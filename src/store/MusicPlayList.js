
import { defineStore } from 'pinia'
export const useMusicStore = defineStore('MusicPlayList', {
    musiclist: () => ({
        list:['不问ciage']
    }),
    actions: {
        addmusic(musicname) {
            list.push(musicname)
        },
        shiftmusic(musicname) {
            list.shift()
        }
    }
})