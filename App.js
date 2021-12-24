// import logo from './logo.svg';
// // import App from './App.js';

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="   App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>
//         <button type="button" class="btn btn-primary">Primary</button>
// <button type="button" class="btn btn-secondary">Secondary</button>
// <button type="button" class="btn btn-success">Success</button>
// <button type="button" class="btn btn-danger">Danger</button>
//         </p>
//       </header>
//     </div>
//   );
// }
// export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [form, setForm] = useState([]);

//   const prevIsValid = () => {
//     if (form.length === 0) {
//       return true;
//     }

//     const someEmpty = form.some(
//       (item) => item.Username === "" || item.Platform === ""
//     );

//     if (someEmpty) {
//       form.map((item, index) => {
//         const allPrev = [...form];

//         if (form[index].Platform === "") {
//           allPrev[index].errors.Platform = "Platform is required";
//         }

//         if (form[index].Username === "") {
//           allPrev[index].errors.Username = "Username is required";
//         }
//         setForm(allPrev);
//       });
//     }

//     return !someEmpty;
//   };

//   const handleAddLink = (e) => {
//     e.preventDefault();
//     const inputState = {
//       Platform: "",
//       Username: "",

//       errors: {
//         Platform: null,
//         Username: null,
//       },
//     };

//     if (prevIsValid()) {
//       setForm((prev) => [...prev, inputState]);
//     }
//   };

//   const onChange = (index, event) => {
//     event.preventDefault();
//     event.persist();

//     setForm((prev) => {
//       return prev.map((item, i) => {
//         if (i !== index) {
//           return item;
//         }

//         return {
//           ...item,
//           [event.target.name]: event.target.value,

//           errors: {
//             ...item.errors,
//             [event.target.name]:
//               event.target.value.length > 0
//                 ? null
//                 : [event.target.name] + " Is required",
//           },
//         };
//       });
//     });
//   };

//   const handleRemoveField = (e, index) => {
//     e.preventDefault();

//     setForm((prev) => prev.filter((item) => item !== prev[index]));
//   };
//   return (
//     <div className="container mt-5 py-5">
//       <h1>Add Social Links</h1>
//       <p>Add links to sites you want to share with your viewers</p>

//       {JSON.stringify(form)}

//       <form>
//         {form.map((item, index) => (
//           <div className="row mt-3" key={`item-${index}`}>
//             <div className="col">
//               <input
//                 type="text"
//                 className={
//                   item.errors.Platform
//                     ? "form-control  is-invalid"
//                     : "form-control"
//                 }
//                 name="Platform"
//                 placeholder="Platform"
//                 value={item.Platform}
//                 onChange={(e) => onChange(index, e)}
//               />

//               {item.errors.Platform && (
//                 <div className="invalid-feedback">{item.errors.Platform}</div>
//               )}
//             </div>

//             <div className="col">
//               <input
//                 type="text"
//                 className={
//                   item.errors.Username
//                     ? "form-control  is-invalid"
//                     : "form-control"
//                 }
//                 name="Username"
//                 placeholder="Username"
//                 value={item.Username}
//                 onChange={(e) => onChange(index, e)}
//               />

//               {item.errors.Username && (
//                 <div className="invalid-feedback">{item.errors.Username}</div>
//               )}
//             </div>

//             <button
//               className="btn btn-warning"
//               onClick={(e) => handleRemoveField(e, index)}
//             >
//               X
//             </button>
//           </div>
//         ))}

//         <button className="btn btn-primary mt-2" onClick={handleAddLink}>
//           Add a link
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";

// class NameForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <>
//       <form onSubmit={this.handleSubmit} className="form">
//         <label className="ex1">
//           Enter your Username:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label><br/><br/>
//         <label className="ex2">
//           Enter your Email:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label><br/><br/>
//         <label className="ex3">
//           Enter your Password:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label><br/><br/>￼


//         <input type="submit" value="Submit" />
//       </form>
//     </>
//     );
//   }
// }

// // export default NameForm

// import React, { useState } from "react";
// import "./App.css";

// const initialValues = {
//   username: "",
//   email: "",
//   password: ""
// };

// export default function Form() {
//   const [values, setValues] = useState(initialValues);
//   // const {errors,handleSubmit}=useForm();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   return (
//     <form className="form">
//       <label className="ex1">Enter your Username:<br/>
//         <input className="ex4"
//           placeholder="your Username"
//           value={values.username}
//           onChange={handleInputChange}
//           name="username"
//           label="username" />
//       </label>
//       <br /><br />
//       <label className="ex2">Enter your Email:<br/>
//         <input className="ex5"
//           placeholder="your Email"
//           value={values.email}
//           onChange={handleInputChange}
//           name="email"
//           label="email"
//         /> </label><br /><br />
//       <label className="ex3">Enter your Password:<br/>
//         <input className="ex6"
//           type="password"
//           placeholder="your Password"
//           value={values.password}
//           onChange={handleInputChange}
//           name="password"
//           label="password"
//         /></label><br /><br />

//       <button type="submit"> Submit </button>
//     </form>
//   );
// }
import { useState, useEffect } from "react";
import "./App.css"

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// const {handleSubmit}=useForm();
const formValid = (formErrors, email, userName, password) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    if (val.length > 0) {
      valid = false;
    }
  });

  if (userName.length === 0) {
    valid = false;
  }
  if (email.length === 0) {
    valid = false;
  }
  if (password.length === 0) {
    valid = false;
  }

  return valid;
};

function App() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErrors, setFormErrors] = useState({
    UserName: "",
    email: "",
    password: "",
  })
  const [invalid, setInvalidState] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (formValid(formErrors, userName, email, password)) {
      setInvalidState(false);
      console.log(`
        --SUBMITTING--

        UserName: ${userName}
        Email: ${email}
        Password: ${password}

      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      setInvalidState(true);
    }
  };


  const handleClick = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    console.log(name, value);
    switch (name) {
      case "userName":
        setUserName(value)
        formErrors.UserName = value.length < 3 ? "minimum 3 characaters required" : "";
        break;

      case "email":
        setEmail(value)
        formErrors.email = validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
        break;

      case "password":
        setPassword(value)
        formErrors.password = value.length < 5 ? "password must be 6 characters long" : "";
        break;

      default:
        break;
    }
    // setFormErrors(formErrors);
    // const Student = { email, userName, mobileNumber, password, confirmPassword }
    // console.log(Student)
    // fetch("http://localhost:8080/Student/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(Student)
    // }).then(() => { console.log("New User Added") }
    // )
  }
  // useEffect(() => {
  //   fetch("http://localhost:8080/Student/getAll")
  //     .then(res => res.json())
  //     .then((result) => {
  //       setStudents(result)
  //       console.log("display User")
  //     }
  //     )
  // }, [])

  console.log(formErrors);
  return (

    <section  className="form">
      <label className="ex1">Enter your Username</label><br/>
      <form>
        <input name="userName" type="text" placeholder={" your username"} onChange={handleClick} /><br/>
        {formErrors.UserName.length > 0 && (
          <span className="errorMessage">{formErrors.UserName}</span>
        )}
        <br></br>
        <br></br>
        <label className="ex2">Enter your Email</label><br/>
        <input name="email" type="text" placeholder={"your email"} onChange={handleClick} /><br/>
        {formErrors.email.length > 0 && (
          <span className="errorMessage">{formErrors.email}</span>
        )}
        <br></br>
        <br></br>
        <label className="ex2">Enter your Password</label><br/>
        <input name="password" type="password" placeholder={"your password"} onChange={handleClick} /><br/>
        {formErrors.password.length > 0 && (
          <span className="errorMessage">{formErrors.password}</span>
        )}
        <br></br>
        <br></br>
        <button id="new" onClick={handleSubmit} >Submit</button><br/>
        {invalid && "please fill all the required feild"}
      </form>
    </section>
  );
}



export default App;