//target error items
let errbox = document.querySelector(".error-box")

//target elements
let form = document.querySelector("#form")
let username = document.querySelector("#user-name")
let pass = document.querySelector("#pass")
let repass = document.querySelector("#cnfr-pass")
let checkbox = document.querySelector("#terms-condition")
let submitbtn = document.querySelector(".submit-btn")
let errlist = document.querySelector(".error-list")


//errors placed in dom through js
let errs=[]
console.log(errs)

submitbtn.addEventListener("click",function(i){
   if(username.value.length<6){
      i.preventDefault()
      errs[0] = "Usrname Should be Atleast 6 characters long"
   }

   if(pass.value.length<10){
      i.preventDefault()
      errs[1] = "Password Should be Atleast 10 characters long"
   }

   if(pass.value!==repass.value){
      i.preventDefault()
      errs[2] = "Password and confirm password does not match"
   }

   if(checkbox.checked==""){
      i.preventDefault(checkbox)
      errs[3] = "Please accept the terms and condition"
   }

   // if(i.preventDefault){
   //    list = document.createElement("li")
   //    errlist.appendChild(list)
   // }

   list.classList.add("erritem")

   //for show errors
   errs.forEach(showerrors)
  
   function showerrors(value,index,arr){
      if(errs.length>0){
         errbox.classList.add("show-error-box")
      }

      else{
         errbox.classList.remove("show-error-box")
      }
      // list.innerHTML = arr[0]
   }
}) 

console.log(errlist)