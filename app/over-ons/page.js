"use client";

import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OfferteForm from "../components/OfferteForm";
import ReviewsSection from "../components/ReviewsSection";
import StepsSection from "../components/StepsSection";

export default function OverOns() {
    return (
      <div className="bg-background font-outfit">
		<title>Over ons | BaCu Kozijnen</title>
      	{/* Navbar */}
				<Navbar currentPage={"over-ons"} />
				{/* Main section */}
				<section
					className="bg-secondaryBackground md:px-36 flex flex-row items-center justify-between py-16"
				>
					{/* Left Column */}
					<div
						className="flex flex-col w-1/2"
					>
						{/* Title */}
						<h1
							className="text-4xl font-semibold text-black"
						>
							Professionele kozijnen specialist
						</h1>
						{/* Subtitle */}
						<p
							className="flex flex-col mt-7 text-secondary text-lg gap-y-3"
						>
							<span>BaCu Kozijnen is een specialist in het leveren en monteren van kunststof en aluminium kozijnen. Wij bieden hoogwaardige oplossingen voor zowel de renovatie als de nieuwbouwmarkt.</span>
							<span>Ons bedrijf staat garant voor kwaliteit, duurzaamheid en vakmanschap, waarbij we nauw samenwerken met onze klanten om kozijnen te leveren die perfect aansluiten bij hun wensen en de specificaties van hun project.</span>
							<span className="mt-4">Werkgebied: ongeveer binnen 50 km van Almere</span>
						</p>
						{/* Button */}
						<a
							title="Ga naar de configurator"
							aria-label="Start je berekening"
							href="/configurator"
							className="group flex justify-center items-center gap-2 bg-primary hover:bg-primaryDark text-lg text-white py-[10px] font-medium rounded-4xl transition-all transform duration-500 mt-16 w-[225px]"
							>
							Start je berekening
							<svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none" className="ml-1 transition-transform duration-500 transform group-hover:translate-x-[3px]">
								<g clipPath="url(#clip0_81_15)">
								<path d="M0.169159 15.5025L6.65749 9L0.169159 2.4975L2.16666 0.5L10.6667 9L2.16666 17.5L0.169159 15.5025Z" fill="white" />
								</g>
								<defs>
								<clipPath id="clip0_81_15">
									<rect width="11" height="18" fill="white" />
								</clipPath>
								</defs>
							</svg>
							</a>
					</div>
					{/* Right Image */}
					<img
						src="/logos/BaCu-full.webp"
						alt="BaCu Kozijnen logo – specialist in kozijnen, rolluiken en buitendeuren"
						className="md:w-[450px] h-auto rounded-xl shadow-lg"
					/>
				</section>
				{/* Our goal */}
				<section 
						className="p-20 bg-background md:px-36 md:py-[100px] flex flex-column items-center"
				>
					<img 
							src="/images/sofa.webp" 
							alt="Zonlicht valt op een moderne bank via grote kozijnen in de woonkamer"
							className="w-36 md:min-w-[500px] max-h-[615px] object-cover md:mr-[130px] rounded-xl"
					/>
					<div className="h-full">
					<h1 className="text-4xl font-semibold mb-8">
							Ons doel
					</h1>
					<p className="flex flex-col text-secondary text-lg gap-y-6">
						<span>Bij BaCu is ons doel simpel maar krachtig:<br/>We willen jouw woonwensen werkelijkheid maken.</span>
						<span>Of het nu gaat om het vervangen van kozijnen, het plaatsen van rolluiken, of een volledige verbouwing – wij geloven dat elk project begint met goed luisteren en eindigt met een resultaat waar jij trots op bent. We combineren vakmanschap met eerlijke communicatie en denken met je mee van ontwerp tot oplevering.</span>
						<span>We willen het verschil maken in een markt waar standaardoplossingen vaak de norm zijn. Bij ons geen snelle klusjes of half werk, maar duurzame kwaliteit, transparantie en service waar je op kunt bouwen.</span>
						<span>Jouw huis verdient het beste. En dat is precies wat wij willen leveren.</span>
						<span>Benieuwd naar wat we doen?<br/>Volg onze projecten op Instagram en krijg een kijkje achter de schermen.</span>
					</p>
					</div>
				</section>
				{/* Our configurator */}
				<section
					className="bg-background md:px-36 flex flex-row justify-between items-center py-28"
				>
					<div
						className="flex flex-col"
					>
						<h2
							className="text-3xl font-semibold text-black mb-3"
						>
							Onze configurator
						</h2>
						<p
							className="mt-3 text-secondary text-xl"
						>
							Met onze configurator ontwerp je snel en eenvoudig op maat gemaakte kozijnen, zowel in kunststof als aluminium. Kies uit verschillende stijlen, afwerkingen, glasopties én een zeer ruim aanbod aan kleuren — inclusief alle RAL-kleuren — om kozijnen te creëren die perfect passen bij jouw woning.
							<br/><br/>
							De gebruiksvriendelijke configurator biedt direct inzicht in de prijs, zodat je precies weet waar je aan toe bent. Na het ontwerp zorgen wij voor de productie en vakkundige installatie van jouw kozijnen. Maak jouw woning compleet met onze configurator!
						</p>
					</div>
					<img
						src="/images/kleuren-bacu.webp"
						alt="Complete RAL-kleurenwaaier voor kozijnen, deuren en andere producten"
						className="md:w-[620px] h-auto ml-24 rounded-xl"
					/>
				</section>
				{/* Steps */}
				<StepsSection />
				{/* CTA */}
				<section 
						className="p-20 bg-background md:px-36 md:py-[100px] flex flex-column items-center"
				>
					<img 
							src="/images/huis-2-verdiepingen.webp" 
							alt="Nederlands huis met rolluiken, kozijnen en een moderne voordeur voor een eigentijdse uitstraling"
							className="w-36 md:min-w-[500px] object-cover h-auto md:mr-[130px] rounded-xl"
					/>
					<div className="h-full">
						<h1 className="text-4xl font-semibold mb-8">
							Neem contact met ons op
						</h1>
						<p className="text-secondary text-xl">
							Heb je vragen over onze kozijnen of wil je een afspraak maken voor het inmeten? Neem gerust contact met ons op en we helpen je graag verder!
						</p>
						{/* Button */}
						<a
							aria-label="Neem contact op voor vragen, offertes of meer informatie"
  							title="Ga naar de contactpagina"
							href="/contact"
							className="group flex justify-center items-center gap-2 bg-primary hover:bg-primaryDark text-lg text-white py-[10px] font-medium rounded-4xl transition-all transform duration-500 mt-12 w-[225px]"
							>
							Neem contact op
							<svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none" className="ml-1 transition-transform duration-500 transform group-hover:translate-x-[3px]">
								<g clipPath="url(#clip0_81_15)">
								<path d="M0.169159 15.5025L6.65749 9L0.169159 2.4975L2.16666 0.5L10.6667 9L2.16666 17.5L0.169159 15.5025Z" fill="white" />
								</g>
								<defs>
								<clipPath id="clip0_81_15">
									<rect width="11" height="18" fill="white" />
								</clipPath>
								</defs>
							</svg>
						</a>
					</div>
				</section>
				{/* Reviews */}
				<ReviewsSection />
				{/* Offerte form */}
				<OfferteForm />
				{/* Footer */}
				<Footer />
    	</div>
    );
}