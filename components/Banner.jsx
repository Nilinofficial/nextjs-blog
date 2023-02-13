
 
const Banner = () => {
  return (
    <div className="flex flex-col  lg:flex-row 
    lg:items-center
  justify-between font-bold px-10 py-5  mb-10">

  <div >
    <h1 className="text-7xl">Flarelabs Weekly Blog</h1>
      <h2 className="mt-5 md:mt-2">
        Welcome to {" "}
        <span className="underline decoration-4
        decoration-[#F7AB0A] ">
         Every Developers
        </span> {" "}
        favourite blog in the devosphere
      </h2>
  </div>

  <p
   className="mt-5 md:mt-2 
    text-gray-400 max-w-sm">
 New product features | The latest in technology | The Weekly
  debugging nightmares and more
  </p>
   

    </div>
  )
}

export default Banner