<template>
    <div class="contact-form">
        <div class="status" v-if="status">
            <div class="message">{{ status }}</div>
        </div>
        <input type="text" placeholder="Votre prénom" v-model="firstname">
        <input type="text" placeholder="Votre nom" v-model="lastname">
        <input type="text" placeholder="Sujet" v-model="subject">
        <input type="text" placeholder="Message" v-model="message">
        <input type="submit" @click="submitForm" class="submit-button">
    </div>
</template>
<script>
export default{
  name: 'contact-form',
  data () {
    return {
      lastname: '',
      firstname: '',
      subject: '',
      message: '',
      status: ''
    }
  },
  methods: {
    submitForm () {
      let url = 'https://sandbox.komachi.pomzed.ch/wp/wp-json/pomzed/v1/sendmail'
      this.$http.post(url, {
        lastname: this.lastname,
        firstname: this.firstname,
        subject: this.subject,
        message: this.message
      }).then(response => {
        this.status = response.status
      }, response => {
        this.status = response.status
      })
    }
  }
}
</script>
<style>
    input{
        display: block;
        width: 100%;
        margin: auto;
        padding: 1em;
        margin-bottom: 2em;
    }
    .submit-button{
        background-color: #11b28a;
        color: white;
        border: none;
        box-shadow: none;
        cursor: pointer;
    }
    .submit-button:hover{
        background-color: #2c3e50;
    }
</style>
