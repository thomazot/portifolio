"use strict";(self.webpackChunknext_14=self.webpackChunknext_14||[]).push([[222],{"./src/forms/button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default_parameters,_Default_parameters_docs,_Default_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/forms/button/index.tsx").$,title:"Forms/Button"},Default={args:{children:"Button"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    children: 'Button'\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/forms/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.0_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@6.1.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/styled-components/dist/styled-components.browser.esm.js");const device_lg="1280px",media_lg=style=>(0,styled_components_browser_esm.AH)(["@media (min-width:","){",";}"],device_lg,style),SModifiedButton_transparent=_=>(0,styled_components_browser_esm.AH)(["background:transparent;color:currentColor;"]),SModifiedButton_default=theme=>(0,styled_components_browser_esm.AH)(["background:",";color:",";border-radius:5px;&:disabled{background:",";color:",";}",""],theme.color.brand.fourth,theme.color.brand.tertiary,theme.color.disabled,theme.color["disabled-contrast"],media_lg((0,styled_components_browser_esm.AH)(["&:hover{background:",";border-color:",";box-shadow:0 0 3px ",";}"],theme.color.main,theme.color["main-contrast"],theme.color["main-contrast"]))),SModifiedButton_loading=_=>(0,styled_components_browser_esm.AH)(["@keyframes pulse{0%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,0,0,0.7);opacity:0.3;}70%{transform:scale(1);box-shadow:0 0 0 10px rgba(0,0,0,0);opacity:0.1;}100%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,0,0,0);opacity:0.3;}}opacity:0.1;pointer-events:none;transform:scale(1);animation:pulse 1s infinite;"]),SButton=styled_components_browser_esm.Ay.button.withConfig({componentId:"sc-3bc7957f-0"})(["",""],(param=>{let{theme,$transparent,$loading}=param;return(0,styled_components_browser_esm.AH)([""," "," border:solid 1px ",";border:0;padding:8px;font-size:",";cursor:pointer;&:disabled{opacity:0.5;cursor:not-allowed;}"],$transparent?SModifiedButton_transparent(theme):SModifiedButton_default(theme),!0===$loading&&SModifiedButton_loading(theme),theme.color.brand.secondary,theme.size.md)})),Button=param=>{let{children,transparent,loading,...props}=param;return(0,jsx_runtime.jsx)(SButton,{...props,$transparent:!!transparent,$loading:loading,children})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},transparent:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);