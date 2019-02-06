<template>
  <div style="background-color: #333">
    <header class="hero is-danger">
      <b class="hero-body">
        <h2 class="title">POP Idea</h2>
      </b>
    </header>

    <div class="container">
      <div id="app">
        <div class="content has-text-centered">
          <div style="background-color: #FFCC99">
            <br><br><br><br>
          </div>
          <br><br>
          <font-awesome-icon class="icon is-large has-text-danger" icon="arrow-down" />
          <br><br>
            <draggable v-model="list" element="ul" :options="{animation:300}">
              <div v-for="item in list" :key="item.id">
                <input class="input is-large" type="text" style="width: 30%" />
                <br><br>
                <br><br>
              </div>
              <br><br>
            </draggable>
          <div v-if="nextTodoId > 5">
            <div style="background-color: #FFCC99">
              <br><br><br><br>
            </div>
          </div>
          <div v-else>
            <button class="button is-success" v-on:click="doAdd()">Add</button>
            <button class="button is-danger" v-on:click="doRemove(item)">Delete</button>
          </div>
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
      nextTodoId: 2,
    };
  },
  methods: {
    doAdd: function() {
      this.list.push({
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

<style>
.footer {
  background-color: white;
}

.tabs {
  margin : 0 auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/*タブのスタイル*/
.tab_item {
  width: 30%;
  height: 50px;
  border-bottom: 3px solid #5ab4bd;
  background-color: #d9d9d9;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  color: #565656;
  display: block;
  float: left;
  text-align: center;
  font-weight: bold;
}
.tab_item:hover {
  opacity: 0.75;
}

/*ラジオボタンを全て消す*/
input[name="tab_item"] {
  display: none;
}

/*タブ切り替えの中身のスタイル*/
.tab_content {
  display: none;
  padding: 40px 40px 0;
  clear: both;
  overflow: hidden;
}

/*選択されているタブのコンテンツのみを表示*/
#word:checked ~ #word_content,
#draw:checked ~ #draw_content,
#design:checked ~ #design_content {
  display: block;
}

/*選択されているタブのスタイルを変える*/
.tabs input:checked + .tab_item {
  background-color: #5ab4bd;
  color: #fff;
}
</style>