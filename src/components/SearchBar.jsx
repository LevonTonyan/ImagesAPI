import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './../App.css'
import { useState } from 'react';


const SearchBar = ({ renderContent }) => {
    const [inputValue, setInputValue] = useState("")

    const [data, setData] = useState([])

    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127"

    const buttonHandler = () => {
        getData(inputValue)
        setInputValue("")
    }

    const getData = (query) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`).then((res) => {
            let srcs = res.data.photos.photo.map((data) => {
                return `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`
            })
            setData(srcs)
        })
    };

    return (
        <>
            <div className='searchBar'>
                <TextField size='small' value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />

                <Button variant="contained"
                    onClick={() => buttonHandler()}>Search</Button>


            </div>
            {data.length ? renderContent(data) : null}
        </>

    )
}

export default SearchBar