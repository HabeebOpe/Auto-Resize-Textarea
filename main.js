const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", e=>{
   
   textarea.style.height = "auto";
   
   let height = e.target.scrollHeight;
   
   textarea.style.height = ` ${height}px `;
})
 
