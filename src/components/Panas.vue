<template>
  <div id="panas">
    <div id="selection" v-if="!submitted">
      <h1>How are you feeling right now?</h1>

      <p>Can you please rate your current emotions according to this scale?</p>
      <p>1: Very Slightly or Not at all </p>
      <p>2: A Little</p>
      <p>3: Moderately</p>
      <p>4: Quite a Bit</p>
      <p>5: Extremely</p>
      <div class="grid-container">
        <div class="grid-item">
          <label>Interested </label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.interested" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Distressed</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.distressed" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Excited</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.excited" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Upset</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.upset" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Strong</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.strong" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Guilty</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.guilty" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Scared</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.scared" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Hostile</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.hostile" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Enthusiastic</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.enthusiastic" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Proud</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.proud" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Irritable</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.irritable" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Alert</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.alert" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Ashamed</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.ashamed" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Inspired</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.inspired" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Nervous</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.nervous" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Determined</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.determined" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Attentive</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.attentive" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Jittery</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.jittery" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Active</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.active" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Afraid</label>
          <div v-for="level in scale" class="options">
            <label class="container" v-bind:for="level">
              {{ level }}
              <input v-bind:id="level"  v-bind:value="level" v-model="panas_scale.afraid" type="radio" >
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <button :disabled="!(panas_scale.interested != ''
          && panas_scale.distressed != '' && panas_scale.excited != '' && panas_scale.upset != '' &&
          panas_scale.strong!='' && panas_scale.guilty!='' && panas_scale.scared!='' &&
          panas_scale.hostile!='' && panas_scale.enthusiastic!='' && panas_scale.proud != ''
          && panas_scale.irritable != '' && panas_scale.alert != '' && panas_scale.ashamed != ''
          && panas_scale.inspired != '' && panas_scale.nervous != '' && panas_scale.determined != ''
          && panas_scale.attentive != '' && panas_scale.jittery != '' && panas_scale.active != ''
          && panas_scale.afraid != '' )" v-on:click.prevent="post">Submit</button>
    </div>
    <div id="results" v-if="submitted">
      <!--<h3>Results</h3>-->
      <!--<p>Interested: {{ panas_scale.interested }}</p>-->
      <!--<p>Distressed: {{ panas_scale.distressed }}</p>-->
      <!--<p>Excited: {{ panas_scale.excited }}</p>-->
      <!--<p>Upset: {{ panas_scale.upset }}</p>-->
      <!--<p>Strong: {{ panas_scale.strong }}</p>-->
      <!--<p>Guilty: {{ panas_scale.guilty }}</p>-->
      <!--<p>Scared: {{ panas_scale.scared }}</p>-->
      <!--<p>Hostile: {{ panas_scale.hostile }}</p>-->
      <!--<p>Enthusiastic: {{ panas_scale.enthusiastic }}</p>-->
      <!--<p>Proud: {{ panas_scale.proud }}</p>-->
      <!--<p>Irritable: {{ panas_scale.irritable }}</p>-->
      <!--<p>Alert: {{ panas_scale.alert }}</p>-->
      <!--<p>Ashamed: {{ panas_scale.ashamed }}</p>-->
      <!--<p>Inspired: {{ panas_scale.inspired }}</p>-->
      <!--<p>Nervous: {{ panas_scale.nervous }}</p>-->
      <!--<p>Determined: {{ panas_scale.determined }}</p>-->
      <!--<p>Attentive: {{ panas_scale.attentive }}</p>-->
      <!--<p>Jittery: {{ panas_scale.jittery }}</p>-->
      <!--<p>Active: {{ panas_scale.active }}</p>-->
      <!--<p>Afraid: {{ panas_scale.afraid }}</p>-->

    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        picked: 0,
        normal: ['a','b','c','d'],
        panas_scale: {
          interested: '',
          distressed: '',
          excited: '',
          upset: '',
          strong: '',
          guilty: '',
          scared: '',
          hostile: '',
          enthusiastic: '',
          proud: '',
          irritable: '',
          alert: '',
          ashamed: '',
          inspired: '',
          nervous: '',
          determined: '',
          attentive: '',
          jittery: '',
          active: '',
          afraid: ''
        },
        scale: ['1', '2','3','4','5'],
        submitted: false,
        agreed: false

      }
    },
    methods: {
      post:function(){
        this.$http.post('https://pwsdjzqgyf.execute-api.eu-central-1.amazonaws.com/dev/click',{
          is_before: 'TRUE',
          profile_uid: this.profile_uid,
          interested: this.panas_scale.interested,
          distressed: this.panas_scale.distressed,
          excited: this.panas_scale.excited,
          upset: this.panas_scale.upset,
          strong: this.panas_scale.strong,
          guilty: this.panas_scale.guilty,
          scared: this.panas_scale.scared,
          hostile: this.panas_scale.hostile,
          enthusiastic: this.panas_scale.enthusiastic,
          proud: this.panas_scale.proud,
          irritable: this.panas_scale.irritable,
          alert: this.panas_scale.alert,
          ashamed: this.panas_scale.ashamed,
          inspired: this.panas_scale.inspired,
          nervous: this.panas_scale.nervous,
          determined: this.panas_scale.determined,
          jittery: this.panas_scale.jittery,
          active: this.panas_scale.active,
          afraid: this.panas_scale.afraid
        }).then(function(data){
          this.$router.push({ path: '/question' });
          this.submitted= true;
        });

      }
    }
  }

</script>

<style>
  #panas *{
    box-sizing: border-box;
  }
  #panas{
    margin: 20px auto;
    max-width: 600px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  #separation{
    margin-bottom: 30px;
  }
  h3{
    margin-top: 10px;
  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0;
  }


</style>
<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  a{
    color: black;
    text-decoration: none;
    padding: 6px 8px;
    webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 2px;
    border: black;
    background-color: lightgrey;
  }
  a:hover {
    background-color: black; /* Green */
    color: white;
  }
  .router-link-active{
    background: #eee;
    color: #444;
  }
  p{
    text-align: justify;
  }
  .options {
    border: none;
    break-before: always;
    margin: 0 0 0 0;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
  }

</style>
