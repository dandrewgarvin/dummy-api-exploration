import PrimaryLayout from '../../layouts/PrimaryLayout';
import SmallCard from '../../components/SmallCard';

const Games = () => {
  const games_array = [
    {
      id: 1,
      title: 'Mario Tennis',
      release_date: 'Feb 2001',
      image_url: 'https://images.mariouniversalis.fr/images/boites/hq/167.jpg',
    },
    {
      id: 1,
      title: 'Mario Tennis',
      release_date: 'Feb 2001',
      image_url: 'https://images.mariouniversalis.fr/images/boites/hq/167.jpg',
    },
    {
      id: 1,
      title: 'Mario Tennis',
      release_date: 'Feb 2001',
      image_url: 'https://images.mariouniversalis.fr/images/boites/hq/167.jpg',
    },
    {
      id: 1,
      title: 'Mario Tennis',
      release_date: 'Feb 2001',
      image_url: 'https://images.mariouniversalis.fr/images/boites/hq/167.jpg',
    },
    {
      id: 1,
      title: 'Mario Tennis',
      release_date: 'Feb 2001',
      image_url: 'https://images.mariouniversalis.fr/images/boites/hq/167.jpg',
    },
    {
      id: 1,
      title: 'Mario Tennis',
      release_date: 'Feb 2001',
      image_url: 'https://images.mariouniversalis.fr/images/boites/hq/167.jpg',
    },
    {
      id: 1,
      title: 'Mario Tennis',
      release_date: 'Feb 2001',
      image_url: 'https://images.mariouniversalis.fr/images/boites/hq/167.jpg',
    },
    {
      id: 1,
      title: 'Mario Tennis',
      release_date: 'Feb 2001',
      image_url: 'https://images.mariouniversalis.fr/images/boites/hq/167.jpg',
    },
    {
      id: 1,
      title: 'Mario Tennis',
      release_date: 'Feb 2001',
      image_url: 'https://images.mariouniversalis.fr/images/boites/hq/167.jpg',
    },
  ];

  return (
    <div className='flex flex-wrap gap-4'>
      {games_array.map(game => (
        <SmallCard key={game.id} {...game} />
      ))}

      <SmallCard id={null} />
    </div>
  );
};

Games.Layout = PrimaryLayout;

export default Games;
