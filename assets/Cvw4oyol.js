import{n as e}from"./C47JuxvO.js";import{t}from"./D2gex077.js";import{A as n,Bt as r,H as i,Ht as a,M as o,Mt as s,N as c,Nt as l,O as u,P as d,Rt as f,S as p,Vt as m,c as h,d as ee,f as g,i as te,j as ne,jt as re,n as _,nt as ie,p as v,q as ae,st as oe,tt as se,u as ce,w as le}from"./BxgK-Qg5.js";import{t as y}from"./CDhAqXQ0.js";import{c as b,l as ue,o as de,t as x,x as S}from"./v6cwp8pn.js";import{a as fe,r as pe,t as C}from"./BMdUY40a.js";import{a as me,i as he,n as ge,r as _e,t as ve,u as ye}from"./DFgPg_Q-.js";import{t as be}from"./DBGCqf-u.js";import{l as xe}from"./BCKo5sbo.js";import{s as w}from"./index-34OMn4rb.js";function Se(e,t){let{left:n,top:r,width:i,height:a}=t.getBoundingClientRect(),o={x:e.x-n,y:e.y-r},c={x:s(o.x/i),y:s(o.y/a)};function l(e={}){let{dir:t=`ltr`,orientation:n=`horizontal`,inverted:r}=e,i=typeof r==`object`?r.x:r,a=typeof r==`object`?r.y:r;return n===`horizontal`?t===`rtl`||i?1-c.x:c.x:a?1-c.y:c.y}return{offset:o,percent:c,getPercentValue:l}}var[T,E]=a({name:`RatingGroupContext`,hookName:`useRatingGroupContext`,providerName:`<RatingGroupProvider />`}),D=e(y(),1),O=e(t(),1),k=(0,O.forwardRef)((e,t)=>{let n=r(E().getControlProps(),e);return(0,D.jsx)(d.div,{...n,ref:t})});k.displayName=`RatingGroupControl`;var A=(0,O.forwardRef)((e,t)=>{let n=r(E().getHiddenInputProps(),e),i=C();return(0,D.jsx)(d.input,{"aria-describedby":i?.ariaDescribedby,...n,ref:t})});A.displayName=`RatingGroupHiddenInput`;var[j,Ce]=a({name:`RatingGroupItemContext`,hookName:`useRatingGroupItemContext`,providerName:`<RatingGroupItemProvider />`}),we=o(),M=(0,O.forwardRef)((e,t)=>{let[n,i]=we(e,[`index`]),a=E(),o=r(a.getItemProps(n),i);return(0,D.jsx)(j,{value:a.getItemState(n),children:(0,D.jsx)(d.span,{...o,ref:t})})});M.displayName=`RatingGroupItem`;var N=(0,O.forwardRef)((e,t)=>{let n=r(E().getLabelProps(),e);return(0,D.jsx)(d.label,{...n,ref:t})});N.displayName=`RatingGroupLabel`;var Te=e=>e.ids?.root??`rating:${e.id}`,P=e=>e.ids?.label??`rating:${e.id}:label`,F=e=>e.ids?.hiddenInput??`rating:${e.id}:input`,I=e=>e.ids?.control??`rating:${e.id}:control`,Ee=(e,t)=>e.ids?.item?.(t)??`rating:${e.id}:item:${t}`,L=e=>e.getById(I(e)),R=(e,t)=>{let n=`[role=radio][aria-posinset='${Math.ceil(t)}']`;return i(L(e),n)},z=e=>e.getById(F(e)),De=(e,t)=>{let n=z(e);n&&pe(n,{value:t})};function Oe(e,t){let{context:n,send:r,prop:i,scope:a,computed:o}=e,s=o(`isInteractive`),c=o(`isDisabled`),u=!!i(`readOnly`),d=!!i(`required`),f=n.get(`value`),p=n.get(`hoveredValue`),m=i(`translations`);function h(e){let t=o(`isHovering`)?p:f,n=Math.ceil(t)===e.index;return{highlighted:e.index<=t||n,half:n&&Math.abs(t-e.index)===.5,checked:n||f<=0&&e.index===1}}return{hovering:o(`isHovering`),value:f,hoveredValue:p,count:i(`count`),items:Array.from({length:i(`count`)}).map((e,t)=>t+1),setValue(e){r({type:`SET_VALUE`,value:e})},clearValue(){r({type:`CLEAR_VALUE`})},getRootProps(){return t.element({...w.root.attrs,dir:i(`dir`),id:Te(a)})},getHiddenInputProps(){return t.input({name:i(`name`),form:i(`form`),type:`text`,hidden:!0,disabled:c,readOnly:u,required:i(`required`),id:F(a),defaultValue:f})},getLabelProps(){return t.label({...w.label.attrs,dir:i(`dir`),id:P(a),"data-disabled":l(c),"data-required":l(d),htmlFor:F(a),onClick(e){e.defaultPrevented||s&&(e.preventDefault(),R(a,Math.max(1,n.get(`value`)))?.focus({preventScroll:!0}))}})},getControlProps(){return t.element({id:I(a),...w.control.attrs,dir:i(`dir`),role:`radiogroup`,"aria-orientation":`horizontal`,"aria-labelledby":P(a),"aria-readonly":re(u),"data-readonly":l(u),"data-disabled":l(c),onPointerMove(e){s&&e.pointerType!==`touch`&&r({type:`GROUP_POINTER_OVER`})},onPointerLeave(e){s&&e.pointerType!==`touch`&&r({type:`GROUP_POINTER_LEAVE`})}})},getItemState:h,getItemProps(e){let{index:n}=e,o=h(e),d=m.ratingValueText(n);return t.element({...w.item.attrs,dir:i(`dir`),id:Ee(a,n.toString()),role:`radio`,tabIndex:(()=>{if(u)return o.checked?0:void 0;if(!c)return o.checked?0:-1})(),"aria-roledescription":`rating`,"aria-label":d,"aria-disabled":c,"data-disabled":l(c),"data-readonly":l(u),"aria-setsize":i(`count`),"aria-checked":o.checked,"data-checked":l(o.checked),"aria-posinset":n,"data-highlighted":l(o.highlighted),"data-half":l(o.half),onPointerDown(e){s&&oe(e)&&e.preventDefault()},onPointerMove(e){s&&r({type:`POINTER_OVER`,index:n,isMidway:Se(ie(e),e.currentTarget).getPercentValue({orientation:`horizontal`,dir:i(`dir`)})<.5})},onKeyDown(e){if(e.defaultPrevented||!s)return;let t={ArrowLeft(){r({type:`ARROW_LEFT`})},ArrowRight(){r({type:`ARROW_RIGHT`})},ArrowUp(){r({type:`ARROW_LEFT`})},ArrowDown(){r({type:`ARROW_RIGHT`})},Space(){r({type:`SPACE`,value:n})},Home(){r({type:`HOME`})},End(){r({type:`END`})}}[se(e,{dir:i(`dir`)})];t&&(e.preventDefault(),t(e))},onClick(){s&&r({type:`CLICK`,value:n})},onFocus(){s&&r({type:`FOCUS`})},onBlur(){s&&r({type:`BLUR`})}})}}}var ke=f({props({props:e}){return{name:`rating`,count:5,dir:`ltr`,defaultValue:-1,...e,translations:{ratingValueText:e=>`${e} stars`,...e.translations}}},initialState(){return`idle`},context({prop:e,bindable:t}){return{value:t(()=>({defaultValue:e(`defaultValue`),value:e(`value`),onChange(t){e(`onValueChange`)?.({value:t})}})),hoveredValue:t(()=>({defaultValue:-1,onChange(t){e(`onHoverChange`)?.({hoveredValue:t})}})),fieldsetDisabled:t(()=>({defaultValue:!1}))}},watch({track:e,action:t,prop:n,context:r}){e([()=>n(`allowHalf`)],()=>{t([`roundValueIfNeeded`])}),e([()=>r.get(`value`)],()=>{t([`dispatchChangeEvent`])})},computed:{isDisabled:({context:e,prop:t})=>!!t(`disabled`)||e.get(`fieldsetDisabled`),isInteractive:({computed:e,prop:t})=>!(e(`isDisabled`)||t(`readOnly`)),isHovering:({context:e})=>e.get(`hoveredValue`)>-1},effects:[`trackFormControlState`],on:{SET_VALUE:{actions:[`setValue`]},CLEAR_VALUE:{actions:[`clearValue`]}},states:{idle:{entry:[`clearHoveredValue`],on:{GROUP_POINTER_OVER:{target:`hover`},FOCUS:{target:`focus`},CLICK:{actions:[`setValue`,`focusActiveRadio`]}}},focus:{on:{POINTER_OVER:{actions:[`setHoveredValue`]},GROUP_POINTER_LEAVE:{actions:[`clearHoveredValue`]},BLUR:{target:`idle`},SPACE:{guard:`isValueEmpty`,actions:[`setValue`]},CLICK:{actions:[`setValue`,`focusActiveRadio`]},ARROW_LEFT:{actions:[`setPrevValue`,`focusActiveRadio`]},ARROW_RIGHT:{actions:[`setNextValue`,`focusActiveRadio`]},HOME:{actions:[`setValueToMin`,`focusActiveRadio`]},END:{actions:[`setValueToMax`,`focusActiveRadio`]}}},hover:{on:{POINTER_OVER:{actions:[`setHoveredValue`]},GROUP_POINTER_LEAVE:[{guard:`isRadioFocused`,target:`focus`,actions:[`clearHoveredValue`]},{target:`idle`,actions:[`clearHoveredValue`]}],CLICK:{actions:[`setValue`,`focusActiveRadio`]}}}},implementations:{guards:{isInteractive:({prop:e})=>!(e(`disabled`)||e(`readOnly`)),isHoveredValueEmpty:({context:e})=>e.get(`hoveredValue`)===-1,isValueEmpty:({context:e})=>e.get(`value`)<=0,isRadioFocused:({scope:e})=>!!L(e)?.contains(e.getActiveElement())},effects:{trackFormControlState({context:e,scope:t}){return fe(z(t),{onFieldsetDisabledChange(t){e.set(`fieldsetDisabled`,t)},onFormReset(){e.set(`value`,e.initial(`value`))}})}},actions:{clearHoveredValue({context:e}){e.set(`hoveredValue`,-1)},focusActiveRadio({scope:e,context:t}){ae(()=>R(e,t.get(`value`))?.focus())},setPrevValue({context:e,prop:t}){let n=t(`allowHalf`)?.5:1;e.set(`value`,Math.max(0,e.get(`value`)-n))},setNextValue({context:e,prop:t}){let n=t(`allowHalf`)?.5:1,r=e.get(`value`)===-1?0:e.get(`value`);e.set(`value`,Math.min(t(`count`),r+n))},setValueToMin({context:e}){e.set(`value`,1)},setValueToMax({context:e,prop:t}){e.set(`value`,t(`count`))},setValue({context:e,event:t}){let n=e.get(`hoveredValue`),r=n===-1?t.value:n;e.set(`value`,r)},clearValue({context:e}){e.set(`value`,-1)},setHoveredValue({context:e,prop:t,event:n}){let r=t(`allowHalf`)&&n.isMidway?.5:0;e.set(`hoveredValue`,n.index-r)},roundValueIfNeeded({context:e,prop:t}){t(`allowHalf`)||e.set(`value`,Math.round(e.get(`value`)))},dispatchChangeEvent({context:e,scope:t}){De(t,e.get(`value`))}}}}),Ae=e=>{let t=(0,O.useId)(),{getRootNode:r}=m(),{dir:i}=c(),a=C();return Oe(ne(ke,{id:t,ids:{label:a?.ids.label,hiddenInput:a?.ids.control},dir:i,disabled:a?.disabled,readOnly:a?.readOnly,required:a?.required,getRootNode:r,...e}),n)},je=o(),B=(0,O.forwardRef)((e,t)=>{let[n,i]=je(e,[`allowHalf`,`autoFocus`,`count`,`defaultValue`,`disabled`,`form`,`id`,`ids`,`name`,`onHoverChange`,`onValueChange`,`readOnly`,`required`,`translations`,`value`]),a=Ae(n),o=r(a.getRootProps(),i);return(0,D.jsx)(T,{value:a,children:(0,D.jsx)(d.div,{...o,ref:t})})});B.displayName=`RatingGroupRoot`;var Me=o(),V=(0,O.forwardRef)((e,t)=>{let[{value:n},i]=Me(e,[`value`]),a=r(n.getRootProps(),i);return(0,D.jsx)(T,{value:n,children:(0,D.jsx)(d.div,{...a,ref:t})})});V.displayName=`RatingGroupRootProvider`;function Ne(e){let{when:t,fallback:n,children:r}=e,i;return i=t?typeof r==`function`?r(t):r:n,(0,O.isValidElement)(i)?i:(0,D.jsx)(D.Fragment,{children:i})}var{withContext:Pe,PropsProvider:Fe}=de({key:`container`}),H=Pe(`div`);H.displayName=`Container`;function Ie(e){let{each:t,fallback:n,children:r}=e;return t?.length===0?n||null:t?.map(r)}var{withProvider:U,withContext:W,useStyles:Le,PropsProvider:Re}=le({key:`ratingGroup`});U(V,`root`,{forwardAsChild:!0});var ze=U(B,`root`,{forwardAsChild:!0}),Be=W(N,`label`,{forwardAsChild:!0}),G=W(M,`item`,{forwardAsChild:!0});function K(e,t){return(0,O.isValidElement)(e)?(0,O.cloneElement)(e,{[`data-${t}`]:``,"aria-hidden":``}):null}var q=(0,O.forwardRef)(function(e,t){let{icon:n=(0,D.jsx)(p,{}),...r}=e,i=Le(),a=Ce();return(0,D.jsxs)(ue.span,{...r,"data-highlighted":a.highlighted?``:void 0,"data-checked":a.checked?``:void 0,"data-half":a.half?``:void 0,css:[i.itemIndicator,e.css],ref:t,children:[K(n,`bg`),K(n,`fg`)]})}),Ve=W(k,`control`,{forwardAsChild:!0,defaultProps:{children:(0,D.jsx)(e=>(0,D.jsx)(Ie,{each:E().items,children:t=>(0,D.jsx)(G,{index:t,...e,children:(0,D.jsx)(q,{})},t)}),{})}}),He=A;function Ue(e){return ce({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,strokeWidth:`2`,d:`M4,4 L20,4 L20,20 L4,20 L4,4 Z M6,6 L18,6 L18,18 L6,18 L6,6 Z M8,8 L16,8 L16,16 L8,16 L8,8 Z M10,10 L14,10 L14,14 L10,14 L10,10 Z M11,11 L13,11 L13,13 L11,13 L11,11 Z`},child:[]}]})(e)}function J(e){return g(Z,{...e})}function Y(e){return g(Z,{...e})}function We(e){let{withCarousel:t,...n}=e;return g(J,{...n,content:t?g(_.Root,{slideCount:1,children:g(_.Item,{index:1,children:g(x,{w:`100%`,aspectRatio:`16 / 9`})},1)}):g(x,{w:`100%`,aspectRatio:`16 / 9`}),title:g(x,{h:`1lh`}),selectTarget:{selectId:void 0,location:void 0},children:g(x,{w:`100%`,h:`3em`})})}function X(e){let{withCarousel:t,...n}=e;return g(Y,{...n,content:t?g(_.Root,{slideCount:1,children:g(_.Item,{index:1,children:g(x,{w:`100%`,aspectRatio:`16 / 9`})},1)}):g(x,{w:`100%`,aspectRatio:`16 / 9`}),title:g(x,{h:`1lh`}),level:0,selectTarget:{selectId:void 0,location:void 0},children:g(x,{w:`100%`,h:`3em`})})}var Ge=e=>{let[t,n]=(0,O.useState)({selectId:void 0,location:void 0}),r=xe(),i=r.hash?.substr(1);return(0,O.useEffect)(()=>{i&&e===r.pathname&&n({selectId:i,location:r})},[n,r,i]),t};function Z(e){let{id:t,content:n,title:r,level:i,selectTarget:a,children:o}=e,s=u({smDown:$.base,sm:$.sm,mmd:$.mmd,lg:$.lg},{ssr:!1})||$.base,c=(0,O.useRef)(null),[l,d]=(0,O.useState)(!1),f=e=>{if(d(e.open),e.open)return;let t=c.current?.getBoundingClientRect();t&&t.top<0&&c.current?.scrollIntoView({behavior:`smooth`,block:`start`})},[p,m]=(0,O.useState)(!1);return(0,O.useEffect)(()=>{t&&a.selectId&&c.current&&m(()=>{let e=a.selectId===t;return e&&c.current?.scrollIntoView({behavior:`smooth`,block:`start`}),e})},[m,a,c.current]),v(H,{as:`article`,fluid:!0,borderRadius:`md`,shadow:`md`,css:[Q.style,p?Q.selectStyle:void 0],id:t,children:[g(b,{ref:c,h:`var(--chakra-spacing-4)`}),v(b,{css:[s.style,$.common.style],children:[v(b,{className:`content-area`,children:[g(b,{className:`content-block`,children:n}),v(b,{className:`title-block`,children:[g(ye,{as:`h5`,className:`title`,fontWeight:`bold`,children:r}),g(qe,{defaultValue:i})]})]}),g(b,{className:`explanation`,children:v(he,{open:l,onOpenChange:f,lazyMount:!0,children:[v(b,{as:`div`,paddingY:l?`0`:`4`,transition:`padding-block 0.5s`,display:`flex`,gap:`2`,alignItems:`center`,w:`fit-content`,style:{position:`sticky`,top:0,zIndex:1},children:[g(me,{asChild:!0,"aria-controls":``,children:v(te,{children:[g(_e,{transition:`transform 0.2s`,_open:{transform:`rotateZ(90deg)`},children:g(h,{})}),g(ge,{children:e=>e.open?`『開いた説明』を閉じる`:`『裏側や作り方の説明』を開いて見る`})]})}),g(Ne,{when:!l,children:g(Je,{})})]}),g(ve,{children:g(O.Suspense,{fallback:g(Ke,{}),children:g(be,{padding:`0.5em 0`,gap:`1em`,alignItems:`start`,children:o})})})]})})]}),g(b,{h:`var(--chakra-spacing-4)`})]})}function Ke(){return g(x,{w:`100%`,h:`20em`})}function qe(e){let{defaultValue:t}=e;return g(ee,{children:(t===void 0?void 0:!0)&&v(ze,{className:`level`,count:5,readOnly:!0,allowHalf:!0,size:`xs`,colorPalette:`red`,...e,children:[g(He,{}),g(Be,{"aria-label":`レベル：${t}`,children:`レベル：`}),g(Ve,{children:Array.from({length:5}).map((e,t)=>g(G,{index:t+1,tabIndex:-1,children:g(q,{icon:g(Ue,{})})},t))})]})})}var Q={style:S`
    background-image: url('${`/crafts/`}/substrate_h.jpg');
    background-repeat: repeat repeat;
  `,selectStyle:S`
    /*border: 2px solid rgb(255 100 100 / 0.6);*/
    box-shadow: 0px 0px 2px 2px rgb(255 100 100 / 0.4), 0px 0px 2px 4px rgb(255 255 255 / 0.7);
  `},$={base:{style:S`
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
    `},sm:{style:S`
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
    `},mmd:{style:S`
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
    `},lg:{style:S`
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
    `},common:{style:S`
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
    `}};function Je(){return g(b,{css:Ye.bubble,children:`このボタンをクリックして`})}var Ye={bubble:S`
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
  `};export{Ge as a,We as i,X as n,H as o,J as r,Y as t};