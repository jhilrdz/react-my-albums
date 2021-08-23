import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Search = ({onClick}) => {
    
const [searchField, setSearchField] = useState("");
const [errorField, setErrorField] = useState(true);
const [submitted, setSubmitted] = useState(false);
  

  const handleChange = e => {
    setSearchField(e.target.value);    
    setErrorField((!e.target.value));
  };

  const divSearch = {
    display: 'flex',
    justifyContent: 'flex-start',      
    margin:' 30px 50px 30px 50px',    
    width: '400px',
    borderBottom: `solid 2px ${((submitted && errorField)? 'red':'grey' )}`,
}

const buttonStyle = {    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: '30px',
    
}

const searchStyle = {    
    width: '90%',
    border: 'none',
    background: 'none',
    outline: 'none',
}


  return (
    <section>
      <div style={divSearch}>      
        <input     style={searchStyle}              
          type = "text" 
          placeholder = "Search by artist" 
          onChange = {handleChange}
        />
        <button style={buttonStyle} onClick={()=>{setSubmitted(true);onClick(searchField);}}><i className="fas fa-search"></i></button>
      </div>      
    </section>
  );
}

Search.propTypes = {
    onClick: PropTypes.func
}
export default Search;