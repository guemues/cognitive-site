<template>
  <div id="add-participant">
    <div>
      <img class="logo pull-right" src="../assets/unil.png"/>
      <img class="logo pull-left" src="../assets/epfl.png"/>
    </div>
    <br>
      <h1>Thank You</h1>
      <p>Thank you for taking part in our experiment! We hope you enjoyed it.
        If you have any questions regarding this survey, don’t hesitate to contact us: orcun.gumus at epfl.ch, nicolas.rossignol at epfl.ch, farzaneh.habibollahi at epfl.ch, jean.bejjani at epfl.ch, asli.sahin at epfl.ch . You can find more information about color research on <a href="https://www.colourexperience.ch/">https://www.colourexperience.ch/</a>
      </p>
  </div>
</template>

<script>
  // Imports

  export default {

    data() {
      return {

      }
    },
    mounted: function () {
      if(this.$route.params.is_end === 'TRUE'){
        this.is_end = 'TRUE'
      }
    },
    methods: {
    }
  }
</script>

<style>

</style>
<style scoped>


</style>
