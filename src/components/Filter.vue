
<script>
import { store } from '../store.js'
export default {
    name: 'Filter',
    data() {
        return {
            store,
        }
    },
}
</script>

<template >
   <select class="form-select my-4" v-model="store.categorySelector" @change="$emit('findActor')">
            <option selected>All</option>
            <option value="Better Call Saul">Better Call Saul</option>
            <option value="Breaking Bad">Breaking Bad</option>
         </select>
</template>
<style lang="scss" scoped>
    
</style>