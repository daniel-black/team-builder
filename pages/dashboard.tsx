import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';

import { requireAuth } from '../utils/requireAuth';

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
})

const Dashboard: NextPage = () => {
  const { data } = useSession();

  return (
    <div>
      Dashboard
      <p>{JSON.stringify(data, null, 2)}</p>
      <button 
        onClick={() => signOut({ callbackUrl: '/' })}
        className='bg-rose-300 rounded p-3'
      >
        Sign out
      </button>
    </div>
  );
}

export default Dashboard;