(("undefined"!=typeof self?self:this).webpackJsonp__wix_thunderbolt_elements=("undefined"!=typeof self?self:this).webpackJsonp__wix_thunderbolt_elements||[]).push([[346],{1590:function(e,n,t){e.exports={TextAreaDefaultSkin:"_1VpqH",textAreaDefaultSkin:"_1VpqH",textarea:"_2Brtg","validation-indication":"Tbq3e",validationIndication:"Tbq3e",label:"lW_XI",hasLabel:"_2uzXQ","required-indication":"_1CjOv",requiredIndication:"_1CjOv",ResponsiveTextAreaDefaultSkin:"_1hSLd",responsiveTextAreaDefaultSkin:"_1hSLd"}},488:function(e,n,t){"use strict";t.r(n);n.default=function(e){var n=e.updateProps;return{onInput:function(e){n({value:e.currentTarget.value})},setValidityIndication:function(e){n({shouldShowValidityIndication:e})}}}},590:function(e,n,t){"use strict";t.r(n);var i=t(5),a=t(181),o=t(672),r=t.n(o),u=t(676),l=t(1590),s=t.n(l),d=function(){},c=a.forwardRef((function(e,n){var t,o=e.skin,l=e.id,c=e.value,f=void 0===c?"":c,v=e.label,_=e.placeholder,p=e.readOnly,b=e.required,h=e.isDisabled,m=e.maxLength,x=e.isResponsive,g=e.shouldShowValidityIndication,y=e.validateValueAndShowIndication,k=void 0===y?d:y,w=e.setValidityIndication,I=void 0===w?d:w,S=e.onBlur,C=void 0===S?d:S,D=e.onFocus,R=void 0===D?d:D,q=e.onKeyPress,O=void 0===q?d:q,V=e.onInput,E=void 0===V?d:V,L=e.onChange,T=void 0===L?d:L,j=e.onClick,A=void 0===j?d:j,M=e.onDblClick,B=void 0===M?d:M,F=e.onMouseEnter,H=void 0===F?d:F,N=e.onMouseLeave,J=void 0===N?d:N,K=a.useState(),P=K[0],X=K[1],z=a.useRef(null);a.useImperativeHandle(n,(function(){return{focus:function(){var e;null===(e=z.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=z.current)||void 0===e||e.blur()},setCustomValidity:function(e){var n;"message"===e.type&&(null===(n=z.current)||void 0===n||n.setCustomValidity(e.message))}}}));var Q=!!v,W=r()(s.a[o],((t={})[s.a.hasLabel]=Q,t[s.a.requiredIndication]=b,t[s.a.validationIndication]=!!g,t));return a.createElement("div",{id:l,className:W,onClick:function(e){h||A(e)},onDoubleClick:function(e){h||B(e)},onMouseEnter:function(e){h||H(e)},onMouseLeave:function(e){h||J(e)}},a.createElement("label",{htmlFor:"textarea_"+l,className:s.a.label},v),a.createElement("textarea",{ref:z,id:"textarea_"+l,className:r()(s.a.textarea,u.a),rows:x?1:void 0,value:f,onFocus:R,onKeyDown:O,onChange:function(e){X(!0),I(!1),e.type="input",E(e)},onBlur:function(e){C(e),P&&T(Object(i.__assign)(Object(i.__assign)({},e),{type:"change"})),X(!1),k({value:e.target.value})},placeholder:_,readOnly:p,required:b,maxLength:null===m?void 0:m,disabled:h}))})),f={TextAreaDefaultSkin:a.forwardRef((function(e,n){return a.createElement(c,Object(i.__assign)({isResponsive:!1,ref:n},e))})),ResponsiveTextAreaDefaultSkin:a.forwardRef((function(e,n){return a.createElement(c,Object(i.__assign)({isResponsive:!0,ref:n},e))}))};n.default=a.forwardRef((function(e,n){var t=e.skin,o=f[t];return a.createElement(o,Object(i.__assign)({ref:n},e))}))}}]);
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements/dist/TextAreaInput.ace67541.chunk.min.js.map