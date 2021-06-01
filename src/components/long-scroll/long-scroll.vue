/*
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Friday, May 28th 2021, 4:52:07 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2021 瑞为
 */
<template>
  <div ref="scrollContain" class="y-long-scroll" @scroll="scroll" style="height:400px;">
    <div class="y-pre-fill" :style="{height:totalHeight+'px'}">
    </div>
    <ul class="y-data-contain" :style="{transform:`translate3d(0,${offset}px,0)`}">
      <li v-for="(row,index) in currentData" :key="index" class="y-data-row" :style="{height:rowHeight+'px',lineHeight:rowHeight+'px'}">
        <slot :row="row">{{row[valueKey]}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LongScroll",
  model: {
    prop: "current",
    event: "change"
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    current: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 20
    },
    valueKey: {
      type: String,
      default: "name"
    },
    rowHeight: {
      type: Number,
      default: 36
    }
  },
  data() {
    return {
      offset: 0
    }
  },
  computed: {
    totalHeight() {
      return this.data.length * this.rowHeight;
    },
    currentData() {
      const end = this.current + this.size + 1;
      return this.data.slice(this.current, end);
    }
  },
  watch: {
    current() {
      this.bindView();
    }
  },
  mounted() {
    this.bindView();
  },
  methods: {
    bindView() {
      const scrollTop = this.$refs.scrollContain.scrollTop;
      let top = this.rowHeight * this.current;
      this.offset = top;
      this.$refs.scrollContain.scrollTop = top + scrollTop - Math.floor(scrollTop / this.rowHeight) * this.rowHeight;
    },
    scroll() {
      const scrollTop = this.$refs.scrollContain.scrollTop;
      this.offset = Math.floor(scrollTop / this.rowHeight) * this.rowHeight;
      let current = Math.floor(scrollTop / this.rowHeight);
      if (this.current != current) {
        this.$emit('change', current);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.y-long-scroll {
  border: 1px solid #ddd;
  overflow: auto;
  position: relative;
  .y-data-contain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    .y-data-row {
      padding: 4px;
      border-top: 1px solid #ddd;
      box-sizing: border-box;
      &:first-child {
        border-top: none;
      }
    }
  }
}
</style>