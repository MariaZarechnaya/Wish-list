

import './wish-list.css'
import Item from './item';

const WishList = ({data, deleteWish, onChangeWishStatus}) =>{

    const renderItem = data.map((item) =>{
        const {...itemProps} = item;
        console.log({...itemProps})
        return ( <Item 
        key = {item.id}
        wishName = {item.wishName}
        del = {() =>{ deleteWish(item.id) }}
        onChangeWishStatus = {(event) => onChangeWishStatus(item.id, event.currentTarget.getAttribute('data-status') )}
        {...itemProps}
        /> )
    })

    return(
        <ul className= "list-group">
            {renderItem}
        </ul>
    )
}
export default WishList;