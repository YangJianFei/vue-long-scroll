<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <long-scroll :data="data" :style="{height:'300px'}" v-model="current">
      <template #default="{row}">
        {{row.name}}
      </template>
    </long-scroll>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      current: 60,
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
