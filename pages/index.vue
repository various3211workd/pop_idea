<template>
  <div>
    <div v-show="loading" style="background-color: #330066; width: 100vw; height: 100vh;">
      <br><br><br><br><br><br><br><br>
      <self-building-square-spinner
        :animation-duration="2000"
        :size="40"
        :color="'#ff1d5e'"
        style="margin: 0 auto"
      />
    </div>
    <div v-show="!loading" style="background-color: #333; height: 100%;">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://elastic-gates-511a51.netlify.com" target="_blank">
            <p style="font-size: 30px; font-family: Impact, Charcoal;">PoP IdeA</p>
          </a>
          <a href="https://github.com/various3211workd/pop_idea" target="_blank" style="margin: 0 0 0 auto;">
            <font-awesome-icon class="icon is-large has-text-dark" :icon="[ 'fab', 'github' ]" />
          </a>
          <!--
          <a style="margin: 0 0 0 auto;">
            <font-awesome-icon class="icon is-large has-text-info" :icon="[ 'fab', 'twitter' ]" />
          </a>
          -->
        </div>
      </nav>

      <!-- clear streat image -->
      <div v-if="nextTodoId > this.num + 1">
        <div class="streat">
          <img :src="commit_icon" /><br><br>
        </div>
      </div>

      <!-- main app -->
      <div class="container">
        <div id="app">
          <div class="content has-text-centered">

            <!-- page first open view -->
            <div v-if="first_flag == true">
              <div class="modal_wrap">
              <input id="trigger" type="checkbox" :checked="true">
                <div class="modal_overlay">
                  <label for="trigger" class="modal_trigger"></label>
                  <div class="modal_content">
                    <label for="trigger" class="close_button"  v-on:click="desableFirst()">✖️</label>
                    <no-ssr>
                      <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
                        <slide>
                          <img :src="streat_icon" />
                        </slide>
                        <slide>
                          <font-awesome-icon class="fas fa-10x has-text-info" icon="drafting-compass" />
                          <br><br><br><br>
                          <p class="has-text-grey-darker is-size-4">
                            絵を描きたいけど、どんなポーズにしよう・・・
                          </p>
                          <p class="has-text-grey-light is-size-6">
                            何かアイデアを得たいと考えてるときに使用するのがおすすめです。<br>
                            決しておもしろい文字を作成するために使わないようにしましょう
                          </p>
                        </slide>
                        <slide>
                          <font-awesome-icon class="fas fa-10x has-text-info" icon="link" />
                          <br><br><br><br>
                          <p class="has-text-grey-darker is-size-4">
                            しりとりをする
                          </p>
                          <p class="has-text-grey-light is-size-6">
                            深く考えずにパッと出た単語を使うのがおすすめです！
                          </p>
                        </slide>
                        <slide>
                          <font-awesome-icon class="fas fa-10x has-text-info" icon="lightbulb" />
                          <br><br><br><br>
                          <p class="has-text-grey-darker is-size-4">
                            つながった文字がアイデアになる！
                          </p>
                          <p class="has-text-grey-light is-size-6">
                            カスケードクリーム + さらだあぶら<br>
                            いい絵が描けそうだ！
                          </p>
                        </slide>
                      </carousel>
                    </no-ssr>
                  </div>
                </div>
              </div>
            </div>

            <!-- view compoment -->
            <div v-if="nextTodoId > this.num + 1">
              <font-awesome-icon class="icon is-large shoe" icon="shoe-prints" />
              
              <!-- modal window -->    
              <label for="trigger" class="open_button">Result</label>
              <div class="modal_wrap">
              <input id="trigger" type="checkbox" :checked="this.pop_flag">
                <div class="modal_overlay">
                  <label for="trigger" class="modal_trigger"></label>
                  <div class="modal_content">
                    <label for="trigger" class="close_button">✖️</label>
                    <h2>Congrats!!</h2>
                    <h3>START</h3><br>
                    <div v-for="item in list" :key="item.id - 1">
                      <p>{{ item.text }}</p>
                      <font-awesome-icon class="icon has-text-info" icon="arrow-down" />
                    </div>
                    <h3>END</h3>

                    <h3>おすすめの組み合わせ
                      <br>
                      {{ list[Math.floor(Math.random() * list.length)].text }}
                      + {{ list[Math.floor(Math.random() * list.length)].text }}
                    </h3>
                    <button class="button">
                      <font-awesome-icon class="icon is-large has-text-info" :icon="[ 'fab', 'twitter' ]" />
                      <p class="has-text-grey-light is-size-4">
                        Tweet
                      </p>
                    </button>
                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">
                      Tweet
                    </a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
                <input v-model="item.text" class="input is-large" type="text" style="width: 30%">
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
                  <button class="button is-success is-large" v-on:click="doAdd()">
                    <font-awesome-icon class="icon is-large" :icon="[ 'fas', 'walking' ]" />
                  </button>
                  <br><br>
                  <button class="button is-danger is-large" v-on:click="doRemove(item)">
                    <font-awesome-icon class="icon is-large" :icon="[ 'fas', 'male' ]" />
                  </button>
                  <br><br>
                </div>
              </div>
            </div>

            <br><br><br><br><br>
            
          </div>
        </div>
      </div>
      <!-- view streat graph -->
      <div class="streat">
        <img :src="streat_icon" />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { SelfBuildingSquareSpinner } from 'epic-spinners/dist/lib/epic-spinners.min.js'

library.add(fab, fas, faGithub, faTwitter)

export default {
  components: {
    draggable,
    FontAwesomeIcon,
    SelfBuildingSquareSpinner,
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
      error_message: "",                            // error message string
      first_flag: false,                             // first session flag
      loading: true,
      signal_icon: require("~/static/signal.png"),
      streat_icon: require("~/static/streat.png"),
      commit_icon: require("~/static/commit.png"),
    };
  },
  /*
    page loader
  */
  mounted() {
    setTimeout(() => {
      this.loading = false;
      this.first_flag = true;
    }, 1000);
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
          if( this.list.length < this.num ) {
            this.list.unshift({
              text: this.message,
              id: this.nextTodoId++,
            })
          } else { // clear
            this.nextTodoId++
            this.pop_flag = true
            this.list.reverse()
          }
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
    if( this.nextTodoId != 2 ) {
        this.nextTodoId--
        var index = this.list.indexOf(item)
        this.list.shift();
      }
    },
    desableFirst: function() {
      this.first_flag = false
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
  height: 100px;
}

</style>