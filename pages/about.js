import Link from 'next/link';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout title='About page'>
      <main>
        <h1>Hello from about page</h1>
        <Link href='/'>Home</Link>
        <p>This is an app to find some DJ</p>
      </main>
    </Layout>
  );
}
