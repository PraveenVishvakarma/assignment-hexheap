import { sports } from "@/utils/sportsData";
import AddCard from "../AddCard";
import Container from "../Container"
import SportsCard from "./SportsCard"
import Toggle from "../Toggle";

const SportsContents=()=>{
    return(
        <Container>
            <div className="my-10 flex flex-col  items-center">
                <div  className="">
                    <div className="flex flex-row justify-between">
                <div className="text-3xl font-bold">
                    Sports
                </div>
                <Toggle />
                </div>
                <hr className="w-28 border-2 border-green-700 my-2 mb-8" />
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-2 p-20 md:p-4">
                    {sports.map((data:any)=><SportsCard key={data.id} data={data}/>)}
                    <AddCard/>
                </div>
                </div>
                <div className="p-2 bg-teal-600 text-white w-28 my-10 rounded-md">
                    <button>Show More</button>
                </div>
            </div>
        </Container>
    )
}

export default SportsContents;