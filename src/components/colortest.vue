<template>
  <div id="colortest">
    <div id="selection" v-if="!submitted">
      <h1>Color perception test</h1>
      <p>Thank you for taking part in our survey. </p>
      <p>
        Please verify the color accuracy of your screen according by selecting the most accurate object that matches the presented color.
      </p>
      <div class="grid-container">
        <div v-bind:style="{background: display_color_1}">
        </div>
        <div v-bind:style="{background: display_color_2}">
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <p>
            select the color
          </p>
          <select v-model="selected_color_1">
            <option v-for="selectcolor in color_selected">{{ selectcolor }}</option>
          </select>
        </div>
        <div class="grid-item">
          <p>
            select the color
          </p>
          <select v-model="selected_color_2">
            <option v-for="selectcolor in color_selected">{{ selectcolor }}</option>
          </select>
        </div>
      </div>
      <button :disabled="(selected_color_1=='' || selected_color_2=='')" v-on:click.prevent="post">Submit</button>
    </div>
    <div id="results" v-if="submitted">
      <h1>Thank You</h1>
      <p>Thank you for taking part in our experiment! We hope you enjoyed it.
        If you have any questions regarding this survey, don’t hesitate to contact us: wearecool@shs.ch
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props:['image_colour', 'profile_uid'],
    data() {
      return {
        selected_color_1: '',
        selected_color_2: '',
        display_color_1: '',
        display_color_2: '',
        color_selected: [
          'hot pink',
          'plum',
          'raspberry',
          'blood colour',
          'cherry',
          'rose pink',
          'salmon',
          'bronze',
          'carrot',
          'honey',
          'peach',
          'gold',
          'banana',
          'lemon',
          'kiwi',
          'mint',
          'pine tree',
          'emerald',
          'turquoise',
          'sky',
          'navy',
          'blueberry',
          'grape',
          'violet',
          'lilac',
          'lavender',
          'magenta',
          'ash',
          'cloud',
          'pigeon grey',
          'avocado skin',
          'brick'
        ],
        submitted: false
      }
    },
    methods: {
      post: function () {
        this.$http.post('https://pwsdjzqgyf.execute-api.eu-central-1.amazonaws.com/dev/click',{
          selected_color_1: this.selected_color_1,
          selected_color_2: this.selected_color_2,
          image_colour: this.image_colour,
          profile_uid: this.profile_uid


        }).then(function(data){
          console.log(data);
          this.submitted= true;
        });
      },
      find_color: function () {
        console.log(this.image_colour);
        if (this.image_colour=="red")
        {
          this.display_color_1="#FF002B";
          this.display_color_2="#FF2A00";
          console.log("it is red");
        }
        if (this.image_colour=="blue")
        {
          this.display_color_1="#00B0EB";
          this.display_color_2="#548BDE";
          console.log("it is blue");
        }
        if (this.image_colour=="yellow")
        {
          this.display_color_1='#FFD70F';
          this.display_color_2='#FFFF0F';
          console.log("it is yellow");
        }
        if (this.image_colour=="w")
        {
          this.display_color_1="#aaaaaa";
          this.display_color_2="#777777";
          console.log("it is grey");
        }
      }
    },
    beforeMount(){
      this.find_color()
    }
  }
</script>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 200px;
    margin: 40px;
    alignment: center;
  }
  #colortest *{
    box-sizing: border-box;
  }
  #colortest{
    margin: 20px auto;
    max-width: 500px;
  }


  .grid-item{
    margin-left: 50px;
    alignment: center;
  }

</style>
