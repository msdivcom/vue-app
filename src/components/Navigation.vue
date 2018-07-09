<template>
    <div class="navigation">
        <ul>
            <li v-for="item in items" :key="item.id">
                <router-link :to="'/' + item.slug">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'navigation',
  data () {
    return {
      items: []
    }
  },
  methods: {
    fetchLinks () {
      let url = 'http://sandbox.komachi.pomzed.ch/wp/wp-json/pomzed/v1/navigation'
      this.$http.get(url, {
        headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zYW5kYm94LmtvbWFjaGkucG9temVkLmNoXC93cCIsImlhdCI6MTUzMTE0MTI5MywibmJmIjoxNTMxMTQxMjkzLCJleHAiOjE1MzE3NDYwOTMsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.VQfR8wKAYL2N9MJ0lJtqx9a-qHIpykf5EMFct64X79s'}
      }).then(response => {
        // get body data
        this.items = response.body.data
        console.log(response)
      }, response => {
        // error callback
        console.log(response)
      })
    }
  },
  created () {
    this.fetchLinks()
  }
}
</script>

<style scoped>
    .navigation ul{
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .navigation ul li{
        list-style-type: none;
        padding-left: 1em;
    }
    .navigation ul li a,
    .navigation ul li a:visited{
        color: white;
    }
</style>
