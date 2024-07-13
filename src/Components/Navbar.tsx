export default function Navbar() {
    return <div className="flex justify-between items-center px-40 py-4 font-primary text-lg">

        <div className=""><img src="/logo.png" /></div>
        <div className="flex items-center space-x-20">
          

            <a href="/" className="">Home</a>
            <a href="/" className="">Book Now</a>
            <a href="/" className="">About</a>
            <a href="/" className="">Contact</a>


        </div>

    
    </div>;
}