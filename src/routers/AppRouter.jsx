import React from 'react';
import { BrowserRouter,Routes, Route, Navigate  } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className='auth__main'>
                <div className='auth__box-container'>
                    <Routes>
                        <Route path='/auth'> 
                            <Route path='login' element={<LoginScreen />} />
                            <Route path='register' element={<RegisterScreen />} />
                        </Route>

                        <Route index path='/' element={<JournalScreen />} />

                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </div>
                
            </div>
        </BrowserRouter>
    )
}
