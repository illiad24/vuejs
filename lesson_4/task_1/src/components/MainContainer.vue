<template>
    <div>
<ComparisonList/>
<LastVievProductsList/>
    </div>
</template>

<script>
import ComparisonList from './ComparisonList.vue';
import LastVievProductsList from './LastVievProductsList.vue';
    export default {
        name:'MainContainer',
        components:{
            ComparisonList,
            LastVievProductsList
        },
        data(){

        }
    }
</script>

<style lang="scss" scoped>

</style>