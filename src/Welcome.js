import { Component } from "react";

function Welcome(){
    const name='Mohammed';
    return <>
      <div style={{fontSize:30}}>{name}</div>
      <div>Hi fatima</div>
    </>
  
}
export function Welcome2(){
    return <div>Welcome 2</div>
}
export function MyButton(props){
    return <button style={{width: 200, marginBottom: 10, ...props.style, }}>
        {props.text}
        </button>
}
export class Welcome4 extends Component{
    function1=()=>{
        console.log("Function Fatima");
    }
    render(){
        return this.function1();
    }

}
export default Welcome;