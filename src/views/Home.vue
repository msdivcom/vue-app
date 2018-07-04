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
  components: {
    PostsGrid
  }
}
</script>
