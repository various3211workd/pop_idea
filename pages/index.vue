<template>
  <div style="background-color: #333;">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://elastic-gates-511a51.netlify.com">
          <p style="font-size: 30px; font-family: Impact, Charcoal;">PoP IdeA</p>
        </a>
        <a href="https://github.com/various3211workd/pop_idea">
          <font-awesome-icon class="icon is-large has-text-dark" :icon="[ 'fab', 'github' ]" />
        </a>
      </div>
    </nav>

    <div class="container">
      <div id="app">
        <div class="content has-text-centered">
          
          <!-- view compoment -->
          <div v-if="nextTodoId > this.num + 1">
            <!-- commit streat -->       
            <div class="streat">
              <img :src="commit_icon" />
            </div><br><br>
            <font-awesome-icon class="icon is-large shoe" icon="shoe-prints" />
            
            <!-- modle window -->  
            <label for="trigger" class="open_button">Result</label>
            <div class="modal_wrap">
            <input id="trigger" type="checkbox" :checked="this.pop_flag">
              <div class="modal_overlay">
                <label for="trigger" class="modal_trigger"></label>
                <div class="modal_content">
                  <label for="trigger" class="close_button">✖️</label>
                  <h1>Congrats!!</h1>
                  <h2>START</h2>
                  <div v-for="item in list" :key="item.id - 1">
                    <h3>{{ item.text }}</h3>
                    <font-awesome-icon class="icon has-text-info" icon="arrow-down" />
                  </div>
                  <h2>END</h2>
                </div>
              </div>
            </div>
          </div>
          
          <br>

          <!-- error message view -->
          <div v-if="this.error_message" class="error_message has-text-warning">
            <div class="notification is-primary" style="width: 30%; margin: auto;">
              <button class="delete"></button>
              <strong>{{ this.error_message }}</strong>
            </div>
          </div>
          
          <br><br><br><br><br><br><br>

          <!-- draggble input form -->
          <draggable v-model="list" element="ul" :options="{animation:300}">
            <div v-for="item in list" :key="item.id">
              <input :refs="item.id" v-model="item.text" class="input is-large" type="text" style="width: 30%">
              <br><br><br><br>
              <font-awesome-icon class="icon is-large shoe" icon="shoe-prints" />
              <br><br><br>
            </div>
            <br><br>
          </draggable>

          <!-- view signal graph, walk and stop button -->
          <div v-if="nextTodoId <= this.num + 1">
            <div class="sticky">
              <img :src="this.signal_icon" />
              <div class="cover">
                <br><br>
                <div v-if="nextTodoId <= this.num + 1">
                  <button class="button is-success is-large" v-on:click="doAdd()">
                    <font-awesome-icon class="icon is-large" :icon="[ 'fas', 'walking' ]" />
                  </button>
                </div>
                <br>
                <button class="button is-danger is-large" v-on:click="doRemove(item)">
                  <font-awesome-icon class="icon is-large" :icon="[ 'fas', 'male' ]" />
                </button>
                <br><br>
              </div>
            </div>
          </div>

          <br><br><br><br><br>
          
          <!-- view streat graph -->
          <div class="streat">
            <img :src="streat_icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas, faGithub)

export default {
  components: {
    draggable,
    FontAwesomeIcon
  },
  data() {
    return {
      list: [
        {
          id: 1,
          text: "",
        }
      ],
      nextTodoId: 2,                                // list next id
      num: 5,                                       // count number
      pop_flag: false,                              // modle flag
      error_message: "",
      signal_icon: require("~/static/signal.png"),
      streat_icon: require("~/static/streat.png"),
      commit_icon: require("~/static/commit.png"),
    };
  },
  methods: {
    /*
      pushed list function
    */
    doAdd: function() {
      if( this.list[0].text ){
        if( this.list.length == 1 ){
          this.list.unshift({
            text: this.message,
            id: this.nextTodoId++,
          })
          this.error_message = ""
        }
        else if( (this.list[0].text).slice(0,1) === (this.list[1].text).slice(-1) && this.list[0].text !== this.list[1].text ){
          this.list.unshift({
            text: this.message,
            id: this.nextTodoId++,
          })
          this.error_message = ""
        }
        else {
          this.error_message = "正しい文字を入力してください!"
        }
      } else {
        this.error_message = "文字を入力してください!"
      }
    },
    /*
      poped list function
    */
    doRemove: function(item) {
      this.nextTodoId--
      var index = this.list.indexOf(item)
      this.list.shift();
    },
  },
};

</script>

<style scoped lang="scss">
.sticky {
  right: -250px;
  position: -webkit-sticky;
  position: fixed;
  bottom: 15%;
  background-repeat: no-repeat;
}
.cover {
  position: absolute;
  right: 48.5%;
  top: 0px;
}
.sticky img {
  width: 30%;
}
.shoe {
  transform: rotate(-90deg);
  right: random(100) + px;
  color: gray;
}
.streat img {
  width: 100%;
}
</style>