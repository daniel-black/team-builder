import { signOut } from "next-auth/react";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="w-full flex p-3 bg-emerald-200 text-emerald-800 text-2xl justify-between items-center">
      <Link href='/dashboard'>
        <a>Team Builder</a>
      </Link>

      <div>
        <button 
          onClick={() => signOut({ callbackUrl: '/' })}
          className='text-lg'
        >
          Sign out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;