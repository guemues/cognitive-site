<template>
  <div id="add-participant">
    <div>
      <img class="logo pull-right" src="../assets/unil.png"/>
      <img class="logo pull-left" src="../assets/epfl.png"/>
    </div>
    <br>
    <div id="results" v-if="is_end === 'TRUE'">
      <h1>Thank You</h1>
      <p>Thank you for taking part in our experiment! We hope you enjoyed it.
        If you have any questions regarding this survey, don’t hesitate to contact us: orcun.gumus at epfl.ch, nicolas.rossignol at epfl.ch, farzaneh.habibollahi at epfl.ch, jean.bejjani at epfl.ch, asli.sahin at epfl.ch . You can find more information about color research on <a href="https://www.colourexperience.ch/">https://www.colourexperience.ch/</a>
      </p>
    </div>

    <h1>Artistic Feedback Survey</h1>
    <form v-if="!submitted && !agreed">
      <p>We are a group of EPFL students in collaboration with UNIL CARLA LAB (Domicele Jonauskaite, Corentin Wicht, and Prof Chrstine Mohr).
        Welcome to our study "Helping young artists choose their best art pieces".</p>
      <p>In this online study, we want to gather data about abstract paintings.
        The questions of this survey are to assess which of the art pieces are most appreciated by the public.
        It will also provide us information about the perception of art.
        Your answers to these questions will be used anonymously and for research and academic purposes only.
        All the gathered data will be confidential. Please do not use mobile devices to complete this survey.
      </p>
      <p>If you agree to take part in this experiment, please click next.</p>
      <div>
        <button type="button" class="btn btn-default margin-btn" v-on:click.prevent="agreed=true">Next</button>
      </div>
    </form>
    <form role="form" class="form" v-if="!submitted && agreed">
      <div class="row">
        <legend>Enter Your Personal Information</legend>
      </div>

      <div class="row">
        <div class="form-group">
          <label for="age">What is your age?</label>
          <input id="age" class="form-control" type="number" v-model.lazy="participant.age" required/>
        </div>
      </div>


      <div class="row">
        <div class="form-group">
          <label for="language">What is your mother tongue?</label>
          <select class="form-control" id="language" v-model="participant.idiom">
            <option v-for="idiom in idioms">{{ idiom }}</option>
          </select>
        </div>
      </div>


      <div class="row">
        <div class="form-group">
          <label for="english">How well do you speak English?</label>
          <select class="form-control" id="english" v-model="participant.fluency">
            <option v-for="fluency in fluencies">{{ fluency }}</option>
          </select>
        </div>
      </div>


      <div class="row">
        <div class="form-group">
          <label for="live">Where do you live for the last two years?</label>
          <select class="form-control" id="live" v-model="participant.residence">
            <option v-for="residence in countries">{{ residence }}</option>
          </select>
        </div>
      </div>


      <div class="row">
        <div class="form-group">
          <label for="country">What is your country of origin?</label>
          <select class="form-control" id="country" v-model="participant.origin">
            <option v-for="origin in countries">{{ origin }}</option>
          </select>
        </div>
      </div>


      <div class="row">
        <div class="form-group">
          <label for="gender">What is your gender?</label>
          <select class="form-control" id="gender" v-model="participant.gender">
            <option v-for="gender in genders">{{ gender }}</option>
          </select>
        </div>
      </div>


      <div class="row">
        <div class="form-group">
          <label for="degree">What is the highest education level you have completed?</label>
          <select class="form-control" id="degree" v-model="participant.degree_level">
            <option v-for="degree_level in degree_levels">{{ degree_level }}</option>
          </select>
        </div>
      </div>


      <div class="row">
        <div class="form-group">
          <label for="art">How would you qualify your art knowledge?</label>
          <select class="form-control" id="art" v-model="participant.art_level">
            <option v-for="art_level in art_levels">{{ art_level }}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <label for="color">Do you have troubles seeing differences between some colors? (color blindness)</label>
          <select class="form-control" id="color" v-model="participant.blindness">
            <option v-for="blindness in blindnesses">{{ blindness }}</option>
          </select>
        </div>
      </div>

      <div id="separation"></div>
      <div class="row">
  <!-- TODO: picture sizes, yellow fix, achromatic  -->
      <button class="btn btn-default" :disabled="!(participant.residence != ''
          && participant.fluency != '' && participant.idiom != '' && participant.origin != '' &&
          participant.age!='' && participant.gender!='' && participant.degree_level!='' &&
          participant.art_level!='' && participant.blindness!='' )" v-on:click.prevent="post">Submit
      </button>
        <span v-if="!(participant.residence != ''
          && participant.fluency != '' && participant.idiom != '' && participant.origin != '' &&
          participant.age!='' && participant.gender!='' && participant.degree_level!='' &&
          participant.art_level!='' && participant.blindness!='')">You should complete all the questions before submitting the form.</span>

      </div>
    </form>
    <div class="hide" id="preview" v-if="agreed">
      <h3>Preview Informations</h3>
      <p>Age: {{ participant.age }}</p>
      <p>Mother tongue: {{ participant.idiom }}</p>
      <p>English Fluency: {{ participant.fluency }}</p>
      <p>Country of Residency: {{ participant.residence }}</p>
      <p>Origin: {{ participant.origin }}</p>
      <p>Gender: {{ participant.gender }}</p>
      <p>Education level: {{ participant.degree_level }}</p>
      <p>Art knowledge: {{ participant.art_level }}</p>
      <p>Color blindness: {{ participant.blindness }}</p>

    </div>
  </div>
</template>

<script>
  // Imports

  export default {
    props: ['image_colour'],

    data() {
      return {
        participant: {
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
        genders: ['male', 'female', 'other'],
        countries: ['Afghanistan'
          , 'Albania'
          , 'Algeria'
          , 'America'
          , 'Andorra'
          , 'Angola'
          , 'Antigua'
          , 'Argentina'
          , 'Armenia'
          , 'Australia'
          , 'Austria'
          , 'Azerbaijan'
          , 'Bahamas'
          , 'Bahrain'
          , 'Bangladesh'
          , 'Barbados'
          , 'Belarus'
          , 'Belgium'
          , 'Belize'
          , 'Benin'
          , 'Bhutan'
          , 'Bissau'
          , 'Bolivia'
          , 'Bosnia'
          , 'Botswana'
          , 'Brazil'
          , 'British'
          , 'Brunei'
          , 'Bulgaria'
          , 'Burkina'
          , 'Burma'
          , 'Burundi'
          , 'Cambodia'
          , 'Cameroon'
          , 'Canada'
          , 'Cape Verde'
          , 'Central African Republic'
          , 'Chad'
          , 'Chile'
          , 'China'
          , 'Colombia'
          , 'Comoros'
          , 'Congo'
          , 'Costa Rica'
          , 'Croatia'
          , 'Cuba'
          , 'Cyprus'
          , 'Czech'
          , 'Denmark'
          , 'Djibouti'
          , 'Dominica'
          , 'East Timor'
          , 'Ecuador'
          , 'Egypt'
          , 'El Salvador'
          , 'Emirate'
          , 'England'
          , 'Eritrea'
          , 'Estonia'
          , 'Ethiopia'
          , 'Fiji'
          , 'Finland'
          , 'France'
          , 'Gabon'
          , 'Gambia'
          , 'Georgia'
          , 'Germany'
          , 'Ghana'
          , 'Great Britain'
          , 'Greece'
          , 'Grenada'
          , 'Grenadines'
          , 'Guatemala'
          , 'Guinea'
          , 'Guyana'
          , 'Haiti'
          , 'Herzegovina'
          , 'Holland'
          , 'Honduras'
          , 'Hungary'
          , 'Iceland'
          , 'India'
          , 'Indonesia'
          , 'Iran'
          , 'Iraq'
          , 'Ireland'
          , 'Israel'
          , 'Italy'
          , 'Ivory Coast'
          , 'Jamaica'
          , 'Japan'
          , 'Jordan'
          , 'Kazakhstan'
          , 'Kenya'
          , 'Kiribati'
          , 'Korea'
          , 'Kosovo'
          , 'Kuwait'
          , 'Kyrgyzstan'
          , 'Laos'
          , 'Latvia'
          , 'Lebanon'
          , 'Lesotho'
          , 'Liberia'
          , 'Libya'
          , 'Liechtenstein'
          , 'Lithuania'
          , 'Luxembourg'
          , 'Macedonia'
          , 'Madagascar'
          , 'Malawi'
          , 'Malaysia'
          , 'Maldives'
          , 'Mali'
          , 'Malta'
          , 'Marshall'
          , 'Mauritania'
          , 'Mauritius'
          , 'Mexico'
          , 'Micronesia'
          , 'Moldova'
          , 'Monaco'
          , 'Mongolia'
          , 'Montenegro'
          , 'Morocco'
          , 'Mozambique'
          , 'Myanmar'
          , 'Namibia'
          , 'Nauru'
          , 'Nepal'
          , 'Netherlands'
          , 'New Zealand'
          , 'Nicaragua'
          , 'Niger'
          , 'Nigeria'
          , 'Norway'
          , 'Oman'
          , 'Pakistan'
          , 'Palau'
          , 'Panama'
          , 'Papua'
          , 'Paraguay'
          , 'Peru'
          , 'Philippines'
          , 'Poland'
          , 'Portugal'
          , 'Qatar'
          , 'Romania'
          , 'Russia'
          , 'Rwanda'
          , 'Samoa'
          , 'San Marino'
          , 'Sao Tome'
          , 'Saudi Arabia'
          , 'Scotland'
          , 'Scottish'
          , 'Senegal'
          , 'Serbia'
          , 'Seychelles'
          , 'Sierra Leone'
          , 'Singapore'
          , 'Slovakia'
          , 'Slovenia'
          , 'Solomon'
          , 'Somalia'
          , 'South Africa'
          , 'South Sudan'
          , 'Spain'
          , 'Sri Lanka'
          , 'St Kitts'
          , 'St Lucia'
          , 'Sudan'
          , 'Suriname'
          , 'Swaziland'
          , 'Sweden'
          , 'Switzerland'
          , 'Syria'
          , 'Taiwan'
          , 'Tajikistan'
          , 'Tanzania'
          , 'Thailand'
          , 'Tobago'
          , 'Togo'
          , 'Tonga'
          , 'Trinidad'
          , 'Tunisia'
          , 'Turkey'
          , 'Turkmenistan'
          , 'Tuvalu'
          , 'Uganda'
          , 'Ukraine'
          , 'United Kingdom'
          , 'United States'
          , 'Uruguay'
          , 'USA'
          , 'Uzbekistan'
          , 'Vanuatu'
          , 'Vatican'
          , 'Venezuela'
          , 'Vietnam'
          , 'Wales'
          , 'Wakanda'
          , 'Welsh'
          , 'Yemen'
          , 'Zambia'
          , 'Zimbabwe'],
        idioms: [
          'Arabic',
          'Abkhaz',
          'Albanian',
          'Austro-Bavarian',
          'Armenian',
          'Azerbaijani',
          'Bengali',
          'Belarusian',
          'Bulgarian',
          'Bosnian',
          'Catalan',
          'Croatian',
          'Danish',
          'Dutch',
          'English',
          'Estonian',
          'French',
          'Finnish',
          'German',
          'Greek',
          'Gujarati',
          'Georgian',
          'Hindi',
          'Hungarian',
          'Hausa',
          'Icelandic',
          'Irish',
          'Italian',
          'Japanese',
          'Javanese',
          'Jin',
          'Korean',
          'Kannada',
          'Kazakh',
          'Lithuanian',
          'Latvian',
          'Luxembourgish',
          'Mandarin',
          'Maltese',
          'Macedonian',
          'Malay',
          'Marathi',
          'Malayalam',
          'Norwegian',
          'Portuguese',
          'Punjabi',
          'Persian',
          'Polish',
          'Pashto',
          'Russian',
          'Romanian',
          'Spanish',
          'Swedish',
          'Serbian',
          'Slovak',
          'Slovene',
          'Southern Min',
          'Sundanese',
          'Turkish',
          'Telugu',
          'Tamil',
          'Thai',
          'Ukrainian',
          'Urdu',
          'Vietnamese',
          'Wu',
          'Xiang',
          'Yue'
        ],
        fluencies: ['I dont understand the question', 'I know the basics', 'Good enough', 'Fluent', 'Shakespeare Level'],
        degree_levels: ['middle-school', 'high-school (e.g. Maturité, A-levels)', 'under-graduate (e.g. BS, BA)', 'graduate (e.g. MS, MA)', 'PHD'],
        art_levels: ['novice', 'amateur', 'connoisseur'],
        blindnesses: ['No', 'Yes'],
        submitted: false,
        agreed: false,
        is_end: 'FALSE'

      }
    },
    mounted: function () {
      if(this.$route.params.is_end === 'TRUE'){
        this.is_end = 'TRUE'
      }
    },
    methods: {

      is_ready: function () {
        return !(this.participant.residence != ''
          && this.participant.fluency != '' && this.participant.idiom != '' && this.participant.origin != '' &&
          this.participant.age!='' && this.participant.gender!='' && participant.degree_level!='' &&
          this.participant.art_level!='' && this.participant.blindness!='');
      },
      post: function () {
        this.$http.post('https://pwsdjzqgyf.execute-api.eu-central-1.amazonaws.com/dev/profile', {
          image_colour: this.image_colour,
          country: this.participant.origin,
          age: this.participant.age,
          gender: this.participant.gender,
          idiom: this.participant.idiom,
          fluency: this.participant.fluency,
          residence: this.participant.residence,
          degree_level: this.participant.degree_level,
          art_level: this.participant.art_level,
          blindness: this.participant.blindness,
        }).then(function (data) {
          this.$emit('change_profile_uid', data.data.Profile.uid);
          this.$router.push({ path: '/panas/TRUE' });
          this.submitted = true;
        });

      }
    }
  }
</script>

<style>
  #add-participant * {
    box-sizing: border-box;
  }

  input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
  }

  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  #separation {
    margin-bottom: 30px;
  }

  h3 {
    margin-top: 10px;
  }

  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }

  #checkboxes label {
    display: inline-block;
    margin-top: 0;
  }

</style>
<style scoped>

  ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
  }

  a {
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

  .router-link-active {
    background: #eee;
    color: #444;
  }

  .margin-btn {
    margin: 10px 0 10px 0;
    padding: 5px 30px 5px 30px;
  }

  .form-multiline .form-group {
    margin-bottom: 15px;
    margin-right: 30px;
  }

  .form-multiline label,
  .form-multiline .form-control {
    margin-right: 15px;
  }

</style>
