

const PurchaseDetails = ({serviceName}:{serviceName:any}) => {
    return (
        <div>
            {/* //@ts-ignore */}
         <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* <img className="w-full h-32 object-cover object-center" src="IMAGE_URL_HERE" alt="Service Image"> */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{serviceName.serviceName}</h2>
            <p className="text-gray-600 mb-4">{serviceName?.description ? serviceName?.description:null}</p>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-green-500 font-semibold">$ {!!serviceName?.price}</span>
              <span className="text-gray-500">Ideal for: {serviceName?.idealFor}</span>
            </div>
            <ul className="space-y-2">
              {
                serviceName?.features?.map((feature:String[]) => {
                  return <li key={`${feature}`} className="flex items-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.293 9.293a1 1 0 011.414 1.414L9 13.414l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" />
                    </svg>
                    {feature}
                  </li>
                })
              }
            </ul>
          </div>
        </div>
        </div>
    );
};

export default PurchaseDetails;