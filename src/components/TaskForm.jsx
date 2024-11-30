import { useState } from 'react';
import useTaskStore from '../store/taskStore';

export default function TaskForm() {
  const { addTask, username } = useTaskStore();
  const [task, setTask] = useState('');

  function handleAddTask() {
    if (!task.trim()) return;

    addTask(task, username);
    setTask('');
  }

  function keyUp(event) {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <div className="max-w-lg mx-auto flex gap-1">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="what's your new task?"
        className="input input-bordered w-full"
        onKeyUp={keyUp}
      />
    </div>
  );
}
