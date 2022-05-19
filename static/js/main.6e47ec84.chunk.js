(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,function(t,r,e){t.exports={card__crypto:"CryptoDataCard_card__crypto__1AzQ7",crypto__text:"CryptoDataCard_crypto__text__2VyFH",crypto__img:"CryptoDataCard_crypto__img__3V20Q",crypto__name:"CryptoDataCard_crypto__name__3ObAQ",crypto__symbol:"CryptoDataCard_crypto__symbol__a9qoO",crypto__price:"CryptoDataCard_crypto__price__2jt4y","crypto__market-price":"CryptoDataCard_crypto__market-price__3f8nO"}},,function(t,r,e){t.exports={card:"CardContent_card__1vmmL",card__title:"CardContent_card__title__2li2s",card__wrapper:"CardContent_card__wrapper__kZEXz"}},,,function(t,r,e){t.exports={"crypto-card":"CryptoCard_crypto-card__3BlzC"}},function(t,r,e){t.exports={information:"CryptoInput_information__37Oji"}},function(t,r,e){t.exports={card__comparison:"CryptoComparison_card__comparison__3vEMd"}},,,,,,,,,function(t,r,e){},,function(t,r,e){"use strict";e.r(r);var c=e(1),o=e(6),a=e.n(o),n=(e(18),e(7)),i=e.n(n),d=e(0);var s=function(t){return Object(d.jsx)("div",{className:"".concat(i.a["crypto-card"]," ").concat(t.className),children:t.children})},p=e(3),_=e(4),l=e.n(_),m=e(2),y=e.n(m),j=function(t){var r,e,c,o;return Object(d.jsxs)("div",{className:y.a.card__crypto,children:[Object(d.jsx)("img",{className:y.a.crypto__img}),Object(d.jsxs)("p",{className:(y.a.crypto__name,y.a.crypto__text),children:["Name: ",null===(r=t.cryptoInformation)||void 0===r?void 0:r.name]}),Object(d.jsxs)("p",{className:(y.a.crypto__symbol,y.a.crypto__text),children:["Symbol: ",null===(e=t.cryptoInformation)||void 0===e?void 0:e.symbol]}),Object(d.jsxs)("p",{className:(y.a.crypto__price,y.a.crypto__text),children:["Price: ",null===(c=t.cryptoInformation)||void 0===c?void 0:c.price_usd]}),Object(d.jsxs)("p",{className:(y.a["crypto__market-cap"],y.a.crypto__text),children:["Market cap: ",null===(o=t.cryptoInformation)||void 0===o?void 0:o.market_cap_usd]})]})},u=e(8),C=e.n(u);var b=function(t){var r=Object(c.useState)(),e=Object(p.a)(r,2),o=e[0],a=e[1],n=Object(c.useState)(),i=Object(p.a)(n,2),s=i[0],_=i[1];return Object(c.useEffect)((function(){fetch("https://api.coinlore.net/api/tickers/").then((function(t){return t.json()})).then((function(t){return a(t)}))}),[s]),Object(d.jsxs)("div",{className:C.a.information,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"firstCrypto",children:"Select first cryptocurrency:"}),Object(d.jsx)("select",{id:"firstCrypto",onChange:function(r){t.firstCryptoData(null===o||void 0===o?void 0:o.data[r.target.selectedIndex]),_(Math.random())},children:null===o||void 0===o?void 0:o.data.map((function(t){return Object(d.jsx)("option",{children:t.symbol},t.id)}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"secondCrypto",children:"Select second cryptocurrency:"}),Object(d.jsx)("select",{id:"secondCrypto",onChange:function(r){t.secondCryptoData(null===o||void 0===o?void 0:o.data[r.target.selectedIndex]),_(Math.random())},children:null===o||void 0===o?void 0:o.data.map((function(t){return Object(d.jsx)("option",{children:t.symbol},t.id)}))})]})]})},v=e(9),f=e.n(v),x=function(t){var r,e,c,o,a,n,i,s,p,_,l;return Object(d.jsx)("div",{className:f.a.card__comparison,children:Object(d.jsxs)("p",{children:["If the market cap of"," ",Object(d.jsxs)("span",{children:[" ",null!==(r=null===(e=t.firstComparedCrypto)||void 0===e?void 0:e.name)&&void 0!==r?r:"CUR1"]})," was at the market cap of ",Object(d.jsxs)("span",{children:[" ",null!==(c=null===(o=t.secondComparedCrypto)||void 0===o?void 0:o.name)&&void 0!==c?c:"CUR2"]}),", its price will be",Object(d.jsx)("span",{children:t.secondComparedCrypto?+(null===(a=t.secondComparedCrypto)||void 0===a?void 0:a.market_cap_usd)/+(null===(n=t.firstComparedCrypto)||void 0===n?void 0:n.market_cap_usd):"0"})," ","times"," ",+(null===(i=t.secondComparedCrypto)||void 0===i?void 0:i.market_cap_usd)>+(null===(s=t.firstComparedCrypto)||void 0===s?void 0:s.market_cap_usd)?"bigger":"smaller",": meaning",Object(d.jsx)("span",{children:t.secondComparedCrypto?+(null===(p=t.secondComparedCrypto)||void 0===p?void 0:p.market_cap_usd)/+(null===(_=t.firstComparedCrypto)||void 0===_?void 0:_.market_cap_usd)*+(null===(l=t.firstComparedCrypto)||void 0===l?void 0:l.price_usd):"0"})," ","USD."]})})};var O=function(t){var r=Object(c.useState)(),e=Object(p.a)(r,2),o=e[0],a=e[1],n=Object(c.useState)(),i=Object(p.a)(n,2),s=i[0],_=i[1];return Object(d.jsxs)("div",{className:l.a.card,children:[Object(d.jsx)("h1",{className:l.a.card__title,children:"Compare Crypto"}),Object(d.jsx)(b,{firstCryptoData:function(t){a(t)},secondCryptoData:function(t){_(t)}}),Object(d.jsxs)("div",{className:l.a.card__wrapper,children:[Object(d.jsx)(j,{cryptoInformation:o}),Object(d.jsx)(j,{cryptoInformation:s})]}),Object(d.jsx)(x,{firstComparedCrypto:o,secondComparedCrypto:s})]})};var h=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(s,{children:Object(d.jsx)(O,{})})})};a.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(h,{}))}],[[20,1,2]]]);
//# sourceMappingURL=main.6e47ec84.chunk.js.map