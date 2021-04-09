import Link from 'next/link'

import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'

import styles from './styles.module.scss'
import { useState } from 'react'

export function Header() {
  const [mobileNavbar, setMobileNavbar] = useState(false)

  return (
    <header
      className={`${styles.headerContainer} ${
        mobileNavbar ? styles.active : ''
      }`}
    >
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="ig.news" />
          </a>
        </Link>

        <div className={styles.navbarContent}>
          <nav>
            <ActiveLink activeClassName={styles.active} href="/">
              <a>Home</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/posts">
              <a>Posts</a>
            </ActiveLink>
          </nav>
          <SignInButton />
        </div>

        <div
          onClick={() => setMobileNavbar(!mobileNavbar)}
          className={`${styles.toggleMobileNavbar} 
            ${mobileNavbar ? styles.active : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {mobileNavbar && (
        <div className={styles.mobileNavbarContent}>
          <SignInButton />
          <nav>
            <ActiveLink activeClassName={styles.active} href="/">
              <a>Home</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/posts">
              <a>Posts</a>
            </ActiveLink>
          </nav>
        </div>
      )}
    </header>
  )
}
