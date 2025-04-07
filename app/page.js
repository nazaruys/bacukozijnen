"use client";

import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div className="bg-background font-outfit">
      <Navbar currentPage={"kozijnen"} />
      {/* Main */}
      <section
        className="h-[600px] flex md:px-36"
        id="main"
				style={{
					backgroundImage: 'url("/images/main-background.png")',
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
      >

      </section>
    </div>
  );
}
