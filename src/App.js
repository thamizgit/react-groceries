
import Header from './Header';
import Footer from './Footer';
import Main from './Content';
import { useState } from 'react';
import { useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './searchItem';
import apiRequest from './apiRequest';
function App() {
            localStorage.setItem("grocery", {
              id: 1,
              item: "cookies",
              checked: false,
            });
            const API_URL = 'http://localhost:4500/items';
            const [items, setItems] = useState([
              {
                id: 1,
                item: "cookies",
                checked: false,
              },
              {
                id: 2,
                item: "milk",
                checked: false,
              },
              {
                id: 3,
                item: "biscuits",
                checked: false,
              },
            ]);
            localStorage.setItem('grocery', items);
            const [newItem,setNewItem] = useState('');
            const [search,setSearch] = useState('');
            const [fetchError,setFetchError] = useState(null);
            const [loading,setLoading]=useState(true);
            
          useEffect(()=>{
            const fetchData = async () => {
              try{
                const response = await fetch(API_URL);
                if(!response.ok) throw Error('Did not receive message from API')
                const listitems = await response.json();
                console.log(listitems);
                setItems(listitems);
                setFetchError(null);
              }
              catch(err){
                console.log(err.message);
                setFetchError(err.message);
              }
              finally{
                setLoading(false);
              }
            }
            setTimeout(()=>{fetchData()},1000);
        
          },[]);
  const handleCheck = async (id) => {
    
              const listitems = items.map((item)=>
                  (item.id === id ? {...item,checked: !item.checked} : item 
              ));
              setItems(listitems);

              //updating in json server or REST API

              const listitem = listitems.filter(item => item.id===id);
              const updateOptions = {
                method: 'PATCH',
                headers: {
                  'Content-Type' : 'application/json'
                },
                body : JSON.stringify({checked : listitem[0].checked})
              }
              const requrl = `${API_URL}/${id}`;
              const result = await apiRequest(requrl,updateOptions);
              if(result) setFetchError(result);
          }
          const handleDelete = async (id)=>{
              const listitems = items.filter((item)=> (item.id!==id));
              setItems(listitems);

              //update in json server or REST API
              const deleteOptions = {
                method:'DELETE'
              }
              const requrl=`${API_URL}/${id}`;
              const result = await apiRequest(requrl,deleteOptions);
              if(result) setFetchError(result)
              
          }
          const list = items.filter((item)=>item.checked===true);

          

          const handleSubmit = (e) => {
            e.preventDefault();
            const updated=newItem.trim();
            if(!updated) return;
            //add item
            addItem(updated);

            setNewItem('');
            
          }
          const addItem = async (item)=>{
            const id = items.length ? items[items.length-1].id + 1 : 1;
            const myNewItem= {id,item,checked:false};
            const newitems = [...items,myNewItem];
            setItems(newitems);
            
            //updating in json server
            const addOptions = {
              method : 'POST',
              headers : {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(myNewItem)
            }
            const result = await apiRequest(API_URL,addOptions);
            if(result) setFetchError(result)
          }

          
         
  return (
    <div className="App">
       <Header title="Groceries"/>
       <AddItem newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}/>
       <SearchItem search={search}
                   setSearch={setSearch}/>
        <main>
        {fetchError && <p style={{color:"red"}}>{fetchError}</p>}
        {loading && <p style={{fontSize:"2rem",position:"absolute",top:"60%",fontStyle:"italic"}}>{`Fetching Data, Please Wait...`}</p>}
       {!loading && <Main items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
             handleCheck={handleCheck}
             handleDelete={handleDelete}
             count={list.length}
            />}
        </main>
       <Footer length={items.length}/>
    </div>
  );
}

export default App;
