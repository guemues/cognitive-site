<template>
    <div id="add-participant">

      <h1>Artistic Feedback Survey</h1>
      <form v-if="!submitted && !agreed">
        <p>We are a group of EPFL students in collaboration with UNIL CARLA LAB.
          Welcome to our study "Helping young artists choose their best art pieces".</p>
        <p>In this online study, we want to gather data about abstract paintings.
          The questions of this survey are to assess which of the art pieces are most appreciated by the public.
          It will also provide us information about the perception of art.
          Your answers to these questions will be used anonymously and for research and academic purposes only.
          All the gathered data will be confidential.
        </p>
        <p>If you agree to take part in this experiment, please click next.</p>
        <button type="button" class="btn btn-primary" v-on:click.prevent="agreed=true">Next</button>
      </form>
      <form v-if="!submitted && agreed">
        <h2>Enter Your Personal Informations</h2>

        <label>Your age:</label>
        <input type="number" v-model.lazy="participant.age" required/>

        <label>Your mother tongue:</label>
        <select v-model="participant.idiom">
          <option v-for="idiom in idioms">{{ idiom }}</option>
        </select>
        <!--,TODO: add the langagues-->

        <label>How well do you speak English?</label>
        <select v-model="participant.fluency">
          <option v-for="fluency in fluencies">{{ fluency }}</option>
        </select>

        <label>Where do you live? (For the last two years)</label>
        <select v-model="participant.residence">
          <option v-for="residence in countries">{{ residence }}</option>
        </select>

        <label>Your country of origin:</label>
        <select v-model="participant.origin">
          <option v-for="origin in countries">{{ origin }}</option>
        </select>

        <label>You are:</label>
        <select v-model="participant.gender">
          <option v-for="gender in genders">{{ gender }}</option>
        </select>

        <label>What is the highest education level you have completed?</label>
        <select v-model="participant.degree_level">
          <option v-for="degree_level in degree_levels">{{ degree_level }}</option>
        </select>

        <label>How would you qualify your art knowledge?</label>
        <select v-model="participant.art_level">
          <option v-for="art_level in art_levels">{{ art_level }}</option>
        </select>

        <label>Are you color blind? (Do you have troubles seeing differences between some colors?)</label>
        <select v-model="participant.blindness">
          <option v-for="blindness in blindnesses">{{ blindness }}</option>
        </select>

        <div id="separation"></div>

          <button :disabled="!(participant.residence != ''
          && participant.fluency != '' && participant.idiom != '' && participant.origin != '' &&
          participant.age!='' && participant.gender!='' && participant.degree_level!='' &&
          participant.art_level!='' && participant.blindness!='' )" v-on:click.prevent="post">Submit</button>
      </form>
      <div v-if="submitted">
        <h3>Please click Next to continue the Test</h3>
        <ul>
          <list><router-link to="/panas" exact>Next</router-link></list>
        </ul>
      </div>
      <div id="preview" v-if="agreed">
        <h3>Preview Informations</h3>
        <p>Age: {{ participant.age }}</p>
        <p>Mother tongue: {{ participant.idiom }}</p>
        <p>English Fluency: {{ participant.fluency }}</p>
        <p>Country of Residency: {{ participant.residence }}</p>
        <p>Origin: {{ participant.origin }}</p>
        <p >Gender: {{ participant.gender }}</p>
        <p >Education level: {{ participant.degree_level }}</p>
        <p >Art knowledge: {{ participant.art_level }}</p>
        <p >Color blindness: {{ participant.blindness }}</p>

      </div>
    </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
            participant: {
                profile_uid:'',
                origin: '',
                age: '',
                gender: '',
                idiom: '',
                fluency: '',
                residence: '',
                degree_level: '',
                art_level: '',
                blindness: ''
            },
            genders: ['male', 'female','other'],
            countries: ['Afghanistan'
            ,'Albania'
            ,'Algeria'
            ,'America'
            ,'Andorra'
            ,'Angola'
            ,'Antigua'
            ,'Argentina'
            ,'Armenia'
            ,'Australia'
            ,'Austria'
            ,'Azerbaijan'
            ,'Bahamas'
            ,'Bahrain'
            ,'Bangladesh'
            ,'Barbados'
            ,'Belarus'
            ,'Belgium'
            ,'Belize'
            ,'Benin'
            ,'Bhutan'
            ,'Bissau'
            ,'Bolivia'
            ,'Bosnia'
            ,'Botswana'
            ,'Brazil'
            ,'British'
            ,'Brunei'
            ,'Bulgaria'
            ,'Burkina'
            ,'Burma'
            ,'Burundi'
            ,'Cambodia'
            ,'Cameroon'
            ,'Canada'
            ,'Cape Verde'
            ,'Central African Republic'
            ,'Chad'
            ,'Chile'
            ,'China'
            ,'Colombia'
            ,'Comoros'
            ,'Congo'
            ,'Costa Rica'
            ,'Croatia'
            ,'Cuba'
            ,'Cyprus'
            ,'Czech'
            ,'Denmark'
            ,'Djibouti'
            ,'Dominica'
            ,'East Timor'
            ,'Ecuador'
            ,'Egypt'
            ,'El Salvador'
            ,'Emirate'
            ,'England'
            ,'Eritrea'
            ,'Estonia'
            ,'Ethiopia'
            ,'Fiji'
            ,'Finland'
            ,'France'
            ,'Gabon'
            ,'Gambia'
            ,'Georgia'
            ,'Germany'
            ,'Ghana'
            ,'Great Britain'
            ,'Greece'
            ,'Grenada'
            ,'Grenadines'
            ,'Guatemala'
            ,'Guinea'
            ,'Guyana'
            ,'Haiti'
            ,'Herzegovina'
            ,'Holland'
            ,'Honduras'
            ,'Hungary'
            ,'Iceland'
            ,'India'
            ,'Indonesia'
            ,'Iran'
            ,'Iraq'
            ,'Ireland'
            ,'Israel'
            ,'Italy'
            ,'Ivory Coast'
            ,'Jamaica'
            ,'Japan'
            ,'Jordan'
            ,'Kazakhstan'
            ,'Kenya'
            ,'Kiribati'
            ,'Korea'
            ,'Kosovo'
            ,'Kuwait'
            ,'Kyrgyzstan'
            ,'Laos'
            ,'Latvia'
            ,'Lebanon'
            ,'Lesotho'
            ,'Liberia'
            ,'Libya'
            ,'Liechtenstein'
            ,'Lithuania'
            ,'Luxembourg'
            ,'Macedonia'
            ,'Madagascar'
            ,'Malawi'
            ,'Malaysia'
            ,'Maldives'
            ,'Mali'
            ,'Malta'
            ,'Marshall'
            ,'Mauritania'
            ,'Mauritius'
            ,'Mexico'
            ,'Micronesia'
            ,'Moldova'
            ,'Monaco'
            ,'Mongolia'
            ,'Montenegro'
            ,'Morocco'
            ,'Mozambique'
            ,'Myanmar'
            ,'Namibia'
            ,'Nauru'
            ,'Nepal'
            ,'Netherlands'
            ,'New Zealand'
            ,'Nicaragua'
            ,'Niger'
            ,'Nigeria'
            ,'Norway'
            ,'Oman'
            ,'Pakistan'
            ,'Palau'
            ,'Panama'
            ,'Papua'
            ,'Paraguay'
            ,'Peru'
            ,'Philippines'
            ,'Poland'
            ,'Portugal'
            ,'Qatar'
            ,'Romania'
            ,'Russia'
            ,'Rwanda'
            ,'Samoa'
            ,'San Marino'
            ,'Sao Tome'
            ,'Saudi Arabia'
            ,'Scotland'
            ,'Scottish'
            ,'Senegal'
            ,'Serbia'
            ,'Seychelles'
            ,'Sierra Leone'
            ,'Singapore'
            ,'Slovakia'
            ,'Slovenia'
            ,'Solomon'
            ,'Somalia'
            ,'South Africa'
            ,'South Sudan'
            ,'Spain'
            ,'Sri Lanka'
            ,'St Kitts'
            ,'St Lucia'
            ,'Sudan'
            ,'Suriname'
            ,'Swaziland'
            ,'Sweden'
            ,'Switzerland'
            ,'Syria'
            ,'Taiwan'
            ,'Tajikistan'
            ,'Tanzania'
            ,'Thailand'
            ,'Tobago'
            ,'Togo'
            ,'Tonga'
            ,'Trinidad'
            ,'Tunisia'
            ,'Turkey'
            ,'Turkmenistan'
            ,'Tuvalu'
            ,'Uganda'
            ,'Ukraine'
            ,'United Kingdom'
            ,'United States'
            ,'Uruguay'
            ,'USA'
            ,'Uzbekistan'
            ,'Vanuatu'
            ,'Vatican'
            ,'Venezuela'
            ,'Vietnam'
            ,'Wales'
            ,'Wakanda'
            ,'Welsh'
            ,'Yemen'
            ,'Zambia'
            ,'Zimbabwe'],
            idioms: ['English','French', 'others'],
            fluencies: ['i dont understand the question','i know the basics','good enough','fluent','shakespear level'],
            degree_levels: ['middle-school', 'high-school (e.g. Maturité, A-levels)','under-graduate (e.g. BS, BA)','graduate (e.g. MS, MA)','PHD'],
            art_levels: ['novice', 'amateur','connoisseur'],
            blindnesses: ['No','Yes'],
            submitted: false,
            agreed: false

        }
    },
    methods: {
      post:function(){
        this.$http.post('http://jsonplaceholder.typicode.com/posts',{
          origin: this.participant.origin,
          age: this.participant.age,
          gender: this.participant.gender,
          idiom: this.participant.idiom,
          fluency: this.participant.fluency,
          residence: this.participant.residence,
          degree_level: this.participant.degree_level,
          art_level: this.participant.art_level,
          blindness: this.participant.blindness,


        }).then(function(data){
          console.log(data);
          this.submitted= true;
        });

      }
    }
}
</script>

<style>
  #add-participant *{
      box-sizing: border-box;
  }
  #add-participant{
      margin: 20px auto;
      max-width: 500px;
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

</style>
