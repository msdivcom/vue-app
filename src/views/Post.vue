<template>
    <div class="site-content">
            <div class="page">
                <div class="page-content" >
                    <h1 class="page-title">{{ post.title.rendered}}</h1>
                </div>
            </div>
    </div>
</template>
<script>
import Loader from '../components/Loader'

export default {
  name: 'Post',
  components: {Loader},
  data () {
    return {
      load: true,
      post: []
    }
  },
  methods: {
    fetchPost (slug) {
      this.$Progress.start()
      let url = 'http://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/posts?slug=' + slug
      this.$http.get(url).then(response => {
        // get body data
        this.post = response.body[0]
        // Stop loading animaiton
        this.load = false
        document.title = this.post.title.rendered
        this.$Progress.finish()
        console.log('fetched post single', this.post)
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
      this.fetchPost(to.params.slug)
    }
  },
  created () {
    console.log('query', this.$route.params.slug)
    this.fetchPost(this.$route.params.slug)
  }
}
</script>
<style>

    .page-content {
        width: 80%;
        margin: auto;
    }

</style>
