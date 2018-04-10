<template>
  <div id="questions">
    <h2 id="timer_style" v-if="userReady && !timeUp"></h2>
    <div id="instructions" v-if="!userReady">
      <h1>Instructions for art evaluation</h1>
      <p>Thank you for taking part in our survey. The session will take place as follows:</p>
      <p>At each step, four art pieces will be presented on the screen. After 5 seconds,
        a question about those paintings will appear. It will invite you to choose one of
        the images. Select your answer by clicking on the picture you want to choose. It will
        immediately move to the next question.
      </p>
      <p>
        Please, take the time you need to look at all pictures before answering each question.
        The whole experiment will last approximately 10 minutes.
        Please try to answer the whole questions in one sitting.
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

  const all_images = shuffle(['3-5.png',
    '3-6.png',
    '3-11.png',
    '4-44.png',
    '4-48.png',
    '5-6.png',
    '5-32.png',
    '5-40.png',
    '6-26.png',
    '7-24.png',
    '11-6.png',
    '14-4.png',
    '14-6.png',
    '17-4.png',
    '18-4.png',
    '18-6.png',
    '19-4.png',
    '21-43.png',
    '21-47.png',
    '22-24.png',
    '22-29.png',
    '22-45.png',
    '23-26.png',
    '23-42.png',
    '24-22.png',
    '24-49.png',
    '25-32.png',
    '26-29.png',
    '26-42.png',
    '26-46.png',
    '27-25.png',
    '27-28.png',
    '30-24.png',
    '30-41.png',
    '31-21.png',
    '31-22.png',
    '31-23.png',
    '31-24.png',
    '32-27.png',
    '32-42.png',
    '32-44.png',
    '32-46.png',
    '34-1.png',
    '38-39.png',
    '38-40.png',
    '38-44.png',
    '38-48.png',
    '40-6.png',
    '40-23.png',
    '40-41.png',
    '40-45.png',
    '41-24.png',
    '42-11.png',
    '42-49.png',
    '44-23.png',
    '44-43.png',
    '45-43.png',
    '46-45.png',
    '46-48.png',
    '48-21.png',
    '48-47.png']);

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
            if(this.lastClick - this.firstOpen > 100){
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
