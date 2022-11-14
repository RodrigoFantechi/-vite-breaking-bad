<script >
import axios from 'axios'
import {store} from './store.js' 
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  name: 'App',
  components:{
    AppHeader,
    AppMain,
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
<AppMain />
</template>

<style lang="scss" scoped>

</style>






