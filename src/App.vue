<script >
import {store} from './store.js' 
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import Loader from './components/Loader.vue'
export default {
  name: 'App',
  components:{
    AppHeader,
    AppMain,
    Loader,
  },
  data(){
    return{
      store,
    }
  },
  
  mounted() {
    this.store.callApi(store.API_URL)
    
  },
}
</script>

<template>
<AppHeader/>
<Loader v-if='store.show=== false'/>
<AppMain v-else/>
</template>

<style lang="scss" scoped>

</style>






