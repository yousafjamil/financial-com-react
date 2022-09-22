import React from 'react'

const Ourteam = () => {
    return (
        <div className='container-fluid'>
            <h6 className='text-white text-center mt-5 mb-4 h1 o-t-header'>OUR  <b className='text-primary'>CONTRIBUTORS</b></h6>
            <p className='text-white mt-5 mb-4 text-center'>A TALENTED TEAM OF CRYPTOCURRENCY EXPERTS AROUND THE GLOBE</p>
            <div className='row'>

                <div className='col-lg-3'>
                    <div class="card team-card" >
                        <img class="card-img-top team-pic"  src={'images/walliam.jpeg'} alt="Card team-pic" />
                        <div class="card-body">
                            <h2>Walliams Allyssa </h2>
                            <p>Business  Owner</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div class="card team-card" >
                        <img class="card-img-top team-pic" src={'images/austin.jpeg'} alt="Card team-pic" />
                        <div class="card-body">
                            
                            <h2>Mr AUSTIN Philip</h2>
                            <p>Coordinator</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div class="card team-card" >
                        <img class="card-img-top team-pic" src={'images/joel.jpeg'} alt="Card team-pic" />
                        <div class="card-body">
                        <h2>Joel Peace</h2>
                            <p>Accountant</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div class="card team-card" >
                        <img class="card-img-top team-pic" src={'images/teampic.jpeg'} alt="Card" />
                        <div class="card-body">
                        <h2>All Team picture </h2>
                            <p>Company members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourteam