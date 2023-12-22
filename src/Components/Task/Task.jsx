import { Link } from "react-router-dom";
const Task = ({task, handleDelete}) => {
    const {_id} = task;
    return (
        <div className="mb-5 h-max">
      <div className="flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full border border-[#00ADB5] bg-base-100 py-2  px-5">
          
          <div className="flex flex-row justify-center items-center gap-4">
            <button onClick={()=>handleDelete(task?._id)} className="w-6 order-last"><img  src="https://i.ibb.co/wCMrCmp/icons8-cross-100-1.png" alt="" /></button>
          
          <h1 className="text-[#00ADB5] flex-1 text-center text-xl font-bold mt-3">
            {task?.title}
          </h1>
          </div>
            <p className="text-[#00ADB5] mt-3 mb-3">{task?.description}</p>
            <div className="flex justify-between items-center mb-1">
                <p className="text-[#00ADB5] mt-3 mb-3">Deadline: {task?.deadline}</p>
                <p className="text-[#00ADB5] mt-3 mb-3">Priority: {task?.priority}</p>
            </div>
            <Link to={`/update/${_id}`}><button><div className="flex gap-2 items-center"><img src="https://i.ibb.co/Twggkf0/icons8-update-64.png" className="w-5" alt=""  /><p className="">Update</p></div></button></Link>
            
        </div>
      </div>
    </div>
    );
};

export default Task;