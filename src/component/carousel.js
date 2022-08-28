import React from 'react'

const Carousel = () => {
  return (
    <div>


<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
  
    <div class="carousel-item active">
    
    <div class="card">
    <div className='img-wrapper'>

  <img src="/imagess/ladakh.jpg" class="card-img-top" alt="..."/>
  </div>

  <div class="card-body">
    <h5 class="card-title">ladakh Package</h5>
    <p class="card-text">ladakh Ride will fill dream of your Ride.</p>
    <b>17000RS</b>
  
  </div>
  
</div>
    </div>

    <div class="carousel-item">

      

    <div class="card">
    <div className='img-wrapper'>

  <img src="/imagess/stand.jpg" class="card-img-top" alt="..."/>
  </div>
  
  <div class="card-body">
    <h5 class="card-title">Lekh Package</h5>
    <p class="card-text">Lekh ride will be more silent and peace</p>
    <b>5000RS</b>
  
  </div>
  
</div>

      
    </div>
    <div class="carousel-item">




    <div class="card">

      <div className='img-wrapper'>
  <img src="/imagess/manali.jpg" class="card-img-top" alt="..."/>
  </div>
  <div class="card-body">
    <h5 class="card-title">Manali Package</h5>
    <p class="card-text">Manali Dangerous Ride  makes more fun </p>
    <b>7000RS</b>
  </div>
  
</div>


    </div>
  </div>


  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>


    </div>
  )
}

export default Carousel