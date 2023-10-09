const UpdateTask = ({updateTask, changeTask, editTask, cancelEditTask}) => {
    return(
          <>
            {/* To update task */}
            <div className="row">
            <div className="col">
                <input 
                  value = {updateTask && updateTask.name}
                  onChange= {(e) => changeTask(e)}
                  className="form-control form-control-lg"/>
              </div>
              <div className="col-auto">
              <button 
                onClick={editTask}
                className="btn btn-lg btn-success" 
                style={{marginRight:17}}>Update</button>
              <button 
                onClick={cancelEditTask}
                className="btn btn-lg btn-danger">Cancel</button>
              </div>
            </div>
            <br/>
          </>
    )
}

export default UpdateTask;