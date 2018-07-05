<template>
    <div class="menu-listing">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="menu-card-content" v-html="menu.monday_menu"></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="menu-card-content" v-html="menu.tuesday_menu"></div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="menu-card-content" v-html="menu.wednesday_menu"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'menu-listing',
  data () {
    return {
      menu: []
    }
  },
  props: ['id'],
  methods: {
    fetchMenu (id) {
      let url = 'http://sandbox.komachi.pomzed.ch/wp/wp-json/acf/v3/pages/' + id
      this.$http.get(url).then(response => {
        // get body data
        this.menu = response.body.acf
        // Stop loading animaiton
        this.load = false
        console.log('fetched posts', this.post)
      }, response => {
        console.log(response)
        // error callback
      })
    }
  },
  created () {
    this.fetchMenu(this.id)
  }

}
</script>

<style>
    .menu-listing .card{
        background-color: #11b28a;
        color: white;
        padding: 1em;
        text-align: center;
    }
    .menu-listing .card{
        margin-bottom: 30px;
    }
</style>
