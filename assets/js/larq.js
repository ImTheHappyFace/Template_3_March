

document.getElementById('ham_menu').
    addEventListener('click',function(){
        document.getElementById('side_icon').style.display = "block"
    })



// Menu Show

function menuShow(){
    let count =0

    document.getElementById('hidden_menu').
    classList.add("show")
    document.getElementById('hidden_menu').
    classList.remove("hide")
    document.getElementById("plus").style.display= "none"
    document.getElementById("minus").style.display= "inline-flex"

}

function menuHide(){
    let count =0

    document.getElementById('hidden_menu').
    classList.add("hide")
    document.getElementById("plus").style.display= "inline-flex"
    document.getElementById("minus").style.display= "none"

    console.log("hellos");
}

