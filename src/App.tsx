import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './App.css'
import api from './api/api'
import axios from 'axios'

export type Article = {
    ID: number
    title: string
    text: string
}
const App = () => {
    const [articles, setArticles] = useState<Article[]>([])
    const [errTxt , setErrTxt] = useState("")
    useEffect(() => {
        //componentDidMount
        apiRequest()
    }, [])
    const apiRequest = async () => {
        console.log('@@api request')
        try {
            const response = await api('/', 'GET')
            setArticles(response.data.articles)
        } catch (e) {
            setErrTxt("cannot connect to backend.")
            if (axios.isAxiosError(e)) {
                console.error(e.response)
            }
        }
    }
    console.log(articles)

    return (
        <div>
            <h1>TopPage</h1>
            {errTxt && <div>{errTxt}</div>}
            {articles.length>0 &&articles.map((article: Article)=>{
                return(
                    <div key={article.ID}>
                    {article.text}
                </div>
                )

            })}
        </div>
    )
}

export default App
