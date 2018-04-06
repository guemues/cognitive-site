<template>
  <div id="timer_style">
      <p> {{ Math.trunc(minutes) }}:{{ Math.trunc(seconds) }}
      </p>
  </div>
</template>

<script>
  export default {
    props: {
    },
    data() {
      return {
        now: 0,
        count: 0,
        finish_time: 0,
      }
    },
    methods: {
      timer_loop() {
        this.count++
        this.now = Math.trunc(new Date().getTime() / 1000)
        this.count < 200 && setTimeout(this.timer_loop, 1000)
        if (this.count==1)
          this.finish_time=this.now+10*60

      },
    },
    mounted() {
      this.timer_loop()
    },
    computed: {
      seconds() {
        return (this.finish_time - this.now) % 60
      },
      minutes() {
        return ((this.finish_time - this.now) / 60) % 60
      },


    }
  }
</script>

<style scoped>

  #timer_style *{
    box-sizing: border-box;
  }
  #timer_style{
    margin: auto auto;
    max-width: 230px;
    alignment: center;
  }
</style>
