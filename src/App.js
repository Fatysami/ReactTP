import './App.css';
import Welcome, { Welcome2,MyButton, Welcome4 } from "./Welcome"

function App() {
  return (
    <div className="App" style={{display:'flex',flexDirection:'column'}}>
      <Welcome></Welcome>
      <Welcome2></Welcome2>

      <MyButton text={'Appliquer'}></MyButton>
      <MyButton text={'Valider'}></MyButton>
      <MyButton text={'Annuler'}></MyButton>
      <Welcome4></Welcome4>
    </div>
  );
}

export default App;
