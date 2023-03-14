import React, { useEffect, useState} from 'react';
import AppHeader from '../app-header/header';
import Search from '../app-search/search';
import Filter from '../app-search/search-panel-img/filter';
import WishList from '../app-wish-list/wish-list';
import Item from '../app-wish-list/item';
import AddWish from '../app-wish-add/wish-add';

import './app.css'

const App = () =>{

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const [id, setId] = useState(0);
    const [line, setLine] = useState('');



    const addWish = (wish) =>{
        if(!wish){
            return
        }
    let obj = {
        wishName: wish.trim(),
        done: false,
        priority: false,
    }
    setId((id) => id +1)
    obj.id = id;
    console.log(obj)
    setData((data) =>{
       let newData =  [...data, obj]
       return newData
    })
    }

    
    // const deleteWish = (id) =>{
    //     setData ((data) =>{
    //         let deleteItem = data.filter((item) =>{
    //           return  item.id !==id;
    //         })
    //         return deleteItem
    //     })

    // }
        
    const deleteWish = (id) =>{
        setData ((data) =>{
            let deleteItem = data.filter((item) =>{
              return  item.id !==id;
            })
            // console.log(deleteItem)
            return deleteItem
        })

    }

    
    const filtersItem = (item, filter) =>{
        switch (filter){
            case 'done':
                return item.filter (elem => elem.done);
            case 'priority':
                return item.filter (elem => elem.priority);
                default:
                    return item;
                    

        }
    }

    const onFilterClick = (filter) =>{
        setFilter (filter)
    }

    const changeWishStatus = (id, prop) =>{
        console.log (`Завершенное желание номер ${id}`)
        setData((data) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index]
        
        const newItem = { ...old, [prop] : !old[prop] };
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return newArr
        })
    }

    const searchWish = (line, item) =>{
        if (line.length == 0){
            return item;
        }
        let searchList = item.filter(elem => {
            console.log('поиск')
              return elem.wishName.indexOf(line) > -1;
        })
        return searchList;
    }

     const updateSearch = (line) =>{
        setLine(line)
     } 

    let visibleData = filtersItem (searchWish (line, data), filter)
    return(
        <div className='app'>
            <header>
                <AppHeader 
                data = {data} />
            </header>
            
            <div className="search-panel">
            <div className='search-section'>
                <Search
                search = {updateSearch}
                data = {data}
                />
                <div className="search-panel-filter">
                <Filter
                filter = {filter}
                onFilterClick = {onFilterClick}
                />
                </div>
                </div>
            </div>
            
            <div className="wish-list">
                <WishList 
                search = {searchWish}
                data = {visibleData}
                deleteWish = {deleteWish}
                onChangeWishStatus = {changeWishStatus}
            />
           </div>
           
           <div className="add-wish-block">
                <AddWish
                add = {addWish}
                />
            </div>
        </div>
        
                   
    )
}

export default App;