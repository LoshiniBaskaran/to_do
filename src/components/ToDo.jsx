import React from 'react';

const ToDo = ({list, markComplete, setUpdateTask, delTask}) => {
    return(
        <>
            {list && list
                .sort((a,b) => a.id > b.id ? 1 : -1)
                .map( (item, index) => {
                  return(
                    <React.Fragment key={item.id}>
                    <div className="col taskBg">
                        <div className={item.comp_status ? 'completed' : 'notCompleted'}>
                        <span className="taskNumber">{index+1} </span>
                        <span className="taskName">{item.name}</span>
                        </div>
                        <div className="taskControls">
                        <span 
                            onClick={(e) => markComplete(item.id)}
                            className="statusCheck" 
                            title={item.comp_status ? 'Mark as in progress' : 'Mark as Complete'}>
                            {item.comp_status ? 'Uncheck' : 'Check'}
                        </span>
                        {!item.comp_status && 
                            <span
                            onClick={() => setUpdateTask({
                                id:item.id
                                , name: item.name
                                , comp_status: item.comp_status
                            })}
                            className="editTask" title="Edit"> Edit</span> }
                        <span 
                            onClick={() => delTask(item.id)}
                            className="deleteTask" title="Delete">
                            Delete
                        </span>
                        </div>
                    </div>
        
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default ToDo;