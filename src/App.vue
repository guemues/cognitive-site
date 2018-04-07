<template>
    <div>
      <router-view v-bind:color="color"></router-view>
    </div>
</template>

<script>
// Imports
import addBlog from './components/newTest.vue';
import showBlogs from './components/showBlogs.vue';
import question from './components/question.vue';
import panas from './components/Panas.vue';
import panasfinal from './components/Panasfinal.vue';
import header from './components/header.vue';
import Timer from './components/Timer.vue';

const colors =[ 'red', 'yellow', 'blue'];

export default {
    components: {
        'add-blog': addBlog,
        'show-blogs': showBlogs,
        'question' : question,
        'panas' : panas,
        'panasfinal': panasfinal,
        'app-header': header,
        'Timer' : Timer
    },
    data () {
        return {
            color: undefined
        }
    },
    created: function() {
      if(typeof this.color === 'undefined'){
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
    },
    methods: {
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
