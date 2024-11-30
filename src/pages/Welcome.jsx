import { useState } from 'react';
import { useNavigate } from 'react-router';
import useTaskStore from '../store/taskStore';

export default function Welcome() {
  const { username, setUser, removeUser } = useTaskStore();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  function login(user) {
    if (username) {
      navigate('/tasks');
    } else {
      if (!name.trim()) return;
      setUser(user);
      navigate('/tasks');
      setName('');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="hero bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col gap-5">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-10">
              Taskapp
            </h1>
            {!username ? (
              <>
                <p>Provide your name and go to tasks</p>
                <input
                  type="text"
                  placeholder="your username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered"
                />
                <button className="btn btn-primary" onClick={() => login(name)}>
                  Get Started
                </button>
              </>
            ) : (
              <>
                <h2>Welcome to taskapp, {username}</h2>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => login(name)}
                    className="btn btn-primary"
                  >
                    go to tasks
                  </button>
                  <button onClick={removeUser} className="btn btn-neutral">
                    logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
