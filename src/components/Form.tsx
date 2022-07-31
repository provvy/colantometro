import {useState} from "react"
import styles from "../styles/Form.module.css"
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from "@mui/material/Button";
import { buttonStyle } from "../App";

interface FormProps {
  setIsFinished: (prevState: boolean) => void;
}

const Form: React.FC<FormProps> = ({setIsFinished}) => {

  const [isGf, setIsGf] = useState<boolean | undefined>(undefined)

  const switchHandler = () => {
    setIsGf(true);
    setIsFinished(true);
  }

  return (
    <div className={styles.formContainer}>
        <form onSubmit={(e: React.FormEvent) => e.preventDefault()} className={styles.form}>
          <div className={styles.formControl}>
            <p className={styles.formLabel}>- Prima di tutto la variabile principale:</p>
            <FormControlLabel sx={{color: "#361B00"}} control={<Switch checked={isGf === true} onChange={switchHandler} />} label="Accendi lo switch solo se la sua ragazza è in Puglia, altrimenti clicca su 'Continua'."  />
            <Button onClick={() => setIsGf(false)} sx={buttonStyle}>Continua</Button>
          </div>
          {isGf === false && (
            <div className={styles.formControl}>
              <p>next step</p>
            </div>
          )} 
        </form>
    </div>
  )
}

export default Form;