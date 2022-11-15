<script>
import {store} from '../store' 
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header class="text-center my-5 d-flex justify-content-center align-items-center">
        <img src="../assets/img/Breaking_Bad_logo.png" alt="">
     <h1 >Breaking Bad Api</h1>
    </header>
</template>

<style lang="scss" scoped>
img{
    width: 80px;

}

</style>