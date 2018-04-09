<template>
  <div id="panas">
    <div id="selection" v-if="!submitted">
      <h1>How are you feeling right now?</h1>
      <p v-if="$route.params.is_before !== 'TRUE'">You have finished the Art evaluation part. Now please answer the questions below.</p>
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
            <label v-bind:for="'interested' + level">{{ level }}
              <input v-bind:id="'interested' + level"  v-bind:value="level" v-model="panas_scale.interested" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Distressed</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'distressed' + level">{{ level }}
              <input v-bind:id="'distressed' + level"  v-bind:value="level" v-model="panas_scale.distressed" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Excited</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'excited' + level">{{ level }}
              <input v-bind:id="'excited' + level"  v-bind:value="level" v-model="panas_scale.excited" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Upset</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'upset' + level">{{ level }}
              <input v-bind:id="'upset' + level"  v-bind:value="level" v-model="panas_scale.upset" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Strong</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'strong' + level">{{ level }}
              <input v-bind:id="'strong' + level"  v-bind:value="level" v-model="panas_scale.strong" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Guilty</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'guilty' + level">{{ level }}
              <input v-bind:id="'guilty' + level"  v-bind:value="level" v-model="panas_scale.guilty" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Scared</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'scared' + level">{{ level }}
              <input v-bind:id="'scared' + level"  v-bind:value="level" v-model="panas_scale.scared" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Hostile</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'hostile' + level">{{ level }}
              <input v-bind:id="'hostile' + level"  v-bind:value="level" v-model="panas_scale.hostile" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Enthusiastic</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'enthusiastic' + level">{{ level }}
              <input v-bind:id="'enthusiastic' + level"  v-bind:value="level" v-model="panas_scale.enthusiastic" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Proud</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'proud' + level">{{ level }}
              <input v-bind:id="'proud' + level"  v-bind:value="level" v-model="panas_scale.proud" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Irritable</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'irritable' + level">{{ level }}
              <input v-bind:id="'irritable' + level"  v-bind:value="level" v-model="panas_scale.irritable" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Alert</label>
          <div v-for="level in scale" class="options">
            <label  v-bind:for="'alert' + level">{{ level }}
              <input v-bind:id="'alert' + level"  v-bind:value="level" v-model="panas_scale.alert" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Ashamed</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'ashamed' + level">{{ level }}
              <input v-bind:id="'ashamed' + level"  v-bind:value="level" v-model="panas_scale.ashamed" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Inspired</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'inspired' + level">{{ level }}
              <input v-bind:id="'inspired' + level"  v-bind:value="level" v-model="panas_scale.inspired" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Nervous</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'nervous' + level">{{ level }}
              <input v-bind:id="'nervous' + level"  v-bind:value="level" v-model="panas_scale.nervous" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Determined</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'determined' + level">{{ level }}
              <input v-bind:id="'determined' + level"  v-bind:value="level" v-model="panas_scale.determined" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Attentive</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'attentive' + level">{{ level }}
              <input v-bind:id="'attentive' + level"  v-bind:value="level" v-model="panas_scale.attentive" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Jittery</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'jittery' + level">{{ level }}
              <input v-bind:id="'jittery' + level"  v-bind:value="level" v-model="panas_scale.jittery" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Active</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'active' + level">{{ level }}
              <input v-bind:id="'active' + level"  v-bind:value="level" v-model="panas_scale.active" type="radio" >
            </label>
          </div>
        </div>
        <div class="grid-item">
          <label>Afraid</label>
          <div v-for="level in scale" class="options">
            <label v-bind:for="'afraid' + level">{{ level }}
              <input v-bind:id="'afraid' + level"  v-bind:value="level" v-model="panas_scale.afraid" type="radio" >
            </label>
          </div>
        </div>
      </div>
      <button class="btn btn-default" :disabled="!(panas_scale.interested != ''
          && panas_scale.distressed != '' && panas_scale.excited != '' && panas_scale.upset != '' &&
          panas_scale.strong!='' && panas_scale.guilty!='' && panas_scale.scared!='' &&
          panas_scale.hostile!='' && panas_scale.enthusiastic!='' && panas_scale.proud != ''
          && panas_scale.irritable != '' && panas_scale.alert != '' && panas_scale.ashamed != ''
          && panas_scale.inspired != '' && panas_scale.nervous != '' && panas_scale.determined != ''
          && panas_scale.attentive != '' && panas_scale.jittery != '' && panas_scale.active != ''
          && panas_scale.afraid != '' && typeof profile_uid !== 'undefined' )" v-on:click="post">Submit</button>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['image_colour', 'profile_uid'],

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
        this.$http.post('https://pwsdjzqgyf.execute-api.eu-central-1.amazonaws.com/dev/panas',{
          is_before: this.$route.params.is_before,
          image_colour: this.image_colour,
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
          if (this.$route.params.is_before === 'TRUE') {
            this.$router.push({path: '/question'});
          }
          else if (this.$route.params.is_before === 'FALSE'){
            this.$router.push({path: '/colortest'});
          }
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
    margin: 0 0 0 0;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
  }

</style>
