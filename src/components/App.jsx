
import '../styles/app.scss';
import { useState } from 'react';

function App() {
  const [datas, setDatas] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('active');

  const handleClick = () => {
    // console.log({taskName, taskDescription, taskStatus});
    setDatas([...datas,{taskName,taskDescription,taskStatus}])
  };

 

  return (
    <div className="App">
      <div className="taskForm">
        <h2>Create Task</h2>
        <div className="field">
          <p>Task Name</p>
          <input type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
        </div>
        <div className="field">
          <p>Task Description</p>
          <textarea name="" value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}  ></textarea>
        </div>

        <div className="field-radio">
          <p>Task Status</p>
          <div className="radios">
            <div className="radio">
              <input
                type="radio"
                name="taskStatus"
                value="active" 
                checked={taskStatus === 'active'}
                onChange={(e)=>setTaskStatus(e.target.value)}
              />
              <p>Active</p>
            </div>
            <div className="radio">
              <input
                type="radio"
                name="taskStatus"
                value="deactive"
                checked={taskStatus === 'deactive'}
                onChange={(e)=>setTaskStatus(e.target.value)}
              />
              <p>Deactive</p>
            </div>
          </div>
        </div>
        <button onClick={handleClick}>Submit</button>
      </div>

      <div className="lists">
        {
          datas.map((data,index)=>(
            <div className="list" key={index}>
              <h3>{data.taskName}</h3>
              <p>{data.taskDescription}</p>
              <p>{data.taskStatus}</p>
            </div>
          ))
        }
      </div>
      
    </div>
  );
}

export default App;
