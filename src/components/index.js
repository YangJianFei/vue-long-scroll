/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Friday, May 28th 2021, 4:52:30 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2021 瑞为
 */
import LongScroll from "./long-scroll";

const components = [
    LongScroll
]

const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
}

export {
    LongScroll
}

