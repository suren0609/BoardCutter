import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board/Board";
import InputForm from "./components/InputForm/InputForm";
import { RootState } from "./store";
import { setCuts, setInputCuts } from "./store/slices/cutSlice";

import CutList from "./components/CutList/CutList";
import { convertingCutsArr } from "./helpers/convertingCutsArr";
import { ICutInput } from "./store/types";

function App() {
  const dispatch = useDispatch();
  const { inputCuts } = useSelector((state: RootState) => state.cuts);

  const handleAddCut = (inputCut: ICutInput) => {
    dispatch(setInputCuts([...inputCuts, inputCut]));
  };

  useEffect(() => {
    dispatch(setCuts(convertingCutsArr(inputCuts)));
  }, [inputCuts]);

  return (
    <div className="App">
      <InputForm onAddCut={handleAddCut} />
      <CutList />
      <Board />
    </div>
  );
}

export default App;
