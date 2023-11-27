//Types of storage conatiners
const typeid = ["fridge","fridgefzr","chestfzr","standfzr","groundcpb","wallcpb"];
let tabout = [false,false];
let tone = document.getElementById("tab1");
tone.addEventListener("click",function (){slideOutDiv("tab1")});
let ttwo = document.getElementById("tab2");
ttwo.addEventListener("click",function (){slideOutDiv("tab2")});
//Object for inventory item
function inventoryItem(name,num,loc,exp){
    this.name = name;
    this.num = num;
    this.loc = loc,
    this.exp = exp;
}
function slideOutDiv(id){
    let temp = document.getElementById(id);
    let index = parseInt(id.charAt(id.length-1)) - 1;
    if(tabout[index] === false){
        temp.style.transform = 'translate3d(50px,0px,0px)';
        tabout[index] = true;
    } else {
        temp.style.transform = 'translate3d(0px,0px,0px)';
        tabout[index] = false;
    }
    
}