(()=>{var s={install(o){let c=o.component;o.component=function(l,n){let d=n.mounted,i=n.unmounted,u=Math.random().toString().split(".")[1];n.mounted=function(){let t=this,e=document.createElement("style");e.innerHTML=t.css,e.id=u,document.head.appendChild(e),d&&d()},n.unmounted=function(){let t=document.getElementById(u);t&&document.head.removeChild(t),i&&i()},n.components&&Object.keys(n.components).forEach(t=>{let e=n.components[t];o.component(t,e)}),c(l,n)}}},m=s;typeof window<"u"&&(window.VueComponentCSSPlugin=s);})();