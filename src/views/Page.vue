<template>
    <div class="page">
       <div class="page-content" v-if="page.title">
           <h1 class="page-title">{{ page.title.rendered}}</h1>
           <div class="entry-content" v-html="page.content.rendered"></div>
       </div>
    </div>
</template>
<script>
export default {
  name: 'Page',
  data () {
    return {
      load: true,
      page: []
    }
  },
  methods: {
    fetchPage (slug) {
      let url = 'http://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/pages?slug=' + slug
      this.$http.get(url).then(response => {
        // get body data
        this.page = response.body[0]
        // Stop loading animaiton
        this.load = false
        document.title = this.page.title.rendered

        console.log('fetched page', this.page)
      }, response => {
        console.log(response)
        // error callback
      })
    }
  },
  watch: {
    '$route' (to) {
      this.load = true
      // react to route changes...
      this.fetchPage(to.params.slug)
    }
  },
  created () {
    console.log('query', this.$route.params.slug)
    this.fetchPage(this.$route.params.slug)
  }
}
</script>
<style>

</style>
