//Types of storage conatiners
const typeid = ["fridge","fridgefzr","chestfzr","standfzr","groundcpb","wallcpb"];
let taboneout = false;
let tone = document.getElementById("tab1");
tone.addEventListener("click",function (){slideOutDiv("tab1")});
let ttwo = document.getElementById("tab2");
tone.addEventListener("click",function (){slideOutDiv("tab2")});
//Object for inventory item
function inventoryItem(name,num,loc,exp){
    this.name = name;
    this.num = num;
    this.loc = loc,
    this.exp = exp;
}
function slideOutDiv(id){
    let temp = document.getElementById(id);
    if(taboneout === false){
        temp.style.transform = 'translate3d(50px,0px,0px)';
        taboneout = true;
    } else {
        temp.style.transform = 'translate3d(0px,0px,0px)';
        taboneout = false;
    }
    
}