


const SearchBox = (props) => {

   
    return (
        <div className="h-24 flex justify-start items-center gap-x-4 shadow-sm ">
            <input onChange={props.handleChange} className="border p-2 rounded-md ml-5" type="search" placeholder="Search" />
             <button
        onClick={() => props.handleClick(props.searchText, props.users)}
        className="py-2 px-3 border rounded-md hover:bg-slate-50">Search</button>
            <p>{ props.search}</p>
        </div>
            )
}

export default SearchBox