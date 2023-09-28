/* eslint-disable react/prop-types */




const Banner = () => {

    return (
 <div>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/D8hRwVK/Rectangle-4281.png)'}}>
  <div className="hero-overlay bg-white bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md mt-20">
      <h1 className="mb-5 text-3xl font-bold text-black">I Grow By Helping People In Need</h1>

<div className="display: flex;">
            <input className="border rounded-xl" type="text" id="searchInput" placeholder="Search here....." />
            <button  className="btn  btn-sm btn-error mx-2">Search</button>
        </div>
    </div>
  </div>
</div>

      
  
 </div>
    );
};

export default Banner;