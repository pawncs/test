let input = "";//输入
let res = "";//输出
let num = 0;
let variable = new Array(26);//变元

let isNot = new Array(26);//是否加非？
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
/**
 * 函数功能：获取要输入的操作数或操作符
 * @param {*} event 
 */
function addInput(event){
    let addDom = event.target.innerText;
    input += addDom;
    inputDisplay.innerHTML = input;
}

document.querySelector(".opr .clear").addEventListener("click",function(){
    input = "";
    inputDisplay.innerHTML = input;
});
document.querySelector(".opr .delete").addEventListener("click",function(){
    input = input.substr(0,input.length-1);
    inputDisplay.innerHTML = input;
});


// oprAdd.addEventListener("click",addInput(event));


// let cal =  new function(){//监听确定按钮
//     //清零操作
//     if(eval(input));// resultOr.add();
//     else ;//resultAnd.add();
//     //……打印
// }

//####################################################################
//以上为输入处理，下面为输出处理
//####################################################################
document.querySelector(".opr .ok").addEventListener("click",function(){
    // input = inputDisplay.innerHTML;
    let resultOr = new Array();//主析取中的小项
    let resultAnd = new Array();//主合取中的大项
    //命题变元初始化
    for(i=0;i<num;i++){//初始化命题变元
        variable[i] = false;
    }

    let inputArray = input.split("");
    for(i = 0;i<input.length;i++){
        let k = i-1;
            if(inputArray[i] === '∧') inputArray[i] = "&&";
            else if(inputArray[i] === "∨") inputArray[i] = "||";
            else if(inputArray[i] === "¬") inputArray[i] = "!";
            else if(inputArray[i] === "=") inputArray[i] = "===";
            else if(inputArray[i] === "→"){
                inputArray[i] = "||";
                if(inputArray[i-1]!==")") inputArray.splice(i-1,0,"!");
                else{
                    for(k = i - 1;inputArray[k]!="("&&(k!==-1);k--);
                    // if(k===-1);//输入错误的处理；
                    inputArray.splice(k,0,"!");
                }
            }
    }

    for(i=0;i<2**num;i++){//遍历所有情况
        let k ;
        let inputI;
        let j = num-1;
        let inputArrayCopy = new Array();
        for(k = 0;k<inputArray.length;k++){
            inputArrayCopy[k] = inputArray[k];
        }


        while(i!=0){//画真值表
            if(variable[j] === false){
                variable[j] = true;
                break;
            }else{
                variable[j--] = false;
            }
        }
        //替换字符串
        for(inputI = 0;inputI<input.length;inputI++){
            for(k = 0;k<num;k++){
                if(inputArrayCopy[inputI] ===  String.fromCharCode((65+k))){
                    inputArrayCopy[inputI] = ""+variable[k];
                }
            }
        }
        
        if(eval(inputArrayCopy.join(""))===true){//执行替代后的语句
            resultOr.push(i);//加入小项
        }else if(eval(inputArrayCopy.join(""))===false){
            resultAnd.push(i);//加入大项
        }
    }

    //将结果正确的输出！！！！！
    
});




