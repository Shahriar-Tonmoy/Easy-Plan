import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import AddTask from "../AddTask/AddTask";

const TaskManagementDashboard = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="min-h-screen container mx-auto mt-20">
      <div className="flex flex-col justify-start  items-center gap-6">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-[#00ADB5] ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} />
          </div>
        </div>
        <h1 className="text-[#00ADB5] text-center text-xl font-bold">
            {user.displayName}
          </h1>
      </div>
      <AddTask></AddTask>
    </div>
  );
};

export default TaskManagementDashboard;
