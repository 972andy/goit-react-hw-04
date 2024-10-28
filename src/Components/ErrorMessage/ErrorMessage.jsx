import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
      <div>
          <p className={styles.errorMessage}>Error: Network request failed. Please try again.</p>
      </div>
  )
}

export default ErrorMessage