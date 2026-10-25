const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CVqdzlt2.js","assets/C47JuxvO.js","assets/index-CoTzRiWT.js","assets/D39romKQ.js","assets/B8U5l79I.js","assets/B0F9rPWH.js","assets/v6cwp8pn.js","assets/CDhAqXQ0.js","assets/D2gex077.js","assets/Dan5g_OA.js","assets/psFXoHqd.js","assets/g6ysO8nl.js","assets/C2Rg9S2X.js","assets/BvCbrmJH.js","assets/DN4R2QTI.js","assets/BASd0tef.js","assets/CxKzqPQ_.js","assets/I1mCHDMw.js","assets/DBGCqf-u.js","assets/BCKo5sbo.js","assets/drL0OWDh.js","assets/1JLbAEgv.js","assets/index-BhCf7bGG.css","assets/BuswqB1e.js","assets/_GH_VoDG.js","assets/CTTHH3a92.js","assets/ih2UthAg.js","assets/eyFBOnV62.js","assets/C2dmg8Q5.js","assets/COrdOj8Y2.js","assets/Ccf28yLT.js"])))=>i.map(i=>d[i]);
import{n as e}from"./C47JuxvO.js";import{t}from"./D2gex077.js";import{A as n,B as r,Bt as i,D as a,F as o,H as s,K as c,Kt as l,M as u,Mt as d,N as f,P as p,R as m,Rt as ee,Vt as te,_t as ne,a as re,ct as ie,d as h,en as ae,et as oe,f as g,j as _,k as se,m as ce,mt as le,nt as ue,o as de,p as v,q as fe,qt as pe,r as me,rt as he,tn as ge,w as _e,wt as ve,z as ye,zt as y}from"./B0F9rPWH.js";import{t as be}from"./CDhAqXQ0.js";import{S as b,c as x,t as S,x as C}from"./v6cwp8pn.js";import{a as xe,i as Se,n as Ce,t as we}from"./C2Rg9S2X.js";import{a as Te,s as Ee}from"./BvCbrmJH.js";import{n as De}from"./g6ysO8nl.js";import{t as Oe,y as ke}from"./B8U5l79I.js";import{u as w}from"./Dan5g_OA.js";import{c as T,l as Ae,s as E}from"./DN4R2QTI.js";import{a as je,i as Me,n as Ne,r as Pe,t as Fe}from"./ih2UthAg.js";import"./CxKzqPQ_.js";import{t as D}from"./BuswqB1e.js";import{t as O}from"./I1mCHDMw.js";import{t as Ie}from"./1JLbAEgv.js";import{t as Le}from"./DBGCqf-u.js";import{t as Re}from"./D39romKQ.js";import{f as ze,i as Be,l as k,u as A}from"./BCKo5sbo.js";import"./drL0OWDh.js";import{i as j}from"./index-CoTzRiWT.js";import{t as Ve}from"./CSAgg4nR2.js";var[M,N]=te({name:`TabsContext`,hookName:`useTabsContext`,providerName:`<TabsProvider />`}),P=e(be(),1),F=e(t(),1),He=_(),I=(0,F.forwardRef)((e,t)=>{let[n,r]=He(e,[`value`]),i=N(),a=Ee({...Ae(),present:i.value===e.value,immediate:!0}),o=y(i.getContentProps(n),a.getPresenceProps(),r);return(0,P.jsx)(Te,{value:a,children:a.unmounted?null:(0,P.jsx)(f.div,{...o,ref:p(a.ref,t)})})});I.displayName=`TabContent`;var L=(0,F.forwardRef)((e,t)=>{let n=y(N().getIndicatorProps(),e);return(0,P.jsx)(f.div,{...n,ref:t})});L.displayName=`TabIndicator`;var R=(0,F.forwardRef)((e,t)=>{let n=y(N().getListProps(),e);return(0,P.jsx)(f.div,{...n,ref:t})});R.displayName=`TabList`;var Ue=_(),z=(0,F.forwardRef)((e,t)=>{let[n,r]=Ue(e,[`disabled`,`value`]),i=y(N().getTriggerProps(n),r);return(0,P.jsx)(f.button,{...i,ref:t})});z.displayName=`TabTrigger`;var B=a(`tabs`).parts(`root`,`list`,`trigger`,`content`,`indicator`).build(),We=e=>e.ids?.root??`tabs:${e.id}`,V=e=>e.ids?.list??`tabs:${e.id}:list`,H=(e,t)=>e.ids?.content?.(t)??`tabs:${e.id}:content-${t}`,U=(e,t)=>e.ids?.trigger?.(t)??`tabs:${e.id}:trigger-${t}`,W=e=>e.ids?.indicator??`tabs:${e.id}:indicator`,Ge=e=>e.getById(V(e)),Ke=(e,t)=>e.getById(H(e,t)),G=(e,t)=>t==null?null:e.getById(U(e,t)),K=e=>e.getById(W(e)),q=e=>{let t=`[role=tab][data-ownedby='${CSS.escape(V(e))}']:not([disabled])`;return s(Ge(e),t)},qe=e=>ae(q(e)),Je=e=>ge(q(e)),Ye=(e,t)=>ye(q(e),U(e,t.value),t.loopFocus),Xe=(e,t)=>r(q(e),U(e,t.value),t.loopFocus),J=e=>({x:e?.offsetLeft??0,y:e?.offsetTop??0,width:e?.offsetWidth??0,height:e?.offsetHeight??0}),Ze=(e,t)=>J(m(q(e),U(e,t)));function Qe(e,t){let{state:n,send:r,context:i,prop:a,scope:o}=e,s=a(`translations`),c=n.matches(`focused`),u=a(`orientation`)===`vertical`,f=a(`orientation`)===`horizontal`,p=a(`composite`);function m(e){return{selected:i.get(`value`)===e.value,focused:i.get(`focusedValue`)===e.value,disabled:!!e.disabled}}return{value:i.get(`value`),focusedValue:i.get(`focusedValue`),setValue(e){r({type:`SET_VALUE`,value:e})},clearValue(){r({type:`CLEAR_VALUE`})},setIndicatorRect(e){r({type:`SET_INDICATOR_RECT`,id:U(o,e)})},syncTabIndex(){r({type:`SYNC_TAB_INDEX`})},selectNext(e){r({type:`TAB_FOCUS`,value:e,src:`selectNext`}),r({type:`ARROW_NEXT`,src:`selectNext`})},selectPrev(e){r({type:`TAB_FOCUS`,value:e,src:`selectPrev`}),r({type:`ARROW_PREV`,src:`selectPrev`})},focus(){let e=i.get(`value`);e&&G(o,e)?.focus()},getRootProps(){return t.element({...B.root.attrs,id:We(o),"data-orientation":a(`orientation`),"data-focus":d(c),dir:a(`dir`)})},getListProps(){return t.element({...B.list.attrs,id:V(o),role:`tablist`,dir:a(`dir`),"data-focus":d(c),"aria-orientation":a(`orientation`),"data-orientation":a(`orientation`),"aria-label":s?.listLabel,onKeyDown(e){if(e.defaultPrevented||he(e)||!ne(e.currentTarget,ue(e)))return;let t={ArrowDown(){f||r({type:`ARROW_NEXT`,key:`ArrowDown`})},ArrowUp(){f||r({type:`ARROW_PREV`,key:`ArrowUp`})},ArrowLeft(){u||r({type:`ARROW_PREV`,key:`ArrowLeft`})},ArrowRight(){u||r({type:`ARROW_NEXT`,key:`ArrowRight`})},Home(){r({type:`HOME`})},End(){r({type:`END`})}}[oe(e,{dir:a(`dir`),orientation:a(`orientation`)})];if(t){e.preventDefault(),t(e);return}}})},getTriggerState:m,getTriggerProps(e){let{value:n,disabled:s}=e,c=m(e);return t.button({...B.trigger.attrs,role:`tab`,type:`button`,disabled:s,dir:a(`dir`),"data-orientation":a(`orientation`),"data-disabled":d(s),"aria-disabled":s,"data-value":n,"aria-selected":c.selected,"data-selected":d(c.selected),"data-focus":d(c.focused),"aria-controls":c.selected?H(o,n):void 0,"data-ownedby":V(o),"data-ssr":d(i.get(`ssr`)),id:U(o,n),tabIndex:c.selected&&p?0:-1,onFocus(){r({type:`TAB_FOCUS`,value:n})},onBlur(e){e.relatedTarget?.getAttribute(`role`)!==`tab`&&r({type:`TAB_BLUR`})},onClick(e){e.defaultPrevented||ie(e)||s||(le()&&e.currentTarget.focus(),r({type:`TAB_CLICK`,value:n}))}})},getContentProps(e){let{value:n}=e,r=i.get(`value`)===n;return t.element({...B.content.attrs,dir:a(`dir`),id:H(o,n),tabIndex:p?0:-1,"aria-labelledby":U(o,n),role:`tabpanel`,"data-ownedby":V(o),"data-selected":d(r),"data-orientation":a(`orientation`),hidden:!r})},getIndicatorProps(){let e=i.get(`indicatorRect`),n=e==null||e.width===0&&e.height===0&&e.x===0&&e.y===0;return t.element({id:W(o),...B.indicator.attrs,dir:a(`dir`),"data-orientation":a(`orientation`),hidden:n,style:{"--transition-property":`left, right, top, bottom, width, height`,"--left":l(e?.x),"--top":l(e?.y),"--width":l(e?.width),"--height":l(e?.height),position:`absolute`,willChange:`var(--transition-property)`,transitionProperty:`var(--transition-property)`,transitionDuration:`var(--transition-duration, 150ms)`,transitionTimingFunction:`var(--transition-timing-function)`,[f?`left`:`top`]:f?`var(--left)`:`var(--top)`}})}}}var{createMachine:$e}=ee(),et=$e({props({props:e}){return{dir:`ltr`,orientation:`horizontal`,activationMode:`automatic`,loopFocus:!0,composite:!0,navigate(e){ke(e.node)},defaultValue:null,...e}},initialState(){return`idle`},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),onChange(t){e(`onValueChange`)?.({value:t})}})),focusedValue:t(()=>({defaultValue:e(`value`)||e(`defaultValue`),sync:!0,onChange(t){e(`onFocusChange`)?.({focusedValue:t})}})),ssr:t(()=>({defaultValue:!0})),indicatorRect:t(()=>({defaultValue:null}))}},watch({context:e,prop:t,track:n,action:r}){n([()=>e.get(`value`)],()=>{r([`syncIndicatorRect`,`syncTabIndex`,`navigateIfNeeded`])}),n([()=>t(`dir`),()=>t(`orientation`)],()=>{r([`syncIndicatorRect`])})},on:{SET_VALUE:{actions:[`setValue`]},CLEAR_VALUE:{actions:[`clearValue`]},SET_INDICATOR_RECT:{actions:[`setIndicatorRect`]},SYNC_TAB_INDEX:{actions:[`syncTabIndex`]}},entry:[`syncIndicatorRect`,`syncTabIndex`,`syncSsr`],exit:[`cleanupObserver`],states:{idle:{on:{TAB_FOCUS:{target:`focused`,actions:[`setFocusedValue`]},TAB_CLICK:{target:`focused`,actions:[`setFocusedValue`,`setValue`]}}},focused:{on:{TAB_CLICK:{actions:[`setFocusedValue`,`setValue`]},ARROW_PREV:[{guard:`selectOnFocus`,actions:[`focusPrevTab`,`selectFocusedTab`]},{actions:[`focusPrevTab`]}],ARROW_NEXT:[{guard:`selectOnFocus`,actions:[`focusNextTab`,`selectFocusedTab`]},{actions:[`focusNextTab`]}],HOME:[{guard:`selectOnFocus`,actions:[`focusFirstTab`,`selectFocusedTab`]},{actions:[`focusFirstTab`]}],END:[{guard:`selectOnFocus`,actions:[`focusLastTab`,`selectFocusedTab`]},{actions:[`focusLastTab`]}],TAB_FOCUS:{actions:[`setFocusedValue`]},TAB_BLUR:{target:`idle`,actions:[`clearFocusedValue`]}}}},implementations:{guards:{selectOnFocus:({prop:e})=>e(`activationMode`)===`automatic`},actions:{selectFocusedTab({context:e,prop:t}){c(()=>{let n=e.get(`focusedValue`);if(!n)return;let r=t(`deselectable`)&&e.get(`value`)===n?null:n;e.set(`value`,r)})},setFocusedValue({context:e,event:t,flush:n}){t.value!=null&&n(()=>{e.set(`focusedValue`,t.value)})},clearFocusedValue({context:e}){e.set(`focusedValue`,null)},setValue({context:e,event:t,prop:n}){let r=n(`deselectable`)&&e.get(`value`)===e.get(`focusedValue`);e.set(`value`,r?null:t.value)},clearValue({context:e}){e.set(`value`,null)},focusFirstTab({scope:e}){c(()=>{qe(e)?.focus()})},focusLastTab({scope:e}){c(()=>{Je(e)?.focus()})},focusNextTab({context:e,prop:t,scope:n,event:r}){let i=r.value??e.get(`focusedValue`);if(!i)return;let a=Ye(n,{value:i,loopFocus:t(`loopFocus`)});c(()=>{t(`composite`)?a?.focus():a?.dataset.value!=null&&e.set(`focusedValue`,a.dataset.value)})},focusPrevTab({context:e,prop:t,scope:n,event:r}){let i=r.value??e.get(`focusedValue`);if(!i)return;let a=Xe(n,{value:i,loopFocus:t(`loopFocus`)});c(()=>{t(`composite`)?a?.focus():a?.dataset.value!=null&&e.set(`focusedValue`,a.dataset.value)})},syncTabIndex({context:e,scope:t}){c(()=>{let n=e.get(`value`);if(!n)return;let r=Ke(t,n);r&&(fe(r).length>0?r.removeAttribute(`tabindex`):r.setAttribute(`tabindex`,`0`))})},cleanupObserver({refs:e}){let t=e.get(`indicatorCleanup`);t&&t()},setIndicatorRect({context:e,event:t,scope:n}){let r=t.id??e.get(`value`);K(n)&&r&&G(n,r)&&e.set(`indicatorRect`,Ze(n,r))},syncSsr({context:e}){e.set(`ssr`,!1)},syncIndicatorRect({context:e,refs:t,scope:n}){let r=t.get(`indicatorCleanup`);if(r&&r(),!K(n))return;let i=()=>{let t=G(n,e.get(`value`));if(!t)return;let r=J(t);e.set(`indicatorRect`,e=>xe(e,r)?e:r)};i();let a=pe(...q(n).map(e=>o.observe(e,i)));t.set(`indicatorCleanup`,a)},navigateIfNeeded({context:e,prop:t,scope:n}){let r=e.get(`value`);if(!r)return;let i=G(n,r);ve(i)&&t(`navigate`)?.({value:r,node:i,href:i.href})}}}}),tt=e=>{let t=(0,F.useId)(),{getRootNode:r}=i(),{dir:a}=u();return Qe(n(et,{id:t,dir:a,getRootNode:r,...e}),se)},nt=_(),rt=(0,F.forwardRef)((e,t)=>{let[n,r]=T(e),[i,a]=nt(r,[`activationMode`,`composite`,`defaultValue`,`deselectable`,`id`,`ids`,`loopFocus`,`navigate`,`onFocusChange`,`onValueChange`,`orientation`,`translations`,`value`]),o=tt(i),s=y(o.getRootProps(),a);return(0,P.jsx)(M,{value:o,children:(0,P.jsx)(E,{value:n,children:(0,P.jsx)(f.div,{...s,ref:t})})})});rt.displayName=`TabsRoot`;var it=_(),at=(0,F.forwardRef)((e,t)=>{let[n,r]=T(e),[{value:i},a]=it(r,[`value`]),o=y(i.getRootProps(),a);return(0,P.jsx)(M,{value:i,children:(0,P.jsx)(E,{value:n,children:(0,P.jsx)(f.div,{...o,ref:t})})})});at.displayName=`TabsRootProvider`;var{withProvider:ot,withContext:Y,useStyles:st,PropsProvider:ct}=_e({key:`tabs`});ot(at,`root`,{forwardAsChild:!0});var lt=ot(rt,`root`,{forwardAsChild:!0}),ut=Y(z,`trigger`,{forwardAsChild:!0});Y(I,`content`,{forwardAsChild:!0}),Y(`div`,`contentGroup`);var dt=Y(R,`list`,{forwardAsChild:!0}),ft=Y(L,`indicator`,{forwardAsChild:!0}),pt=`/crafts/sheepicon.svg`;function mt(e){let{children:t}=e,[n,r]=(0,F.useState)(!1),i=k(),a=()=>{r(!0)};return(0,F.useEffect)(()=>{let e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--init-timing-phase-01`)),t=setTimeout(()=>{i.hash||r(!0)},e);return()=>clearTimeout(t)},[]),v(Me,{open:n,onOpenChange:e=>r(e.open),openDelay:100,positioning:{slide:!0},children:[v(O,{as:`header`,gap:`1`,css:[X.style,X.loadingStyle],children:[v(O,{as:`div`,className:`title-area`,children:[g(je,{asChild:!0,children:g(ce,{css:X.iconArea.style,bg:`none`,"aria-label":`タイトルアイコン。クリックで冒頭紹介を開きます`,onClick:a,children:g(D,{className:`icon`,children:g(Ie,{src:pt,loading:`lazy`})})})}),v(x,{as:`h1`,display:`flex`,alignItems:`flex-end`,children:[g(w,{fontFamily:`Stick`,fontSize:{base:`2xl`,md:`2xl`,lg:`3xl`},fontWeight:`900`,textShadow:`0 0 1px red, 0 0 4px white`,children:`がみ〜工房`}),g(w,{fontFamily:`Stick`,fontSize:{base:`md`,md:`md`,lg:`lg`},lineHeight:{base:1,md:1,lg:.9},fontWeight:`bold`,textShadow:`0 0 1px red, 0 0 4px white`,paddingLeft:`3`,children:`工作室`})]})]}),g(x,{flexGrow:`1`}),g(x,{h:`100%`,display:`flex`,alignItems:`flex-end`,children:t}),g(Oe,{})]}),g(Se,{children:g(_t,{isOpen:n,closeMyself:()=>r(!1)})})]})}var ht={fadeInShrink:b`
    0% {
      opacity: 0;
      transform: scale(1.5);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.3);
    }
    100% {
      opacity: 1;
      transform: scale(1.0);
    }
  `},X={style:C`
    width: 100%;
    /* headerの高さは、flexの自動調整の対象外にし、ただ--header-heightの値とする */
    height: var(--header-height);
    flex-grow: 0;
    flex-shrink: 0;
    
    z-index: 1;
    box-shadow: 1px 1px 2px rgb(0 0 0 / 0.25);
    
    padding-left: 0.25rem; padding-right: 0.25rem;
    background-image: url('${`/crafts/`}/substrate_h.jpg');
    background-repeat: repeat repeat;
    /* 背景画像が読み込まれるまでの表示のため、背景を画像のメイン色で塗りつぶす */
    background-color: rgb(228 180 114);
    
    .title-area {
      background-image: url('${`/crafts/`}/substrate_h.jpg');
      background-repeat: repeat repeat;
      height: calc(100% - (1px * 2));
      margin-top: 1px;
      border-radius: 0.5rem;
      box-shadow: -1px -1px 1px rgb(255 255 255 / 0.4), 1px 1px 2px rgb(0 0 0 / 0.25);
      padding-left: 0.25rem; padding-right: 1rem;
    }
  `,loadingStyle:C`
    opacity: 0;
    transform: scale(1.2);
    animation: ${ht.fadeInShrink} calc(var(--init-timing-phase-01) * 1ms) ease-out forwards;
  `,iconArea:{style:C`
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgb(0 0 0 / 0.5);
        clip-path: circle(1em);
      }
      > .icon {
        width: 2.5rem;
        height: 2.5rem;
        filter: drop-shadow(1px 1px 2px rgba(150, 50, 50, 0.8)) drop-shadow(1px 3px 8px rgba(100, 100, 100, 0.5));
        
        transform: scale(1);
        opacity: 1;
        transition: opacity 0.5s ease, transform 1s cubic-bezier(0.3, 0.2, 0.8, 1.8);
        @starting-style {
          transform: scale(0.2);
          opacity: 0.1;
        }
      }
    `}},gt=(0,F.lazy)(()=>Re(()=>import(`./CVqdzlt2.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])));function _t(e){let{isOpen:t,closeMyself:n}=e,r=Ce(),[i,a]=(0,F.useState)(!1);(0,F.useEffect)(()=>{r.scrollToEdge({edge:`top`}),a(!1)},[t]);let o=(0,F.useRef)(null),s=(0,F.useRef)(null);return(0,F.useEffect)(()=>{if(o.current&&s.current){let e=e=>{!o.current||!s.current||(e.type===`mousedown`&&e.target instanceof HTMLElement&&e.target.classList.contains(`scroll-thumb`)&&a(!0),e.type===`mouseup`&&a(!1))};return o.current.addEventListener(`mousedown`,e,{passive:!0}),o.current.addEventListener(`mouseup`,e,{passive:!0}),()=>{o.current?.removeEventListener(`mousedown`,e),o.current?.removeEventListener(`mouseup`,e)}}},[]),(0,F.useEffect)(()=>{if(o.current&&s.current){let e=e=>{!o.current||!s.current||e?.constructor===MouseEvent&&!i||(e instanceof WheelEvent&&r.isAtBottom&&e.deltaY>0||typeof TouchEvent<`u`&&e instanceof TouchEvent&&r.isAtBottom||e instanceof MouseEvent&&r.isAtBottom&&i&&e.movementY>0)&&(n(),e.stopPropagation(),e.cancelable&&e.preventDefault())};return o.current.addEventListener(`wheel`,e,{passive:!1}),o.current.addEventListener(`touchmove`,e,{passive:!1}),o.current.addEventListener(`mousemove`,e,{passive:!1}),()=>{o.current?.removeEventListener(`wheel`,e),o.current?.removeEventListener(`touchmove`,e),o.current?.removeEventListener(`mousemove`,e)}}},[r,i]),g(Pe,{msmDown:{"--header-padding-inline":`0.5em`},children:v(Ne,{ref:o,css:yt.content,w:`calc(100svw - (var(--body-margin) + var(--x)) * 2)`,minW:`calc(100svw - (var(--body-margin) + var(--x)) * 2)`,maxHeight:`calc(95svh - 3rem)`,children:[g(Fe,{}),g(me,{className:`close-button`,onClick:n}),v(w,{className:`hello`,fontSize:{base:`2xl`,md:`2xl`,lg:`3xl`},children:[g(`span`,{children:`ー\xA0`}),g(`span`,{children:`こ`}),g(`span`,{children:`ん`}),g(`span`,{children:`に`}),g(`span`,{children:`ち`}),g(`span`,{children:`は`}),g(`span`,{children:`ー`})]}),g(we.Provider,{scrollArea:r,children:v(Le,{children:[g(F.Suspense,{fallback:g(S,{w:`100%`,h:`120lvh`}),children:g(gt,{})}),g(`div`,{ref:s})]})})]})})}var vt={slideFromTop:b`
    0% {
      transform: translate(0, -50rem);
    }
    100% {
      transform: translate(0);
    }
  `,slideToTop:b`
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(0, -1rem);
    }
  `},yt={content:C`
    position: relative;
    
    // 吹き出しの三角部分と本体部分の背景色
    --hovercard-bg: rgb(230 230 255);
    background: radial-gradient(circle at 50% calc(5lh + min(15em, 40svh, 40svw) / 2), white 0, rgb(250 250 255) min(15em, 40svh, 40svw), rgb(230 230 255) calc(min(15em, 40svh, 40svw) + 10em));
    
    padding-inline: var(--header-padding-inline, revert-rule);
    
    // 閉じるときのアニメーション
    &:is([closed], [data-closed], [data-state=closed])[data-placement^=bottom] {
      animation-name: ${vt.slideToTop}, fade-out;
      animation-duration: 100ms;
    }
    // 開くときのアニメーション
    &:is([open], [data-open], [data-state=open])[data-placement^=bottom] {
      animation-name: ${vt.slideFromTop}, fade-in;
      animation-duration: 1s;
    }
    > .close-button {
      position: absolute;
      top: 0.5em;
      right: 1em;
      height: 2em;
      width: 2em;
      min-width: unset;
      padding-inline: unset;
    }
    
    > .hello {
      position: relative;
      height: 5lh;
      margin: 0.25em auto;
      font-family: Stick;
      font-weight: 900;
      text-shadow: 0 0 1px red;
      
      > span {
        position: absolute;
        top: 0;
        left: calc(50% - 0.5em);
        transform-origin: center 15lh;
      }
      > span:nth-of-type(n) {
        transform: rotate(calc(6deg * (var(--number) - 4)));
      }
      > span:first-of-type, span:last-of-type {
        font-size: 0.5em;
      }
      > span:nth-of-type(1) { --number: 1; }
      > span:nth-of-type(2) { --number: 2; }
      > span:nth-of-type(3) { --number: 3; }
      > span:nth-of-type(4) { --number: 4; }
      > span:nth-of-type(5) { --number: 5; }
      > span:nth-of-type(6) { --number: 6; }
      > span:nth-of-type(7) { --number: 7; }
    }
  `},bt=`data:image/svg+xml,%3csvg%20id='block_small'%20width='128mm'%20height='128mm'%20version='1.1'%20viewBox='0%200%20128%20128'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-12.433%203.2434)'%20fill='%23f00'%20stroke-width='0'%3e%3cpath%20transform='matrix(.18861%200%200%20.21924%2023.065%206.7685)'%20d='m38.475%20110.08h45.336a4.1035%204.1035%2045%200%201%204.1035%204.1035v23.418h-53.131v-23.83a3.6914%203.6914%20135%200%201%203.6914-3.6914z'%20fill-opacity='.601'/%3e%3cpath%20transform='matrix(.16572%200%200%20.19959%2024.857%209.4772)'%20d='m38.475%20110.08h45.336a4.1035%204.1035%2045%200%201%204.1035%204.1035v23.418h-53.131v-23.83a3.6914%203.6914%20135%200%201%203.6914-3.6914z'%20fill-opacity='.92381'/%3e%3cpath%20transform='matrix(1%200%200%20.95124%20-13.749%20-67.803)'%20d='m36.854%20110.08h49.391a1.671%201.671%2045%200%201%201.671%201.671v25.85h-53.131v-25.452a2.0697%202.0697%20135%200%201%202.0697-2.0697z'%20fill-opacity='.6'/%3e%3cpath%20transform='matrix(.97456%200%200%20.92321%20-11.979%20-63.812)'%20d='m36.854%20110.08h49.391a1.671%201.671%2045%200%201%201.671%201.671v25.85h-53.131v-25.452a2.0697%202.0697%20135%200%201%202.0697-2.0697z'%20fill-opacity='.92381'/%3e%3cpath%20transform='matrix(1%200%200%20.95124%2043.61%20-67.855)'%20d='m36.854%20110.08h49.391a1.671%201.671%2045%200%201%201.671%201.671v25.85h-53.131v-25.452a2.0697%202.0697%20135%200%201%202.0697-2.0697z'%20fill-opacity='.6'/%3e%3cpath%20transform='matrix(.97456%200%200%20.92321%2045.38%20-63.864)'%20d='m36.854%20110.08h49.391a1.671%201.671%2045%200%201%201.671%201.671v25.85h-53.131v-25.452a2.0697%202.0697%20135%200%201%202.0697-2.0697z'%20fill-opacity='.92381'/%3e%3cpath%20transform='matrix(.18861%200%200%20.21924%20105.96%206.7087)'%20d='m38.475%20110.08h45.336a4.1035%204.1035%2045%200%201%204.1035%204.1035v23.418h-53.131v-23.83a3.6914%203.6914%20135%200%201%203.6914-3.6914z'%20fill-opacity='.6'/%3e%3cpath%20transform='matrix(.16572%200%200%20.19959%20107.76%209.4174)'%20d='m38.475%20110.08h45.336a4.1035%204.1035%2045%200%201%204.1035%204.1035v23.418h-53.131v-23.83a3.6914%203.6914%20135%200%201%203.6914-3.6914z'%20fill-opacity='.92381'/%3e%3cpath%20transform='matrix(.18861%200%200%20.21924%2051.765%20-21.913)'%20d='m38.475%20110.08h45.336a4.1035%204.1035%2045%200%201%204.1035%204.1035v23.418h-53.131v-23.83a3.6914%203.6914%20135%200%201%203.6914-3.6914z'%20fill-opacity='.6'/%3e%3cpath%20transform='matrix(.16572%200%200%20.19959%2053.557%20-19.204)'%20d='m38.475%20110.08h45.336a4.1035%204.1035%2045%200%201%204.1035%204.1035v23.418h-53.131v-23.83a3.6914%203.6914%20135%200%201%203.6914-3.6914z'%20fill-opacity='.92381'/%3e%3cpath%20transform='matrix(1%200%200%20.90224%2014.951%20-91.088)'%20d='m36.854%20110.08h49.391a1.671%201.671%2045%200%201%201.671%201.671v25.85h-53.131v-25.452a2.0697%202.0697%20135%200%201%202.0697-2.0697z'%20fill-opacity='.6'/%3e%3cpath%20transform='matrix(.97456%200%200%20.841%2016.721%20-83.478)'%20d='m36.854%20110.08h49.391a1.671%201.671%2045%200%201%201.671%201.671v25.85h-53.131v-25.452a2.0697%202.0697%20135%200%201%202.0697-2.0697z'%20fill-opacity='.92381'/%3e%3cpath%20transform='matrix(.18861%200%200%20.21924%2077.305%20-21.919)'%20d='m38.475%20110.08h45.336a4.1035%204.1035%2045%200%201%204.1035%204.1035v23.418h-53.131v-23.83a3.6914%203.6914%20135%200%201%203.6914-3.6914z'%20fill-opacity='.6'/%3e%3cpath%20transform='matrix(.16572%200%200%20.19959%2079.097%20-19.21)'%20d='m38.475%20110.08h45.336a4.1035%204.1035%2045%200%201%204.1035%204.1035v23.418h-53.131v-23.83a3.6914%203.6914%20135%200%201%203.6914-3.6914z'%20fill-opacity='.92381'/%3e%3c/g%3e%3c/svg%3e`,xt=`/crafts/assets/block_large-C3lYgsqE.svg`,St=`/crafts/assets/beads_small-_X8qDAxc.svg`;function Z(){let e=A(),t=k(),[n,r]=(0,F.useState)(``),i=({value:t})=>{r(t),e(`/${t}`)};(0,F.useEffect)(()=>{let e=t.pathname.split(`/`)[1];e&&e!=n&&r(e)},[t]);let a=De({lgDown:Q.base,lg:Q.lg},{ssr:!1})||Q.base;return g(lt,{onValueChange:i,value:n,fitted:{msmDown:!0,msm:!1},orientation:a.listOrientation,variant:`plain`,lazyMount:!0,unmountOnExit:!0,children:v(dt,{gap:`1px`,children:[[{value:j.block.key,srcSm:bt,srcLg:xt,title:`ブロック`,subTitle:g(h,{children:`LEGOやLaQなどのブロック系工作`})},{value:j.beads.key,srcSm:St,srcLg:Ve,title:`ビーズ`,subTitle:g(h,{children:`アイロンビーズなどのビーズ3D工作`})}].map((e,t)=>v(Ct,{value:e.value,tabIndex:t,css:[Q.styles.button,a.button.style],children:[g(x,{css:[Q.styles.iconArea,a.iconArea.style],children:g(D,{className:`icon`,children:g(x,{as:`div`,maskImage:`url("${a.listOrientation==`horizontal`?e.srcSm:e.srcLg}")`,maskMode:`alpha`,maskSize:`100% auto`,maskRepeat:`no-repeat`})})}),v(x,{as:e.value===n?`h3`:`div`,css:a.title.style,children:[g(w,{as:`span`,className:`title`,children:e.title}),g(w,{as:`span`,className:`sub-title`,hideBelow:`lg`,children:e.subTitle})]})]},e.value)),g(ft,{css:Q.styles.indicator,msmDown:{roundedTop:`unset`,roundedBottom:`l2`},msm:{roundedTop:`l2`,roundedBottom:`unset`},lg:{roundedLeft:`l2`,roundedRight:`unset`}})]})})}function Ct(e){let{children:t,...n}=e,{targetProp:r,effectProp:i}=de();return v(ut,{...n,...r,children:[t,g(re,{marginLeft:`calc(var(--chakra-spacing-2) * -1)`,...i})]})}var Q={styles:{button:C`
      border-top: 2px solid rgb(100 100 100 / 0.5);
      border-left: 2px solid rgb(100 100 100 / 0.5);
      border-right: 1px solid rgb(255 200 200 / 0.5);
      border-bottom: 1px solid rgb(255 200 200 / 0.5);
      background: rgb(90 30 30 / 0.3);
      color: rgb(90 30 30);
      text-shadow: 0 0 1px goldenrod;
      
      &:is([aria-selected=true], [data-selected]) {
        border-color: transparent;
        box-shadow: -1px -1px 2px rgb(255 200 200 / 9);
        background: transparent;
        color: rgb(30 30 30);
        text-shadow: 0 0 1px sandybrown;
      }
      @media (hover: hover) {
        &:not(:is([aria-selected=true], [data-selected])):hover {
          border-color: transparent;
          filter: invert(40%);
        }
      }
      &:active {
        border-color: transparent;
        background: rgb(90 30 30 / 0.4);
      }
    `,iconArea:C`
      aspect-ratio: 1 / 1;
      
      .icon {
        aspect-ratio: 1 / 1;
        background: rgb(120 60 60 / 1);
        filter: drop-shadow(10px 10px 5px rgb(90 90 30 / 0.5));
        
        *:is([aria-selected=true], [data-selected]) > & {
          background: rgb(200 50 50);
        }
        
        transition: all 1s cubic-bezier(0.3, 0.2, 0.8, 1.8);
      }
    `,indicator:C`
      background: rgb(255 255 255 / 0.7);
    `},base:{listOrientation:`horizontal`,button:{style:C`
        aspect-ratio: 3 / 2;
        position: relative;
        padding-block: unset;
        padding-inline: unset;
      `},iconArea:{style:C`
        width: var(--chakra-sizes-8);
        margin: 0 auto;
        
        .icon {
          width: var(--chakra-sizes-7);
          *:is([aria-selected=true], [data-selected]) > & {
            width: var(--chakra-sizes-8);
          }
        }
      `},title:{style:C`
        position: absolute;
        bottom: 0;
        width: 100%;
        .title {
          font-size: 0.7rem;
        }
      `}},lg:{listOrientation:`vertical`,button:{style:C`
        height: 5rem;
        width: 14rem;
        justify-content: left; 
      `},iconArea:{style:C`
        width: var(--chakra-sizes-10);
        
        .icon {
          width: var(--chakra-sizes-9);
          *:is([aria-selected=true], [data-selected]) > & {
            width: var(--chakra-sizes-10);
          }
        }
      `},title:{style:C`
        display: flex;
        flex-direction: column;
        .title {
          word-break: keep-all;
          text-align: left;
          font-size: 1rem;
        }
        .sub-title {
          text-align: left;
          font-size: 0.5rem;
        }
      `}}};function wt(){let[e]=ze(),t=A();return(0,F.useEffect)(()=>{if(e?.get(`path`)?.includes(`/crafts/`)){let n=e?.get(`path`)?.split(`/`).slice(2).join(`/`),r=e?.get(`hash`);n&&t({pathname:`/${n}`,hash:r?`#${r}`:void 0})}},[]),v(h,{children:[g(mt,{children:g(x,{as:`nav`,hideFrom:`lg`,hideBelow:`msm`,children:g(Z,{})})}),v(O,{flexGrow:`1`,w:`100%`,minH:`0`,gap:`1px`,children:[v(x,{as:`nav`,hideBelow:`lg`,css:$.sideNavi,children:[g(x,{h:`0.25em`,bg:`rgb(0 0 0 / 0.2)`}),v(x,{display:`flex`,flexDirection:`row`,children:[g(x,{w:`0.4em`,bg:`rgb(0 0 0 / 0.1)`}),g(Z,{})]}),g(x,{flexGrow:`1`,bg:`rgb(0 0 0 / 0.1)`})]}),g(x,{as:`main`,flexGrow:`1`,overflow:`auto`,h:`100%`,children:g(F.Suspense,{fallback:g(Tt,{}),children:g(x,{maxHeight:`100%`,h:`100%`,bg:`var(--bg, #fff)`,children:g(Be,{})})})})]}),g(x,{as:`footer`,children:g(x,{as:`nav`,hideFrom:`msm`,h:`var(--footer-height)`,css:$.bottomNavi,children:g(Z,{})})})]})}function Tt(){return v(h,{children:[g(`style`,{children:`
        .main-suspense-area {
          width: 100%;
          height: 100%;
          background: var(--bg, #fff);
          opacity: 1;
          
          transition: opacity 4s ease;
          
          @starting-style {
            opacity: 0;
          }
        }
      `}),g(x,{className:`main-suspense-area`,children:g(S,{w:`100%`,h:`100%`})})]})}var $={sideNavi:C`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-image: url('${`/crafts/`}/substrate_v.jpg');
    background-repeat: repeat repeat;
    /* 背景画像が読み込まれるまでの表示のため、背景を画像のメイン色で塗りつぶす */
    background-color: rgb(228 180 114);
    
    transition: opacity 2s 1s, transform 1.5s 1s;
    
    @starting-style {
      opacity: 0;
      transform: translateX(-5rem);
    }
  `,bottomNavi:C`
    background-image: url('${`/crafts/`}/substrate_h.jpg');
    background-repeat: repeat repeat;
    /* 背景画像が読み込まれるまでの表示のため、背景を画像のメイン色で塗りつぶす */
    background-color: rgb(228 180 114);
    
    transition: opacity 2s 1s, transform 1.5s 1s;
    
    @starting-style {
      opacity: 0;
      transform: translateY(3rem);
    }
  `};export{wt as default};