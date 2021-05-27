import{r as n,o as s,c as a,b as t,w as e,e as o}from"./vendor.841e06e5.js";const p={class:"markdown-body"},l=t("img",{src:"/element-enhance/assets/develop.698d9a61.svg",style:{width:"300px",margin:"50px"}},null,-1),c=t("h5",null,"安装",-1),u=t("div",{class:"language-"},[t("pre",null,[t("code",null,"npm install element-enhance --save\n")])],-1),k=t("h5",null,"引入",-1),i=t("div",{class:"language-js"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"import"),o(),t("span",{class:"token punctuation"},"{"),o(" createApp "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'vue'"),o("\n"),t("span",{class:"token keyword"},"import"),o(" App "),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'./App.vue'"),o("\n"),t("span",{class:"token keyword"},"import"),o(" ElementEnhance "),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'element-enhance'"),o("\n"),t("span",{class:"token keyword"},"import"),o(),t("span",{class:"token string"},"'element-enhance/lib/style.css'"),o("\n\n"),t("span",{class:"token keyword"},"const"),o(" app "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"createApp"),t("span",{class:"token punctuation"},"("),o("App"),t("span",{class:"token punctuation"},")"),o("\n\napp"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"use"),t("span",{class:"token punctuation"},"("),o("ElementEnhance"),t("span",{class:"token punctuation"},")"),o("\napp"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"mount"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'#app'"),t("span",{class:"token punctuation"},")"),o("\n")])])],-1),r=t("h5",null,"使用",-1),g=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("ele-layout")]),o(),t("span",{class:"token attr-name"},"multi-tab"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("true"),t("span",{class:"token punctuation"},'"')]),o(),t("span",{class:"token attr-name"},"breadcrumb"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("template")]),o(),t("span",{class:"token attr-name"},"#logo"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("ele-layout")]),t("span",{class:"token punctuation"},">")]),o("\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n")])])],-1),m=t("h5",null,"Hello World",-1),d=t("p",null,[o("组件默认将从 "),t("code",null,"vue-router"),o(" 中获取路由生成路由，"),t("a",{href:"https://github.com/Jmysy/element-enhance/blob/master/docs/src/router/zh-CN.ts"},"格式参考")],-1),y=t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("ele-layout")]),o(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("demo-layout"),t("span",{class:"token punctuation"},'"')]),o(),t("span",{class:"token punctuation"},"/>")]),o("\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[o("\n"),t("span",{class:"token selector"},".demo-layout"),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token property"},"border"),t("span",{class:"token punctuation"},":"),o(" 1px solid whitesmoke"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),o(" 460px"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("style")]),t("span",{class:"token punctuation"},">")]),o("\n")])],-1),h={expose:[],setup:o=>(o,h)=>{const v=n("ele-layout"),w=n("ele-code");return s(),a("div",p,[l,c,u,k,i,r,g,m,t(w,null,{description:e((()=>[d])),code:e((()=>[y])),default:e((()=>[t(v,{class:"demo-layout"})])),_:1})])}};export default h;
