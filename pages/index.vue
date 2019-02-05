<template>
  <div>
    <div class="container">
      <div id="app">
        <div class="content has-text-centered">
          <draggable v-model="list" element="ul" :options="{animation:300}">
            <div v-for="item in list" :key="item.id">
              <input style="width: 30%" class="input is-large" type="text" />
              <button class="button is-success" v-on:click="doAdd()">Add</button>
              <button class="button is-danger" v-on:click="doRemove(item)">Delete</button>
              <br>
              <font-awesome-icon class="icon is-large" icon="arrow-down" />
              <br>
              <br>
            </div>
          </draggable>
        </div>
      </div>
    </div>
    
    <footer class="footer">
      <div class="columns">
        <div class="column">
          <div class="content has-text-centered">
            <p>pop idea</p>
          </div>
        </div>
      </div>
    </footer>
  
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data() {
    return {
      list: [
        {
          id: 1,
        }
      ],
      nextTodoId: 2
    };
  },
  methods: {
    doAdd: function() {
      this.list.push({
        id: this.nextTodoId++,
      })
    },
    doRemove: function(item) {
      var index = this.list.indexOf(item)
      this.list.splice(index, 1)
    }
  }
};
</script>
