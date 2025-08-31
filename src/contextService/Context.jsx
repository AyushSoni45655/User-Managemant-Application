import { createContext, useEffect, useState } from "react";
import { deleteComments, editPostComments, getComments, postComments } from "../services(Api's)/Api"; // <-- API import

export const AppContext = createContext();

export const AContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchUser,setSearchUser] = useState("");
  const [isUpdate,setIsUpdate] = useState({});
    const [filterUsers,setFilterUsers] = useState([]);

  // API call
  const getUser = async () => {
    try {
      const responce = await getComments();
      setUser(responce.data);
      setLoading(false);
      setError("");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(()=>{
    setFilterUsers(user);
  },[user])
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(searchUser.trim() === ""){
      setFilterUsers(user);
    }else{
      let filtered = user.filter((val)=>{
       return val.name.toLowerCase().includes(searchUser.toLowerCase());
      });
      setFilterUsers(filtered);
    }
  }
  // post handle
  const [addData,setAddData] = useState({
  name:"",
  email:"",
  phone:""
});
const hadledataAdd = (e)=>{
  setAddData((prev)=>({
    ...prev, [e.target.name]:e.target.value
  
  }));

  
}
const updatePostData = async ()=>{
const responce = await editPostComments(isUpdate.id,addData);
console.log(responce);
if(responce.status === 200){
setUser((prev)=>{
return prev.map((elem)=>{
return  elem.id === isUpdate.id ? responce.data : elem;
});
});
setAddData({name:"",phone:"",email:""});
setIsUpdate({});
}
}
const handleAddSubmit = async(e)=>{
e.preventDefault();
const action = e.nativeEvent.submitter.value;
if(action === "Add"){
 console.log(addData);
 try{
const responce = await postComments(addData);
if(responce.status === 201){
  setUser((prevUser)=>[...prevUser,responce.data]);
}
  // ✅ Input reset
    setAddData({ name: "", email: "", phone: "" });

 }catch(e){
  console.log(e);
  
 }
}else{
updatePostData();
}


}

// update (edit) handle

 
  const handleUpdate = (data)=>setIsUpdate(data);
  useEffect(()=>{
    isUpdate && setAddData ({
      name : isUpdate.name || "",
      phone: isUpdate.phone || "",
      email: isUpdate.email || "",
    });
  },[isUpdate]);
  const isEmpty = Object.keys(isUpdate).length === 0;
  
  // handle deleteion

    const handleDelete = async(id)=>{
  try{
  const responce = await deleteComments(id);
  console.log(responce);
  if(responce.status === 200){
    const updatedvalue = user.filter((val)=>{
      return val.id !== id;
    });
    setUser(updatedvalue);
  }
  
  }catch(e){
    console.log(e);
    
  }
    }
  const values = {isEmpty, user,setUser, loading, error,filterUsers,handlesubmit,searchUser,setSearchUser,handleDelete,handleUpdate,setAddData,addData,setAddData,hadledataAdd,handleAddSubmit };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};
