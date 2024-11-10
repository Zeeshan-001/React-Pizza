import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-[#374151] md:text-base">
        Bitte geben Sie zum Start Ihrer Bestellung Ihren Namen an.
      </p>

      <input
        type="text"
        placeholder="Ihr vollständiger Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72 border border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Bestellung starten</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
