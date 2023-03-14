import './filter.css'

const Filter = ({onFilterClick, filter}) =>{

    const allBtn = [
       {name: 'all', label:'All'},
       {name: 'priority', label:'Priority'},
       {name: 'done', label:'Done'}
    ]
    const buttons = allBtn.map(({name, label}) =>{
        const active = filter === name; // вернет по сути либо true либо false
        const activeClass = active ? ' btn-light' : ' btn-outline-light'
        return (
            <button
            className= {`btn${activeClass}`}
            type = "button"
            key={name}
            onClick = {() =>{ onFilterClick(name) }}
            >
            
            {label}
            </button>

        )
    })
    return (
       <div className="btn-group">
        {buttons}
       </div>
    )
}
export default Filter;