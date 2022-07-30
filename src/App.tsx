import {useState} from "react";
import styles from "./styles/App.module.css"
import Button from "@mui/material/Button";
import Form from "./components/Form";

interface StyleObj {
  [prop: string]: string | StyleObj
}

const App: React.FC = () => {

  const [isStarted, setIsStarted] = useState<boolean>(false);

  const buttonStyle: StyleObj = {
    width: "400px",
    maxWidth: "70%",
    borderColor: "#361B00",
    color: "#361B00",
    fontSize: "1.25rem",
    padding: "0.5rem 0",
    borderWidth: "2px",
    "&:hover": {
      borderColor: "#361B00",
      borderWidth: "2px"
    }
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>il Colantometro</h1>
        <h2 className={styles.subtitle}>Scopri quante probabilità ci sono che Colantonio ti dia buca!</h2>
      </header>
      <main className={styles.main}>
        {!isStarted ? (
          <div className={styles.buttonContainer}>
             <Button sx={buttonStyle} variant="outlined" onClick={() => setIsStarted(true)}>Inizia</Button>
          </div>
        ) : (
          <Form />
        )}
      </main>
    </div>
  );
}

export default App;
