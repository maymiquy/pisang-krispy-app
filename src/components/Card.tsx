interface CardProps {
 url: string;
 name: string;
 description: string;
 price: string;
}

const Card: React.FC<CardProps> = ({ url, name, description, price }) => {
 return (
  <div className="card w-96 bg-yellow-400 shadow-xl">
   <figure className="px-10 pt-10">
    <img src={url} alt={name} className="rounded-xl" />
   </figure>
   <div className="card-body text-black items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions">
     <button className="btn bg-[#884820ce] text-yellow-300">Rp. {price}</button>
    </div>
   </div>
  </div>
 );
};

export default Card;
