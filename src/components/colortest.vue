<template>
  <div id="colortest">
    <div id="selection" v-if="!submitted">
      <h1>Color perceptıon test</h1>
      <p>Thank you for taking part in our survey.</p>
      <p>
        Please verify the color accuracy of your screen according by selecting the most accurate object that matches the presented color.
      </p>
      <div class="grid-container">
        <div class="grid-item1">
        </div>
        <div class="grid-item2">
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <p>
            First color
          </p>
          <select v-model="selected_color_1">
            <option v-for="selectcolor in color1blue">{{ selectcolor }}</option>
          </select>
        </div>
        <div class="grid-item">
          <p>
            Second color
          </p>
          <select v-model="selected_color_2">
            <option v-for="selectcolor in color2blue">{{ selectcolor }}</option>
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
    props:['color'],
    data() {
      return {
        selected_color_1: '',
        selected_color_2: '',
        color1blue: ['yellow', 'marmelade', 'kumquat'],
        color2blue: ['Blue', 'Marine', 'Dead blue'],
        submitted: false
      }
    },
    methods: {
      post: function () {
        this.$http.post('http://jsonplaceholder.typicode.com/posts',{
          color1: this.color1blue,
          color2: this.color2blue,
          selected_color: this.color

        }).then(function(data){
          console.log(data);
          this.submitted= true;
        });
      }
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
  .grid-item1{
    background: darkred;
    margin: 30px;
  }
  .grid-item2{
    background: black;
    margin: 30px;
  }
  .grid-item{
    margin-left: 50px;
    alignment: center;
  }

</style>
