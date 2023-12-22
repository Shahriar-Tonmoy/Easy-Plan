
const Task = ({task}) => {
    return (
        <div className="mb-5 h-max">
      <div className="flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full border border-[#00ADB5] bg-base-100 py-2  px-5">
          
          <div className="flex flex-row justify-center items-center gap-4">
         <img className="w-6 order-last" src="https://i.ibb.co/wCMrCmp/icons8-cross-100-1.png" alt="" /> 
          <h1 className="text-[#00ADB5] flex-1 text-center text-xl font-bold mt-3">
            {task.title}
          </h1>
          </div>
          <p className="text-[#00ADB5] mt-3">{task.description}</p>
          <div className="text-center">
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Task;