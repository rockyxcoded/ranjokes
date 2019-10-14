<template>
  <transition name="bounce">
    <div id="joke">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mt-3">
            <div class="card-header text-capitalize">
              {{joke.type}}
              <button 
                class="close"
                v-on:click="removeJoke(index)"
              >
              <span>&times;</span>
              </button>
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p><u>{{joke.setup}}</u></p>
                <footer class="blockquote-footer">
                  <cite title="Answer">
                    <em>{{joke.punchline}}</em>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import { mapActions } from 'vuex';

  export default {
    props: [
      'joke', 'index'
    ],
    methods: mapActions([
      'removeJoke'
    ])
  }
</script>

<style scoped>
  .card {
    border: 1px solid #2c3350;
    border-radius: 20px;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
