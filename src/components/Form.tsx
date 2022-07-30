import styles from "../styles/Form.module.css"

const Form: React.FC = () => {
  return (
    <div className={styles.formContainer}>
        <form onSubmit={(e: React.FormEvent) => e.preventDefault()} className={styles.form}>
            <p>Prima di tutto: avevate un appuntamento?</p>
        </form>
    </div>
  )
}

export default Form;