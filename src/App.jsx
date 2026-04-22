import Button from './components/ui/Button'
import Card from './components/ui/Card'
import Input from './components/ui/input'
import Textarea from './components/ui/Textarea'

import TaskDetail from './components/task/TaskDetail'
import TaskItem from './components/task/TaskItem'

import { useTask } from './hooks/useTask'

const App = () => {
  const {
    task,
    tasks,

    title,
    setTitle,

    description,
    setDescription,

    showPanel,
    setOpenPanel,

    formEdit,

    handleSubmit,
    handleEdit,
    handleDelete,
    handleSelectTask,
    handleToggleTask,

    cancelEdit,
    clearForm
  } = useTask()

  return (
    <div className='min-h-screen py-32 px-4'>
      <Card className={showPanel ? 'max-w-5xl' : 'max-w-xl'}>
        <h1 className='font-semibold text-lg text-slate-800 mb-5 text-center sm:text-2xl'>Gerenciador de Tarefas</h1>

        <div className={`grid ${showPanel && 'grid-cols-2 divide-x-2'}`}>
          <div className='px-4'>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <Input
                  label='Título'
                  id='title'
                  placeholder='Título da tarefa'
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>

              <div className='mb-3'>
                <Textarea
                  label='Descrição'
                  id='description'
                  placeholder='Descrição da tarefa'
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>

              <div className='flex justify-end gap-2 mb-3'>
                <Button variant='secondary' onClick={formEdit ? cancelEdit : clearForm}>
                  {formEdit ? 'Cancelar' : 'Limpar'}
                </Button>
                <Button type='submit'>{formEdit ? 'Editar' : 'Adicionar'}</Button>
              </div>
            </form>

            {!formEdit && (
              <>
                <div>
                  <h2 className='font-semibold text-slate-800'>Tarefas:</h2>
                </div>

                <div className='grid divide-y-2'>
                  {tasks.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggle={handleToggleTask}
                      onView={handleSelectTask}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {showPanel && (
            <div className='col-span-1'>
              {task ? (
                <TaskDetail
                  title={task.title}
                  description={task.description}
                  createdAt={task.createdAt}
                  onClose={() => setOpenPanel(false)}
                />
              ) : (
                <h2>Tarefa não encontrada</h2>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

export default App
