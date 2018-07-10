<template>
    <div class="notre-carte-listing">
      <div class="row">
        <div v-for="(item, index) in menu" :key="index" class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <h3 class="title">{{ item.carte_main_title }}</h3>
              <div v-for="(subitem, index) in item.carte_plats"  :key="index" class="item">
                <p class="name">{{ subitem.carte_nom_plat }}</p>
                <p  class="des" v-if="subitem.carte_des_plat">{{ subitem.carte_des_plat }}</p>
                <p>***</p>
               </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'NotreCarteListing',
  props: ['id'],
  data () {
    return {
      menu: []
    }
  },
  methods: {
    fetchMenu (id) {
      let url = 'https://sandbox.komachi.pomzed.ch/wp/wp-json/acf/v3/pages/' + id
      this.$http.get(url).then(response => {
        // get body data
        this.menu = response.body.acf.notre_carte
        // Stop loading animaiton
        console.log('fetched posts', this.post)
      }, response => {
        console.log(response)
        // error callback
      })
    }
  },
  mounted () {
    this.fetchMenu(this.id)
  }
}
</script>
<style scoped>
  .card{
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 1em;
    text-align: center;
  }
  .card .name,
  .card .des{
    margin: 0;
    padding: 0;
  }
  .card .title{
    color: #11b28a;
    font-size: 2em;
  }
  .card .name{
    color: black;
    font-weight: bold;
  }
</style>
