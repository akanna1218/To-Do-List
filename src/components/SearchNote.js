import React from 'react'

const SearchNote = ({search,setSearch}) => {
  return (
    <form className='SearchNote' >
        <label htmlFor='searchNote'></label>
        <input 
        type='text'
        style={{marginTop:'5px'}}
        placeholder='Find Note '
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        ></input>

    </form>
  )
}

export default SearchNote