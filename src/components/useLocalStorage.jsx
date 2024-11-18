import { useEffect, useState } from "react";





export default function useLocalStorage(key,defaultvalue){
  const [value,setValue]= useState(()=>{
    let currentvalue;

    try {
      currentvalue=JSON.parse(localStorage.getItem(key) || String(defaultvalue))

    } catch(error){
      currentvalue = defaultvalue
    }

    return currentvalue;

  })

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[key,value])

  return [value, setValue];
}