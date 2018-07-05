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

                <!--template contact-->
                <div v-if="page.slug === 'galerie'" class="">
                    <lightbox
                            id="mylightbox"
                            :images="images"
                            :image_class=" 'img-responsive img-rounded' "
                            :album_class=" 'my-album-class' "
                            :options="options">
                    </lightbox>
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
import Lightbox from 'vue-simple-lightbox'

export default {
  name: 'Page',
  components: {ContactForm, MenuListing, Loader, Lightbox},
  data () {
    return {
      load: true,
      page: [],
      images: [
        {
          src: 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img1.jpg',
          title: ''
        },
        {
          src: 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img2.jpg',
          title: ''
        },
        {
          src: 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img3.jpg',
          title: ''
        },
        {
          src: 'https://cdn.rawgit.com/vrajroham/vrajroham.github.io/85d64ac5/imgs/img4.jpg',
          title: ''
        }
      ],
      options: {
        closeText: 'X'
      }

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

    .sl-overlay{
        background-color: #11b28a;
        opacity: 1;
    }
</style>
