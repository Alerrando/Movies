import { AiOutlineMail } from 'react-icons/ai';
import { MdPassword } from 'react-icons/md';
import styles from '../styles.module.scss';
import { useForm } from 'react-hook-form';

export type LoginFormInputs = {
  email: '';
  password: '';
};

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormInputs>();

  return (
    <form className={styles.formInputContainer} onSubmit={handleSubmit(submit)}>
      <div className={styles['form-input']}>
        <AiOutlineMail size={28} />
        <input
          type="email"
          placeholder="Type your email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>

      <div className={styles['form-input']}>
        <MdPassword size={28} />
        <input
          type="password"
          placeholder="Type your password"
          {...register('password', { required: true, minLength: 5 })}
        />
      </div>

      <a href="#">Forgot your password?</a>

      <button
        className={`${styles.btn} ${
          isValid ? styles['valid'] : styles['notValid']
        }`}
        disabled={!isValid}
        type="submit"
      >
        Login Account
      </button>
    </form>
  );

  function submit(event: LoginFormInputs) {
    console.log(event);
  }
}
