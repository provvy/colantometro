import {useEffect} from "react"
import styles from "../styles/Result.module.css"
import clown from "../assets/clown.jpg"
import useSound from 'use-sound';
import clownMusic from "../sounds/clownMusic.mp3"
import Button from "@mui/material/Button";
import { buttonStyle } from "../App";

const Result: React.FC = () => {

  const [play, {stop}] = useSound(clownMusic)

  useEffect(() => {
    if (play) play();
    return () => stop();
  }, [play, stop])

  return (
    <div className={styles.resultContainer}>
        <img className={styles.resultImage} src={clown} alt="clown" />
        <p className={styles.resultText}>C'è il 100% di probabilità che ti dia buca!</p>
        <Button sx={buttonStyle} onClick={() => window?.location?.reload()}>Ricomincia</Button>
    </div>
  )
}

export default Result