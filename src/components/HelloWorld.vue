<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>{{ countAlias }}</h1>
    <h1>{{ countPlusLocalState }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      localCount: 100
    }
  },
  computed: mapState({
    count: state => state.count,
    countAlias: "count",
    countPlusLocalState(state) {
      return state.count + this.localCount;
    }
  }),
  created() {
    this.increment();
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
