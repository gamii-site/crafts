import{n as e}from"./C47JuxvO.js";import{t}from"./D2gex077.js";import{A as n,At as r,Bt as i,K as a,Lt as o,M as s,Mt as c,N as l,S as u,V as d,Vt as f,c as p,d as m,et as ee,f as h,i as g,j as _,jt as v,k as te,n as y,ot as ne,p as b,tt as re,u as ie,w as ae,zt as x}from"./B0F9rPWH.js";import{t as oe}from"./CDhAqXQ0.js";import{c as S,l as se,o as ce,t as C,x as w}from"./v6cwp8pn.js";import{i as le,n as ue,o as de,t as T}from"./g6ysO8nl.js";import{a as fe,i as pe,n as me,r as he,t as ge,u as _e}from"./Dan5g_OA.js";import{t as ve}from"./DBGCqf-u.js";import{l as ye}from"./BCKo5sbo.js";import{s as E}from"./index-CeDtxvJS.js";function be(e,t){let{left:n,top:r,width:i,height:a}=t.getBoundingClientRect(),o={x:e.x-n,y:e.y-r},s={x:v(o.x/i),y:v(o.y/a)};function c(e={}){let{dir:t=`ltr`,orientation:n=`horizontal`,inverted:r}=e,i=typeof r==`object`?r.x:r,a=typeof r==`object`?r.y:r;return n===`horizontal`?t===`rtl`||i?1-s.x:s.x:a?1-s.y:s.y}return{offset:o,percent:s,getPercentValue:c}}var[D,O]=f({name:`RatingGroupContext`,hookName:`useRatingGroupContext`,providerName:`<RatingGroupProvider />`}),k=e(oe(),1),A=e(t(),1),j=(0,A.forwardRef)((e,t)=>{let n=x(O().getControlProps(),e);return(0,k.jsx)(l.div,{...n,ref:t})});j.displayName=`RatingGroupControl`;var M=(0,A.forwardRef)((e,t)=>{let n=x(O().getHiddenInputProps(),e),r=T();return(0,k.jsx)(l.input,{"aria-describedby":r?.ariaDescribedby,...n,ref:t})});M.displayName=`RatingGroupHiddenInput`;var[xe,Se]=f({name:`RatingGroupItemContext`,hookName:`useRatingGroupItemContext`,providerName:`<RatingGroupItemProvider />`}),Ce=_(),N=(0,A.forwardRef)((e,t)=>{let[n,r]=Ce(e,[`index`]),i=O(),a=x(i.getItemProps(n),r);return(0,k.jsx)(xe,{value:i.getItemState(n),children:(0,k.jsx)(l.span,{...a,ref:t})})});N.displayName=`RatingGroupItem`;var P=(0,A.forwardRef)((e,t)=>{let n=x(O().getLabelProps(),e);return(0,k.jsx)(l.label,{...n,ref:t})});P.displayName=`RatingGroupLabel`;var we=e=>e.ids?.root??`rating:${e.id}`,F=e=>e.ids?.label??`rating:${e.id}:label`,I=e=>e.ids?.hiddenInput??`rating:${e.id}:input`,L=e=>e.ids?.control??`rating:${e.id}:control`,Te=(e,t)=>e.ids?.item?.(t)??`rating:${e.id}:item:${t}`,R=e=>e.getById(L(e)),z=(e,t)=>{let n=`[role=radio][aria-posinset='${Math.ceil(t)}']`;return d(R(e),n)},B=e=>e.getById(I(e)),Ee=(e,t)=>{let n=B(e);n&&le(n,{value:t})};function De(e,t){let{context:n,send:i,prop:a,scope:o,computed:s}=e,l=s(`isInteractive`),u=s(`isDisabled`),d=!!a(`readOnly`),f=!!a(`required`),p=n.get(`value`),m=n.get(`hoveredValue`),h=a(`translations`);function g(e){let t=s(`isHovering`)?m:p,n=Math.ceil(t)===e.index;return{highlighted:e.index<=t||n,half:n&&Math.abs(t-e.index)===.5,checked:n||p<=0&&e.index===1}}return{hovering:s(`isHovering`),value:p,hoveredValue:m,count:a(`count`),items:Array.from({length:a(`count`)}).map((e,t)=>t+1),setValue(e){i({type:`SET_VALUE`,value:e})},clearValue(){i({type:`CLEAR_VALUE`})},getRootProps(){return t.element({...E.root.attrs,dir:a(`dir`),id:we(o)})},getHiddenInputProps(){return t.input({name:a(`name`),form:a(`form`),type:`text`,hidden:!0,disabled:u,readOnly:d,required:a(`required`),id:I(o),defaultValue:p})},getLabelProps(){return t.label({...E.label.attrs,dir:a(`dir`),id:F(o),"data-disabled":c(u),"data-required":c(f),htmlFor:I(o),onClick(e){e.defaultPrevented||l&&(e.preventDefault(),z(o,Math.max(1,n.get(`value`)))?.focus({preventScroll:!0}))}})},getControlProps(){return t.element({id:L(o),...E.control.attrs,dir:a(`dir`),role:`radiogroup`,"aria-orientation":`horizontal`,"aria-labelledby":F(o),"aria-readonly":r(d),"data-readonly":c(d),"data-disabled":c(u),onPointerMove(e){l&&e.pointerType!==`touch`&&i({type:`GROUP_POINTER_OVER`})},onPointerLeave(e){l&&e.pointerType!==`touch`&&i({type:`GROUP_POINTER_LEAVE`})}})},getItemState:g,getItemProps(e){let{index:n}=e,r=g(e),s=h.ratingValueText(n);return t.element({...E.item.attrs,dir:a(`dir`),id:Te(o,n.toString()),role:`radio`,tabIndex:(()=>{if(d)return r.checked?0:void 0;if(!u)return r.checked?0:-1})(),"aria-roledescription":`rating`,"aria-label":s,"aria-disabled":u,"data-disabled":c(u),"data-readonly":c(d),"aria-setsize":a(`count`),"aria-checked":r.checked,"data-checked":c(r.checked),"aria-posinset":n,"data-highlighted":c(r.highlighted),"data-half":c(r.half),onPointerDown(e){l&&ne(e)&&e.preventDefault()},onPointerMove(e){l&&i({type:`POINTER_OVER`,index:n,isMidway:be(re(e),e.currentTarget).getPercentValue({orientation:`horizontal`,dir:a(`dir`)})<.5})},onKeyDown(e){if(e.defaultPrevented||!l)return;let t={ArrowLeft(){i({type:`ARROW_LEFT`})},ArrowRight(){i({type:`ARROW_RIGHT`})},ArrowUp(){i({type:`ARROW_LEFT`})},ArrowDown(){i({type:`ARROW_RIGHT`})},Space(){i({type:`SPACE`,value:n})},Home(){i({type:`HOME`})},End(){i({type:`END`})}}[ee(e,{dir:a(`dir`)})];t&&(e.preventDefault(),t(e))},onClick(){l&&i({type:`CLICK`,value:n})},onFocus(){l&&i({type:`FOCUS`})},onBlur(){l&&i({type:`BLUR`})}})}}}var Oe=o({props({props:e}){return{name:`rating`,count:5,dir:`ltr`,defaultValue:-1,...e,translations:{ratingValueText:e=>`${e} stars`,...e.translations}}},initialState(){return`idle`},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),onChange(t){e(`onValueChange`)?.({value:t})}})),hoveredValue:t(()=>({defaultValue:-1,onChange(t){e(`onHoverChange`)?.({hoveredValue:t})}})),fieldsetDisabled:t(()=>({defaultValue:!1}))}},watch({track:e,action:t,prop:n,context:r}){e([()=>n(`allowHalf`)],()=>{t([`roundValueIfNeeded`])}),e([()=>r.get(`value`)],()=>{t([`dispatchChangeEvent`])})},computed:{isDisabled:({context:e,prop:t})=>!!t(`disabled`)||e.get(`fieldsetDisabled`),isInteractive:({computed:e,prop:t})=>!(e(`isDisabled`)||t(`readOnly`)),isHovering:({context:e})=>e.get(`hoveredValue`)>-1},effects:[`trackFormControlState`],on:{SET_VALUE:{actions:[`setValue`]},CLEAR_VALUE:{actions:[`clearValue`]}},states:{idle:{entry:[`clearHoveredValue`],on:{GROUP_POINTER_OVER:{target:`hover`},FOCUS:{target:`focus`},CLICK:{actions:[`setValue`,`focusActiveRadio`]}}},focus:{on:{POINTER_OVER:{actions:[`setHoveredValue`]},GROUP_POINTER_LEAVE:{actions:[`clearHoveredValue`]},BLUR:{target:`idle`},SPACE:{guard:`isValueEmpty`,actions:[`setValue`]},CLICK:{actions:[`setValue`,`focusActiveRadio`]},ARROW_LEFT:{actions:[`setPrevValue`,`focusActiveRadio`]},ARROW_RIGHT:{actions:[`setNextValue`,`focusActiveRadio`]},HOME:{actions:[`setValueToMin`,`focusActiveRadio`]},END:{actions:[`setValueToMax`,`focusActiveRadio`]}}},hover:{on:{POINTER_OVER:{actions:[`setHoveredValue`]},GROUP_POINTER_LEAVE:[{guard:`isRadioFocused`,target:`focus`,actions:[`clearHoveredValue`]},{target:`idle`,actions:[`clearHoveredValue`]}],CLICK:{actions:[`setValue`,`focusActiveRadio`]}}}},implementations:{guards:{isInteractive:({prop:e})=>!(e(`disabled`)||e(`readOnly`)),isHoveredValueEmpty:({context:e})=>e.get(`hoveredValue`)===-1,isValueEmpty:({context:e})=>e.get(`value`)<=0,isRadioFocused:({scope:e})=>!!R(e)?.contains(e.getActiveElement())},effects:{trackFormControlState({context:e,scope:t}){return de(B(t),{onFieldsetDisabledChange(t){e.set(`fieldsetDisabled`,t)},onFormReset(){e.set(`value`,e.initial(`value`))}})}},actions:{clearHoveredValue({context:e}){e.set(`hoveredValue`,-1)},focusActiveRadio({scope:e,context:t}){a(()=>z(e,t.get(`value`))?.focus())},setPrevValue({context:e,prop:t}){let n=t(`allowHalf`)?.5:1;e.set(`value`,Math.max(0,e.get(`value`)-n))},setNextValue({context:e,prop:t}){let n=t(`allowHalf`)?.5:1,r=e.get(`value`)===-1?0:e.get(`value`);e.set(`value`,Math.min(t(`count`),r+n))},setValueToMin({context:e}){e.set(`value`,1)},setValueToMax({context:e,prop:t}){e.set(`value`,t(`count`))},setValue({context:e,event:t}){let n=e.get(`hoveredValue`),r=n===-1?t.value:n;e.set(`value`,r)},clearValue({context:e}){e.set(`value`,-1)},setHoveredValue({context:e,prop:t,event:n}){let r=t(`allowHalf`)&&n.isMidway?.5:0;e.set(`hoveredValue`,n.index-r)},roundValueIfNeeded({context:e,prop:t}){t(`allowHalf`)||e.set(`value`,Math.round(e.get(`value`)))},dispatchChangeEvent({context:e,scope:t}){Ee(t,e.get(`value`))}}}}),ke=e=>{let t=(0,A.useId)(),{getRootNode:r}=i(),{dir:a}=s(),o=T();return De(n(Oe,{id:t,ids:{label:o?.ids.label,hiddenInput:o?.ids.control},dir:a,disabled:o?.disabled,readOnly:o?.readOnly,required:o?.required,getRootNode:r,...e}),te)},Ae=_(),V=(0,A.forwardRef)((e,t)=>{let[n,r]=Ae(e,[`allowHalf`,`autoFocus`,`count`,`defaultValue`,`disabled`,`form`,`id`,`ids`,`name`,`onHoverChange`,`onValueChange`,`readOnly`,`required`,`translations`,`value`]),i=ke(n),a=x(i.getRootProps(),r);return(0,k.jsx)(D,{value:i,children:(0,k.jsx)(l.div,{...a,ref:t})})});V.displayName=`RatingGroupRoot`;var je=_(),H=(0,A.forwardRef)((e,t)=>{let[{value:n},r]=je(e,[`value`]),i=x(n.getRootProps(),r);return(0,k.jsx)(D,{value:n,children:(0,k.jsx)(l.div,{...i,ref:t})})});H.displayName=`RatingGroupRootProvider`;function Me(e){let{when:t,fallback:n,children:r}=e,i;return i=t?typeof r==`function`?r(t):r:n,(0,A.isValidElement)(i)?i:(0,k.jsx)(k.Fragment,{children:i})}var{withContext:Ne,PropsProvider:Pe}=ce({key:`container`}),U=Ne(`div`);U.displayName=`Container`;function Fe(e){let{each:t,fallback:n,children:r}=e;return t?.length===0?n||null:t?.map(r)}var{withProvider:W,withContext:G,useStyles:Ie,PropsProvider:Le}=ae({key:`ratingGroup`});W(H,`root`,{forwardAsChild:!0});var Re=W(V,`root`,{forwardAsChild:!0}),ze=G(P,`label`,{forwardAsChild:!0}),K=G(N,`item`,{forwardAsChild:!0});function q(e,t){return(0,A.isValidElement)(e)?(0,A.cloneElement)(e,{[`data-${t}`]:``,"aria-hidden":``}):null}var J=(0,A.forwardRef)(function(e,t){let{icon:n=(0,k.jsx)(u,{}),...r}=e,i=Ie(),a=Se();return(0,k.jsxs)(se.span,{...r,"data-highlighted":a.highlighted?``:void 0,"data-checked":a.checked?``:void 0,"data-half":a.half?``:void 0,css:[i.itemIndicator,e.css],ref:t,children:[q(n,`bg`),q(n,`fg`)]})}),Be=G(j,`control`,{forwardAsChild:!0,defaultProps:{children:(0,k.jsx)(e=>(0,k.jsx)(Fe,{each:O().items,children:t=>(0,k.jsx)(K,{index:t,...e,children:(0,k.jsx)(J,{})},t)}),{})}}),Ve=M;function He(e){return ie({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,strokeWidth:`2`,d:`M4,4 L20,4 L20,20 L4,20 L4,4 Z M6,6 L18,6 L18,18 L6,18 L6,6 Z M8,8 L16,8 L16,16 L8,16 L8,8 Z M10,10 L14,10 L14,14 L10,14 L10,10 Z M11,11 L13,11 L13,13 L11,13 L11,11 Z`},child:[]}]})(e)}function Y(e){return h(Z,{...e})}function X(e){return h(Z,{...e})}function Ue(e){let{withCarousel:t,...n}=e;return h(Y,{...n,content:t?h(y.Root,{slideCount:1,children:h(y.Item,{index:1,children:h(C,{w:`100%`,aspectRatio:`16 / 9`})},1)}):h(C,{w:`100%`,aspectRatio:`16 / 9`}),title:h(C,{h:`1lh`}),selectTarget:{selectId:void 0,location:void 0},children:h(C,{w:`100%`,h:`3em`})})}function We(e){let{withCarousel:t,...n}=e;return h(X,{...n,content:t?h(y.Root,{slideCount:1,children:h(y.Item,{index:1,children:h(C,{w:`100%`,aspectRatio:`16 / 9`})},1)}):h(C,{w:`100%`,aspectRatio:`16 / 9`}),title:h(C,{h:`1lh`}),level:0,selectTarget:{selectId:void 0,location:void 0},children:h(C,{w:`100%`,h:`3em`})})}var Ge=e=>{let[t,n]=(0,A.useState)({selectId:void 0,location:void 0}),r=ye(),i=r.hash?.substr(1);return(0,A.useEffect)(()=>{i&&e===r.pathname&&n({selectId:i,location:r})},[n,r,i]),t};function Z(e){let{id:t,content:n,title:r,level:i,selectTarget:a,children:o}=e,s=ue({smDown:$.base,sm:$.sm,mmd:$.mmd,lg:$.lg},{ssr:!1})||$.base,c=(0,A.useRef)(null),[l,u]=(0,A.useState)(!1),d=e=>{if(u(e.open),e.open)return;let t=c.current?.getBoundingClientRect();t&&t.top<0&&c.current?.scrollIntoView({behavior:`smooth`,block:`start`})},[f,m]=(0,A.useState)(!1);return(0,A.useEffect)(()=>{t&&a.selectId&&c.current&&m(()=>{let e=a.selectId===t;return e&&c.current?.scrollIntoView({behavior:`smooth`,block:`start`}),e})},[m,a,c.current]),b(U,{as:`article`,fluid:!0,borderRadius:`md`,shadow:`md`,css:[Q.style,f?Q.selectStyle:void 0],id:t,children:[h(S,{ref:c,h:`var(--chakra-spacing-4)`}),b(S,{css:[s.style,$.common.style],children:[b(S,{className:`content-area`,children:[h(S,{className:`content-block`,children:n}),b(S,{className:`title-block`,children:[h(_e,{as:`h5`,className:`title`,fontWeight:`bold`,children:r}),h(qe,{defaultValue:i})]})]}),h(S,{className:`explanation`,children:b(pe,{open:l,onOpenChange:d,lazyMount:!0,children:[b(fe,{as:`div`,paddingY:l?`0`:`4`,transition:`padding-block 0.5s`,display:`flex`,gap:`2`,alignItems:`center`,w:`fit-content`,style:{position:`sticky`,top:0,zIndex:1},children:[b(g,{children:[h(he,{transition:`transform 0.2s`,_open:{transform:`rotateZ(90deg)`},children:h(p,{})}),h(me,{children:e=>e.open?`『開いた説明』を閉じる`:`『裏側や作り方の説明』を開いて見る`})]}),h(Me,{when:!l,children:h(Je,{})})]}),h(ge,{children:h(A.Suspense,{fallback:h(Ke,{}),children:h(ve,{padding:`0.5em 0`,gap:`1em`,alignItems:`start`,children:o})})})]})})]}),h(S,{h:`var(--chakra-spacing-4)`})]})}function Ke(){return h(C,{w:`100%`,h:`20em`})}function qe(e){let{defaultValue:t}=e;return h(m,{children:(t===void 0?void 0:!0)&&b(Re,{className:`level`,count:5,readOnly:!0,allowHalf:!0,size:`xs`,colorPalette:`red`,...e,children:[h(Ve,{}),h(ze,{"aria-label":`レベル：${t}`,children:`レベル：`}),h(Be,{children:Array.from({length:5}).map((e,t)=>h(K,{index:t+1,tabIndex:-1,children:h(J,{icon:h(He,{})})},t))})]})})}var Q={style:w`
    background-image: url('${`/crafts/`}/substrate_h.jpg');
    background-repeat: repeat repeat;
  `,selectStyle:w`
    /*border: 2px solid rgb(255 100 100 / 0.6);*/
    box-shadow: 0px 0px 2px 2px rgb(255 100 100 / 0.4), 0px 0px 2px 4px rgb(255 255 255 / 0.7);
  `},$={base:{style:w`
      flex-direction: column;
      flex-wrap: nowrap;
      
      .content-area {
        flex-direction: column;
        width: 100%;
        max-width: 28em;
        
        .content-block {
          width: 100%;
        }
        .title-block {
          display: contents;
          
          .level {
            position: absolute;
            top: 0;
            color: white;
            background: rgb(0 0 0 / 0.5);
            border-radius: 5px;
            padding-inline: 10px 5px;
          }
        }
      }
      .explanation {
        width: 100%;
      }
    `},sm:{style:w`
      flex-direction: column;
      flex-wrap: nowrap;
      
      .content-area {
        flex-direction: row;
        flex-wrap: wrap;
        
        .content-block {
          width: calc(28em - ((100dvw - 28em) / 2));
          min-width: 20em;
          flex-grow: 0;
          flex-shrink: 0;
        }
        .title-block {
          min-width: 15em;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: min-content;
        }
      }
      .explanation {
        width: 100%;
      }
    `},mmd:{style:w`
      flex-direction: row;
      flex-wrap: nowrap;
      
      .content-area {
        flex-direction: column;
        position: sticky;
        top: 0;
        height: fit-content;
        width: 20em;
        flex-grow: 0;
        flex-shrink: 0;
        
        .content-block {
          width: 100%;
        }
        .title-block {
          width: 100%;
        }
      }
      .explanation {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: min-content;
      }
    `},lg:{style:w`
      flex-direction: row;
      flex-wrap: nowrap;
      
      .content-area {
        flex-direction: column;
        position: sticky;
        top: 0;
        height: fit-content;
        width: 25dvw;
        flex-grow: 0;
        flex-shrink: 0;
        
        .content-block {
          width: 100%;
        }
        .title-block {
          width: 100%;
        }
      }
      .explanation {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: min-content;
      }
    `},common:{style:w`
      display: flex;
      position: relative;
      gap: 0.5em;
      
      .content-area {
        display: flex;
        background: rgb(250 250 200 / 0.5);
        border: 2px solid rgb(0 0 0 / 0);
        
        .title-block {
          display: flex;
          flex-direction: column;
          gap: 0.25em;
          
          .title {
            line-height: 1.75em;
            text-shadow: 0 0 1px white, 0 0 2px aliceblue;
            background: rgb(250 250 200 / 0.5);
            border-radius: 0.25em;
            padding-inline: 0.25em;
            //text-shadow: 0 0 1px greenyellow, 0 0 2px white;
            //background: rgb(200 255 200 / 0.8);
            //border-radius: 0.1em;
            //box-shadow: 0px 0px 1px rgb(0 0 0 / 0.5);
          }
          .level {
            padding-left: 0.25em;
          }
        }
      }
    `}};function Je(){return h(S,{css:Ye.bubble,children:`このボタンをクリックして`})}var Ye={bubble:w`
    position: absolute;
    top: -0.4rem;
    left: 1.5rem;
    
    --bubble-color: rgb(250 240 200);
    --bubble-shadow-color: rgb(0 0 0 / 0.1);
    
    background: var(--bubble-color);
    background-clip: border-box;
    border-bottom: 3px solid var(--bubble-shadow-color);
    border-left: 5px solid var(--bubble-color);
    padding: 0.25em 1em 0.3em 0.5em;
    border-top-right-radius: 1em 45%;
    border-bottom-right-radius: 1em 45%;
    border-top-left-radius: 1em 60%; 
    
    font-size: 0.8rem;
    line-height: 1.25rem;
    
    cursor: pointer;
  `};export{Ge as a,Ue as i,We as n,U as o,Y as r,X as t};