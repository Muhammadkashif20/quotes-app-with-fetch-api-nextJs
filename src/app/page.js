import Link from "next/link"

const page = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/quotes">
      <button>Quotes</button>
      </Link>
    </div>
  )
}

export default page
