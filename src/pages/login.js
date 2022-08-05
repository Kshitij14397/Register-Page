import React from 'react';
import '../index.css'
import './register.css'
function LoginPage() {
    return (

        <>


            <div id = "main-div">
                <div className='d-flex justify-content-center'>
                    <h1>Welcome to the Login Page</h1>
                </div>
                <div className='d-flex justify-content-center' >

                    <form>
                       
                        <input type="email" className="form-control" name="email" placeholder='Enter Email'/>
                        <br/>
                        
                        
                        <input type="password" className="form-control" name="password" placeholder='Enter password'/>
                        
                        <br/>
                        <div className='text-center'>
                        <a href>
                        <button type='button' className="btn btn-primary">Login</button>
                        
                        </a>
                        </div>



                    </form>
                    
                </div>
            </div>
   

{/*
<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" class="form-control-plaintext" id="staticEmail" />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
</form>
*/}
        </>

    );
}

export default LoginPage;