"use client";

import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OfferteForm from "../components/OfferteForm";
import ReviewsSection from "../components/ReviewsSection";
import StepsSection from "../components/StepsSection";

export default function Rolluiken() {
	return (
		<div className="bg-background font-outfit">
			{/* Navbar */}
			<Navbar currentPage={"rolluiken"} />
			{/* Main section */}
			<section
				className="md:px-36 flex flex-row items-center justify-between py-16"
			>
				{/* Left Column */}
				<div
					className="flex flex-col w-1/2"
				>
					{/* Title */}
					<h1
						className="text-5xl font-semibold text-black"
					>
						Rolluiken
					</h1>
					{/* Subtitle */}
					<p
						className="flex flex-col mt-7 text-secondary text-lg gap-y-3"
					>
						<span>Rolluiken zijn functioneel en esthetisch en passen bij elke architecturale stijl. Ze beschermen tegen hitte en fel licht en helpen de binnentemperatuur reguleren, wat energie bespaart.</span>
						<span>Daarnaast verlengen ze de levensduur van ramen en verminderen slijtage door weersinvloeden. Ze bieden extra isolatie en verminderen geluidsoverlast.</span>
						<span>Ook zorgen rolluiken voor privacy en extra beveiliging tegen indringers, wat bijdraagt aan een veilige en comfortabele leefomgeving, zowel overdag als ‘s nachts.</span>
					</p>
					{/* Button */}
					<a
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
					src="/images/rolluik-zwart.png"
					alt="Zwarte rolluik afbeelding"
					className="md:w-[490px] h-auto"
				/>
			</section>
			{/* Steps */}
			<StepsSection product={"Rolluiken"} />
			{/* Image + Text 1 */}
			<section
				className="bg-secondaryBackground md:px-36 flex flex-row items-center py-28"
			>
				<img
					src="/images/rolluiken-huis.png"
					alt="Zwarte rolluiken op een huis afbeelding"
					className="md:w-[515px] h-auto mr-24"
				/>
				<div
					className="flex flex-col"
				>
					<h2
						className="text-3xl font-semibold text-black"
					>
						De nadelen van ramen zonder rolluiken
					</h2>
					<p
						className="mt-3 text-secondary text-xl"
					>
						Zonder rolluiken kunnen verschillende problemen ontstaan. Fel zonlicht kan een ruimte onaangenaam opwarmen en hinderlijk zijn, vooral op warme dagen. Ramen zonder extra bescherming laten ook meer kou binnen in de winter, wat zorgt voor hogere energiekosten.
						<br/><br/>
						Daarnaast kan geluidsoverlast van buitenaf, zoals verkeer of buren, het wooncomfort verminderen. Privacy is een ander punt: zonder rolluiken zijn ramen volledig zichtbaar van buitenaf, wat niet altijd prettig is. Tot slot vormen onbeveiligde ramen een makkelijker doelwit voor inbraak.
					</p>
				</div>
			</section>
			{/* Image + Text 2 */}
			<section
				className="bg-secondaryBackground md:px-36 flex flex-row justify-between items-center py-28"
			>
				<div
					className="flex flex-col"
				>
					<h2
						className="text-3xl font-semibold text-black"
					>
						Voordelen van de rolluiken
					</h2>
					<p
						className="mt-3 text-secondary text-xl"
					>
						Rolluiken verhogen de privacy doordat ze inkijk van buitenaf blokkeren en zorgen tegelijkertijd voor een extra beveiliging, waardoor ramen minder kwetsbaar zijn voor inbraak. Daarnaast verminderen ze geluidsoverlast van buitenaf, wat bijdraagt aan een rustige en comfortabele woonomgeving.
						<br/><br/>
						Ze helpen ook om fel zonlicht en warmte buiten te houden in de zomer, terwijl ze in de winter extra isolatie bieden en energie besparen. Dit zorgt voor een aangenaam binnenklimaat gedurende het hele jaar.
					</p>
				</div>
				<img
					src="/images/rolluik-wit.png"
					alt="Witte rolluik afbeelding"
					className="md:w-[570px] h-auto ml-24"
				/>
			</section>
			{/* Image + Text 3 */}
			<section
				className="bg-secondaryBackground md:px-36 flex flex-row items-center py-28"
			>
				<img
					src="/images/rolluiken-baksteen-huis.png"
					alt="Rolluiken op een baksteen huis afbeelding"
					className="md:w-[500px] h-auto mr-24"
				/>
				<div
					className="flex flex-col"
				>
					<h2
						className="text-3xl font-semibold text-black"
					>
						Je rolluiken op maat
					</h2>
					<p
						className="mt-3 text-secondary text-xl"
					>
						BaCu Kozijnen biedt een uitgebreid assortiment rolluiken, waaronder zowel inbouw- als opbouwrolluiken. Met onze gebruiksvriendelijke configurator kun je eenvoudig verschillende opties kiezen, zoals kleuren en afmetingen, zodat je rolluiken volledig naar wens zijn. Je ontvangt direct een prijsopgave, zodat je snel weet waar je aan toe bent.
						<br/><br/>
						Heb je hulp nodig bij het samenstellen van je rolluiken? Ons deskundige team staat altijd klaar om je van advies te voorzien.
					</p>
				</div>
			</section>
			{/* FAQ */}
			<FAQSection />
			{/* Reviews */}
			<ReviewsSection />
			{/* Offerte form */}
			<OfferteForm />
			{/* Footer */}
			<Footer />
		</div>
	);
}