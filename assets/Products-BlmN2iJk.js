import{r as s,W as b,C as y,j as e,l as v,_ as c,b as C}from"./index-CkReQHy5.js";import{R as L}from"./RecentProducts-B8aGDB8m.js";import{u as N}from"./useQuery-DJ-LWuIC.js";import{P}from"./ProductItem-Dt-RlKK_.js";function k(){const{wishList:r,removeItem:o,addtoWashList:n}=s.useContext(b),{addProductToCart:i}=s.useContext(y),[u,d]=s.useState(!1),[x,f]=s.useState(null);s.useState(r);function m(){return C.get("https://ecommerce.routemisr.com/api/v1/products")}const{data:l,isError:h,error:S,isLoading:g,isFetching:F}=N({queryKey:["allProducts"],queryFn:m});if(g)return e.jsx(v,{});if(h)return e.jsx("div",{className:"text-center text-red-500 text-2xl mt-10",children:e.jsx("p",{children:"Something went wrong"})});async function p(t){d(!0),f(t);try{let a=await i(t);a&&a.status===200?c.success(a.data.message,{style:{background:"#22d210",color:"#fff"}}):a.response.data.message=="Invalid Token. please login again"&&c.error("Login First To Add Product To Cart",{style:{background:"#f15757",color:"#fff"}})}catch{console.log("error","=",err.data),c.error("An error occurred while adding product to cart. Please try again later.",{style:{background:"#f15757",color:"#fff"}})}finally{d(!1)}}function j(t){console.log(t),n(t)}function w(t){console.log(t),o(t)}return e.jsx(e.Fragment,{children:e.jsx("div",{className:"row mt-10 mt-16",children:l==null?void 0:l.data.data.map(t=>e.jsx(P,{product:t,loading:u,cruntid:x,addToCart:p,AddWishList:()=>j(t.id),removewashList:()=>w(t.id)},t.id))})})}function R(){const[r,o]=s.useState(null);s.useState(!1);const n=()=>{o(!0)},i=()=>{o(null)};return e.jsxs(e.Fragment,{children:[e.jsx(k,{}),r?e.jsx(L,{}):e.jsx("div",{className:"text-center",children:e.jsxs("button",{onClick:()=>n(),type:"button",className:"bg-white text-center w-56 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group",children:[e.jsx("div",{className:"bg-indigo-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500",children:e.jsx("i",{class:"fa-solid fa-eye text-white"})}),e.jsx("p",{className:"translate-x-2",children:"Show More"})]})}),r?e.jsx("div",{className:"text-center",children:e.jsxs("button",{onClick:()=>i(),type:"button",className:"bg-white text-center w-56 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group",children:[e.jsx("div",{className:"bg-indigo-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500",children:e.jsx("i",{class:"fa-solid fa-eye text-white"})}),e.jsx("p",{className:"translate-x-2",children:"Show Lees"})]})}):null]})}export{R as default};
