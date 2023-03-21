import './App.css';
import {FaTrashAlt} from 'react-icons/fa';
function Content({items,handleCheck,handleDelete,count}){

    /* for click events
     const handleName= ()=>{
    const names = ["thamiz","sanjai","sharath"];
    const num = Math.floor(Math.random()*3);
    return names[num];
    }
    const handleClick =()=>{
        console.log('User clicked');
    }
    const handleClickName=(name)=>{
        console.log(`${name} has clicked`)
    }
    const handleClickTarget = (e)=>{
        console.log(`User clicked button named "${e.target.innerText}" `)
    }
    const name = handleName(); */

    /* for states and changing states
     const [name,setName]=useState("thamiz");

    const handleNameChange = ()=>{
        const names =["thamiz","sanjai","sharath","saran","vaibhav","yoga","viswa"];
        const ind=Math.floor((Math.random()*7))
        setName(names[ind]);
    }
    const handleClick = (name)=>{
        console.log(`${name} has clicked the button`);
    }

    const handleNameandTarget = (e,name)=>{
        console.log(`${name} has clicked "${e.target.innerText}" button`)
    }

    const [count,setCount]=useState(0);
    const handleIncrease = (count)=>{
        setCount(count+1);
    }
    const handleDecrease =(count)=>{
        setCount(count-1);
    } */

    /* for groceries list -> this was moved to parent component
     const [items,setItems]=useState([
        {
            id:1,
            item:"item1",
            checked:false
        },
        {
            id:2,
            item:"item2",
            checked:false
        },
        {
            id:3,
            item:"item3",
            checked:false
        }
    ])
    const handleCheck = (id)=>{
        const listitems = items.map((item)=>
            (item.id === id ? {...item,checked: !item.checked} : item 
        ));
        setItems(listitems);
        localStorage.setItem("groceries-list",listitems);
    }
    const handleDelete = (id)=>{
        const listitems = items.filter((item)=> (item.id!==id));
        setItems(listitems);
        localStorage.setItem("groceries-list",listitems);
    } */
    
    return(
        <>
            {items.length ? (
            /* for click events
             <h1>Hello {name} </h1>
            <button onClick={()=>handleClick()}>Click</button>
            <button onClick={()=>handleClickName(name)}>Click</button>
            
            <button onClick={(e)=>handleClickTarget(e)} >Click this</button> */

            /* for states and changing states
             <h1>Hello {name}</h1>

            <button onClick={()=>handleNameChange()}>Change Name</button>

            <button onClick={()=>handleClick(JSON.stringify(name))}>click</button>

            <button onClick={(e)=>handleNameandTarget(e,JSON.stringify(name))}>Click this</button>

            <h1>{count}</h1>
            <button onClick={()=>handleIncrease(count)}>Increase</button>
            <button onClick={()=>handleDecrease(count)}>Decrease</button> */
            
            <ul className="itemslist">
                <h1> WishList</h1>
                {items.map((item)=>
                    <li className='item' key={item.id}>
                        <input type="checkbox"
                         checked={item.checked}
                         onChange={()=>handleCheck(item.id)}
                        ></input>
                        <label>{item.item}</label>
                        <FaTrashAlt onClick={()=>handleDelete(item.id)
                        } className="delete-icon" role="button" />
                    </li>
                )}
                <h2>You have selected {count} {count!==1 ?"items":"item"}</h2>
            </ul>
            
            ): <h1>There are no items in the list</h1>}
        </>

    )
}
export default Content;