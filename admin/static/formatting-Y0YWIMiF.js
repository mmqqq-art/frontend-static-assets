function r(o){if(o===0)return"0 B";const t=1024,n=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],B=Math.floor(Math.log(o)/Math.log(t));return`${(o/t**B).toFixed(2)} ${n[B]}`}export{r as f};
