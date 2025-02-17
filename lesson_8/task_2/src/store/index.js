import { createStore } from 'vuex'
import { carsData, filterData } from '@/constants/index.js'
const store = createStore({

    state() {
        return {
            carsData,
            filterData,
            filterObj: {
                transportType: null,
                bodyTypes: [],
                brand: null,
                model: null,
                year: { from: '', to: '' },
            },
            loading: false,
            error: null,
        }
    },
    getters: {
        getCarsData: (state) => {
            return state.carsData.filter(car => {
                const { transportType, bodyTypes, brand, model, year } = state.filterObj;

                // Фільтр за типом транспорту
                if (transportType && car.transportType !== transportType) {
                    return false;
                }

                // Фільтр за типом кузова (якщо хоча б один вибраний, авто має відповідати хоча б одному)
                if (bodyTypes.length && !bodyTypes.includes(car.bodyType)) {
                    return false;
                }

                // Фільтр за маркою
                if (brand && car.brand !== brand) {
                    return false;
                }

                // Фільтр за моделлю
                if (model && car.model !== model) {
                    return false;
                }

                // Фільтр за роком випуску
                if (year.from && car.year < year.from) {
                    return false;
                }
                if (year.to && car.year > year.to) {
                    return false;
                }

                return true;
            });
        },
        getFilterData: (state) => state.filterData,
        getFilterObj: (state) => state.filterObj,

    },
    mutations: {
        updateFilter(state, { key, value }) {
            state.filterObj[key] = value;
        },
        resetFilters(state) {
            state.filterObj = {
                transportType: null,
                bodyTypes: [],
                brand: null,
                model: null,
                year: { from: '', to: '' },
            }
        }
    },
    actions: {
        updateFilter({ commit }, { key, value }) {
            commit('updateFilter', { key, value })
        },
        resetFilters({ commit }) {
            commit('resetFilters')
        },
    }
})
export default store