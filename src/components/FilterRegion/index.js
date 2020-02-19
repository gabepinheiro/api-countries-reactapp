import React, { useState } from 'react'

import FilterContainer from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function FilterRegion() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();

    // e.target.focus();

    setToggle(!toggle)
  }

  return (
    <FilterContainer>
      <button onClick={handleToggle} onBlur={() => setToggle(!toggle)}>
        Filter by Region
        <FontAwesomeIcon icon={toggle ? faAngleDown : faAngleRight} />
      </button>
      {toggle &&
        <ul>
          <li>America</li>
          <li>Africa</li>
          <li>Europa</li>
        </ul>
      }
    </FilterContainer>
  )
}

export default FilterRegion;