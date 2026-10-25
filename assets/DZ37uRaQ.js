import{a as e,f as t,i as n,o as r,p as i}from"./B0F9rPWH.js";import{c as a,t as o,x as s}from"./v6cwp8pn.js";import{a as c,i as l,n as u,r as d}from"./CZIx3Mt_.js";import{i as f}from"./CxKzqPQ_.js";import{l as p,t as m}from"./BCKo5sbo.js";function h(s){let{path:h,id:_,thumbnailVideo:v,thumbnailImage:y,children:b}=s,{inViewRef:x,videoRefs:S}=f(1),{targetProp:C,effectProp:w}=r();return C.css=[C.css,g.link].flat(),t(m,{to:p().pathname.endsWith(`${h}`)?`#${_}`:`${h}#${_}`,children:i(l,{children:[i(c,{...C,children:[b,t(e,{...w})]}),t(d,{children:t(u,{p:`0`,children:t(n,{as:`span`,h:`fit-content`,w:`fit-content`,paddingTop:`0.5em`,children:i(a,{as:`span`,ref:x,css:g.thumbnail,children:[t(o,{as:`span`}),y&&t(`img`,{src:y,loading:`lazy`}),v&&t(`video`,{ref:S.current[0],src:v,playsInline:!0,loop:!0,muted:!0})]})})})})]})})}var g={link:s`
    text-decoration: underline;
    cursor: var(--chakra-cursor-button);
  `,thumbnail:s`
    --width: 10em;
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
  `};export{h as t};