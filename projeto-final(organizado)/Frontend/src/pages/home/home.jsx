import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/navbar'
import axios from 'axios'
import './home.css'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000')
        setData(response.data)
      } catch (error) {
        console.error('Erro ao obter dados do backend', error)
      }
    };

    fetchData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="logo">
        {/* dados obtidos do backend */}
        {data.map((item) => (
          <div key={item.id}>{item.nome}</div>
        ))}
      </div>
    </div>
  )
}
