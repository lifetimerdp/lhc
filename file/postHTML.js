//<![CDATA[function ambildata(t){for(i=0;i<t.feed.entry.length;i++){const e=t.feed.entry[i].link[2].href,n=t.feed.entry[i].title.$t;document.write("<a href="+e+">"+n+"</a>")}}const inputChecked=document.querySelector(".menu");inputChecked.addEventListener("change",t=>{const e=document.documentElement,n=document.createElement("style");t.currentTarget.checked?(e.style.setProperty("--menu",'"SHOW MENU"'),n.innerHTML="\n\t\t/* DESKTOP*/\n\t\t.section .widget .post-outer {flex-direction:column}\n\t\t.section .widget .post-outer .post {padding:0 5% 5% 5%}\n\t\t.section .widget .post-outer .list {background:var(--white);flex:0;text-align:left;padding-top:1%}\n\t\t/* MOBILE AND TABLET */\n\t\t@media screen and (min-width: 0px) and (max-width: 1023px){\n\t\t\t.section .widget .post-outer .list {background:var(--white);flex-basis:auto;text-align:center;padding-top:3%;margin-bottom:-10%}\n\t\t\t.section .widget .post-outer .post {z-index:10}\n\t\t}\n\t",document.head.appendChild(n)):(e.style.setProperty("--menu",'"X CLOSE"'),n.innerHTML="\n\t\t/* DESKTOP*/\n\t\t.section .widget .post-outer {flex-direction:row}\n\t\t.section .widget .post-outer .post {padding:5% 5% 5% 3%}\n\t\t.section .widget .post-outer .list {background:#e9ecef;flex:0 0 190px;text-align:center;padding-top:1%}\n\t\t/* MOBILE AND TABLET */\n\t\t@media screen and (min-width: 0px) and (max-width: 1023px){\n                        .section .widget .post-outer {flex-direction: column}\n                        .section .widget .post-outer .post {padding: 0 5% 5% 5%}\n\t\t\t.section .widget .post-outer .list {background:#e9ecef;flex-basis:auto;padding-top:3%;margin-bottom:0}\n\t\t}\n\t",document.head.appendChild(n))});//]]>
