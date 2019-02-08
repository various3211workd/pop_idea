<template>
  <div style="background-color: #333;">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://elastic-gates-511a51.netlify.com">
          <!--
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          -->
          <p style="font-size: 30px; font-family: Impact, Charcoal;">PoP IdeA</p>
        </a>
        <a href="https://github.com/various3211workd/pop_idea">
          <font-awesome-icon class="icon is-large has-text-grey" :icon="[ 'fab', 'github' ]" />
        </a>
      </div>
    </nav>

    <div class="container">
      <div id="app">
        <div class="content has-text-centered">
          <div v-if="nextTodoId > 5">            
            <div class="streat">
              <img :src="commit_icon" />
            </div><br><br>
            <font-awesome-icon class="icon is-large shoe" icon="shoe-prints" />
            <div class="modal_overlay">
              <div class="modal_content">
                <label for="trigger" class="close_button">✖️</label>
                <h2>Congrats!!</h2>
                <div v-for="item in list" :key="item.id">
                  <p>{{ item.text }}</p>
                  <font-awesome-icon class="icon has-text-info" icon="arrow-down" />
                </div>
              </div>
            </div>
          </div>
          
          <br><br><br><br><br><br><br><br>
          
          <draggable v-model="list" element="ul" :options="{animation:300}">
            <div v-for="item in list" :key="item.id">
              <input v-model="item.text" class="input is-large" type="text" style="width: 30%">
              <br><br><br>
              <font-awesome-icon 
                class="icon is-large shoe" 
                icon="shoe-prints"  
              />
              <br><br><br>
            </div>
            <br><br>
          </draggable>

          <div v-if="nextTodoId <= 5">
            <div class="sticky">
              <img :src="this.signal_icon" />
              <div class="cover">
                <br><br>
                <div v-if="this.word === this.message.slice(0, 1)">
                  <button class="button is-success is-large" v-on:click="doAdd()">
                    <font-awesome-icon class="icon is-large" :icon="[ 'fas', 'walking' ]" />
                  </button>
                </div>
                <div v-else>
                  <button disabled class="button is-success is-large" v-on:click="doAdd()">
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
          
          <br><br><br><br><br><br><br><br>
          
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
      nextTodoId: 2,
      message: "",
      word: "",
      signal_icon: require("~/static/signal.png"),
      streat_icon: require("~/static/streat.png"),
      commit_icon: require("~/static/commit.png"),
    };
  },
  methods: {
    doAdd: function() {
      this.list.unshift({
        text: this.message,
        id: this.nextTodoId++,
      })
    },
    doRemove: function(item) {
      this.nextTodoId--
      var index = this.list.indexOf(item)
      this.list.splice(index, 1)
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