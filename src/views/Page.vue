<template>
    <div class="site-content">
        <div class="page" v-if="page.title">
            <div class="page-content">
                <h1 class="page-title">{{ page.title.rendered}}</h1>

                <!--template menus-de-la-semaine-->
                <div v-if="page.slug === 'menus-de-la-semaine'" class="template-menus-de-la-semaine">
                    <menu-listing :id="page.id"></menu-listing>
                </div>
                <div v-if="page.slug === 'notre-carte'" class="template-menus-de-la-semaine">
                    <notre-carte-listing :id="page.id"></notre-carte-listing>
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
                            :image_class=" 'img-galerie' "
                            :album_class=" 'row' "
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
import NotreCarteListing from '../components/NotreCarteListing'

export default {
  name: 'Page',
  components: {ContactForm, MenuListing, Loader, Lightbox, NotreCarteListing},
  data () {
    return {
      load: true,
      page: [],
      galerie: [],
      images: [],
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
        this.images.length = 0
        if (this.page.slug === 'galerie') {
          this.galerie = response.body[0].acf.galerie
          for (let i = 0; i < this.galerie.length; i++) {
            let row = {
              src: this.galerie[i].url,
              title: this.galerie[i].title
            }
            console.log('push')
            this.images.push(row)
          }
        }
        // Stop loading animaiton
        this.load = false
        this.$Progress.finish()
        document.title = this.page.title.rendered + ' | ' + 'Komachi'
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
    this.fetchPage(this.$route.params.slug)
  },
  updated () {
    var imgs = document.getElementsByClassName('img-galerie')
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].parentNode.classList.add('col-12')
      imgs[i].parentNode.classList.add('col-md-6')
      imgs[i].parentNode.classList.add('col-lg-4')
    }
  }
}
</script>
<style>

    .page-content {
        width: 80%;
        margin: auto;
    }
    .sl-overlay{
        background-color: rgba(0,0,0,0.88) !important;
        opacity: 1 !important;
    }
    .my-gallery a img{
      width: 100% !important;
      height: auto;
    }
    .sl-wrapper .sl-close{
        width: 30px;
        height: 30px;
        font-size: 2em;
        color: white !important;
    }
    .sl-wrapper .sl-navigation button{
      color: white !important;
    }
</style>
