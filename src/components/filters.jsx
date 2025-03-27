import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/card.module.css";
import { useRef, useEffect, memo } from "react";

const Filter = memo(({titles, title, search, handleTitleChange, handleSearchChange, handleClear}) => {
    return(
        <div className="filter-wrapper">
            <div className="filter-select">
              <label htmlFor="title-select">Select a Job Title: </label>
              <select id="title-select" onChange={handleTitleChange} value={title}>
                <option value="">All</option>
                {titles.map((title) => (<option key={title} value={title}>{title}</option>))};
              </select>
            </div>
            <div className="filter-search">
              <label htmlFor="search">Search by Name: </label>
              <input type="search" id="search" onChange={handleSearchChange} value={search}/>
              <button onClick={handleClear}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
    );
});

export default Filter;