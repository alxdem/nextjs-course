import { useState, useEffect } from 'react';
import { MainLayout } from '../components/MainLayout';
import Link from 'next/link';

export default function Posts({ posts: serverData }) {
  const [posts, setPosts] = useState(serverData);

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:4200/posts');
      const asyncPosts = await response.json();
      setPosts(asyncPosts);
    }

    if(!serverData) {
      load();
    }
  }, []);

  if(!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title='Posts'>
      <h1>Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>
                <div>{post.title}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async (ctx) => {
  const req = ctx.query.req;

  if(!req) {
    return {posts: null}
  }

  const response = await fetch('http://localhost:4200/posts');
  const posts = await response.json();

  return {
    posts
  }
};