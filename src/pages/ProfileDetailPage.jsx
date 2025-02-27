import Wrapper from "../components/wrapper";
import { useState, useEffect } from 'react'
import {useParams, Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../contexts/AuthContext";

const ProfileDetailPage = () => {
    const {isLogin} = useContext(AuthContext);
    const {id} = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(()=> {
        fetch(`https://web.ics.purdue.edu/~shaverb/fetch-data-with-id.php?id=${id}`)
        .then((res)=>res.json())
        .then((data)=> {
            setProfile(data);
            console.log(data);
         });
    }, [id]);

  return (
    <>
      <main className="corpse">
        <Wrapper>
            {!profile ? (
                <p>loading...</p>
            ):(
            <>
          <h1>{profile.name}</h1>
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p>{profile.bio}</p>
          <img src={profile.image_url} alt={profile.name} />
          {isLogin && <Link to='edit'>Edit Profile</Link>}
          </>)}
        </Wrapper>
      </main>
    </>
  )
}

export default ProfileDetailPage