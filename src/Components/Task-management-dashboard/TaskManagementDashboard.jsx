import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import AddTask from "../AddTask/AddTask";
import TaskLists from "../TaskLists/TaskLists";

const TaskManagementDashboard = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className=" container mx-auto mt-20">
        <div className="flex flex-col justify-start  items-center gap-6 mb-10">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-[#00ADB5] ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} />
          </div>
        </div>
        <h1 className="text-[#00ADB5] text-center text-xl font-bold">
            {user.displayName}
          </h1>
      </div>
        <TaskLists tasks={tasks}></TaskLists>
      
      <AddTask tasks={tasks} setTasks={setTasks}></AddTask>
    </div>
  );
};

export default TaskManagementDashboard;
