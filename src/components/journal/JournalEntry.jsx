import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1588791114/content-items/004/470/041/Pixel_Art_Portrait_001-original.png)'
                }}
             />

             <div className='journal__entry-body'> 
                <p className='journal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum nihil veniam provident?.
                </p>
             </div>

             <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
             </div>

           
        </div>
    )
}
