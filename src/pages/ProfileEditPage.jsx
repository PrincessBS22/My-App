import React, { useState, useEffect } from 'react';
import Wrapper from "../components/wrapper";
import ProfileForm from "../components/profileForm";
import { Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


 

const ProfileEditPage = () => {
  const {id} = useParams();
  const nav = useNavigate();
  const handleDelete = () => {

    fetch(`https://web.ics.purdue.edu/~shaverb/delete-profile.php?id=${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message === "Profile deleted successfully"){
          alert("Profile Deleted");
          nav("/");
        }else{
          alert("Failed to delete profile");
        }
      });
  }

  return (

    <Wrapper>
    <h1>Edit Profile</h1>
    <button onClick ={handleDelete}>Delete Profile</button>
    </Wrapper>
  );

};

export default ProfileEditPage;