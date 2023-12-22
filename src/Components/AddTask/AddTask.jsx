import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = ({tasks, setTasks}) => {
  const { register, handleSubmit } = useForm();
  const { user, signOutUser } = useContext(AuthContext);
  let [newTask, setNewTask] = useState({});
  console.log(user);
  const userEmail = user.email;
  const status = 'todo'
  const onSubmit = (data) => {
    newTask = {
        ...data, userEmail, status
      };
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
                window.location.reload();
              }, 100)
            toast("Task successfully added!!");
            
            setNewTask({...newTask, _id:data.insertedId});
            
             const newTasks = [...tasks, newTask ]
             setTasks(newTasks);
            console.log(data)
        });
    console.log(data)
    };

  return (
    <div className="hero ">
        <ToastContainer></ToastContainer>
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#00ADB5] bg-base-100 py-20 px-5">
          <h1 className="text-[#00ADB5] text-center text-3xl font-bold">
            Add New Task
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Task Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered border-[#00ADB5] focus:outline-none focus:border-[#00ADB5] text-[#00ADB5]"
                  {...register('title')}
                  name="title"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered border-[#00ADB5] focus:outline-none focus:border-[#00ADB5] text-[#00ADB5]"
                  {...register('description')}
                  name="description"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Deadline</span>
                </label>
                <input
                  type="date"
                  placeholder=""
                  className="input input-bordered border-[#00ADB5] focus:outline-none focus:border-[#00ADB5] text-[#00ADB5]"
                  {...register('deadline')}
                  name="deadline"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Priority</span>
                </label>
                <select 
                  {...register('priority')}
                  name="priority"
                  className="select select-bordered border-[#00ADB5] focus:outline-none w-full max-w-xs text-[#00ADB5]">
                    <option disabled selected>Set the priority</option>
                    <option className="border-[#00ADB5]" value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-opacity-0 border-[#00ADB5] hover:bg-opacity-0 hover:border-green-200 w-[20%] mx-auto">
                Add
              </button>
            </div>
          </form>
          <div className="text-center">
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
