<template>
  <div id="questions">
    <h2 id="timer_style" v-if="userReady && !timeUp">
    </h2>
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
      <button v-on:click.prevent="ready">Next</button>
    </div>
    <div id="one-question" v-if="userReady && !timeUp">
      <h2>{{questions[currentIndex%5]}}</h2>
      <div class="gallery" v-for="place in places" >
        <a target="_blank" v-on:click="post(place)">
          <img style="height: 300px" :src="images[place]"  width="900" height="600">
        </a>
        <div class="desc">{{place + 1}}</div>
      </div>
    </div>
    <div id="endQuestions" v-if="userReady && timeUp">
      <h3>Final Step</h3>
      <p>Now please complete the PANAS Test one more time.</p>
      <ul>
        <list><router-link to="/panasfinal" exact id="button">Next</router-link></list>
      </ul>
    </div>
  </div>

</template>

<script>
  import CountdownTimer from './Timer.vue'
  export default {
    mounted() {console.log(123)
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
        MAXIMUM_IMAGE: 64,
        currentIndex: 0,
        userReady: false,
        timeUp: false,
        lastClick: parseInt(Date.now()/1000),
      }
    },
    components: {
      CountdownTimer
    },

    methods: {

      time:function() {
        var self = this
        this.datenow = this.lastClick-parseInt(Date.now()/1000)+5
        setTimeout(self.time, 1000) // recursive!
      },


      post:function(place){
        if (!(parseInt(Date.now()/1000) > this.lastClick + 5))
          return

        this.lastClick = parseInt(Date.now()/1000)
        console.log(this.lastClick)

        if (!(this.currentIndex > 60 )) {
          this.$http.post('http://jsonplaceholder.typicode.com/posts',{
            questionNumber: this.currentIndex / this.places.length,
            selectedImage: this.currentIndex + place,
            question: this.questions[this.currentIndex%5],
            place: place
          }).then(function(data){
            this.userReady= true;

            this.currentIndex += this.places.length;

            this.images = [
              'https://s3.eu-central-1.amazonaws.com/cognitive-images/original/0' + (this.currentIndex + 1) + '.jpg',
              'https://s3.eu-central-1.amazonaws.com/cognitive-images/original/0' + (this.currentIndex + 2) + '.jpg',
              'https://s3.eu-central-1.amazonaws.com/cognitive-images/original/0' + (this.currentIndex + 3) + '.jpg',
              'https://s3.eu-central-1.amazonaws.com/cognitive-images/original/0' + (this.currentIndex + 4) + '.jpg']
          });
        }
        else{
          this.timeUp=true;
        }
      },
      ready(){
        this.userReady = true
        this.images = [
          'https://s3.eu-central-1.amazonaws.com/cognitive-images/original/0' + (this.currentIndex + 1) + '.jpg',
          'https://s3.eu-central-1.amazonaws.com/cognitive-images/original/0' + (this.currentIndex + 2) + '.jpg',
          'https://s3.eu-central-1.amazonaws.com/cognitive-images/original/0' + (this.currentIndex + 3) + '.jpg',
          'https://s3.eu-central-1.amazonaws.com/cognitive-images/original/0' + (this.currentIndex + 4) + '.jpg']
      },
      get(place) {
        const index = place + this.currentIndex;
        return 'https://s3.eu-central-1.amazonaws.com/cognitive-images/original/' + (index + 1) + '.jpg';
      },

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

  #timer_style *{
    box-sizing: border-box;
  }
  #timer_style{
    margin: 20px auto;
    max-width: 1200px;
    alignment: center;
  }

  #instructions *{
    box-sizing: border-box;
  }
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

  #one-question *{
    box-sizing: border-box;
  }
  #one-question{
    margin: 20px auto;
    max-width: 1200px;
  }

  div.gallery {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 500px;
  }

  div.gallery:hover {
    border: 1px solid #777;
  }

  div.gallery img {
    width: 100%;
    height: auto;
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
