import React from 'react';
import { useTasks } from '../../utils/Task-context';
import Task from '../Task/Task';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = () => {
  const tasks = useTasks();

  return (
    <DragDropContext>
      <Droppable droppableId='taskList'>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Task task={task} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
