
import './item.css'


const Item = (props) => {

    const {wishName, done, priority, del, onChangeWishStatus} = props;

    let classNamesLi = "list-group-item d-flex flex-row align-content-center justify-content-between";
    let doneClassBtn = "btn btn-light list-buttons-btn btn-light_done";
    let doneClassText =  "wish-item";
    let priorityBtn = "btn btn-light list-buttons-btn btn-light_favorite"


    if (done){
        classNamesLi += " done-item";
        doneClassBtn += " done-btn";
        doneClassText += " done-text"

    } 
     if (priority){
        classNamesLi += " priority-item";
        priorityBtn += " priority-btn";


    } 
    if(!wishName){
        return
    }

    return(
        <li  className={classNamesLi}>
            <span className={doneClassText}>{wishName}</span>
            <div className="list-buttons d-flex flex-row justify-content-between align-items-center">
                <button onClick = {del} className="btn btn-light list-buttons-btn btn-light_delete" type="button"></button>
                <button onClick = {onChangeWishStatus} className={priorityBtn}  type="button" data-status ="priority" ></button>
                <button onClick = {onChangeWishStatus} className={doneClassBtn} type="button" data-status ="done"></button>
            </div>
        </li>
    )

}

export default Item;