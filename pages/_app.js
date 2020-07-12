import NextNprogress from 'nextjs-progressbar';
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height='3'
      />
      <Component {...pageProps} />
      {/* Можно добавить стили так, но лучше вынести в отдельный файл и подключить с помощью import*/}
      <style jsx global>{`
        body {
          background-color: #efe;
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </>
  )
}