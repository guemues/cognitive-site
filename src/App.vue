<template>

  <div>
    <div class="allcontainer">
      <router-view v-on:change_profile_uid="change_profile_uid($event)" v-bind:profile_uid="profile_uid" v-bind:image_colour="image_colour"></router-view>
    </div>
  </div>
</template>

<script>
// Imports
import addBlog from './components/newTest.vue';
import question from './components/question.vue';
import panas from './components/panas.vue';
import header from './components/header.vue';

const colors =[ 'red', 'yellow', 'blue', 'w'];

export default {
    components: {
        'add-blog': addBlog,
        'question' : question,
        'panas' : panas,
        'app-header': header,
    },
    data () {
        return {
          profile_uid: -1, // Test user uid
          image_colour: undefined
        }
    },
    created: function() {
      if(typeof this.image_colour === 'undefined'){
        this.image_colour = colors[Math.floor(Math.random() * colors.length)];
      }
    },
    methods: {
      change_profile_uid: function (new_uid) {
        this.profile_uid = new_uid;
      }
    }
}
</script>

<style scoped>
  .allcontainer {
    margin: 20px auto;
    max-width: 650px;
  }
</style>

<style>
  img.logo{
    width: 100px;
  }

body{
    line-height: 2;
    margin: 0;
}
h1, h2, h3, h4, h5{
  margin: 30px 0 30px 0;
}
</style>

