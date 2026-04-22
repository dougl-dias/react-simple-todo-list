import PropTypes from 'prop-types'

import { Check, Edit, Trash2, X } from 'lucide-react'

import Button from '../ui/Button'

const TaskItem = ({ task, onToggle, onView, onEdit, onDelete }) => {
  const { id, title, completed } = task

  return (
    <div className='flex items-center gap-4 px-2 transition hover:bg-zinc-200'>
      <div className='flex items-center gap-2 flex-1 py-4 cursor-pointer' onClick={() => onView(id)}>
        <span
          className={`inline-block w-3 h-3 rounded-full border border-slate-300 ${completed ? 'bg-emerald-600' : 'bg-red-600'}`}
        ></span>

        <div>
          <h3 className={`block font-semibold text-slate-800 line-clamp-2 ${completed ? 'line-through' : ''}`}>
            {title}
          </h3>
        </div>
      </div>

      <div className='flex items-center gap-1'>
        <Button
          variant={completed ? 'secondary' : 'success'}
          shape='toIcon'
          title={completed ? 'Desmarcar como concluída' : 'Marcar como concluído'}
          onClick={() => onToggle(id)}
        >
          {completed ? <X size={16} /> : <Check size={16} />}
        </Button>

        <Button variant='sky' shape='toIcon' title='Editar tarefa' onClick={() => onEdit(id)}>
          <Edit size={16} />
        </Button>
        <Button variant='danger' shape='toIcon' title='Deletar tarefa' onClick={() => onDelete(id)}>
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  )
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TaskItem
