let mybutton = document.getElementById("cli")
let mydisp = document.getElementById("disp")


let start = () =>{
    mydisp.classList.remove("disp")
    
}


mybutton.addEventListener("click" , start)

//........


let myreadmore = document.getElementById("read-more")
let mymore = document.getElementById("moree")


let form = () =>{

    mymore.classList.toggle("more")
    

}


myreadmore.addEventListener("click" , form)



//........



let myreadmoree = document.getElementById("read-moree")
let mymoreee = document.getElementById("moreee")


let nos = () =>{

    mymoreee.classList.toggle("moree")

}


myreadmoree.addEventListener("click" , nos)



//.......



let myreadmoreee = document.getElementById("read-moreee")
let mymoreeee = document.getElementById("moreeee")


let bas = () =>{

    mymoreeee.classList.toggle("moreee")

}


myreadmoreee.addEventListener("click" , bas)



//..........



let myreadmoreeee = document.getElementById("read-moreeee")
let mymoreeeee = document.getElementById("moreeeee")


let la2 = () =>{

    mymoreeeee.classList.toggle("moreeee")

}


myreadmoreeee.addEventListener("click" , la2)



//.........


let myreadmoreeeee = document.getElementById("read-moreeeee")
let mymoreeeeee = document.getElementById("moreeeeee")


let fo2 = () =>{

    mymoreeeeee.classList.toggle("moreeeee")

}


myreadmoreeeee.addEventListener("click" , fo2)



//.........


let myreadmoreeeeee = document.getElementById("read-moreeeeee")
let mymoreeeeeee = document.getElementById("moreeeeeee")


let ta7t = () =>{

    mymoreeeeeee.classList.toggle("moreeeeee")

}


myreadmoreeeeee.addEventListener("click" , ta7t)


//..//

let mybu4 = document.getElementById("bu4")
let mycon5 = document.getElementById("con5")


let dos = () =>{

    mycon5.classList.remove("cont5")

}


mybu4.addEventListener("click" , dos)


//......


let myabout = document.getElementById("about")
let myfeen = document.getElementById("feen")
let mywinee = document.getElementById("winee")



let kda = () =>{

    mywinee.style.color= "blue"
    console.log(mywinee)


    myfeen.innerHTML = `
    
    <div class="cont2">
    <h1 id="winee" class="wine">Our Wines </h1>
    <p class="ppp">And here goes a super fancy description of the section.</p>
   </div>


   
   <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="img2">
           <img src="./images/pink_wine.jpg" alt="">
        </div>

      </div>
      <div class="col-md-4">
        <div class="img2">
          <img src="./images/white_wine.jpg" alt="">
        </div>

      </div>
      <div class="col-md-4">
        <div class="img2">
           <img src="./images/red_wine-1.jpg" alt="">
        </div>

      </div>

    </div>

   </div>

    `


}

myabout.addEventListener("click" , kda)
