import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Search = () => {
    const [Input,setInput] = useState('');
    const dispatch = useDispatch();
  return (
    <div>
        <form>
            <input
             placeholder="Search"
             onChange={""}
            />
            <button type="submit">🔍</button>
        </form>
    </div>
  )
}
