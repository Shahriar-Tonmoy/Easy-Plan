import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {

    const loadedTask = useLoaderData();
    const { title, description, deadline, priority } = loadedTask;
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        //e.preventDefault();
        //const form  = e.target;
        // const fName = form.name.value;
        // const fImage = form.image.value;
        // const fBrandName = form.brandName.value;
        // const fType = form.type.value;
        // const fPrice = form.price.value;
        // const fShortDescription = form.shortDescription.value;
        // const fRating = form.rating.value;
        const updatedProduct = data;
        console.log(updatedProduct);
        
        fetch(`http://localhost:3000/tasks/${loadedTask._id}`,{
            method:'PUT',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast('Updated Successfully!!')
                }
            })
        
    }

  return (
    <div className="hero min-h-screen">
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
                  defaultValue={title}
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
                  defaultValue={description}
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
                  defaultValue={deadline}
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
                  defaultValue={priority}
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
                Update
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

export default Update;
