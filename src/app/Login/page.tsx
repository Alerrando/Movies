import Image from 'next/image'
import styles from './styles.module.scss'

export default function LoginPage(){
    return(
        <>
            <main className={styles.main}>
                <div className={styles.mainImg}>
                    <Image src='/background-login.jpg' alt='image-background-login' fill quality={100} />
                </div>

                <section className={styles.mainContainer}>
                    <div className={styles['main-container-img']}>
                        <Image src='/login-img.jpg' alt='image-background-form-login' fill className={styles['img-form-login']} />
                    </div>

                    <form className={styles.form}>
                        <header className={styles['form-header']}>
                            <span>Login in</span>
                            
                            <span>Sign in</span>
                        </header>
                    </form>
                </section>
            </main>
        </>
    )
}