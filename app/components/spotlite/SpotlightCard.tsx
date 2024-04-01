import Image from "next/image";

interface SpotlightCardProps{
    data:{id:1,
    name:string,
    date:string,
    time:string,
    day:string,
    venue:string,
    img:string,
    }
}
const SpotlightCard:React.FC<SpotlightCardProps>=({data})=>{
    return(
        <div className="rounded-md flex  p-4 flex-col border-b border-x-2 items-center text-center overflow-hidden  shadow-lg">
            <div className=" py-6 w-96 flex flex-col items-center gap-4">
            <img className="h-96 w-96 aspect-square object-contain" src={data.img} alt="sports"/>
            <hr className="w-full border-dotted border-black my-2" />
            <div className="text-base md:text-lg font-semibold">
                {data.name}
            </div>
            <div className="flex text-sm md:text-base w-96 flex-col gap-1">
                    <p className="text-sm">{data.date} | {data.day} | {data.time}</p>
            </div>
            <p className="text-wrap text-xs md:text-sm"> {data.venue} </p>
            <button className="bg-black text-sm md:text-base w-80 text-white font-semibold p-1">Take flight Collection</button>
            </div>
        </div>
    )
}

export default SpotlightCard;