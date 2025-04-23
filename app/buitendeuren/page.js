"use client";

import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OfferteForm from "../components/OfferteForm";
import ReviewsSection from "../components/ReviewsSection";
import StepsSection from "../components/StepsSection";

export default function Buitendeuren() {
	const faqItems = [
		["Waarom een nieuwe voordeur kopen?", "Een nieuwe voordeur zorgt voor betere isolatie, meer veiligheid en een moderne uitstraling. Het verhoogt niet alleen het wooncomfort, maar ook de waarde van je woning. Daarnaast biedt het een kans om je huis te personaliseren en aan te passen aan je eigen stijl en smaak."],
		["Hoe lang gaat een buitendeur mee?", "Een buitendeur van hoge kwaliteit gaat gemiddeld 25 tot 30 jaar mee. De levensduur hangt af van het materiaal, de afwerking en het onderhoud. Goed onderhouden deuren van bijvoorbeeld kunststof of aluminium blijven jarenlang mooi, sterk en goed isolerend tegen weer en wind."],
		["Kunnen jullie helpen met mijn offerte?", "Ja, we helpen je graag bij het opstellen van een offerte op maat. Neem vrijblijvend contact met ons op via het formulier of telefonisch. Samen bekijken we jouw wensen en adviseren we je over de beste oplossingen, prijzen en mogelijkheden binnen jouw budget."],
		["Wat zijn de levertijden?", "De levertijd van onze buitendeuren is gemiddeld 4 tot 6 weken. Zodra je bestelling is bevestigd, houden we je op de hoogte van de voortgang. We plannen de levering en plaatsing altijd in overleg, zodat je precies weet waar je aan toe bent."],
		["Bieden jullie alleen voordeuren aan?", "Nee, naast voordeuren leveren wij ook achterdeuren, schuurdeuren en andere soorten buitendeuren. Alles wordt volledig op maat gemaakt in diverse stijlen en kleuren. Zo vind je altijd een deur die past bij jouw woning, smaak en functionele behoeften."],
		["Waarom BaCu Kozijnen kiezen?", "BaCu Kozijnen staat voor vakmanschap, betrouwbaarheid en maatwerk. We gebruiken duurzame materialen, leveren uitstekende service en bieden persoonlijk advies. Dankzij onze jarenlange ervaring zorgen we voor een perfect eindresultaat dat volledig aansluit bij jouw woning en wensen."]
	]
	return (
		<div className="bg-background font-outfit">
			<title>Maak je buitendeuren op maat | BaCu Kozijnen</title>
			{/* Navbar */}
			<Navbar currentPage={"buitendeuren"} />
			{/* Main section */}
			<section className="flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-16 px-6 md:px-36 gap-10">
				{/* Left Column */}
				<div className="flex flex-col w-full md:w-1/2">
					{/* Title */}
					<h1 className="text-5xl font-semibold text-black">Buitendeuren</h1>

					{/* Subtitle */}
					<p className="mt-7 text-secondary text-lg">
						Kunststof deuren zijn een slimme keuze voor wie duurzaamheid en stijl wil combineren. Ze zijn onderhoudsarm, gaan lang mee en bieden een uitstekende prijs-kwaliteitverhouding. Of het nu gaat om een renovatie of nieuwbouw, kunststof deuren passen altijd.
						<br /><br />
						Bij BaCu kozijnen leveren we op maat gemaakte kunststof deuren die bestand zijn tegen weer en wind. Ze verkleuren niet, vervormen niet en hoeven nooit geschilderd te worden. Perfect voor voordeuren, achterdeuren en tuindeuren. Kies voor gemak, kwaliteit en een toekomstbestendige oplossing!
					</p>

					{/* Button */}
					<a
						title="Ga naar de configurator"
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
					src="/images/deur-donker-bruin.webp"
					alt="Donkerbruine houten voordeur met klassiek design voor woningentree"
					className="w-full md:w-[500px] h-auto"
				/>
			</section>

			{/* Steps */}
			<StepsSection product={"Buitendeur"} />
			{/* Image + Text 1 */}
			<section className="bg-secondaryBackground flex flex-col md:flex-row items-center py-12 md:py-28 px-6 md:px-36 gap-10 md:gap-0">
				<img
					src="/images/deur-zwart.webp"
					alt="Strakke zwarte buitendeur met modern design en matte afwerking"
					className="md:w-[515px] h-auto md:mr-24"
				/>
				<div className="flex flex-col">
					<h2 className="text-3xl font-semibold text-black">
						Voordelen van buitendeuren
					</h2>
					<p className="mt-6 md:mt-3 text-secondary text-xl">
						Buitendeuren bieden talloze voordelen voor jouw woning. Dankzij de uitstekende isolerende eigenschappen van onze deuren profiteer je van aanzienlijke energiebesparingen: houd warmte binnen in de winter en buiten in de zomer, wat resulteert in lagere energiekosten.
						<br /><br />
						Onze buitendeuren zijn volledig onderhoudsvrij. Ze blijven er jarenlang als nieuw uitzien, zonder dat je hoeft te schrobben, verven of repareren. Dit bespaart niet alleen tijd, maar ook extra kosten op de lange termijn.
					</p>
				</div>
			</section>

			{/* Image + Text 2 */}
			<section className="bg-secondaryBackground flex flex-col-reverse md:flex-row justify-between items-center py-12 md:py-28 px-6 md:px-36 gap-10 md:gap-0">
				<div className="flex flex-col">
					<h2 className="text-3xl font-semibold text-black">
						Sterke & Duurzame Buitendeuren
					</h2>
					<p className="mt-6 md:mt-3 text-secondary text-xl">
						Buitendeuren van BaCu Kozijnen staan voor stevigheid en duurzaamheid. In tegenstelling tot houten deuren, die kunnen kromtrekken, barsten of rotten door vocht en temperatuurschommelingen, blijven onze deuren jarenlang in topconditie. Ze zijn bestand tegen alle weersomstandigheden en bieden optimale veiligheid voor jouw woning.
					</p>
				</div>
				<img
					src="/images/deur-met-licht.webp"
					alt="Buitendeur met glaspanelen waar zacht licht van lampen doorheen valt"
					className="md:w-[570px] h-auto md:ml-24"
				/>
			</section>

			{/* Image + Text 3 */}
			<section className="bg-secondaryBackground flex flex-col md:flex-row items-center py-12 md:py-28 px-6 md:px-36 gap-10 md:gap-0">
				<img
					src="/images/deur-ramen.webp"
					alt="Voordeur met vierkante ramen en stalen frame voor extra licht en stijl"
					className="md:w-[500px] h-auto md:mr-24"
				/>
				<div className="flex flex-col">
					<h2 className="text-3xl font-semibold text-black">
						Je buitendeur op maat
					</h2>
					<p className="mt-6 md:mt-3 text-secondary text-xl">
						Bij BaCu Kozijnen maak je eenvoudig jouw ideale kunststof deur. Met onze online configurator kies je uit verschillende kleuren, glasopties en afwerkingen – en krijg je direct een prijsindicatie.
						<br /><br />
						Kom je er niet uit? Onze specialisten helpen je graag met advies en maatwerk. Wij staan voor kwaliteit, transparantie en gemak, zodat jij moeiteloos de perfecte deur met stevig kunststof kozijn vindt.
					</p>
				</div>
			</section>
			{/* FAQ */}
			<FAQSection faqItems={faqItems} />
			{/* Reviews */}
			<ReviewsSection />
			{/* Offerte form */}
			<OfferteForm />
			{/* Footer */}
			<Footer />
		</div>
	);
}