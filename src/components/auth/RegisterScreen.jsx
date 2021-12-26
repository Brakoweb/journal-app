import React from 'react';
import {Link} from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div className='auth__main'>
            <div className='auth__box-container'>
                <h3 className='auth__title mb-5'>Register</h3>

                <form>
                    <input type="text" name="name" placeholder='Name' className='auth__input' />
                    <input type="text" name="email" placeholder='Email' className='auth__input' />
                    <input type="password" name="password" placeholder='Password' className='auth__input' />
                    <input type="password" name="password2" placeholder='Rewrite password' className='auth__input' />
                    <button
                        type='submit'
                        className='btn btn-primary btn-block mb-5'
                    >
                        Register
                    </button>

                    <Link to='/auth/login' className='link'>
                        Already registered?
                    </Link>
                </form>
            </div>
        </div>
    )
}
