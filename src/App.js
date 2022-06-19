import React from 'react';
import {Department} from './Department';
import { Employee } from './Employee';
import {Home} from './Home';
import { Authors } from './Author';
import { Discount } from './Discount';
import { Students } from './Students';
import { ReleasedBooks } from './ReleasedBooks';
import {UnreturnedBooks} from './UnreturnedBooks';
import { AddBook } from './AddBook';
import { RequestBook } from './RequestBook';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';
import './App.css';
import { ContactStaff } from './ContactStaff';
import { Favorites } from './Favorites';
import { Form } from './Form';
import { Gift } from './Gift';
import { Penalty } from './Penalty';
import { ReturnBook } from './ReturnBook';
import { Review } from './Review';

function App() {
  return (
    <React.Fragment>
      
    <BrowserRouter>
    
    <div className="App container">
       <h3 className="d-flex justify-content-center m-3">
        Admin Dashboard
      </h3> 
      
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/department">
              Department
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
              Employee
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/addbook">
              Add Book
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/students">
              Student
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/authors">
              Author
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/discount">
              Discount
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/requestbook">
              Request
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/releasedbooks">
              Release Book
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/unreturnedbooks">
              Unreturned Books
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/contactstaf">
              ContactStaf
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/favorites">
              Favorites
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/forms">
              Forms
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/gifts">
              Gifts
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/penalty">
              Penalty
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/returnbooks">
              ReturnBook
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav> 
                  


      <Routes>
       <Route path='/home' element={<Home/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/authors' element={<Authors/>}/>
        <Route path='/discount' element={<Discount/>}/>
        <Route path='/requestbook' element={<RequestBook/>}/>
        <Route path='/releasedbooks' element={<ReleasedBooks/>}/>
        <Route path='/unreturnedbooks' element={<UnreturnedBooks/>}/>
        <Route path='/contactstaf' element={<ContactStaff/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/forms' element={<Form/>}/>
        <Route path='/gifts' element={<Gift/>}/>
        <Route path='/penalty' element={<Penalty/>}/>
        <Route path='/returnbooks' element={<ReturnBook/>}/>
        <Route path='/reviews' element={<Review/>}/>
      </Routes>
  </div>
    </BrowserRouter>
    </React.Fragment>
  );
}


export default App;
