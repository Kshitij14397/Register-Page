import React from 'react';
import '../index.css'
import './register.css'
function RegisterPage() {
    return (

        <>


            <div id = "main-div">
                <div className='d-flex justify-content-center'>
                    <h1>Welcome to the Registration Page</h1>
                </div>
                <div className='d-flex justify-content-center' >

                    <form>
                       <label>Enter Email ID</label>
                        <input type="email" className="form-control" name="email" placeholder='Enter mail'/>
                        <br/>
                        
                        <label for="password">Enter Password</label>
                        <input type="password" className="form-control" name="password" placeholder='Enter password'/>
                        
                        <br/>
                        <div className='text-center'>
                        <button type='button' className="btn btn-primary">Register</button>
                        </div>



                    </form>
                    
                </div>
            </div>
   

        </>

    );
}

export default RegisterPage;