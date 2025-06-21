import React from 'react';

function Footer() {
	return (
		<footer className="md:px-[250px] md:h-[375px] flex flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-left pb-16 md:pb-0 pt-16 border-t-secondary border-t-[0.5px]">
			{/* Left Side */}
			<div className="flex flex-col items-center md:items-start max-w-[350px] mb-10 md:mb-0">
				<a href="/" className="block">
				<img 
					src="/logos/BaCu-transparent.webp" 
					alt="BaCu Kozijnen logo op de homepage – expert in kunststof kozijnen en rolluiken in Nederland"
					className="w-36 md:w-44 h-auto" 
				/>
				</a>
				<span className="text-sm text-secondary mt-2">
					BaCu Kozijnen levert stijlvolle, duurzame oplossingen op maat voor kozijnen, rolluiken, deuren en zonwering.
				</span>
				<span className="text-sm text-secondary/70 mt-6">
					Copyright © 2025 – Alle rechten voorbehouden
				</span>
				<span className="text-sm text-secondary/70 mt-2">
					Website gemaakt door <a href="https://www.yakoweb.com/" className="underline">YakoWeb</a>
				</span>
			</div>

			{/* Right Side */}
			<div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
				
				{/* CONTACT */}
				<div className="flex flex-col items-center md:items-start">
				<span className="text-sm font-semibold tracking-widest">CONTACT</span>
				<ul className="flex flex-col gap-3 text-sm mt-4 text-secondary">
					<li>
					<a href="mailto:info@bacukozijnen.nl" className="underline" target="_blank">info@bacukozijnen.nl</a>
					</li>
					<li>
					<a href="tel:0362340070" className="underline" target="_blank">036 - 2340070</a>
					</li>
					<li>
					<a href="https://api.whatsapp.com/send/?phone=31614438309" className="underline" target="_blank">Whatsapp</a>
					</li>
					<li>
					<a href="https://www.instagram.com/bacukozijnen/" className="underline" target="_blank">Instagram</a>
					</li>
					<li>KvK 95459855</li>
				</ul>
				</div>

				{/* PRODUCTEN */}
				<div className="flex flex-col items-center md:items-start">
				<span className="text-sm font-semibold tracking-widest">PRODUCTEN</span>
				<ul className="flex flex-col gap-3 text-sm mt-4 text-secondary">
					<li><a href="/kozijnen" className="underline">Kozijnen</a></li>
					<li><a href="/rolluiken" className="underline">Rolluiken</a></li>
					<li><a href="/buitendeuren" className="underline">Buitendeuren</a></li>
				</ul>
				</div>

				{/* HANDIGE LINKS */}
				<div className="flex flex-col items-center md:items-start">
				<span className="text-sm font-semibold tracking-widest">HANDIGE LINKS</span>
				<ul className="flex flex-col gap-3 text-sm mt-4 text-secondary">
					<li><a href="/over-ons" className="underline">Over ons</a></li>
					<li><a href="/configurator" className="underline">Configurator</a></li>
					<li><a href="/contact" className="underline">Contact</a></li>
					<li><a href="https://maps.app.goo.gl/j2vAT6gt1CsqoBrA7" className="underline" target="_blank">Google Maps</a></li>
				</ul>
				</div>

			</div>
		</footer>
	);
}

export default Footer;