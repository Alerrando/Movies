import { AiOutlineMail } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { MdPassword } from 'react-icons/md';
import styles from '../styles.module.scss';
import { useForm } from 'react-hook-form';
import { LoginFormInputs } from '../FormLogin';

type RegisterFormInputs = {
  name: string;
} & LoginFormInputs;

export default function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterFormInputs>();

  return (
    <form className={styles.formInputContainer} onSubmit={handleSubmit(submit)}>
      <div className={styles['form-input']}>
        <BiUser size={28} />
        <input
          type="text"
          placeholder="Type your name"
          {...register('name', { required: true })}
        />
      </div>

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

      <button
        className={`${styles.btn} ${
          isValid ? styles['valid'] : styles['notValid']
        }`}
        disabled={!isValid}
        type="submit"
      >
        Create Account
      </button>
    </form>
  );

  function submit(event: RegisterFormInputs) {
    console.log(event);
  }
}
