import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const linkStyles = activePath =>
    ['ml-8', router.pathname === activePath && 'underline']
      .filter(Boolean)
      .join(' ');

  return (
    <header className='height-12 p-4 bg-red-500 flex justify-between'>
      <h1 className='text-xl text-white'>
        <Link href='/'>MarioFinder</Link>
      </h1>

      <nav>
        <ul className='text-white text-xl flex'>
          <li className={linkStyles('/games')}>
            <Link href='/games'>Games</Link>
          </li>
          <li className={linkStyles('/games/[game_id]')}>
            <Link href='/games/5'>Details</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
