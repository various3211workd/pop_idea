<template>
  <div style="background-color: #333;">
    <header class="hero has-shadow is-danger">
      <div class="hero-body">
        <a href="https://elastic-gates-511a51.netlify.com">
          <h2 class="title">POP Idea</h2>
        </a>
      </div>
    </header>

    <div class="container">
      <div id="app">
        <div class="content has-text-centered">
          <div v-if="nextTodoId > 5">
            <div style="background-color: #FFCC99">
              <br><br><br><br>
            </div>
          </div>
          <div v-else>
            <br><br>
            <button class="button is-success" v-on:click="doAdd()">
              <font-awesome-icon class="icon is-large" :icon="[ 'fas', 'plus-circle' ]" />
              <p>Add</p>
            </button>
            <button class="button is-danger" v-on:click="doRemove(item)">
              <font-awesome-icon class="icon is-large" :icon="[ 'fas', 'minus-circle' ]" />
              <p>Delete</p>
            </button>
            <br><br>
          </div>
          <br><br>
          <draggable v-model="list" element="ul" :options="{animation:300}">
            <div v-for="item in list" :key="item.id">
              <input class="input is-large" type="text" style="width: 30%" />
              <br><br><br><br>
            </div>
            <br><br>
          </draggable>
          <font-awesome-icon class="icon is-large has-text-danger" icon="arrow-up" />

          <br><br>
          <div style="background-color: #FFCC99">
              <br><br><br><br>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer hero is-danger has-text-centered has-text-white-bis">
      <div class="navbar-center">
        <a href="https://github.com/various3211workd/pop_idea">
          <font-awesome-icon class="icon is-large" :icon="[ 'fab', 'github' ]" />
        </a>
      </div>
    </footer>
  
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas, faGithub, faPlusCircle, faMinusCircle)

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
        }
      ],
      nextTodoId: 2,
    };
  },
  methods: {
    doAdd: function() {
      this.list.unshift({
        id: this.nextTodoId++,
      })
    },
    doRemove: function(item) {
      this.nextTodoId--
      var index = this.list.indexOf(item)
      this.list.splice(index, 1)
    }
  },
};

</script>
