import { useState } from 'react';

const useProfHook = () => {
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
    return({data, error, submited, handleChange, handleSubmit});
}

export default useProfHook;