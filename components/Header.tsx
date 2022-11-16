import Link from "next/link"

function Header() {
  return (
    <header className='bg-[#141414]'>
    <div className="flex items-center space-x-2  md:space-x-10">
        <Link href="/">
        <img 
        src="https://res.cloudinary.com/kaam-24x7/image/upload/v1668602035/ThugsFlix-unscreen_upfvrq.gif" 
        width={120}
        height={120} alt="logo for xxxflix, netflix with more fire burning!" 
        className="cursor-pointer object-contain"
        />
        </Link>

       <h1 className="hidden  md:flex font-extrabold font-serif font-wow text-yellow-500 " >  SEX SEX SEXY SEX SEX SEXYSEX SEX SEXY SEX SEX SEXYSEX SEX SEXYSEX SEX SEXYSEX SEX SEXYSEX SEX  SEX SEXYSEX SEX SEXYSEX SEX SEXYSEX SEX SEXY</h1>
      </div>
      
    <div className="flex items-center space-x-4 text-sm font-light ">
        
        {/* <Link href="/account"> */}
            
        {/* </Link> */}
    </div>
    </header>
  )
}

export default Header
