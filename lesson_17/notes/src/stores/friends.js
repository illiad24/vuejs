import { defineStore } from 'pinia'
import { useCommonStore } from './common'
export const useFriendsStore = defineStore('friends', () => {


    return { ...useCommonStore("Friends", "Friend") }
}); 