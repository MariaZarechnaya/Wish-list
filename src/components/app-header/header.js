
import './header.css';

const AppHeader = (props) =>{
    const {data} = props;
    const numberOfWishes = data.length;
    const allDoneWishes = data.filter ((item) => item.done === true).length;
    
    return (
        <div className="app-header">
        <h1 className="app-header__title"> Wish List </h1>
        <h2> All wishes: {numberOfWishes} </h2>
        <h2> Dreams come true: {allDoneWishes} </h2>
        
        </div>
    )
};

export default AppHeader;