/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Friday, May 28th 2021, 4:52:36 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2021 瑞为
 */

import LongScroll from "./long-scroll";

LongScroll.install = (Vue) => {
    Vue.component(LongScroll.name, LongScroll);
}

if (typeof window !== 'undefined' && window.Vue) {
    LongScroll.install(window.Vue);
}

export default LongScroll