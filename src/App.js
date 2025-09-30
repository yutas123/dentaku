import {useState} from "react" ;
import Button from "./components/Button";

function App() {
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(0);
  const [ans, setAns] = useState(null);
  const digits = [0,1,2,3,4,5,6,7,8,9];

  const keyPressed = (key) => {
    console.log("！！！！！");
    console.log(left);
    if(ope === null){
      setLeft( left*10 + key);
    }else{
      setRight( right*10 + key);
    }
  }

  function opeKeyPressed(key){
    setOpe(key);
  }

  function equalKeyPressed(){
    if(ope === "+"){
      setAns(left+right);
    }else if(ope === "-"){
      setAns(left-right);
    }else if(ope === "*"){
      setAns(left*right);
    }else if(ope === "/"){
      setAns(left/right);
    }
  }

  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">
        {left}
        {ope === null ? "" : ope}
        {ope === null ? "" : right}
        { ans === null ? "" : " 答え:"+ans }
      </div>

      <div className="ButtonWrap">
        <div className="ButtonWrap_left">

        {digits.map((n) => (
          console.log(n),
          <Button
          key={n}
          text={String(n)}
          onClick={() => keyPressed(n)}
          />
        ))}

        <Button text={ans === null ? "=" : "C"} onClick={ ()=> {equalKeyPressed()} } />
        </div>
        <div className="ButtonWrap_right">
          <Button text="+" onClick={ ()=> {opeKeyPressed("+")} } />
          <Button text="-" onClick={ ()=> {opeKeyPressed("-")} } />
          <Button text="*" onClick={ ()=> {opeKeyPressed("*")} } />
          <Button text="/" onClick={ ()=> {opeKeyPressed("/")} } />
        </div>
      </div>
    </div>
  );
}

export default App;

