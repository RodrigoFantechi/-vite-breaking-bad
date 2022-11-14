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
      <div class="container">
         <select class="form-select my-4" aria-label="Default select example">
            <option selected>Select Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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