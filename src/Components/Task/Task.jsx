import { Link } from "react-router-dom";
const Task = ({task, handleDelete, tasks, setTasks}) => {
    const {_id} = task;

    //handle status to todo
    const handleUpdateStatusTodo = id =>{
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'todo'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // update status
                const updated = tasks?.find(job => job?._id === id);

                if (updated) {
                    updated.status = 'todo';
                    const remaining = tasks?.filter(job => job._id !== id);
                    const newBidJobs = [updated, ...remaining];
                    setTasks(newBidJobs);
                } else {
                    setTimeout(() => {
                        window.location.reload();
                      }, 100)
                }
            }
        })
    }
    //handle status to ongoing
    const handleUpdateStatusOngoing = (id) => {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'ongoing' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update status
                    const updated = tasks?.find(job => job?._id === id);
    
                    if (updated) {
                        updated.status = 'ongoing';
                        const remaining = tasks?.filter(job => job._id !== id);
                        const newBidJobs = [updated, ...remaining];
                        setTasks(newBidJobs);
                    } else {
                        setTimeout(() => {
                            window.location.reload();
                          }, 100)
                    }
                }
            })
            .catch(error => {
                console.error('Error updating task status:', error);
            });
    }
    
    const handleUpdateStatusCompleted = (id) => {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'completed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update status
                    const updated = tasks?.find(job => job?._id === id);
    
                    if (updated) {
                        updated.status = 'completed';
                        const remaining = tasks?.filter(job => job._id !== id);
                        const newBidJobs = [updated, ...remaining];
                        setTasks(newBidJobs);
                    } else {
                        console.error(`Task with ID ${id} not found`);
                    }
                }
            })
            .catch(error => {
                console.error('Error updating task status:', error);
            });
    }

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
            <div className="flex justify-between items-center">
                <Link to={`/update/${_id}`}><button><div className="flex gap-2 items-center"><img src="https://i.ibb.co/Twggkf0/icons8-update-64.png" className="w-5" alt=""  /><p className="">Update</p></div></button></Link>

                <Link className={`${task.status === 'todo' && 'hidden'}`}><button onClick={()=>handleUpdateStatusTodo(task._id)}><div className="flex gap-2 items-center"><img src="https://i.ibb.co/T27XZcg/icons8-to-do-100.png" className="w-5" alt=""  /><p className="">make <br /> todo</p></div></button></Link>

                <Link className={`${task.status === 'ongoing' && 'hidden'}`}><button onClick={()=>handleUpdateStatusOngoing(task._id)}><div className="flex gap-2 items-center"><img src="https://i.ibb.co/pXmx15D/icons8-processing-64.png" className="w-5" alt=""  /><p className="">make <br /> ongoing</p></div></button></Link>

                <Link className={`${task.status === 'completed' && 'hidden'}`}><button onClick={()=>handleUpdateStatusCompleted(task._id)}><div className="flex gap-2 items-center"><img src="https://i.ibb.co/jrp7yFF/icons8-task-completed-100-1.png" className="w-5" alt=""  /><p className="">make <br /> completed</p></div></button></Link>
            </div>
            
        </div>
      </div>
    </div>
    );
};

export default Task;