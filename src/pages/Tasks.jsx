import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import Navbar from '../components/Navbar';
import useTaskStore from '../store/taskStore';
import TaskForm from '../components/TaskForm';
import TasksFilter from '../components/TasksFilter';
import TasksLeft from '../components/TasksLeft';

export default function Tasks() {
  const { username } = useTaskStore();
  const navigate = useNavigate();

  useEffect(() => {
    isLogged();
  });

  function isLogged() {
    if (!username) {
      navigate('/');
    }
  }
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto gap-1">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-10">
          Tasks of {username}
        </h2>
        <TaskForm />
        <TasksFilter />
        <TasksLeft />
      </div>
    </>
  );
}
