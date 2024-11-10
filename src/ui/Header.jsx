import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-[#38bdf8] px-4 py-3 uppercase shadow-lg transition-shadow duration-200 hover:shadow-xl sm:px-6">
      <Link to="/" className="tracking-widest">
        pizza-bestellung
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
