<template>
    <div class="site-content">
            <div  class="container">
                <div class="row posts-grid">
                    <div v-for="post in posts" :key="post.id" class="col-12 col-md-6 col-lg-4">
                        <router-link :to=" '/posts/' + post.slug">
                            <div class="card">
                                <h2>{{post.title.rendered}}</h2>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

    </div>
</template>
<script>
import Loader from './Loader'

export default {
  name: 'posts-grid',
  components: {Loader},
  data () {
    return {
      load: true,
      posts: []
    }
  },
  methods: {
    fetchPosts (slug) {
      this.$Progress.start()
      let url = 'https://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/posts?_embed'
      this.$http.get(url).then(response => {
        // get body data
        this.posts = response.body
        // Stop loading animaiton
        this.load = false
        this.$Progress.finish()
        console.log('fetched posts', this.post)
      }, response => {
        console.log(response)
        this.$Progress.fail()
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
    this.fetchPosts(this.$route.params.slug)
  }
}
</script>
<style>
    .posts-grid{
        margin-top: 2em;
    }
    .page-content {
        width: 80%;
        margin: auto;
    }
    .posts-grid .card{
        background-color: #11b28a;
        color: white;
        padding: 1em;
    }

</style>
