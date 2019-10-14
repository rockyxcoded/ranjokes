<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button 
      class="btn btn-primary"
      v-on:click='getJokes'
    >
      Get 10 random jokes
    </button>

    <button 
      class="btn btn-secondary"
      v-on:click='getJoke'
    >
      Get 1 random joke
    </button>

    <br>

    <span
      v-for="(type, index) in types"
      v-bind:key="index"
    >
      <input 
        type="checkbox"
        v-bind:value="type"
        v-model="checkedTypes"
        checked
      >
      <label>{{type}}</label> &nbsp;
    </span>

    <div class="col-md-12 mt-5">
      <Spinner/>
      <Joke 
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
        :joke='joke'
        :index='index'
        v-bind:key='index'
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './components/Joke'
import Spinner from './components/Spinner'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Boring Random Jokes',
      types: ['general', 'knock-knock', 'programming'],
      checkedTypes: ['general', 'knock-knock', 'programming']
    }
  },
  methods: mapActions([
    'getJokes', 'getJoke'
  ]),
  components: {
    Joke, Spinner
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  
  #app {
    font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3350;
    margin-top: 60px;
    }
</style>
