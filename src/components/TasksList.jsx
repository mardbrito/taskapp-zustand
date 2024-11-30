import PropTypes from 'prop-types';
import useTaskStore from '../store/taskStore';

export default function TasksList({ tasks }) {
  const { removeTask, toggleTask } = useTaskStore();

  return (
    <div className="flex flex-col gap-1">
      {tasks?.map((task) => (
        <div
          key={task.id}
          className={`flex items-center justify-between btn  ${
            task.isCompleted ? '' : ''
          }`}
        >
          <input
            type="checkbox"
            value={task.isCompleted}
            defaultChecked={task.isCompleted}
            onClick={() => toggleTask(task.id)}
            className={`checkbox ${task.isCompleted && 'checkbox-primary'}`}
          />
          <span
            className={`font-semibold ${
              task.isCompleted && 'line-through text-primary'
            }`}
          >
            {task.name}
          </span>
          <button
            onClick={() => removeTask(task.id)}
            className="btn btn-circle btn-sm"
          >
            🇽
          </button>
        </div>
      ))}
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.array,
};
