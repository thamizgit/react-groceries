import './App.css';
const searchItem = ({search,setSearch})=>{
    return(
        <form className="searchItem" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input type="text"
                   role="searchbox"
                   placeholder='search item'
                   id="search"
                   value={search}
                   onChange={(e)=>setSearch(e.target.value)}
                   />
        </form>
    )
}
export default searchItem