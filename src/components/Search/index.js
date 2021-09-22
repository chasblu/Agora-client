const Search = ({handleChange,handleSearch,search}) => {

   

    return (
        <form  onSubmit={handleSearch}>
            <input type="text" id="seach" placeholder="Search" className="search"  value={search} onChange={handleChange}/>
        </form>
    )
}

export default Search;