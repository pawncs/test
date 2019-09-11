let input = "";//输入
let res = "";//输出
let num = 0;
let variable = new Array(26);
let resultOr ;
let resultAnd;
let isNot = new Array(26);
let addx = document.querySelector(".left .add");
let deletex = document.querySelector(".left .delete");
let displayx = document.querySelector(".left .display");
let variablex = document.querySelector(".left .variable");
let inputDisplay = document.querySelector(".opr .top");
let oprAdd = document.querySelector(".right ul");
addx.addEventListener("click",function(){
    if(num===26) return ;
    num++;
    p = document.createElement("li");
 
    variablex.appendChild(p);
   
    p = variablex.lastChild;
    p.setAttribute("onclick","addInput(event)");
    p.innerHTML = String.fromCharCode((65-1+num));
    displayx.innerHTML = num;
});
deletex.addEventListener("click",function(){
    if(num===0) return ;
    num --;
    variablex.removeChild(variablex.lastChild);
    displayx.innerHTML = num;
})
// document.querySelector(".left ul").onclick = function(event){
//     let addDom = event.target.innerText;
//     input += addDom;
//     inputDisplay.innerHTML = input;
// }
function addInput(event){
    let addDom = event.target.innerText;
    input += addDom;
    inputDisplay.innerHTML = input;
}

// oprAdd.addEventListener("click",addInput(event));


// let cal =  new function(){//监听确定按钮
//     //清零操作
//     if(eval(input));// resultOr.add();
//     else ;//resultAnd.add();
//     //……打印
// }



//let deleteX ……

