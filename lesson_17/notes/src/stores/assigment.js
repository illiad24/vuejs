import { defineStore } from 'pinia'
import { useCommonStore } from './common'
export const useAssigmentStore = defineStore('assigment', () => {


    return { ...useCommonStore('Assigments', 'Assigment') }
});