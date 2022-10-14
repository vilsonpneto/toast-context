import { useToast } from "./Contexts/ToastContext";
import { Toast } from "./Components/Toast";
import { FlexContainer } from "./styles/global";

function App() {
  const { toastList, toast } = useToast();

  const addToast = (ms) => toast("Deu bom!", "success", ms);

  console.log(toastList);

  return (
    <FlexContainer>
      <Toast />

      <div style={{ position: "absolute", bottom: "100px" }}>
        <button onClick={() => addToast(2000)}> 2 segundos</button>
        <button onClick={() => addToast(7000)}> 7 segundos</button>
        <button onClick={() => addToast(10000)}> 10 segundos</button>
        <button onClick={() => addToast(15000)}> 15 segundos</button>
      </div>
    </FlexContainer>
  );
}

export default App;
