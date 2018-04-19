<template>
  <div id="questions">
    <h2 id="timer_style" v-if="userReady && !timeUp"></h2>
    <div id="instructions" v-if="!userReady">
      <h1>Instructions for art evaluation</h1>
      <p>Thank you for taking part in our survey. The session will take place as follows:</p>
      <p>At each step, four art pieces will be presented on the screen with a corresponding question. After 5 seconds,
        you will be able to choose one of
        the images. Select your answer by clicking on the picture you want to choose. It will
        immediately move to the next question.
      </p>
      <p>
        Please, take the time you need to look at all pictures before answering each question.
        The whole experiment will last approximately 10 minutes.
        Please try to answer the whole questions in one sitting.
        Also you are invited to remove all screen color filters, to increase the brightness of your screen and
        put your browser in fullscreen.
      </p>
      <p>When ready click the next button</p>
      <button class="btn btn-default" v-on:click.prevent="ready">Next</button>
    </div>
    <div id="one-question" v-if="userReady && !timeUp">
      <h2 class="text-center">{{questions[currentIndex%5]}}</h2>
      <div class="row">
        <div class="col-md-6">
          <a target="_blank" v-on:click="post(0)">
            <img class="img-responsive" :src="images[0]" >
          </a>
        </div>
        <div class="col-md-6">
          <a target="_blank" v-on:click="post(1)">
            <img class="img-responsive" :src="images[1]">
          </a>
        </div>
      </div>
      <div class="row">

        <div class="col-md-6">
          <a target="_blank" v-on:click="post(2)">
            <img class="img-responsive":src="images[2]" >
          </a>
        </div>
        <div class="col-md-6">
          <a target="_blank" v-on:click="post(3)">
            <img class="img-responsive":src="images[3]">
          </a>
        </div>
      </div>
    </div>
    <div id="endQuestions" v-if="userReady && timeUp">
      <h3>Final Step</h3>
      <p>Now please complete the PANAS Test one more time.</p>
      <ul>
        <router-link to="/panasfinal" exact id="button"><button class="btn btn-default">Next</button></router-link>
      </ul>
    </div>
  </div>

</template>

<script>

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const all_images = shuffle(['3-5.jpg',
    '3-6.jpg',
    '3-11.jpg',
    '4-44.jpg',
    '4-48.jpg',
    '5-6.jpg',
    '5-32.jpg',
    '5-40.jpg',
    '6-26.jpg',
    '7-24.jpg',
    '11-6.jpg',
    '14-4.jpg',
    '14-6.jpg',
    '17-4.jpg',
    '18-4.jpg',
    '18-6.jpg',
    '19-4.jpg',
    '21-43.jpg',
    '21-47.jpg',
    '22-24.jpg',
    '22-29.jpg',
    '22-45.jpg',
    '23-26.jpg',
    '23-42.jpg',
    '24-22.jpg',
    '24-49.jpg',
    '25-32.jpg',
    '26-29.jpg',
    '26-42.jpg',
    '26-46.jpg',
    '27-25.jpg',
    '27-28.jpg',
    '30-24.jpg',
    '30-41.jpg',
    '31-21.jpg',
    '31-22.jpg',
    '31-23.jpg',
    '31-24.jpg',
    '32-27.jpg',
    '32-42.jpg',
    '32-44.jpg',
    '32-46.jpg',
    '34-1.jpg',
    '38-39.jpg',
    '38-40.jpg',
    '38-44.jpg',
    '38-48.jpg',
    '40-6.jpg',
    '40-23.jpg',
    '40-41.jpg',
    '40-45.jpg',
    '41-24.jpg',
    '42-11.jpg',
    '42-49.jpg',
    '44-23.jpg',
    '44-43.jpg',
    '45-43.jpg',
    '46-45.jpg',
    '46-48.jpg',
    '48-21.jpg',
    '48-47.jpg']);

  let unused_images = Array.apply(null, {length: Math.floor(all_images.length / 4)}).map(Function.call, Number);


  import CountdownTimer from './Timer.vue'
  export default {
    props: ['image_colour', 'profile_uid'],
    mounted() {
      this.time()},
    data () {
      return {
        datenow: 0,
        places: [0,1,2,3],
        images: ['','','',''],
        questions: ['Which painting do you like the most?',
        'Which painting do you like the least?',
        'Which painting are you the most drawn to?',
        'Which painting is the most inspiring for you?',
        'Which painting do you enjoy the most?'],
        MAXIMUM_IMAGE: all_images.length,
        currentIndex: 0,
        userReady: false,
        timeUp: false,
        lastClick: parseInt(Date.now()/1000),
        firstOpen: undefined
      }
    },
    components: {
      CountdownTimer
    },
    mounted: function () {
      this.firstOpen = parseInt(Date.now()/1000)
    },

    methods: {

      time:function() {
        var self = this;
        this.datenow = this.lastClick-parseInt(Date.now()/1000)+5;
        setTimeout(self.time, 1000) // recursive!
      },

      post:function(place){
        if (!(parseInt(Date.now()/1000) > this.lastClick + 5))
          return;
        this.lastClick = parseInt(Date.now()/1000);

          this.$http.post('https://pwsdjzqgyf.execute-api.eu-central-1.amazonaws.com/dev/click',{
            profile_uid: this.profile_uid,
            image_colour: this.image_colour,
            questionNumber: this.currentIndex,
            image_uid: all_images[(this.currentIndex + place)],
            question: this.questions[this.currentIndex%5],
            place: place

          }).then(function(data){
            if(this.lastClick - this.firstOpen > 60 * 60){
              this.$router.push({ path: '/panas/FALSE' });
            }
            this.userReady= true;
            this.currentIndex += this.places.length;
            this.images = [
              'https://s3.eu-central-1.amazonaws.com/cognitive.images/' + this.image_colour + '/' + all_images[(this.currentIndex + 1)],
              'https://s3.eu-central-1.amazonaws.com/cognitive.images/' + this.image_colour + '/' + all_images[(this.currentIndex + 2)],
              'https://s3.eu-central-1.amazonaws.com/cognitive.images/' + this.image_colour + '/' + all_images[(this.currentIndex + 3)],
              'https://s3.eu-central-1.amazonaws.com/cognitive.images/' + this.image_colour + '/' + all_images[(this.currentIndex + 4)]]
          });


      },
      ready(){
        this.userReady = true;
        this.images = [
          'https://s3.eu-central-1.amazonaws.com/cognitive.images/' + this.image_colour + '/' + all_images[(this.currentIndex + 1)],
          'https://s3.eu-central-1.amazonaws.com/cognitive.images/' + this.image_colour + '/' + all_images[(this.currentIndex + 2)],
          'https://s3.eu-central-1.amazonaws.com/cognitive.images/' + this.image_colour + '/' + all_images[(this.currentIndex + 3)],
          'https://s3.eu-central-1.amazonaws.com/cognitive.images/' + this.image_colour + '/' + all_images[(this.currentIndex + 4)]]
      }

    }
  }


//
// display_images:function () {
//   this.user_ready=true;
//   var num1 = 0;
//   var num2 = 0;
//   var num3 = 0;
//   var num4 = 0;
//   while (num1 == num2 || num1 == num3 || num1 == num4 || num2 == num3 || num2 == num4 || num3 == num4)
//   {
//     num1 = Math.floor(Math.random() * (this.imageArray.length));
//     num2 = Math.floor(Math.random() * (this.imageArray.length));
//     num3 = Math.floor(Math.random() * (this.imageArray.length));
//     num4 = Math.floor(Math.random() * (this.imageArray.length));
//   }
//   this.proposed_image_1 = num1;
//   this.proposed_image_2 = num2;
//   this.proposed_image_3 = num3;
//   this.proposed_image_4 = num4;
// }
</script>

<style scoped>
  #instructions{
    margin: 20px auto;
    max-width: 500px;
  }
  #endQuestions *{
    box-sizing: border-box;
  }
  #endQuestions{
    margin: 20px auto;
    max-width: 500px;
  }

  img{
    overflow: hidden;
    margin: 20px auto;
    width: 80%;
    height: 400px;
  }


  div.desc {
    padding: 15px;
    text-align: center;
  }
  a{
    cursor: pointer;
  }
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  #button{
    color: black;
    text-decoration: none;
    padding: 6px 8px;
    webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 2px;
    border: black;
    background-color: lightgrey;
  }

</style>
