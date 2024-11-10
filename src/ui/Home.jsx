import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Bestellung fortsetzen, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
