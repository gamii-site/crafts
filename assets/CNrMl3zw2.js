import{n as e}from"./C47JuxvO.js";import{t}from"./D2gex077.js";import{f as n,i as r,l as i,p as a}from"./B0F9rPWH.js";import{c as o,x as s}from"./v6cwp8pn.js";import{t as c}from"./BhEqlECm.js";import{n as l}from"./g6ysO8nl.js";import{a as u,i as d,n as f,r as p,t as m}from"./Dan5g_OA.js";import{o as h}from"./B0QRWyfr.js";import{t as g}from"./I1mCHDMw.js";import{t as _}from"./DBGCqf-u.js";var v=e(t(),1);function y(e){let{title:t,prelude:s,children:c}=e,y=l({smDown:!1,sm:!0},{ssr:!1})||!1,[x,S]=(0,v.useState)(!1),C=(0,v.useRef)(null);return a(h,{as:`section`,shadow:`md`,css:b.container,children:[a(g,{className:`header`,children:[n(o,{as:`h4`,className:`title`,children:t}),a(d,{className:`prelude-area`,collapsedHeight:`2.25rem`,display:`flex`,open:x,onOpenChange:e=>S(e.open),children:[n(u,{asChild:!0,children:a(r,{className:`prelude-toggled`,size:`sm`,ref:C,children:[y&&n(f,{children:e=>e.open?`折りたたむ`:`続きを読む`}),n(p,{transition:`transform 0.2s`,_open:{transform:`rotate(180deg)`},children:n(i,{})})]})}),n(m,{className:`prelude`,_closed:{shadow:`inset 0 -12px 12px -12px var(--shadow-color)`,shadowColor:`blackAlpha.500`},onClick:()=>S(e=>(e||C.current?.focus({preventScroll:!0}),!0)),children:s})]})]}),n(_,{w:`100%`,children:c})]})}var b={container:s`
    position: relative;
    margin-bottom: 0.5em;
    width: 100%;
    padding-inline: 5px; 
    
    /* filterは以降の子要素全てに適応されてしまうため、::beforeに適応 */
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: url('${`/crafts/`}/substrate_v.jpg');
      background-repeat: repeat repeat;
      filter: brightness(0.95);
    }
    > .header {
      background-image: url('${`/crafts/`}/substrate_h.jpg');
      background-repeat: repeat repeat;
      margin: 0.5em 0 1em 0;
      position: relative;
      align-items: start;
      margin-inline: -5px;
      padding-inline: 5px;
      
      > .title {
        word-break: keep-all;
        /* button, collapseHeightに併せてrem指定。後で共々emへ直すかも */
        height: 2.25rem;
        line-height: 2.25rem;
        
        text-shadow: 0 0 1px white, 0 0 2px aliceblue;
        font-weight: 800;
        background: rgb(250 250 200 / 0.7);
        border-radius: 0.25em;
        padding-inline: 0.25em;
        //box-shadow: 1px 1px 2px rgb(0 0 0 / 0.5);
      }
      > .prelude-area {
        --intro-border-width: 2px;
        border-top: var(--intro-border-width) solid rgb(0 0 0 / 0.3);
        border-right: var(--intro-border-width) solid rgb(255 255 255 / 0.3);
        border-radius: 0.25em 0.25em 0.25em 0;
        > .prelude-toggled {
          margin-top: calc(var(--intro-border-width) * -0.5);
          margin-right: calc(var(--intro-border-width) * -0.25);
        }
        > .prelude {
          border-bottom: var(--intro-border-width) solid rgb(255 255 255 / 0.3);
          border-left: var(--intro-border-width) solid rgb(0 0 0 / 0.2);
          padding-left: 0.25em;
          border-radius: 0 0 0.25em 0.25em;
          background: rgb(255 255 200 / 0.5);
        }
      }
    }
  `};function x(e){let{children:t}=e;return n(c.Normal,{css:C.main.root,children:n(_,{css:C.main.content,w:`100%`,padding:`0.5rem 0`,children:t})})}function S(e){let{children:t}=e;return n(c.Normal,{padding:`5px 0`,children:n(_,{css:C.method.content,w:`100%`,children:t})})}var C={main:{root:s`
      background: white;
    `,content:s`
      position: relative;
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url('${`/crafts/`}/substrate_v.jpg');
        background-repeat: repeat repeat;
        filter: brightness(0.9);
      }
    `},method:{content:s`
      position: relative;
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url('${`/crafts/`}/substrate_v.jpg');
        background-repeat: repeat repeat;
        filter: brightness(0.9);
      }
    `}};export{S as n,y as r,x as t};