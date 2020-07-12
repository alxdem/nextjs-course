import Link from 'next/link';
import Head from 'next/head';

export function MainLayout({ children, title = 'Next App', description = 'Description App' }) {
  return(
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
      </Head>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/posts'>
          <a>Posts</a>
        </Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx global>{`
        nav {
          padding: 20px;
          border-bottom: 2px solid #cce;
          display: flex;
        }
        
        nav a {
          color: #439;
          text-decoration: none;
          font-size: 18px;
          display: block;
          padding: 0 10px;
        }
      `}</style>
    </>
  )
}