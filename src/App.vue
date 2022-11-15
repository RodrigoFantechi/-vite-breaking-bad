<script >
import axios from 'axios'
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
  methods: {
    callApi(url) {
      axios.get(url).then(resp => {
        console.log(resp);
        store.characters = resp.data
        store.charactersLength = resp.data.length
        store.show=true

      }).catch(err => {
        console.error(err.message);
        store.error = err.message
      })
    }
  },
  mounted() {
    this.callApi(store.API_URL)
    
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






