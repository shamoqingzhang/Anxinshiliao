<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.wh_top_changge {
  border-bottom:1px solid #BABABA !important;
}
.wh_top_changge .wh_content_li{
  color:#414141 !important
}
.wh_content_all{
 background-color: #ffffff !important;
           
}
 .wh_is_today{
  background: #0fc37c !important;
  color:#fff !important;  

 } 
 .wh_content_item{
   color:#414141 !important; 
   font-size:20px !important;
   height:60px !important;   
 }    
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
};
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, 
strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, 
tfoot, thead, tr, th, td ,textarea { margin:0; padding:0;  }
address,cite,dfn,em,var, i {font-style:normal;}
body {font-size: 16px; line-height: 1.5; font-family:'Microsoft Yahei','simsun','arial','tahoma';  color: #222; }
table { border-collapse:collapse; border-spacing:0; }
h1, h2, h3, h4, h5, h6, th { font-size: 100%; font-weight: normal; }
button,input,select,textarea{font-size:100%;}
fieldset,img{border:0;}
a { text-decoration: none; color: #666; background: none }
ul, ol { list-style: none; }
:focus{ outline:none;}
.clearfix{ clear: both; content: ""; display: block; overflow: hidden }
.clear{clear: both;}
.fl{ float: left; }
.fr{float: right;}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
 abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
 /* color: inherit;*/
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.active{
  color:#43bf92 !important;
}


</style>
