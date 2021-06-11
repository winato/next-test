import Layout from '@/components/Layout';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <Layout>
      <h1>
        <FaExclamationTriangle />
        404 | Not Found
      </h1>
    </Layout>
  );
}
