"use strict";(self.webpackChunknext_14=self.webpackChunknext_14||[]).push([[795],{"./src/commons/title/title.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default_parameters,_Default_parameters_docs,_Default_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/commons/title/index.tsx").h,title:"Commons/Title"},Default={args:{children:"Title H1"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    children: 'Title H1'\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/commons/title/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.0_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/next@14.2.0_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/.pnpm/styled-components@6.1.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js")),_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/index.ts");const STitle=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.h1.withConfig({componentId:"sc-40534547-0"})(["",""],(param=>{let{theme,$size,$weight,$color}=param;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["font-size:",";"," color:",";"],theme.heading[$size],$weight&&(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["font-weight:",";"],$weight),_helpers__WEBPACK_IMPORTED_MODULE_2__.l[$color])})),Title=param=>{let{children,size="h1",weight="bold",color="currentColor"}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(STitle,{$size:size,as:"subtitle"===size?"h5":size,$weight:weight,$color:color,children})};Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'h1'",computed:!1}},weight:{required:!1,tsType:{name:"Property.FontWeight"},description:"",defaultValue:{value:"'bold'",computed:!1}},color:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}}},"./src/helpers/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>COLORS,F:()=>SIZES});var theme=__webpack_require__("./src/configs/theme.ts");const{brand,...otherColors}=theme.S.color,COLORS={...brand,...otherColors,currentColor:"currentColor"},SIZES=theme.S.size}}]);