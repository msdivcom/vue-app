<template>
    <div class="site-content">
        <div class="page" v-if="page.title">
            <div class="page-content">
                <h1 class="page-title">{{ page.title.rendered}}</h1>

                <!--template menus-de-la-semaine-->
                <div v-if="page.slug === 'menus-de-la-semaine'" class="template-menus-de-la-semaine">
                    <menu-listing :id="page.id"></menu-listing>
                </div>

                <!--template contact-->
                <div v-if="page.slug === 'contact'" class="template-menus-de-la-semaine">
                    <contact-form></contact-form>
                </div>

                <!--template default-->
                <div v-else >
                    <div class="entry-content" v-html="page.content.rendered"></div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Loader from '../components/Loader'
import MenuListing from '../components/MenuListing'
import ContactForm from '../components/ContactForm'

export default {
  name: 'Page',
  components: {ContactForm, MenuListing, Loader},
  data () {
    return {
      load: true,
      page: []
    }
  },
  methods: {
    fetchPage (slug) {
      this.$Progress.start()
      let url = 'http://sandbox.komachi.pomzed.ch/wp/wp-json/wp/v2/pages?slug=' + slug
      this.$http.get(url).then(response => {
        // get body data
        this.page = response.body[0]
        // Stop loading animaiton
        this.load = false
        this.$Progress.finish()
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

    .page-content {
        width: 80%;
        margin: auto;
    }

</style>
