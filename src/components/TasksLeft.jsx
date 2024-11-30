import useTaskStore from '../store/taskStore';

export default function TasksLeft() {
  const { tasks, username } = useTaskStore();

  const totalTasksUser = tasks.filter((item) => item.user === username);
  const tasksLeft = totalTasksUser.filter((item) => item.isCompleted === false);

  return (
    <div className="max-w-lg mx-auto flex gap-1 justify-center my-4">
      {tasksLeft.length != 0 ? (
        <span className="badge badge-primary">
          {tasksLeft.length} {tasksLeft.length >= 2 ? 'tasks' : 'task'} of{' '}
          {totalTasksUser.length} left
        </span>
      ) : (
        <span className="badge badge-neutral">none tasks left</span>
      )}
    </div>
  );
}
