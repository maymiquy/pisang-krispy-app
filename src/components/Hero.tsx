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
    <div className="max-w-lg text-yellow-500">
     <h1 className="mb-5 text-7xl drop-shadow-2xl font-bold">Pisang Krenyes</h1>
     <p className="mb-5 text-5xl drop-shadow-md">Renyah Nyess-nyess dimulut</p>
    </div>
   </div>
  </div>
 );
};

export default Hero;
