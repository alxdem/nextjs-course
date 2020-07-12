import Link from 'next/link';
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
  return(
    <>
      <h1 className={classes.title}>Error 404</h1>
      <p>Please <Link href='/'><a>go back to home</a></Link></p>
    </>
  )
}