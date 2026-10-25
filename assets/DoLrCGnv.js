import{n as e}from"./C47JuxvO.js";import{t}from"./D2gex077.js";import{f as n,i as r,p as i}from"./B0F9rPWH.js";import{t as a}from"./CDhAqXQ0.js";import{c as o,i as s,l as c,t as l,x as u}from"./v6cwp8pn.js";import{i as d}from"./CxKzqPQ_.js";import{l as f,u as p}from"./BCKo5sbo.js";var m=e(a(),1),h=e(t(),1),g=(0,h.forwardRef)(function(e,t){let{offsetX:n,offsetY:r,offset:i=`0`,placement:a=`top-end`,...o}=e,l=(0,h.useMemo)(()=>({display:`inline-flex`,justifyContent:`center`,alignItems:`center`,position:`absolute`,insetBlockStart:s(a,e=>{let[t]=e.split(`-`);return{top:r??i,middle:`50%`,bottom:`auto`}[t]}),insetBlockEnd:s(a,e=>{let[t]=e.split(`-`);return{top:`auto`,middle:`50%`,bottom:r??i}[t]}),insetStart:s(a,e=>{let[,t]=e.split(`-`);return{start:n??i,center:`50%`,end:`auto`}[t]}),insetEnd:s(a,e=>{let[,t]=e.split(`-`);return{start:`auto`,center:`50%`,end:n??i}[t]}),translate:s(a,e=>{let[t,n]=e.split(`-`);return`${{start:`-50%`,center:`-50%`,end:`50%`}[n]} ${{top:`-50%`,middle:`-50%`,bottom:`50%`}[t]}`})}),[i,n,r,a]);return(0,m.jsx)(c.div,{ref:t,css:l,...o})});g.displayName=`Float`;function _(e){let{title:t,thumbnailVideo:a,thumbnailImage:s,openDrawer:c,size:u=`base`}=e,{inViewRef:f,videoRefs:p}=d(1);return i(o,{className:`method-link`,css:y.outer,onClick:c,style:{"--width":u==`sm`?`5em`:`10em`},children:[i(r,{as:`span`,h:`fit-content`,w:`fit-content`,children:[t,i(o,{as:`span`,ref:f,css:y.thumbnail,children:[n(l,{as:`span`}),s&&n(`img`,{src:s,loading:`lazy`}),a&&n(`video`,{ref:p.current[0],src:a,playsInline:!0,muted:!0})]})]}),u==`base`&&n(b,{})]})}function v(e){let t=p(),n=f();return(0,h.useCallback)((r,i)=>()=>{n.pathname.endsWith(`${r}`)?t(`${n.pathname}#${i}`):t(`${n.pathname.replace(`${e}`,`${r}`)}#${i}`)},[n,n.hash?.substr(1)||``,t,e])}var y={outer:u`
    display: inline-flex;
    position: relative;
    
    > span[type='button'] {
      display: inline-flex;
      flex-direction: column;
      vertical-align: 0.2em;
      gap: 0.25em;
      margin: 0.25em 0.25em 0.35em 0.25em;
    }
  `,thumbnail:u`
    position: relative;
    width: var(--width);
    height: fit-content;
    
    > span {
      display: inline-block;
      width: var(--width);
      aspect-ratio: 16 / 9;
    }
    > video, > img {
      position: absolute;
      top: 0;
      left: 0;
      width: var(--width);
      aspect-ratio: 16 / 9;
    }
    > img {
      object-fit: contain;
      background-color: black;
    }
  `};function b(){return n(g,{placement:`bottom-end`,offsetY:`1.25em`,offsetX:`3.0em`,children:i(o,{css:x.bubble,children:[`クリックして`,n(`br`,{}),`　レシピを見る`]})})}var x={bubble:u`
    --bubble-color: rgb(250 200 200);
    --bubble-shadow-color: rgb(0 0 0 / 0.1);
    
    background: var(--bubble-color);
    background-clip: border-box;
    border-top: 3px solid var(--bubble-shadow-color);
    border-left: 5px solid var(--bubble-color);
    box-shadow: 0px 1px 1px var(--bubble-shadow-color);
    border-bottom-right-radius: 1em 45%;
    border-top-right-radius: 1em 45%;
    border-bottom-left-radius: 1em 60%; 
    
    padding: 0.3em 1em 0.25em 0.5em;
    font-size: 70%;
    line-height: 1.25em;
    
    cursor: pointer;
  `};export{v as n,_ as t};