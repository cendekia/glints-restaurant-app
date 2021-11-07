const RestoCard = () => {
  return (
    <div>
      <div>
        <img
          src={`https://source.unsplash.com/800x600/?restaurant,${Math.random()}`}
          alt="restaurant"
          className="rounded-md"
        />
        
      </div>
      <div>
        <h1 className="text-xl">Mie Ayam Gondangdia</h1>
        <p className="text-gray-700 text-sm">Mon-Sun 11:30 am - 9 pm</p>
      </div>
    </div>
  )
}

export default RestoCard
