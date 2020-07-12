import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/MainLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post({ data: serverData }) {
  const [data, setData] = useState(serverData);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const asyncData = await response.json();
      setData(asyncData);
    }

    if(!serverData) {
      load();
    }
  }, []);

  if(!data) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <h1>{data.title}</h1>
      <div>{data.body}</div>
      <Link href='/posts/'>
        <a>Назад</a>
      </Link>
    </MainLayout>
  )
}

Post.getInitialProps = async (ctx) => {
  const id = ctx.query.id;
  const req = ctx.query.req;
  if(!req) {
    return {post: null}
  }
  const response = await fetch(`http://localhost:4200/posts/${id}`);
  const post = await response.json();

  return {
    data: post
  }
};

// export async function getServerSideProps(ctx) {
//   const id = ctx.query.id;
//   const req = ctx.query.req;
//   if(!req) {
//     return { props: { post: null }}
//   }
//   const response = await fetch(`http://localhost:4200/posts/${id}`);
//   const post = await response.json();
//
//   return { props: { post }}
// }