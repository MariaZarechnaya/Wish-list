import {useState} from 'react';
import './search.css'

const Search = ({search, data}) =>{
        // const [line, setLine] = useState('')
        const searchLine = (e) =>{
                let line = e.target.value.trim();
                console.log('ввели в поле поиска')
                // setLine(line)
                search(line)
        }

        return(
                <input 
                type="text" 
                className="form-control"
                placeholder="Search your wish"
                // value = {line}
                onInput = {searchLine}
                />

    
        )
}
export default Search;