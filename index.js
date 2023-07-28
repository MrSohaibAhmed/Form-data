const myForm=document.getElementById("myForm");
myForm.addEventListener("submit",(event)=>{
    event.preventDefault();
});


let body=document.getElementById("body");

let search=document.getElementById("search");


//form data

let f_name=document.getElementById("inputEmail4");
let l_name=document.getElementById("inputPassword4")
let email =document.getElementById("inputAddress");
let address=document.getElementById("inputAddress2");
let city=document.getElementById("inputCity");
let zip=document.getElementById("inputZip");
let course=document.getElementById("formSelector");



var formSelector = document.getElementById("formSelector");
var bsit = document.getElementById("bsit");
var bscs = document.getElementById("bscs");
var bsse = document.getElementById("bsse");


formSelector.addEventListener("change", function (event) {
    bsit.style.display = "none";
    bscs.style.display = "none";
    bsse.style.display = "none";


    switch (formSelector.value) {
        case "bsit":
            bsit.style.display = "block";

            break;
        case "bscs":
            bscs.style.display = "block";
            break;

            case "bsse":
            bsse.style.display = "block";
            break;
    }
});


// let roll_f=f_name.value.slice(0,4);
// console.log(roll_f);

// let one=document.getElementById("one");
    
// let two=document.getElementById("two");
// let three=document.getElementById("three");
// let four=document.getElementById("four");




let enroll=1;
function create(){

    

let tdata=document.getElementById("order");
const tr = document.createElement("tr");
tr.classList.add("class")
// tr.innerHTML="DATA";
let Ndata=document.createElement("td");
Ndata.innerHTML=f_name.value;
tr.append(Ndata);
Ndata.classList.add("bor");
let Ldata=document.createElement("td");
Ldata.innerHTML=l_name.value;
tr.append(Ldata)
Ldata.classList.add("bor");
let mail=document.createElement("td");
mail.innerHTML=email.value;
tr.append(mail);
mail.classList.add("bor");
// let image=document.createElement("img");
// image.classList.add("image_preview")
// input.addEventListener('change', () => {
//     const file = input.files[0];
//     const reader = new FileReader();

//     reader.addEventListener("load", function () {
//       preview.src = reader.result;
//     }, false);

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   });


let zcode=document.createElement("td");
zcode.innerHTML=zip.value;
tr.append(zcode)
zcode.classList.add("bor");


let roll_no=document.createElement("td");
roll_no.innerHTML="ROLL NO :" + f_name.value.slice(0,2)+"-" + zip.value +"-"+ course.value + "-"+ enroll ;
tr.append(roll_no)
roll_no.classList.add("bor");


let bt=document.createElement("button");
bt.innerHTML="DELETE";

bt.classList.add("btn")
tr.append(bt);

let edit=document.createElement("button");
edit.innerHTML="EDIT";

edit.classList.add("btn")
tr.append(edit);

let imgdata=document.createElement("img");
imgdata= window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
        var img = document.querySelector('img');
        img.src = URL.createObjectURL(this.files[0]);
      };
    });
    console.log("image a gai h  ")
  });
  

// imgdata.classList.add("img");
tr.append(imgdata);  

tdata.appendChild(tr);

bt.addEventListener("click",()=>{
    tr.remove();
    console.log("deleted")
})

edit.addEventListener("click",()=>{
    tr.contentEditable="true";
    console.log("edited!!!!!!")
})
console.log("clicked!!!!!!!");

enroll++;

alert(f_name.value + " enrolled at " + new Date().toLocaleDateString());


}
var img = document.querySelector('img');
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
       
        img.src = URL.createObjectURL(this.files[0]);
      };
    });
  });
  