import React,{useContext,useState,useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import {FirebaseContext} from './Firebase'



const Header = () => {
    const firebase = useContext(FirebaseContext)

    const [userSession, setUserSession] = useState(null)

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged((user) => {
          user && setUserSession(user);
        });
    
        return () => {
          listener();
        };
      }, [firebase.auth]);

    const logOut = () => {
        firebase.signOutUser();
        window.location.reload();
      };


    return (
        <>
         <nav className="navbar navbar-dark bg-primary">
           
           <Link className="navbar-brand" to="/">
               <img src="/face.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
              <span className="navbar-brand">Face Detection </span> 
           </Link>
           {
               userSession === null ? (
                <Link to="/conexion" type="button" className="btn btn-outline-dark btn-lg"> <strong>Conexion </strong> </Link>
               ):(
                <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                <Avatar alt="Remy Sharp" src="/user.png" />
                </Dropdown.Toggle>
    
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={logOut} >Log Out</Dropdown.Item>
                    
                </Dropdown.Menu>
                </Dropdown>
               )
           }
           

           


     
     
   
       </nav>

      
        
        </>
       
    )
}

export default Header
