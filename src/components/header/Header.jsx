"use client"
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'
import DarkMode from '@/app/darkMode/DarkMode';
import { signOut, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
const links = [
  {
    id:1,
    title: 'Home',
    path: "/",
  },
  {
    id:2,
    title: 'Portfolio',
    path: "/portfolio",
  },
  {
    id:3,
    title: "Blog",
    path: "/blog",
  },
  {
    id:4,
    title: "About",
    path: "/about",
  },
  {
    id:5,
    title: "Contact",
    path: "/contact",
  },
  {
    id:6,
    title: "Dashboard",
    path: "/dashboard",
  },
];

const Header = () => {
  const session = useSession();
  // const router = useRouter();
  // if (session.status === "loading") {
  //   return <p>Loading...</p>;
  // }

  // if (session.status === "unauthenticated") {
  //   router?.push("/");
  // }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div className={styles.links}>
        <DarkMode />
          {
            links.map((link) =>(
              <Link href={link.path} key={link.id}>{link.title}</Link>
            ))
          }
           {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
    </div>
    </div>
  )
}

export default Header