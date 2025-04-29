import { defineStore } from 'pinia'
import { useCommonStore } from './common';
export const useGiftStore = defineStore('gifts', () => {

    // gifts: [
    //     { id: 1, title: "Ноутбук" },
    //     { id: 2, title: "Смартфон" },
    //     { id: 3, title: "Навушники" },
    //     { id: 4, title: "Годинник" },
    //     { id: 5, title: "Подарунковий сертифікат" },
    //     { id: 6, title: "Ігрова консоль" },
    //     { id: 7, title: "Книга" },
    //     { id: 8, title: "Квиток на концерт" },
    //     { id: 9, title: "Кавоварка" },
    //     { id: 10, title: "Рюкзак" },
    // ],
    return {
        ...useCommonStore('Gifts', 'Gift')
    }
});