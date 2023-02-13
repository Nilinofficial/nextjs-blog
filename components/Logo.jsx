import Image from "next/image"

const Logo = (props) => {
  return (
    <div   className="flex items-center space-x-2">

    <Image
   className="rounded-full object-cover"
    height={50}
    width = {50}
    src = "https://www.linkpicture.com/q/IMG_20220818_203911_456.jpg"
    alt="logo"
    />
<>{props.renderDefault(props)}</>
    </div>
  )
}

export default Logo

