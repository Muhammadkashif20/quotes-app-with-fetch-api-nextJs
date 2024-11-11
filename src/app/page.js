import Link from "next/link"
import QuotesCard from "./components/quotesCard"
const page = async () => {
  let quotes= await fetch('https://dummyjson.com/quotes')
  quotes= await quotes.json()
console.log('quotes=>',quotes);
  return (
    <div>
      <h1 className="font-bold text-center text-2xl">Quotes App</h1>
      {quotes.map((data)=>{
        return(
          <div>
            <QuotesCard/>
          </div>
        )
      })}
    </div>
  )
}

export default page
