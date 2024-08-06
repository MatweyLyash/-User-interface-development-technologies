type equipment={
    Category:string,
    ModelName:string,
    Cost:number,
    Availability:boolean
}
const products: equipment[] = [
    {Category:"Smartphone",ModelName:"Pixel 5", Cost:300,Availability:true},
    {Category:"Smartphone",ModelName:"Xiaomi 13 ultra", Cost:400,Availability:true},
    {Category:"Smartphone",ModelName:"Apple Iphone 15 plus", Cost:800,Availability:true},
    {Category:"Smartphone",ModelName:"Huawei mate 70 pro", Cost:700,Availability:false},
    {Category:"Tablet",ModelName:"Apple Ipad 12", Cost:900,Availability:true},
    {Category:"Tablet",ModelName:"Xiaomi pad 6", Cost:300,Availability:false},
    {Category:"Tablet",ModelName:"Lenovo Y365", Cost:340,Availability:true},
    {Category:"Tablet",ModelName:"Realme pad 4 pro", Cost:400,Availability:true},
    {Category:"Smartphone",ModelName:"Pupa lupa x5 pro ultra", Cost:1488,Availability:false},
];
const sorted:equipment[]=[];
products.forEach((el)=>{
    if(el.Category=="Smartphone"){
        sorted.push(el);
    }
})
products.forEach((el)=>{
    if(el.Category=="Tablet"){
        sorted.push(el);
    }
})

export default  sorted;