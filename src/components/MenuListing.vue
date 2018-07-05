<template>
    <div class="menu-listing">
        <div class="row">
            <div v-for="item in menus" :key="item.menu_day.value" class="col-12 col-md-6 col-lg-4" :class="{ today : item.menu_day.value == today}">
              <div class="card" :class="{ }">
                  <h2> {{ item.menu_day.label }} </h2>
                  <div class="menu-content" v-html="item.menu_content"> </div>
                  <p>{{ item.menu_day.value + ' ' + today }}</p>
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
      today: '',
      menus: []
    }
  },
  props: ['id'],
  methods: {
    fetchMenu (id) {
      let url = 'http://sandbox.komachi.pomzed.ch/wp/wp-json/acf/v3/pages/' + id
      this.$http.get(url).then(response => {
        // get body data
        this.menus = response.body.acf.week_menus
        // Stop loading animaiton
        this.load = false
        console.log('fetched posts', this.post)
      }, response => {
        console.log(response)
        // error callback
      })
    }
  },
  computed: {

  },
  created () {
    let today = new Date()
    this.today = today.getDay()
    this.fetchMenu(this.id)
  }

}
</script>

<style>
    .menu-listing .card{
        background-color: white;
        border: 1px solid gainsboro;
        padding: 1em;
        text-align: center;
        margin-bottom: 30px;
    }
    .menu-listing .today .card{
        background-color: #11b28a;
        color: white;
    }
</style>
