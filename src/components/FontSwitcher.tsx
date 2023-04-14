import React, { useState } from 'react'

interface FontSwitcherProps{
    onChange: (param: string) => void;
}

export const FontSwitcher:React.FC<FontSwitcherProps> = ({ onChange }) => {
    
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
      };
    return (
        <div>
            <select name="" id="font-select" className='font-select'>
                <option value="sans-serif">Sans Serif</option>
                <option value="serif">Serif</option>
                <option value="Mono">Mono</option>
            </select>
        </div>
    )
}