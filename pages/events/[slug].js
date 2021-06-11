import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import config from '@/config/index';
import Image from 'next/image';

export default function MyEvent({ event }) {
  return (
    <Layout>
      <Image width='960' src={event.image.formats.medium.url} height='600' />
      <h1>{event.name}</h1>
      <p>{event.description}</p>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${config.BASE_URL}/events`);
//   const events = await res.json();
//   const paths = events.map((event) => ({
//     params: {
//       slug: event.slug,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps(req) {
  const res = await fetch(`${config.BASE_URL}/events?slug=${req.query.slug}`);
  const [event] = await res.json();

  return {
    props: {
      event,
      revalidate: 1,
    },
  };
}
