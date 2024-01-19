const Hero = () => {
 return (
  <div
   className="hero min-h-[600px]"
   style={{
    backgroundImage: `url('/images/WhatsApp Image 2023-12-29 at 14.51.31_d3a5c890.jpg')`,
   }}
  >
   <div className="hero-overlay bg-opacity-60"></div>
   <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-yellow-500">
     <h1 className="mb-5 text-7xl drop-shadow-2xl font-bold">Hello there</h1>
     <p className="mb-5 text-lg drop-shadow-md">
      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
      excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id
      nisi.
     </p>
     <button className="btn btn-warning">Get Started</button>
    </div>
   </div>
  </div>
 );
};

export default Hero;
