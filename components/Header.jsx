import Image from "next/image"
import Link from "next/link"


const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
         <Link href="/">
            <Image
            className="rounded-full"
            src="https://www.linkpicture.com/q/IMG_20220818_203911_456.jpg"
            height={50}
            width={50}
            alt="logo"
            />
         </Link>
         <h1>Flarelabs Blog</h1>
      </div>

      <div >
           <Link 
           href="https://www.youtube.com/@flarelabscodingmalayalam"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] 
          flex items-center rounded-full text-center
          "
          >
           Subscribe to our youtube channel 
           </Link>
      </div>
        </header>
  )
}

export default Header