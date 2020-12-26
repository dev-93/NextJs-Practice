import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | 태남</title>
            </Head>
            <div className={styles.container}>
                This is Home
            </div>
        </>
    )
}
