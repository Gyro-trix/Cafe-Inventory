//Types of storage conatiners
const typeid = ["fridge","fridgefzr","chestfzr","standfzr","groundcpb","wallcpb"];

let temp = document.getElementById("tabone");
temp.addEventListener("click",function (){slideOutDiv("tabone")});

//Object for inventory item
function inventoryItem(name,num,loc,exp){
    this.name = name;
    this.num = num;
    this.loc = loc,
    this.exp = exp;
}
function slideOutDiv(id){
    let temp = document.getElementById(id);
    temp.style.transform = 'translate3d(5px,0px,0px)';
}