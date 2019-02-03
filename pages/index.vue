<template>
  <div id="app">
    <draggable v-model="list" element="ul" :options="{animation:300}">
      <li v-for="item in list" :key="item.id">{{ item.id }}:{{ item.name }}</li>
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
        { id: 1, name: "aaa" },
        { id: 2, name: "bbb" },
        { id: 3, name: "ccc" },
        { id: 4, name: "ddd" },
        { id: 5, name: "eee" }
      ]
    };
  }
};
</script>