import { useState } from 'react';

import useTaskStore from '../store/taskStore';
import TasksList from './TasksList';

export default function TasksFilter() {
  const { tasks, filters, username } = useTaskStore();
  const [filter, setFilter] = useState('all');

  const items =
    filter === 'all'
      ? (item) => item
      : filter === 'completed'
      ? (item) => item.isCompleted
      : (item) => !item.isCompleted;

  const tasksFiltered = tasks
    .filter((item) => item.user === username)
    .filter(items);

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-1">
      <div className="flex justify-center my-5 items-center">
        {filters.map((item) => (
          <button
            key={item}
            className={`badge ${filter === item ? 'badge-primary' : ''}`}
            onClick={() => {
              setFilter(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <TasksList tasks={tasksFiltered} />
    </div>
  );
}
