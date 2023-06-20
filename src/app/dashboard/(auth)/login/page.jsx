"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Login = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Login</h1>
    <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>
    <form className={styles.form} onSubmit={handleSubmit}>
    {/* <input
        type="text"
        placeholder="Username"
        required
        className={styles.input}
      /> */}
      <input
        type="text"
        placeholder="Email"
        required
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className={styles.input}
      />
        <button className={styles.button}>Login</button>
    </form>
    <span className={styles.or}>- OR -</span>
    {/* <Link className={styles.link} href="/dashboard/login">
      Login with an existing account
    </Link> */}
    <button onClick={() => signIn("google")}>Login wuth Google</button>
  </div>

  )
}

export default Login