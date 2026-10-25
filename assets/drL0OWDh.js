import{n as e}from"./C47JuxvO.js";import{t}from"./D2gex077.js";import{f as n,i as r,l as i,p as a,t as o}from"./B0F9rPWH.js";import{c as s,x as c}from"./v6cwp8pn.js";import{a as l,i as u,n as d,r as f,t as p,u as m}from"./Dan5g_OA.js";import{r as h}from"./CxKzqPQ_.js";import{t as g}from"./1JLbAEgv.js";var _=e(t(),1);function v(e){let{lemma:t,children:r,css:i,...o}=e;return a(s,{shadow:`md`,css:[O.period.container,i].flat(),...o,children:[n(b,{children:t}),n(s,{className:`detail`,mt:`0.5em`,ml:`5px`,children:r})]})}function y(e){let{lemma:t,children:o,css:c,...m}=e,[h,g]=(0,_.useState)(!1),v=(0,_.useRef)(null),y=()=>g(e=>(e||v.current?.focus({preventScroll:!0}),!0));return n(u,{asChild:!0,collapsedHeight:`3em`,open:h,onOpenChange:e=>g(e.open),children:a(s,{shadow:`md`,css:[O.period.container,c].flat(),...m,children:[a(b,{children:[t,n(l,{asChild:!0,children:a(r,{size:`sm`,children:[n(d,{children:e=>e.open?`折りたたむ`:`すべて表示`}),n(f,{transition:`transform 0.2s`,_open:{transform:`rotate(180deg)`},children:n(i,{})})]})})]}),n(p,{asChild:!0,_closed:{shadow:`inset 0 -12px 12px -12px var(--shadow-color)`,shadowColor:`blackAlpha.500`},onClick:y,children:n(s,{className:`detail`,ml:`5px`,children:o})})]})})}function b(e){let{children:t,...r}=e;return n(m,{className:`lemma`,fontWeight:`bold`,...r,children:t})}function x(e){let{mark:t,fluid:r,children:i}=e,a=r?`width: 100%;`:``;return n(m,{as:`span`,css:c`
    font-size: 0.8em;
    display: inline-flex;
    ${a}
    &:before {
      content: '${t}';
      display: inline-block;
      padding-right: 0.3em;
    }
    > .details {
      display: inline-block;
      ${a}
    }
  `,children:n(`span`,{className:`details`,children:i})})}function S(e){let{image:t,contentWidth:r,contentAspectRatio:i,css:a,...o}=e;return n(T,{css:[r?void 0:O.defaultContentWidth,a].flat(),content:n(g,{className:`content`,src:t,w:r,aspectRatio:i,objectFit:`contain`,loading:`lazy`}),...o})}function C(e){let{images:t,contentWidth:r,contentAspectRatio:i,css:a,...s}=e;return n(T,{css:[r?void 0:O.defaultContentWidth,a].flat(),content:n(o,{w:r,slideList:t.map(e=>n(g,{className:`content`,src:e,w:r,aspectRatio:i,objectFit:`contain`,loading:`lazy`}))}),...s})}function w(e){let t=e,r=e,{contentWidth:i=`min(max(15em, 30%), 20em)`}=e;return n(T,{content:n(s,{className:`content`,w:i,children:n(h,{...t})}),...r})}function T(e){let{content:t,commentMinWidth:r=`min-content`,comment:i,children:o,css:c,...l}=e;return a(s,{as:`figure`,css:[O.contentWithComment,c].flat(),...l,children:[t,n(s,{as:`figcaption`,className:`comment`,flexGrow:`1`,flexBasis:r,ml:`5px`,children:i||o})]})}var E=c`
  display: inline-block;
  transform: scale(0.5, 1);
  transform-origin: left center;
`,D=c`
  background: rgb(255 240 180 / 0.4);
  box-shadow: 0.3px 0.3px 1px rgb(0 0 0 / 0.25);
  border: 2px solid transparent;
`,O={period:{container:c`
      background: rgb(255 255 150 / 0.7);
      padding: 5px;
      width: 100%;
      .lemma {
        background: rgb(255 255 150 / 0.7);
        margin: -5px -3px 0 -5px;
        padding: 4px 3px 2px 5px;
      }
    `},contentWithComment:c`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: self-start;
    
    .content {
      background: rgb(255 255 255 / 0.9);
    }
    
    /* carouselの中で使用されている場合のスタイル */
    .carousel-group & {
      border: 1px solid rgb(3 3 3 / 0.3);
      background: rgb(200 3 150 / 0.3);
      /* 親carouselの高さは、全ページのmax-contentのうち最大で確定するようなので、全ページの高さをその最大へと100%で併せる */
      height: 100%;
      
      .comment {
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }
    .short.carousel-group & {
      .content {
        max-width: 50%;
      }
      .comment {
        flex-basis: 0;
        /* short(携帯端末横向き等で高さがない)の場合、MethodLink内の文字表示もbuttonデフォルトから変えて小さくする(設定を無にすることで周囲の文章に併せる) */
        & .method-link {
          font-size: unset;
          white-space: unset;
        }
      }
    }
  `,defaultContentWidth:c`
    container-name: content-with-comment;
    container-type: inline-size;
    
    > .content {
      width: min(max(15em, 30%), 20em);
      @container content-with-comment (width < 36em) {
        width: 10em;
      }
    }
    > div[data-scope='carousel'][data-part='root'] {
      width: min(max(15em, 30%), 20em);
      @container content-with-comment (width < 36em) {
        width: 10em;
      }
      .content {
        width: 100%;
      }
    }
  `};export{x as a,D as c,y as i,C as n,w as o,v as r,E as s,S as t};