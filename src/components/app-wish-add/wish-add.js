import { useState } from 'react';
import './wish-add.css'
const AddWish = ({add})=>{
    const[wishValue, setValue] = useState('')

   const  onInputValue = (element) =>{
        console.log(element.target.value)
        setValue(element.target.value)
       
    }

    const addNewWish = () =>{
        add(wishValue)
    }
 
    return(
        <div className="app__add-wish">
            
            {/* <span className="add-wish-span">Add wish</span> */}
            <form className='add-form' action="">

            <div className="app__add-wish__form-wrapper d-flex flex-row">
            <input 
            maxLength={40}
            type="text" 
            className="form-control" 
            placeholder='Add your wish'
            onBlur = {onInputValue}
            
            />

            <button 
            className="btn btn-outline-light btn-add-wish" 
            type='button'
            onClick = {addNewWish}
            >
                Add
            </button>
            </div>

            </form>

        </div>
    )
}

export default AddWish;