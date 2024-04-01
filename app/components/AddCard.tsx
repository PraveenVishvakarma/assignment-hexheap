

const AddCard=()=>{
    return(
        <div className="rounded-md flex flex-col items-center text-center border-x-2 shadow-lg overflow-hidden">
            <div className="p-4">
                <div className=" text-white bg-green-700 relative flex flex-col p-4">
                    <div className="bg-black absolute top-0 right-0 p-1 px-3">AD</div>
                    <p className="font-bold text-nowrap uppercase mt-8">every season starts at</p>
                    <p className="text-4xl font-bold">DICK&apos;S</p>
                    <p className="text-xl font-bold uppercase mb-8">sporting goods</p>
                </div>
                <div className="flex flex-col my-4 p-4">
                    <div className="text-xl font-semibold mb-1">
                        Advertisement Title
                    </div>
                    <p className="text-sm text-justify">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati. corrupti quos dolores et quas molestias excepturi sint occaecati.corrupti quos dolores et quas molestias. </p>
                </div>
            </div>
        </div>
    )
}

export default AddCard;