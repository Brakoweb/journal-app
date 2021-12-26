import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input 
                    type="text" 
                    className='notes__title-input'
                    placeholder='Some awesome text'
                    autoComplete='off'
                />
                <textarea placeholder='What happened today' className='notes__textarea'></textarea>

                <img
                    src="https://lh6.googleusercontent.com/r2MKMQmcF9sOhO_baUP-kGH6epCp7xmG_SOMU7odO10sAOMBc3ny8ZA3pVLM2QKDgcXLZ1WEYM_z-M7uAqGym-u5GZxoI3Fuz_f28kuk7XE2tJVpV0_uCr0x_dKVYY3WqzkInhVu" 
                    alt="pixel-art" 
                    className='notes__image'
                />
                
            </div>
        </div>
    )
}
