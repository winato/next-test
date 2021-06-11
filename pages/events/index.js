import Layout from '@/components/Layout';
import config from '@/config/index';
import Link from 'next/link';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events Page</h1>
      {
        <ul>
          {events.map(({ name, slug }) => (
            <li key={slug}>
              <Link href={`/events/${slug}`}>{name}</Link>
            </li>
          ))}
        </ul>
      }
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${config.BASE_URL}/events`);
  console.log(res);
  const events = await res.json();

  return {
    props: {
      events,
      revalidate: 1,
    },
  };
}
