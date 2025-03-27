import Card from "../components/card";
import styles from "../styles/card.module.css";
import Wrapper from "../components/wrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useCallback, useMemo } from "react";
import useHomePageAPI from "../hooks/homepageAPI";
import Filter from "../components/filters";

const HomePage = () => {
  // const [profiles, setProfiles] = useState([]);
  // const [page, setPage] = useState(1);
  // const [count, setCount] = useState(1);
  // const [darkMode, setDarkMode] = useState(false);
  // const [titles, setTitles] = useState([]);
  // const [title, setTitle] = useState("");
  // const [search, setSearch] = useState("");
  const [state, dispatch] = useHomePageAPI();
  const { titles, title, search, profiles, page, count } = state;

  // //store animation state
  // const [animation, setAnimation] = useState(false);
  // const handleAnimation = () =>{
  //   setAnimation(false);}

  //get titles
  // useEffect(() => {
  //   fetch("https://web.ics.purdue.edu/~shaverb/get-titles.php")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     //setTitles(data.titles)
  //     dispatch({type: "SET_TITLES", payload:data.titles})
  //   })
  // },[])
  // },[])

  //update title on change
  const handleTitleChange = useCallback((event) => {
    // setTitle(event.target.value);
    // console.log(event.target.value);
    // setPage(1);
    dispatch({ type: "SET_TITLE", payload: event.target.value });
    //setAnimation(true);
  }, []);

  //name search
  const handleSearchChange = useCallback((event) => {
    // setSearch(event.target.value);
    // setPage(1);
    dispatch({ type: "SET_SEARCH", payload: event.target.value });
    //setAnimation(true);
  }, []);

  const handleClear = useCallback(() => {
    // setTitle("");
    // setSearch("");
    // setPage(1);
    dispatch({ type: "CLEAR_FILTERS" });
    //setAnimation(true);
  }, []);

  // useEffect(() => {
  // fetch(`https://web.ics.purdue.edu/~shaverb/fetch-data-with-filter.php?title=${title}&name=${search}&page=${page}&limit=10`)
  //       .then(res => res.json())
  //       .then((data) => {
  //         // setProfiles(data.profiles);
  //         // setCount(data.count);
  //         // setPage(data.page);
  //         dispatch({type: "FETCH_DATA", payload:data});
  //         console.log(page)
  //       })
  //     }, [title,search,page]);

  const titlesValue = useMemo(() => titles, [titles]);

  return (
    <>
      <main className="corpse">
        <Wrapper>
          <h1>Profiler App</h1>
          {/* <button onClick={handleClick}>
            {clicked ? "Clicked" : "Click me"}
          </button> */}
        </Wrapper>
        <Wrapper>
          <Filter titles={titlesValue} 
            title={title} search={search} 
            handleTitleChange={handleTitleChange} 
            handleSearchChange={handleSearchChange} 
            handleClear={handleClear} 
          />
          <div className={styles["profile-cards"]}>
            {profiles.map((profile) =>
            (<Link to={`/profile/${profile.id}`} key={profile.id}>
              <Card key={profile.id} {...profile} />
            </Link>
            ))}
          </div>
          {count === 0 && <p>No profiles found!</p>}
          {count > 10 &&
            <div className="pageinator">
              <button onClick={() => dispatch({ type: "SETPAGE", payload: page - 1 })} disabled={page === 1}><FontAwesomeIcon icon={faChevronLeft} /></button>
              <span>{page}/{Math.ceil(count / 10)}</span>
              <button onClick={() => dispatch({ type: "SETPAGE", payload: page + 1 })} disabled={page >= Math.ceil(count / 10)}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>}
        </Wrapper>
      </main>
    </>
  )
}

export default HomePage
