import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function About({ data }) {

  const linkClickHandler = () => {
    Router.push('/');
  };

  return (
    <MainLayout title='About' description='About description'>
      <h1>{data.title}</h1>
      <button onClick={() => Router.push('/posts')}>Go to posts</button>
      <button onClick={linkClickHandler}>Go to home</button>
    </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/about');
  const data = await response.json();

  return {
    data
  };
};