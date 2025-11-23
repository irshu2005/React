import styles from "./App.module.css";
import Display from "./components/Display1.jsx";
import ButtonContainer from "./components/ButtonContainer.jsx";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonContainer></ButtonContainer>
      </div>
    </>
  );
}

export default App;
