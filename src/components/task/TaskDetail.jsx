import PropTypes from 'prop-types'

import { X } from 'lucide-react'

import Button from '../ui/Button'

const formatDate = (date) => {
  const formatted = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short'
  }).format(date)

  return formatted
}

const TaskDetail = ({ title, description, createdAt, onClose }) => {
  return (
    <div className='col-span-1 px-4 flex flex-col'>
      <div className='bg-slate-50 rounded border flex flex-col'>
        <div className='py-2 px-4'>
          <div className='flex justify-between'>
            <h3 className='text-lg font-semibold text-slate-800'>{title}</h3>

            <Button variant='transparent' shape='toIcon' onClick={onClose}>
              <X size={20} />
            </Button>
          </div>

          <hr className='my-3' />

          {description && <p className='text-slate-700'>{description}</p>}
        </div>

        <div className='border-t py-1 px-4'>
          {createdAt && (
            <p className='text-slate-500 text-sm'>
              Criada: <span>{formatDate(createdAt)}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

TaskDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  createdAt: PropTypes.string,
  onClose: PropTypes.func
}

export default TaskDetail
