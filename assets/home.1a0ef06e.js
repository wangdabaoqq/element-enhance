import{_ as l}from"./index.b4bb8625.js";import{o as e,c as n,b as u,e as s}from"./vendor.b7c0179a.js";const t={class:"markdown-body"},o=u("img",{src:l,style:{width:"400px",margin:"50px"}},null,-1),m=u("h5",null,"📖 概述",-1),a=u("p",null,"Element Enhance 是基于 Element Plus 而开发的模板组件，提供了更高级别的抽象支持，开箱即用，更加专注于页面。",-1),c=u("h5",null,"📢 理念",-1),p=u("p",null,"Element Plus 定义了基础的设计规范，对应也提供了大量的基础组件。但是对于中后台类应用，我们希望提供更高程度的抽象，提供更上层的设计规范，并且对应提供相应的组件使得开发者可以快速搭建出高质量的页面。",-1),h=u("p",null,"在 Element Enhance 中我们内置了一系列的设计规范，预设了常用的逻辑。在这个基础上我们同样提供了灵活的支持，比如对于 EleTable 来说你也可以把它完全当做 Element Plus 的 Table 来用，对于 EleForm 来说你也可以直接使用 Element Plus 的基础组件或者你的自定义组件。我们希望通过 Enhance 系列组件提供快速高效大家高质量中后台应用的能力，进一步扩展 Element Plus 的能力，欢迎使用并提出宝贵的意见。",-1),r=u("h5",null,"🎯 起因",-1),d=u("p",null,[s("对于中后台开发来说，大部分的表格表单等页面都可以复用，通过将非业务逻辑的部分封装起来成组件能够更加方便使用。同时组件可以和路由等绑定，减少传值。以及实现一些 "),u("code",null,"element-plus"),s(" 上没有后台常用的功能等")],-1),i=u("p",null,[s("虽然 "),u("code",null,"element-plus"),s(" 的封装已经很好了，但对于 "),u("code",null,"el-table"),s(" 或 "),u("code",null,"el-form"),s(" 的使用必不可少的需要写大量 "),u("code",null,"el-table-column"),s(" 或 "),u("code",null,"el-form-item"),s(" 代码。我们将它转换成 "),u("code",null,"column"),s(" 配置，通过传入一个数组动态生成这些数据。如果你传入的是具有响应式的数据，在改变 "),u("code",null,"column"),s(" 时，表格或表单会随之改变。根据这个特性你可以按照喜欢的方式去实现权限等功能")],-1),b=u("h5",null,"⚡ 设计",-1),E=u("p",null,"在实际开发中我们也经常会碰到一些设计问题，比如经典的按钮应该放在左面还是右面，查询表单怎么布局，日期怎么格式化，数字的对齐问题，在重型组件中都进行了抽象，对于各种行为与样式我们都经过了设计师的讨论与设计可以达到默认好看及好用。",-1),f=u("p",null,"如果你还是想自定义相关渲染可以通过自定义 ModelValue 的方式来实现。默认的不一定是最好的，但是一定不差，如果你要自定义最好考虑一下投入产出比，毛坯房里雕花真的好吗？",-1),P=u("h5",null,"✒️ 特性",-1),S=u("p",null,[s("该组件库的开发理念就是面向未来，如果查看源码你就会发现像是 vue 3 的 "),u("a",{href:"https://github.com/vuejs/rfcs/pull/227."},"script setup"),s(" 实验性功能、像是 CSSNext 的 "),u("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"CSS Variables"),s("。在保证大部分浏览器的兼容性的情况下，会更多的使用新特性、新功能来开发")],-1),g=u("h5",null,"🍚 贡献",-1),x=u("p",null,[s("组件库还处于早期开发阶段，功能还需要完善。如果你希望参与贡献，欢迎 "),u("a",{href:"https://github.com/Jmysy/element-enhance/pulls"},"Pull Request"),s("。如果只是简单的文档相关的错误修正，你可以直接 PR，但如果是当前组件的 BUG 或者新功能、新组件等，最好优先提 "),u("a",{href:"https://github.com/Jmysy/element-enhance/issues"},"issues")],-1),y={expose:[],setup:l=>(l,u)=>(e(),n("div",t,[o,m,a,c,p,h,r,d,i,b,E,f,P,S,g,x]))};export default y;
