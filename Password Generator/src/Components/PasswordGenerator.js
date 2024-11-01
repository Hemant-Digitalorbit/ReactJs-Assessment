import React, { useState } from 'react'
import {SC, UC, LC, NC} from "../data/passwordGenerator"
import "./PasswordGenerator.css"

const PasswordGenerator = () => {

    let [uppercase, setUpperCase] = useState(false)
    let [lowercase, setLowerCase] = useState(false)
    let [number, setNumber] = useState(false)
    let [symbol, setSymbol] = useState(false)
    let [passlen, setPasslen]  = useState(10)
    let [finPass, setFinPass] = useState('')
    let createPassword = () => {
        let finalPaa = ''
        let charSet = ''
        if(uppercase || lowercase || number || symbol) {
            if(uppercase) charSet+= UC;
            if(lowercase) charSet+= LC;
            if(number) charSet+= NC;
            if(symbol) charSet+= SC;
            // console.log(charSet,  charSet.length)
            for(let i =0; i< passlen; i++)  {
                finalPaa += charSet.charAt(Math.floor(Math.random()*charSet.length))
            }
            setFinPass(finalPaa)
        }
        else {
            alert("Please choose at least one checkbox.......")
        }
    }

    let copyPass = () => {
        navigator.clipboard.writeText(finPass)
    }

  return (
    <div className='passwordBox'>
        <h1>Password Generator</h1>

        <div className='passwordBoxin'>
            <input type='text' value={finPass} /> <button onClick={{copyPass}}>Copy</button>
        </div>

        <div className='passlength'>
            <label>Password Length</label>
            <input type='number' max={10} min={10} value={passlen} onChange={(e) => setPasslen(e.target.value)}/>
        </div>

        <div className='passlength'>
            <label>Including uppercase letters</label>
            <input type='checkbox' checked={uppercase} onChange={() => setUpperCase(!uppercase)} />
        </div>

        <div className='passlength'>
            <label>Including lowercase letters</label>
            <input type='checkbox' checked={lowercase} onChange={() => setLowerCase(!lowercase)} />
        </div>

        <div className='passlength'>
            <label>Including Numbers</label>
            <input type='checkbox' checked={number} onChange={() => setNumber(!number)} />
        </div>

        <div className='passlength'>
            <label>Including symbol</label>
            <input type='checkbox' checked={symbol} onChange={() => setSymbol(!uppercase)} />
        </div>

        <button onClick={createPassword} className='submitBtn' >Generate Password</button>

    </div>
  )
}

export default PasswordGenerator
