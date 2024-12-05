import React from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import homeBg1 from '../utils/homeBg1.mp4'
import  "../styles/Home.css"

const Home = () => {
  return (
    <Layout>
      <div id="home">
        <div className="header">
            <video autoPlay loop muted src={homeBg1}/>
            <h1>Lorem, ipsum.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel?</p>
            <Link id='but1' to={"/menu"}>
              <button>Check out</button>
            </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
