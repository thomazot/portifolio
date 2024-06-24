"use strict";(self.webpackChunknext_14=self.webpackChunknext_14||[]).push([[77],{"./src/commons/link/link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default_parameters,_Default_parameters_docs,_Default_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/commons/link/index.tsx").N,title:"Commons/Link"},Default={args:{children:"Link default",href:"/home"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    children: 'Link default',\n    href: '/home'\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/commons/link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/index.ts");const SLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay)(next_link__WEBPACK_IMPORTED_MODULE_1___default()).withConfig({componentId:"sc-d4349a6b-0"})(["",""],(param=>{let{$style,$fontSize,$color}=param;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["text-decoration:none;font-weight:normal;"," "," "," &:active,&:focus{outline:none;}"],$style&&$style,$color?(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["color:",";"],_helpers__WEBPACK_IMPORTED_MODULE_2__.l[$color]):(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["color:currentColor;"]),$fontSize&&(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["font-size:",";"],_helpers__WEBPACK_IMPORTED_MODULE_2__.F[$fontSize]))})),Link=param=>{let{children,color="current-color",size="body",style,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SLink,{$color:color,$fontSize:size,$style:style,...props,children})};Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},target:{required:!1,tsType:{name:"HTMLAttributeAnchorTarget"},description:""},color:{required:!1,tsType:{name:"union",raw:"keyof typeof COLORS",elements:[{name:"literal",value:"'primary-one'"},{name:"literal",value:"'primary-two'"},{name:"literal",value:"'primary-three'"},{name:"literal",value:"'secondary-one'"},{name:"literal",value:"'secondary-two'"},{name:"literal",value:"'secondary-three'"},{name:"literal",value:"'secondary-four'"},{name:"literal",value:"'accent-one'"},{name:"literal",value:"'accent-two'"},{name:"literal",value:"'accent-three'"},{name:"literal",value:"'accent-four'"},{name:"literal",value:"lines"},{name:"literal",value:"'gradients-one'"},{name:"literal",value:"'gradients-two'"},{name:"literal",value:"'current-color'"}]},description:"",defaultValue:{value:"'current-color'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"keyof typeof SIZES",elements:[{name:"literal",value:"title"},{name:"literal",value:"subtitle"},{name:"literal",value:"body"},{name:"literal",value:"lables"},{name:"literal",value:"code"}]},description:"",defaultValue:{value:"'body'",computed:!1}},style:{required:!1,tsType:{name:"RuleSet",elements:[{name:"object"}],raw:"RuleSet<object>"},description:""}}}},"./src/helpers/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>COLORS,F:()=>SIZES});var theme=__webpack_require__("./src/configs/theme.ts");const COLORS=theme.S.color,SIZES=theme.S.size}}]);