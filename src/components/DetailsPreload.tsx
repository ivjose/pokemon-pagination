const DetailsPreload = () => {
  return (
    <div className="w-full p-4 mx-auto ">
      <div className="h-[250px] w-[350px] mx-auto bg-gray-400 rounded-sm animate-pulse " />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-pulse">
        <div className="py-6 space-y-4 text-center ">
          <div className="h-4 mx-auto bg-gray-400 rounded w-14"></div>
          <div className="w-32 h-4 mx-auto bg-gray-400 rounded "></div>
        </div>
        <div className="py-6 space-y-4 text-center ">
          <div className="h-4 mx-auto bg-gray-400 rounded w-14"></div>
          <div className="w-32 h-4 mx-auto bg-gray-400 rounded "></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-pulse">
        <div className="py-6 space-y-4 text-center ">
          <div className="h-4 mx-auto bg-gray-400 rounded w-14"></div>
          <div className="w-32 h-4 mx-auto bg-gray-400 rounded "></div>
        </div>
        <div className="py-6 space-y-4 text-center ">
          <div className="h-4 mx-auto bg-gray-400 rounded w-14"></div>
          <div className="w-32 h-4 mx-auto bg-gray-400 rounded "></div>
        </div>
      </div>
      <div className="space-y-4 animate-pulse">
        <div className="w-full h-8 mx-auto mt-4 bg-gray-400 rounded "></div>
        <div className="w-full h-8 mx-auto mt-4 bg-gray-400 rounded "></div>
        <div className="w-full h-8 mx-auto mt-4 bg-gray-400 rounded "></div>
      </div>
    </div>
  )
}

export default DetailsPreload
