

const one = document.querySelectorAll("span")[2];
const body = document.querySelector("body");
const button = document.querySelector("#button");
const submit = document.querySelector("#submit");
const inp = document.getElementById("inp");

console.log(one);


// heading.style.color = "red";
// heading.style.backgroundColor="red";
// heading.style.fontSize = "35px";




heading.innerText = 'Shoib';
let val = true;
function hi(){
    // console.log(inp.value)
    if(val === true){
        h1.style.color = "white"; 
        body.style.backgroundColor = "black";
        button.innerText = "Light Mode"
    }else{
        body.style.color = "black";
        body.style.backgroundColor = "white";
        button.innerText = "Dark Mode";
        // body.style.co

    }
    val = !val;
    heading.style.cssText = "color:green; background-color:pink; display:none"
    console.log("Hey");
}

submit.addEventListener('click', function(){
    heading.innerText = inp.value;

})


button.addEventListener("click",hi)





