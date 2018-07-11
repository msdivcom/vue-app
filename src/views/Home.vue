<template>
    <div class="page">
        <div class="page-content">
            <posts-grid></posts-grid>
        </div>
    </div>
</template>
<script>
import PostsGrid from '../components/PostsGrid'
export default {
  name: 'Home',
  data () {
    return {
      datetime: ''
    }
  },
  components: {
    PostsGrid
  },
  created () {
    let currentdate = new Date()
    this.datetime = currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds()
  }
}
</script>
