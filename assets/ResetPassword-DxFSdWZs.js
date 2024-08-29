import{u as N,j as e,b as g,_ as c,r as f,l as v}from"./index-CxRPH69u.js";import{u as b}from"./formik.esm-CaFPimLK.js";function S(){const l=N(),r=b({initialValues:{email:"",newPassword:""},onSubmit:async d=>{try{const{data:o}=await g.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",d);o&&(c.success("Password changed successfully",{style:{background:"#22d210",color:"#fff"}}),l("/freshcart/login")),o.statusMsg==="success"?console.log("Password reset successful"):console.log()}catch(o){c.error(o.response.data.message,{style:{background:"#f15757",color:"#fff"}})}finally{}}});return e.jsx("div",{className:"flex justify-center mt-14 items-center",children:e.jsxs("form",{onSubmit:r.handleSubmit,className:"bg-glass  p-8 shadow-lg rounded-lg w-full max-w-md flex flex-col items-center gap-6",children:[e.jsx("p",{className:"text-center text-2xl font-bold text-blue-800",children:"New Password"}),e.jsxs("div",{className:"w-full mb-5",children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900",children:"Your email"}),e.jsx("input",{name:"email",type:"email",id:"email",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.email,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"name@mail.com"})]}),e.jsxs("div",{className:"w-full mb-5",children:[e.jsx("label",{htmlFor:"newPassword",className:"block mb-2 text-sm font-medium text-gray-900",children:"Your New Password"}),e.jsx("input",{name:"newPassword",type:"password",id:"newPassword",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.newPassword,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Your new password"})]}),e.jsx("button",{type:"submit",className:"w-full h-12 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5",children:"Submit"})]})})}function k(){const[l,i]=f.useState(""),[r,d]=f.useState(null),[o,u]=f.useState(null),n=b({initialValues:{resetCode:""},onSubmit:async s=>{try{const{data:t}=await g.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",JSON.stringify({resetCode:s.resetCode}),{headers:{"Content-Type":"application/json"}});t.status=="Success"?(c.success("Type the email then the new password",{style:{background:"#22d210",color:"#fff"}}),d(!0)):console.error("Failed to reset password:",t)}catch(t){console.error("An error occurred. Please try again.",t),c.error(t.response.data.message,{style:{background:"#f15757",color:"#fff"}})}finally{}}}),y=(s,t)=>{const{value:a}=t.target;if(!/^\d$/.test(a)&&a!=="")return;const m=l.substring(0,s)+a+l.substring(s+1);if(i(m),n.setFieldValue("resetCode",m),a&&s<5){const p=document.getElementById(`otp-input${s+1}`);p&&p.focus()}},j=(s,t)=>{if(t.key==="Backspace"&&!t.target.value&&s>0){const a=document.getElementById(`otp-input${s-1}`);if(a){const m=l.substring(0,s-1)+l.substring(s);i(m),n.setFieldValue("resetCode",m),a.focus()}}};if(r)return e.jsx(S,{});function h(){u(!0)}return o?e.jsx(w,{}):e.jsx("div",{className:"flex justify-center items-center p-4",children:e.jsxs("div",{className:"bg-glass p-8 shadow-lg rounded-lg w-full max-w-md flex flex-col items-center gap-6 relative",children:[e.jsx("span",{className:"text-xl font-bold text-black",children:"Enter verification code"}),e.jsx("p",{className:"text-sm text-black text-center leading-5",children:"We have sent a verification code to your Email"}),e.jsxs("form",{onSubmit:n.handleSubmit,children:[e.jsx("div",{className:"w-full flex flex-row gap-2 items-center justify-center ",children:[...Array(6)].map((s,t)=>e.jsx("input",{id:`otp-input${t}`,value:l[t]||"",maxLength:"1",type:"text",onChange:a=>y(t,a),onKeyDown:a=>j(t,a),className:"bg-glass w-12 h-12 text-center border-none rounded-md caret-indigo-500 text-gray-800 outline-none font-semibold focus:bg-indigo-100 transition duration-300"},t))}),e.jsx("button",{type:"submit",className:"w-full h-12 mt-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-400 transition duration-200",children:"Verify"})]}),e.jsx("button",{onClick:h,className:"absolute  top-4 right-4 bg-red-700 text-white text-black text-lg rounded-full w-8 h-8 border-none shadow-md flex items-center justify-center cursor-pointer",children:"×"}),e.jsxs("p",{className:"text-sm text-black w-full flex flex-col items-center justify-center gap-1",children:["Not Your Email ?",e.jsx("button",{onClick:h,className:"bg-transparent border-none text-indigo-500 text-lg font-semibold cursor-pointer",children:"Change Email"})]})]})})}function w(){const[l,i]=f.useState(!1),[r,d]=f.useState(!1),u=b({initialValues:{email:""},onSubmit:async x=>{i(!0);try{const{data:n}=await g.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",x);n.statusMsg==="success"&&(d(!0),c.success(n.message,{style:{background:"#22d210",color:"#fff"}}))}catch{c.error("An error occurred. Please try again.",{style:{background:"#f15757",color:"#fff"}})}finally{i(!1)}}});return l?e.jsx(v,{}):r?e.jsx(k,{}):e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("form",{onSubmit:u.handleSubmit,className:"bg-glass p-8 shadow-lg rounded-lg w-full max-w-md flex flex-col items-center gap-6",children:[e.jsx("p",{className:"text-center text-2xl font-bold text-blue-800",children:"Reset Password"}),e.jsxs("div",{className:"w-full mb-5",children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900",children:"Your email"}),e.jsx("input",{name:"email",type:"email",id:"email",onBlur:u.handleBlur,onChange:u.handleChange,value:u.values.email,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Email@mail.com"})]}),e.jsx("button",{type:"submit",className:"w-full h-12 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5",children:"Submit"})]})})}const O=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));export{k as O,O as R};
