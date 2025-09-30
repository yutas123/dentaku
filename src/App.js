import {useState} from "react" ;
import Button from "./components/Button";

function App() {
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(0);
  const [ans, setAns] = useState(null);
  const digits = [0,1,2,3,4,5,6,7,8,9];
  const operations = ["+","-","*","/"];
  const sampleDigits = ["apple","banana",2,8,9];

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
    if(ans === null){
      setAns(null);
      setOpe(null);
      setLeft(null);
      setRight(null);

      if(ope === "+"){
        setAns(left+right);
      }else if(ope === "-"){
        setAns(left-right);
      }else if(ope === "*"){
        setAns(left*right);
      }else if(ope === "/"){
        setAns(left/right);
      }
    } else {
      setAns(null);
      setOpe(null);
      setLeft(0);
      setRight(0);
    }
  }

  return (
    <div className="calc">
      <header>culcs</header>
      <div className="display">
        {left}
        {ope === null ? "" : ope}
        {ope === null ? "" : right}
        {ans === null ? "" : + ans }
      </div>

      <div className="ButtonWrap">
        <div className="ButtonWrap_left">

        {digits.map((n , i) => (
          <Button
          key={n}
          text={String(n)}
          onClick={() => keyPressed(n)}
          disabled={ans !== null}
          />
        ))}

        <Button text={ans === null ? "=" : "C"} onClick={ ()=> {equalKeyPressed()} } />
      </div>
      <div className="ButtonWrap_right">
        {operations.map((n , i) => (
          <Button
          key={n}
          text={String(n)}
          onClick={() => opeKeyPressed(n)}
          disabled={ans !== null}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;

