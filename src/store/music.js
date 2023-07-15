
import { defineStore } from 'pinia'
export const useMusicStore = defineStore('music', {
    state: () => ({
        a: '当前预播放',
        mane: '对爱的执念从不是海 - Rather Be (0.85x)'
    }),
    actions: {
        plus(name) {
            this.a = name
        },
        pplus(MName) {
            this.mane = MName
        }
    }
})