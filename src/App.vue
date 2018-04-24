<template>
    <div>
      <router-view v-on:change_profile_uid="change_profile_uid($event)" v-bind:profile_uid="profile_uid" v-bind:image_colour="image_colour"></router-view>
    </div>
</template>

<script>
// Imports
import addBlog from './components/newTest.vue';
import showBlogs from './components/showBlogs.vue';
import question from './components/question.vue';
import panas from './components/panas.vue';
import header from './components/header.vue';
import Timer from './components/Timer.vue';

const colors =[ 'red', 'yellow', 'blue', 'w'];

export default {
    components: {
        'add-blog': addBlog,
        'show-blogs': showBlogs,
        'question' : question,
        'panas' : panas,
        'app-header': header,
        'Timer' : Timer
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

<style>
body{
    line-height: 2;
    margin: 0;
}
h1, h2, h3, h4, h5{
  margin: 30px 0 30px 0;
}
</style>
