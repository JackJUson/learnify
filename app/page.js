import VideoList from '@/components/Videos';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Next.js YouTube Integration</title>
        <meta name='description' content='Next.js app with YouTube video integration' />
      </Head>

      <main>
        <h1>Fullstack Project Videos</h1>
        <VideoList />
      </main>
    </main>
  );
}
