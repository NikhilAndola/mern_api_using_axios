import "./App.css";
import * as React from "react";
import axios from "axios";

function App() {
  const [inputName, setInputName] = React.useState();
  const [age, setAge] = React.useState(0);

  console.log(inputName, age);

  let bodyy = {
    username: inputName,
    age: age,
  };

  const formHandle = (event) => {
    //hii
    event.preventDefault();
    // axios({
    //   method: "post",
    //   url: `http://localhost:5000/post-test?Name=${inputName}`,
    //   // url: 'http://localhost:5000/post-test',
    //   headers: {
    //     Authorization: "Bearer abcdxyz",
    //     "Content-Type": "application/json",
    //   },
    //   body:bodyy,
    // });

  //   fetch('http://localhost:9000/piddu/', {
  //     method: 'POST',
  //     headers: {
  //         Authorization: 'Bearer abcdxyz',
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         username: "jogeshwar",
  //         password: "zxcvasdf2qwe",
  //     }),
  // })
  
  axios({
      method: "post",
      url: `http://localhost:9000/piddu?text=${inputName}`,
      // url: 'http://localhost:5000/post-test',
      headers: {
        Authorization: "Bearer abcdxyz",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(bodyy),
    });

// const data = { username: 'example' };

// fetch('http://localhost:5000/post-test', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

  };

  return (
    <div className="App">
      Hello react
      <form onSubmit={formHandle}>
        <label for="username">Name: </label>
        <input
          type="text"
          id="username"
          placeholder="name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
