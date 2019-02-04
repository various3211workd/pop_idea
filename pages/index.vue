<template>
  <div id="app">
    <textarea />
    <br>
    <button v-on:click="doAdd()">追加</button>

    <draggable v-model="list" element="ul" :options="{animation:300}">
      <li v-for="item in list" :key="item.id">
        {{ item.id }}
        <textarea class=""/>
        <br>
        <button v-on:click="doAdd()">追加</button>
        <button v-on:click="doRemove(item)">削除</button>
      </li>
    </draggable>
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
      ],
      nextTodoId: 1
    };
  },
  methods: {
    doAdd: function() {
      this.list.push({
        id: this.nextTodoId++,
        name: "fff"
      })
    },
    /*
    doAdd: function(item) {
      this.list.push({
        id: this.nextTodoId++,
        name: 'fff',
        children: [],
      })
    },
    */
    doRemove: function(item) {
      var index = this.list.indexOf(item)
      this.list.splice(index, 1)
    }
  }
};
</script>

<style>
  textarea {
    resize: none;
    overflow: auto;
  }
</style>