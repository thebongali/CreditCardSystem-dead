//import { Button } from 'bootstrap';
import React from 'react';
import "../Home/Home.css";
import Post from '../posts/Post';

function Home() {
  return (
    <React.Fragment>
        <div className="row">
            <div className="view">
                <img src="https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1536&dpr=1.3" 
                alt='donation' className='col-lg-7 col-md-8 col-sm-6'/>
               <div className="fundraise col-lg-5 col-md-4 col-sm-6 ">
                    <h3>Need Funds for the Medical Emergency</h3>
                    <div className="data my-4 col-3">
                       <span className='display-4'>0%</span>
                       <p className='text-secondary'>PLATFORM FEE</p>
                    <div className='fund col-3 mx-50'>
                       <span className='display-4'>100</span>
                       <p className='text-secondary'>FUNDRAISERS</p>
                    </div>
                    <div className='donate col-3'>
                       <span className='display-4'>10</span>
                       <p className='text-secondary'>DONARS</p>
                    </div>
                    </div>
               </div>
            </div>
        </div>
        <div className="seeposts">
          <h3 className='title'>TRENDING FUNDRAISERS</h3>
          <span>view the fundraisers that are most active right now</span>
        </div>
        <Post />
    </React.Fragment>
  )
}

export default Home