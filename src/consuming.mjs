import setText, {appendText, showWaiting, hideWaiting} from "./results.mjs";

export function get() {
}

export function getCatch() {
}

export function chain() {
}

export function chainCatch() {
}

export async function final() {
    var a= Math.floor(Math.random()*10) + 1;
    var b= Math.floor(Math.random()*15) + 1;
    console.log(a);
    console.log(b);
    var answer = prompt(`ENTER THE ANSWER:${a}+${b}`);
    console.log(answer);
    if(answer == a+b){
    let value=document.getElementById('orderid').value;
    console.log(value);
    if(value < 4){
    const {data}= await axios.get(`http://localhost:3000/orders/${value}`);
    const {data: address}= await  axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
    const {data: user}= await     axios.get(`http://localhost:3000/users/${data.userId}`);
    console.log(JSON.stringify(data));
    setText('Orderid:'+JSON.stringify(data.id));
    appendText('UserName:'+JSON.stringify(user.Name));
    appendText('Address:'+JSON.stringify(address.street)+JSON.stringify(address.city)+JSON.stringify(address.state)+JSON.stringify(address.zipCode));
    }
    else{
        setText('INVALID ORDER ID(The ID should Be Between 1-3)')
    }
    }
    else{
        console.log('wrong');
        setText('Enter the Correct answer')
    }
}