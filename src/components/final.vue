<template>
  <div>
  <p id="add-participant">
    <div>
      <img class="logo pull-right" src="../assets/unil.png"/>
      <img class="logo pull-left" src="../assets/epfl.png"/>
    </div>
  <div>
    <br>
      <h1>Thank you for taking part of this study.
      </h1>
      <p>You may have realized that we draw your attention on art during this experiment, and that all the presented art pieces were composed of the same hues (colors). In fact, the main purpose of this experiment was to assess how colors could have an impact on your emotional state. You were therefore immersed during 10 minutes in one of the following colors : blue, red, yellow or grey.
      </p>
    <p>
      We expect those colours to impact emotions in different ways. The key information that will be extracted from this survey will therefore be the emotional shift between the beginning and the end of this experiment, after prolonged exposure to one specific angle of hue. For this reason, we asked you to fill in the questionnaire assessing your emotional state before and after seeing the pictures.

    </p>
  <p>
    If you are interested in the results of this experiment, don’t hesitate to send a mail to any member of our group : orcun.gumus at epfl.ch, nicolas.rossignol at epfl.ch, farzaneh.habibollahi at epfl.ch, jean.bejjani at epfl.ch, asli.sahin at epfl.ch .
  </p>
<p>
  If you are seduced by this field of research and would like to know more about it, please follow this link :
  <a href="https://www.colourexperience.ch/">https://www.colourexperience.ch/</a>
      </p>
  </div>
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
