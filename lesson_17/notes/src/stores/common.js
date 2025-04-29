import { ref, computed } from 'vue'

import { v4 as uuidv4 } from 'uuid';
import DbOperations from './helpers/DbOperations';

export const useCommonStore = (collectionNames, collectionName) => {
    const collectionDB = new DbOperations(collectionNames.toLowerCase())
    // state
    const items = ref([])
    const loading = ref(null)
    const error = ref(null)
    const currentItem = ref(null)


    // getters
    const getItems = computed(() => items.value);

    const isLoading = computed(() => loading.value)
    const hasError = computed(() => error.value)
    const getItemById = (itemId) => items.value.find((item) => item.id == itemId)
    const getCurrentItem = computed(() => currentItem.value)
    // actions

    async function loadList(options) {

        try {
            error.value = null
            loading.value = true
            const list = await collectionDB.loadItemsList(options)
            items.value = list
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false
        }
    }

    async function loadItemDataById(itemId) {
        error.value = null
        loading.value = true
        currentItem.value = null
        try {
            const data = await collectionDB.loadItemById(itemId)
            currentItem.value = data
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false
        }
    }
    async function addItem(item) {
        error.value = null
        loading.value = true
        try {
            await collectionDB.addItem(item)
            await loadList()
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false
        }
    }

    async function deleteItem(itemId) {
        error.value = null
        loading.value = true
        try {
            await collectionDB.deleteItem(itemId)
            await loadList()
        } catch (e) {
            error.value = e
            throw e
        } finally {
            loading.value = false
        }
    }

    return {

        [collectionNames]: items,
        ['get' + collectionNames]: getItems,
        ['add' + collectionName]: addItem,
        ['delete' + collectionName]: deleteItem,
        ['get' + collectionName + 'ById']: getItemById,
        // ['get' + collectionNames + 'LoadList']: loadList,
        loadList,
        getCurrentItem,
        error, hasError, isLoading
    }
}
