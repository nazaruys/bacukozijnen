import React from 'react';

function Footer() {
	return (
		<footer
			className="md:px-[250px] h-[375px] flex flex-row justify-between border-t-secondary border-t-[0.5px] pt-16"
		>
			{/* Left Side */}
			<div
				className="flex flex-col max-w-[350px]"
			>
				<a href="/" className="block">
					<img 
						src="/logos/BaCu-transparent.png" 
						alt="BaCu Kozijnen Full Logo"
						className="w-36 md:w-44 h-auto" 
					/>
				</a>
				<span
					className="text-sm text-secondary text-regular mt-2"
				>
					BaCu Kozijnen levert stijlvolle, duurzame oplossingen op maat voor kozijnen, rolluiken, deuren en zonwering.
				</span>
				<span
					className="text-sm text-secondary/70 text-regular mt-6"
				>
					Copyright © 2025 - Alle rechten voorbehouden
				</span>
			</div>
			{/* Right Side */}
			<div
				className="flex flex-row gap-x-20"
			>	
				{/* CONTACT column */}
				<div
					className="flex flex-col"
				>
					<span
						className="text-sm font-semibold tracking-widest"
					>
						CONTACT
					</span>
					<ul
						className="flex flex-col gap-3 text-sm mt-4 text-secondary"
					>
						<li>
							<a
								href="mailto:info@bacukozijnen.nl"
								className="underline"
								target='_blank'
							>
								info@bacukozijnen.nl
							</a>
						</li>
						<li>
							<a
								href="tel:0362340070"
								className="underline"
								target='_blank'
							>
								036 - 2340070
							</a>
						</li>
						<li>
							<a
								href="https://api.whatsapp.com/send/?phone=31614438309"
								className="underline"
								target='_blank'
							>
								Whatsapp
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/bacukozijnen/"
								className="underline"
								target='_blank'
							>
								Instagram
							</a>
						</li>
						<li>
							KvK 95459855
						</li>
					</ul>
				</div>
				{/* PRODUCTEN column */}
				<div
					className="flex flex-col"
				>
					<span
						className="text-sm font-semibold tracking-widest"
					>
						PRODUCTEN
					</span>
					<ul
						className="flex flex-col gap-3 text-sm mt-4 text-secondary"
					>
						<li>
							<a
								href="/kozijnen"
								className="underline"
							>
								Kozijnen
							</a>
						</li>
						<li>
							<a
								href="/rolluiken"
								className="underline"
							>
								Rolluiken
							</a>
						</li>
						<li>
							<a
								href="/buitendeuren"
								className="underline"
							>
								Buitendeuren
							</a>
						</li>
					</ul>
				</div>
				{/* HANDIGE LINKS column */}
				<div
					className="flex flex-col"
				>
					<span
						className="text-sm font-semibold tracking-widest"
					>
						HANDIGE LINKS
					</span>
					<ul
						className="flex flex-col gap-3 text-sm mt-4 text-secondary"
					>
						<li>
							<a
								href="/over-ons"
								className="underline"
							>
								Over ons
							</a>
						</li>
						<li>
							<a
								href="/configurator"
								className="underline"
							>
								Configurator
							</a>
						</li>
						<li>
							<a
								href="/contact"
								className="underline"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href="https://maps.app.goo.gl/j2vAT6gt1CsqoBrA7"
								className="underline"
								target='_blank'
							>
								Google Maps
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;