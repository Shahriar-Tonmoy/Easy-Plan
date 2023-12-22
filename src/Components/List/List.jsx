import Task from "../Task/Task";

const List = ({listName, iconURL, tasks}) => {
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
          {tasks?.map((task) => (
                <Task key={task?._id} task={task}></Task>
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