//Types of storage conatiners
const typeid = ["fridge","fridgefzr","chestfzr","standfzr","groundcpb","wallcpb"];

//Object for inventory item
function inventoryItem(name,num,loc,exp){
    this.name = name;
    this.num = num;
    this.loc = loc,
    this.exp = exp;
}