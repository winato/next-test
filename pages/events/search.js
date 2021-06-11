import Layout from '@/components/Layout';
import config from '@/config/index';
import Link from 'next/link';
import qs from 'qs';

export default function Search({ events }) {
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

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { venue_contains: term },
        { description_contains: term },
      ],
    },
  });
  const res = await fetch(`${config.BASE_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}
