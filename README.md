# vue-long-scroll

## Get Start 

### Installation

```
npm i --save vue-long-scroll
```

### Initialization
```
import Vue from "vue";
import LongScroll from "vue-long-scroll"
import "vue-long-scroll/lib/vue-long-scroll.css"
```

### Usage
```
<template>
    <long-scroll v-model="current" :data="data" :style="{height:'400px'}"></long-scroll>
    // 组件根元素为滚动容器默认高度400px，可自行设置。如果容器高度过大页面出现空白增大size属性即可
    //  The root element of the component is the scroll container. The default height is 400px, which can be set by yourself. If the height of the container is too large, the page appears blank, increase the size attribute
    //  或者 or
    <long-scroll v-model="current" :data="data" :style="{height:'400px'}">
      <template #default="{row}">
        {{row.name}}
      </template>
    </long-scroll>
</template>

<script>
    data(){
        return {
            current:0,  // 当前展示的数据第一条索引 The first index of the data currently displayed
            data:[] // 数据结构[{name:""}] 
        }
    }
</script>
```
## 效果
![avatar](./public/longscroll.gif)

## 属性方法说明/option
| 属性/事件 option    | 描述 description | 默认值 default |
| ----------- | ----------- | ----------- |
| v-model/current+@change  | 当前展示的数据第一条索引 The first index of the data currently displayed | 0  |
| data      | 要展示的所有数据 All data to show      |\ |
| current   | 当前展示的数据第一条索引 The first index of the data currently displayed       | 0  |
| size | 要渲染到Dom的数据条数 Number of data to render to DOM | 20 |
| valueKey   | 行展示默认内容的键 Line shows the default content of the key  | name  |
| rowHeight  | 每行展示的高度 Height of each line  | 36  |
| change  | 当前数据改变事件 Current data change events | current  |

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, YangJianFei <1294485765@qq.com>

## Source Code
[https://github.com/YangJianFei/vue-long-scroll](https://github.com/YangJianFei/vue-long-scroll)
## My Git
[YangJianFei](https://github.com/YangJianFei)