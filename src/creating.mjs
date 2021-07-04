import setText, { appendText } from "./results.mjs";

export function timeout(){
}

export function interval(){
}

export function clearIntervalChain(){
}

export function xhr(){
}

export function allPromises(){
}

export function allSettled(){
}

export async function race(){
    var a= Math.floor(Math.random()*10) + 1;
    var b= Math.floor(Math.random()*15) + 1;
    console.log(a);
    console.log(b);
    var answer = prompt(`ENTER THE ANSWER:${a}+${b}`);
    console.log(answer);
    if(answer == a+b){
        console.log('correct');
        let value=document.getElementById('orderid').value;
        const {data}= await axios.get(`http://localhost:3000/orders/${value}`);
        const {data: orderstatus}= await axios.get(`http://localhost:3000/orderStatuses/${data.orderStatusId}`);
        setText('ID:'+JSON.stringify(data.id));
        appendText('status:'+JSON.stringify(orderstatus.description));
    }
    else{
        console.log('wrong');
        setText('Enter the Correct answer')
    }


}