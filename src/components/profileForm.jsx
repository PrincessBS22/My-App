import { useState } from 'react'

const ProfileForm = () => {
    const [data, setData] = useState({ name: "", title: "", email: "", bio: "", image: null});
    const [error, setError]= useState({image: "", general: ""});
    const [submited, setSubmited]= useState(false);
    const [sucessM, setSucessM]= useState("");


    const handleChange = (e) => {
        if(e.target.name === "image"){
            const file = e.target.files[0];
            if(file.size > 2000000){
                setError({...error, image: "Image must be less than 2MB"});
            }
            else{
                setData({...data, image: file});
            }
            
            setData({...data, image: e.target.files[0]});
        }
        else{
        setData({ ...data, [e.target.name]: e.target.value });
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmited(true);

        const formData = new FormData(e.target);
        formData.append("name", data.name.trim());
        formData.append("email", data.email.trim());
        formData.append("title", data.title.trim());
        formData.append("bio", data.bio.trim());
        if(data.image) formData.append("image", data.image);
        //console.log(data.image+"test");
        try{
            const response = await fetch("https://web.ics.purdue.edu/~shaverb/send-data.php",{
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            if(result.sucess){
                setData({name: "", title: "", email: "", bio: "", image: null});
                setError({image:"", general:""});
                setTimeout(() => {
                    setSucessM("Data Submitted Sucessfully.");
                }, 3000);
            }
            else{
                setError({image:"", general: result.message});
                setSucessM("");
            }
        }
        catch(error){
            setError({image:"", general: error});
        }
        finally{
            setSubmited(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <input type="text" name="name" placeholder="Name" required value={data.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required value={data.email} onChange={handleChange} />
            <input type="text" name="title" placeholder="Title" required value={data.title} onChange={handleChange} />
            <textarea name="bio" placeholder="Bio" required value={data.bio} onChange={handleChange} maxLength="200" /><p>{data.bio.length}/200</p>
            <label htmlFor="image">Choose a profile picture:</label>
            <input type="file" id="image" name="image" accept="image/jpg, image/jpeg, image/png, image/gif" onChange={handleChange}/>
            {error.image && <p>{error.image}</p>}
            <button type="submit" disabled={submited|| data.name.trim === "" || data.title.trim === "" ||data.email.trim === "" ||data.bio.trim === "" || data.image ===null ? true: false}>Submit</button>
            {error.general && <p>{error.general}</p>}
        </form>
    )
}

export default ProfileForm;