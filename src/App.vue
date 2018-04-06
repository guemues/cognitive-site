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
            color:1
        }
    },
    methods: {

    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Helvetica';
}
</style>
