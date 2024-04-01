import Image from "next/image";

interface SportsCardProps{
    data:{
    id:number,
    name:string,
    totalEvents:number,
    sport:string,
    img:string,
    }
}
const SportsCard:React.FC<SportsCardProps>=({data})=>{
    return(
        <div className="selector">
        <div className="rounded-lg  flex flex-col items-center text-center dark:bg-black border-x-2 shadow-lg">
            <div className="p-2  overflow-hidden">
                <div className="">
            <img className="h-96 w-96 aspect-square object-contain" src={data.img} alt="sports"/>
            </div>
            <div className="text-lg font-semibold">
                {data.name}
            </div>
            <div className="bg-slate-400 w-full py-2 flex justify-evenly">
                <div className="flex flex-col gap-1">
                    <div className="text-sm">Total Events</div>
                    <div className="font-semibold">{data.totalEvents} Events</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-sm">Sport</div>
                    <div className="font-semibold">{data.sport}</div> 
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default SportsCard;