window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        document.querySelector("#navbar").classList.add("shadow-md", "duration-400")
    }else{
        document.querySelector("#navbar").classList.remove("shadow-md")
    }
})