import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import List from "../List/List";

const TaskLists = ({tasks, setTasks}) => {
    const { user, signOutUser } = useContext(AuthContext);
    console.log(user);
    const toDoTasks = tasks?.filter(task => task?.status === 'todo');
    const onGoingTasks = tasks?.filter(task => task?.status === 'ongoing');
    const completedTasks = tasks?.filter(task => task?.status === 'completed');

    return (
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <List listName='To-do' tasks={tasks} iconURL='https://i.ibb.co/T27XZcg/icons8-to-do-100.png' setTasks={setTasks} filteredTasks={toDoTasks}></List>
            <List listName='Ongoing' tasks={tasks} iconURL='https://i.ibb.co/pXmx15D/icons8-processing-64.png' setTasks={setTasks} filteredTasks={onGoingTasks}></List>
            <List listName='Completed' task={tasks} iconURL='https://i.ibb.co/jrp7yFF/icons8-task-completed-100-1.png' setTasks={setTasks} filteredTasks={completedTasks}></List>
        </div>
    );
};

export default TaskLists;