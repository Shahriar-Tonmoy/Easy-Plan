import { useState } from "react";
import Task from "../Task/Task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = ({listName, iconURL, filteredTasks, tasks, setTasks}) => {
    // const [tsks, setTsks] = useState(tasks);
    // const tsks = [...tasks]
    // console.log(tsks);



    const handleDelete = id =>{
        if(id){
            fetch(`http://localhost:3000/tasks/${id}`,{
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data,data.deletedCount)
                if(data.deletedCount > 0){
                    toast('DELETED SUCCESSFULLY');
                    // setTimeout(() => {
                    //     // window.location.reload();
                    //   }, 1000)
                    const remainingTasks = tasks.filter(tsk => tsk?._id !== id);
                    setTasks(remainingTasks);
                }
            })
        }
    }
    return (
    <div className="">
      <div className="hero-content flex-col lg:flex-row-reverse w-full md:w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#00ADB5] bg-base-100 py-10 px-5">
          <div className="flex justify-center gap-4 items-center mb-10">
            <img src={iconURL} className="w-8" alt="" />
            <h1 className="text-[#00ADB5] text-center text-3xl font-bold">
                {listName}
            </h1>
          </div>
          {filteredTasks?.map((task) => (
                <Task key={task?._id} handleDelete={handleDelete} tasks={tasks} setTasks={setTasks} task={task}></Task>
        ))}
          <div className="text-center">
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
    );
};

export default List;