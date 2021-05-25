import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {


  const [posts, setPosts] = useState([{ userId: 11, id: 101, title: "Maisaa_Post", body: "Hiiiiiiii  1" }, { userId: 12, id: 102, title: "Maisaa_Post", body: "Hiiiiiiii 2" }]);

  const [userId, setUserId] = useState('');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() =>{
    axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=>{
      console.log('DATA: ', response.data);
      setPosts([...posts,... response.data]);
    })
    .catch((err) => {
      console.log('ERR:.......',err);
    });
  },[]);


  const userIdChange = (e) => {
    setUserId(e.target.value);
  };
  const idChange = (e) => {
    setId(e.target.value);
    };
  const titleChange = (e) => {
    setTitle(e.target.value);  
  };
  const bodyChange = (e) => {
    setBody(e.target.value);
  };

  const addToPosts =(e) => {
    setPosts([...posts, {userId, id, title, body}]);
  }


  return (
    <div className="App">
      <h1>Blog App</h1>

      {/* <p>Post: {posts[0].title}</p> 
      <p>Post: {posts[0].body}</p> */}

      {/* {posts.map((ele,i) => <p key={i}> {ele[i].title} </p>)} */}


      
      <button onClick={addToPosts}>add post</button>
      {posts.map((ele, i) => <p key={i}> {ele.title}({i}):{ele.body}{ele.name} </p>)}


      <div>
        <p>userId: {userId} </p>
        <input type="text" placeholder="userId" onChange={userIdChange}></input></div>
      <div>
        <p>Id: {id} </p>
        <input type="text" placeholder="Id" onChange={idChange}></input>
      </div>
      <div>
        <p>Title: {title} </p>
        <input type="text" placeholder="title" onChange={titleChange}></input>
      </div>
      <div>
        <p>Body: {body} </p>
        <input type="text" placeholder="body" onChange={bodyChange}></input>
      </div>

    </div>
  );
}

export default App;
