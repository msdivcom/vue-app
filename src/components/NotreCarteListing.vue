<template>
    <div class="notre-carte-listing">
      <div class="row">
        <masonry
        :cols="{default: 3, 1200: 2, 800: 1}"
        :gutter="30"
        >
        <div v-for="(item, index) in menu" :key="index" class="">
            <div class="card">
              <h3 class="title">{{ item.carte_main_title }}</h3>
              <div v-for="(subitem, index) in item.carte_plats"  :key="index" class="item">
                <p class="name">{{ subitem.carte_nom_plat }}</p>
                <p  class="des" v-if="subitem.carte_des_plat">{{ subitem.carte_des_plat }}</p>
                <p class="divider">***</p>
               </div>
            </div>
        </div>
        </masonry>
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
    /*border-bottom: 1px solid rgba(0,0,0,0.2);*/
    padding: 2em;
    text-align: center;
    background-color: rgb(208, 208, 208);
    margin-bottom: 30px;
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
  .card .item:last-child .divider{
    display: none;
  }
  .card .item:last-child{
    padding-bottom: 2em;
  }
  .card .name{
    color: black;
    font-weight: bold;
  }
</style>
