"use strict";(self.webpackChunknext_14=self.webpackChunknext_14||[]).push([[789],{"./src/commons/card/card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default_parameters,_Default_parameters_docs,_Default_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/commons/card/index.tsx").Z,title:"Commons/Card"},Default={args:{children:"Text default"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    children: 'Text default'\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/commons/card/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/commons/view/index.tsx");const SContent=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay)(_view__WEBPACK_IMPORTED_MODULE_2__.S).withConfig({componentId:"sc-7ea9fff-0"})(["box-shadow:0 0 10px rgba(0,0,0,0.5);padding:16px;border-radius:5px;background:#fff;"]),Card=param=>{let{children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SContent,{...props,children})};Card.__docgenInfo={description:"",methods:[],displayName:"Card"}},"./src/commons/view/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>View});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SView=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({componentId:"sc-3dc79919-0"})(["",""],(param=>{let{$position,$top,$bottom,$left,$right,$display,$justifyContent,$flexDirection,$alignItems,$height,$gap,$background,$radial}=param;return(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)([""," "," "," "," "," "," "," "," "," "," "," "," "," list-style:none;color:currentColor;"],$display&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["display:",";"],$display),$justifyContent&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["justify-content:",";"],$justifyContent),$flexDirection&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["flex-direction:",";"],$flexDirection),$alignItems&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["align-items:",";"],$alignItems),$height&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["min-height:",";"],$height),$gap&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["gap:",";"],$gap),$background&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["background:",";"],$background),$position&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["position:",";"],$position),$top&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["top:",";"],$top),$bottom&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["bottom:",";"],$bottom),$left&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["left:",";"],$left),$right&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["right:",";"],$right),"true"===$radial&&$background&&(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["background:radial-gradient( 300px circle at 40% 40%,rgba(67,217,173,0.1),transparent ) 0%,radial-gradient( 300px circle at 60% 60%,rgba(77,91,206,0.1),transparent ) 0%,",";"],$background))})),View=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{children,as="div",...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SView,{as,ref,...props,children})}));View.displayName="View",View.__docgenInfo={description:"",methods:[],displayName:"View",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1}}}}}]);