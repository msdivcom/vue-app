<template>
    <div class="slider">
       <vueper-slides fade  slide-content-outside-class="max-widthed" :touchable="false" :slide-ratio="0.3">
            <vueper-slide v-for="(slide, i) in slides" :key="i"
            :title="slide.title"
            :content="slide.content"
            :image="slide.image"
            ></vueper-slide>
        </vueper-slides>
    </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  data () {
    return {
      slides: [
        {
          title: 'Slide 1',
          image: 'https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
        },
        {
          title: 'Slide 2',
          image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        }
      ]
    }
  }
}
</script>
<style>
  .vueperslides__slide{
      background-position: center !important;
      display: flex !important;
      justify-content: center;
      align-items: center;
      background-color: black;
      color: white;
  }
  .vueperslides__slide .slide-title,
  .vueperslides__slide .slide-content{
      text-align: center;
      font-size: 3em;
      color: white;
  }
  .vueperslides__arrow{
      background-color: white !important;
  }
  .vueperslides__inner{
      background-color: rgba(0,0,0,0.8);
  }
</style>
