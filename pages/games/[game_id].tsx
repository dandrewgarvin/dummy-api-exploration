import { useRouter } from 'next/router';
import PrimaryLayout from '../../layouts/PrimaryLayout';

const GameID = () => {
  const router = useRouter();

  const { game_id } = router.query;

  return <p>GAMES: {game_id}</p>;
};

GameID.Layout = PrimaryLayout;

export default GameID;
