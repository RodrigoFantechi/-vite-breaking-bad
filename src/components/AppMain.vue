<script>
import CharactersList from './CharactersList.vue'
export default {
   name: 'AppMain',
   components: {
      CharactersList,
   },
}
</script>

<template>
   <main>
      <div class="container pb-5">
         <select class="form-select my-4" aria-label="Default select example">
            <option selected>Select Category</option>
            <option value="1">Alive</option>
            <option value="2">Better Call Saul</option>
            <option value="3">Breaking Bad</option>
         </select>
         <CharactersList />
      </div>
   </main>
</template>

<style lang="scss" scoped>
.form-select {
   width: auto;
}
</style>
