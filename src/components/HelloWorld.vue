<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>{{ countStr }}</h1>
    <h1>{{ studentName}}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    studentName() {
      return this.$store.state.student.students[0].name;
    },
    ...mapState([
        "count"
    ]),
    ...mapGetters([
        "countStr"
    ])
  },
  created() {
    this.increment();
    console.log(this.count);
    this.add(1000)
    console.log(this.count);
    this.incrementAsync();
    console.log(this.count);
  },
  methods: {
    ...mapMutations([
        "increment",
        "add"
    ]),
    ...mapActions([
        "incrementAsync"
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
