let mark_all=document.querySelector(".mark_all");
let notification_container=document.querySelectorAll(".notification_container");
let quantity=document.querySelector(".quantity");
let new_notification=document.querySelectorAll(".new")
let current=3;

const readAll=()=>{
    notification_container.forEach((item)=>{
        item.onclick=(e)=>{
            let active=e.target.closest(".active");
            if(active){
              active.classList.remove("active")
               active.querySelector(".new").remove();
               current--;
               quantity.innerHTML=current
            }
        }
    })
}
readAll()

mark_all.onclick=()=>{
    current=0;
    quantity.innerHTML=current
document.querySelectorAll(".active").forEach(item=>{
    item.classList.remove("active");
    item.querySelector(".new").remove()
})
}