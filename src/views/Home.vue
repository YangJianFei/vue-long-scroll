<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <long-scroll :data="data" :style="{height:'400px'}" v-model="current"></long-scroll>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      current: 0,
      data: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.data = Object.keys(Array.apply(null, { length: 10000 })).map(function (item) {
        return { name: item };
      });
    }
  }
};
</script>
