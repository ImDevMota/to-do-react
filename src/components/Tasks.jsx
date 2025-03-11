import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteClick }) {
  // Navigate utilizado para navegar em site singlePage
  const navigate = useNavigate();
  // funcao pega valores da task, transforma em params, cria URL com params para page "detalhes"
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
              task.isCompleted && "line-through" // se a tarefa estiver concluída, add o elemento css mencionado
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon></ChevronRightIcon>
          </Button>

          <Button onClick={() => onDeleteClick(task.id)}>
            <TrashIcon></TrashIcon>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
