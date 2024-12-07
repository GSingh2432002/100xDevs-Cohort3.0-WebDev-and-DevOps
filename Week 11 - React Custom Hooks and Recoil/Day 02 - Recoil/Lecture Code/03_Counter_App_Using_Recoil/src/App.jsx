import "./App.css";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";
import { CounterAtom } from "./store/atoms/counter";

function App() {
  return(
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
  return(
    <>
      <CurrentCount />
      <Increase />
      <Decrease />
    </>
  )
}

function CurrentCount(){
  const count = useRecoilValue(CounterAtom);
  return(
    <>
      {count}
    </>
  )
}

function Increase(){
  const setCount = useSetRecoilState(CounterAtom);
  function increaseCount(){
    setCount(c => c + 1);
  }
  return(
    <>
      <button onClick={increaseCount}>+</button>
    </>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(CounterAtom);
  function decreaseCount(){
    setCount(c => c - 1);
  }
  return(
    <>
      <button onClick={decreaseCount}>-</button>
    </>
  )
}

export default App;
