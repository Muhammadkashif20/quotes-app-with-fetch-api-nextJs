export const metadata = {
    title: "Quotes Page",
  }
const page = async () => {
    let quotes=fetch("https://dummyjson.com/quotes")
    quotes =  await quotes.json()
    console.log("quotes=>",quotes);
    
  return (
    <div>
      <h1>Hello Quotes</h1>
    </div>
  )
}

export default page
