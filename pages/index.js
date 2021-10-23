import Head from 'next/head';
import { getSession } from '../node_modules/next-auth/client';
import Header from '../components/Header.jsx';
import Login from '../components/Login.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Feed from '../components/Feed.jsx';
import Widgets from '../components/Widgets.jsx';
import { db } from '../firebase.js';

export default function Home({ session, posts }) {
  if (!session) {
    return <Login />;
  }

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className='flex'>
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
