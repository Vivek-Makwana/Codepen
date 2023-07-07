import React, { useEffect, useState } from 'react'
const PREFIX = 'codepen-clone-'
export default function useLocalStorage(key, initialValue) {
    const prefixedkey = PREFIX + key
    const [value, setValue] = useState(()=>{
        const jsonvalue = localStorage.getItem(prefixedkey)
        if(jsonvalue != null){ return JSON.parse(jsonvalue)}
        else{
            return initialValue
        }
    })
    useEffect(()=>{
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    },[prefixedkey, value])
  return [value, setValue]
}
