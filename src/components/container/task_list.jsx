import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

function TaskListComponent(props) {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);


  return (
    <div>
        <div>
            Your Tasks:
        </div>
        {/* TODO: Aplicar un For/Map para renderizar una lista */}
        <TaskComponent task={defaultTask} ></TaskComponent>
    </div>
  )
}

export default TaskListComponent;
