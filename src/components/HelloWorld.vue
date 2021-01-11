<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>{{ countStr }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState([
        "count"
    ]),
    ...mapGetters([
        "countStr"
    ])
  },
  created() {
    this.increment();
    this.add(1000)
  },
  methods: {
    ...mapMutations([
        "increment",
        "add"
    ])
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
