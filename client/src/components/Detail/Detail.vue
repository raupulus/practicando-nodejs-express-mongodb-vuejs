<template src='./Detail.html' lang='html'>
</template>

<script>
  import http from 'axios'

  export default {
    name: 'detail',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        recipe: {}
      }
    },
    mounted () {
      this.getRecipe()
    },
    methods: {
      getRecipe () {
        return http({
          method: 'GET',
          url: `${process.env.API}recetas/${this.id}`,
          headers: {
            'Authorization': `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.FyKpDq5EUXNk0AHqWmrK2LVgtV4maW7VRWSET6oDOoE`
          }
        })
          .then(response => response.data)
          .then(data => {
            this.recipe = data
          })
      }
    }
  }
</script>

<style>
  .divider {
    margin: 4rem 0;
  }
</style>
