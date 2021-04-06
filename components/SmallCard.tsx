import Link from 'next/link';

interface SmallCardProps {
  id: number | null;
  title?: string;
  release_date?: string | Date;
  image_url?: string;
  onClick?(): void;
}

const SmallCard: React.FC<SmallCardProps> = ({
  id,
  title,
  release_date,
  image_url,
  onClick = () => {},
}) =>
  !!id ? (
    <div className='w-48 h-96'>
      <Link href={`/games/${id}`}>
        <div className='h-full flex flex-col border cursor-pointer'>
          <div className='w-full h-4/5 bg-gray-100 overflow-hidden'>
            <img src={image_url} className='object-contain h-full w-full' />
          </div>

          <div className='flex flex-col p-2'>
            <p className='text-lg'>{title}</p>
            <p className='text-sm text-gray-400'>{release_date}</p>
          </div>
        </div>
      </Link>
    </div>
  ) : (
    <div className='w-48 h-96'>
      <div className='h-full flex flex-col items-center justify-center'>
        <button
          onClick={onClick}
          className='bg-green-500 p-4 rounded text-white'
        >
          Load More Games
        </button>
      </div>
    </div>
  );

export default SmallCard;
