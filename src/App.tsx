import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { products } from "./utils/data";

function App() {
 const productItem = products;
 return (
  <div className="min-h-screen bg-[#884820ce]">
   <Navbar />
   <Hero />
   <div className="py-16 min-h-screen w-full">
    <div className="p-4 bg-warning rounded-md drop-shadow-md w-fit h-fit mx-auto my-8">
     <h5 className="text-5xl text-center text-[#5e2807ce]">Product</h5>
    </div>
    <div className="flex justify-center w-full">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-8 py-6 w-auto">
      {productItem.map((item, index) => (
       <Card
        key={index}
        url={item.url}
        name={item.name}
        description={item.description}
        price={item.price}
       />
      ))}
     </div>
    </div>
   </div>
   <Footer />
  </div>
 );
}

export default App;
