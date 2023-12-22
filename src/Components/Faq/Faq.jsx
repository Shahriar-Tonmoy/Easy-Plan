const FAQ = () => {
  return (
    <div className="min-h-screen container mx-auto mt-52">
      <div>
        <div className="collapse collapse-arrow bg-[#00ADB5]">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium text-white">
          How do I add a new task to the system?
          </div>
          <div className="collapse-content">
            <p className="text-white">
            To add a new task, navigate to the "Add Task" section on the website. Fill in the required information, including the task title, description, deadline, and priority. Once entered, click the "Add" button to save the task to the system.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border-2 border-[#00ADB5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Can I update the details of an existing task?
          </div>
          <div className="collapse-content">
            <p>
            Yes, you can update the details of an existing task. Go to the task details page or use the "Update" button next to the task. Modify the necessary information and click the "Update" button to save the changes.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#00ADB5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-white">
          How can I change the status of a task (e.g., from 'To Do' to 'Ongoing' or 'Completed')?
          </div>
          <div className="collapse-content">
            <p className="text-white">
            To change the status of a task, go to the task details page or use the relevant action buttons (e.g., "Make Todo," "Make Ongoing," or "Make Completed"). Click the appropriate button to update the task's status. The system will reflect the changes immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
