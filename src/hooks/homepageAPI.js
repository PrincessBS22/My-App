import { useReducer, useEffect } from "react";
import {initialState, homeReducer} from "../reducers/homeReducer"


function useHomePageAPI() {

    const [state, dispatch] = useReducer(homeReducer, initialState);
    const {title, search, page} = state;

    //getTitles
    useEffect(() => {
          fetch("https://web.ics.purdue.edu/~shaverb/get-titles.php")
          .then((res) => res.json())
          .then((data) => {
            //setTitles(data.titles)
            dispatch({type: "SET_TITLES", payload:data.titles})
          })
        },[])
    //fetch data
    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~shaverb/fetch-data-with-filter.php?title=${title}&name=${search}&page=${page}&limit=10`)
              .then(res => res.json())
              .then((data) => {
                // setProfiles(data.profiles);
                // setCount(data.count);
                // setPage(data.page);
                dispatch({type: "FETCH_DATA", payload:data});
                console.log(page)
              })
            }, [title,search,page]);
    
    return[state, dispatch]
    
}
export default useHomePageAPI