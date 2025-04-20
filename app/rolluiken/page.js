"use client";

import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OfferteForm from "../components/OfferteForm";
import ReviewsSection from "../components/ReviewsSection";
import StepsSection from "../components/StepsSection";

export default function Rolluiken() {
	const faqItems = [
		["Wat zijn de voordelen van rolluiken?", "Rolluiken bieden privacy, verduisteren kamers, verbeteren de isolatie en verhogen de veiligheid van je woning. Ze beschermen tegen weersinvloeden en kunnen ook het geluid van buitenaf dempen. Bovendien bieden ze esthetische voordelen door het strakke, moderne uiterlijk."],
		["Hoe helpen rolluiken bij energiebesparing?", "Rolluiken verbeteren de thermische isolatie van je woning. Ze houden warmte binnen in de winter en buiten in de zomer, wat helpt om de energiekosten te verlagen. Hierdoor hoef je minder te stoken of te koelen, wat resulteert in lagere energiekosten en een duurzamer energieverbruik."],
		["Kunnen jullie helpen met mijn offerte?", "Ja, we helpen je graag bij het opstellen van een offerte voor rolluiken. Neem contact met ons op voor advies op maat. We bespreken jouw wensen en geven een prijsopgave die past bij je budget en situatie. Zo weet je precies waar je aan toe bent."],
		["Zijn rolluiken moeilijk te installeren?", "De installatie verschilt per type: inbouwrolluiken vereisen meer werk, omdat ze in de gevel moeten worden geïntegreerd. Opbouwrolluiken zijn eenvoudiger te monteren aan de buitenkant van het raam. Maak je geen zorgen, wij zorgen voor een professionele installatie, zodat je zeker weet dat alles goed en veilig wordt geplaatst."],
		["Wat is het verschil tussen inbouw- en opbouwrolluiken?", "Inbouwrolluiken worden ingebouwd in de muur of het kozijn, wat zorgt voor een strakke afwerking. Ze bieden een betere isolatie en zijn visueel discreter. Opbouwrolluiken worden aan de buitenkant van het raam gemonteerd, wat de installatie eenvoudiger maakt en meer flexibiliteit biedt in het design en de plaatsing."],
		["Waarom BaCu Kozijnen kiezen?", "BaCu Kozijnen biedt kwalitatieve rolluiken op maat, uitstekende service en professioneel advies. We werken met duurzame materialen en zorgen voor een perfecte installatie. Ons vakmanschap garandeert dat je rolluiken lang meegaan en optimaal presteren, waardoor je investering de moeite waard is."]
	]
	return (
		<div className="bg-background font-outfit">
			<title>Maak je rolluiken op maat | BaCu Kozijnen</title>
			{/* Navbar */}
			<Navbar currentPage={"rolluiken"} />
			{/* Main section */}
			<section
				className="px-6 md:px-36 flex flex-col-reverse md:flex-row items-center justify-between py-16 gap-10"
			>
				{/* Left Column */}
				<div className="flex flex-col w-full md:w-1/2">
					{/* Title */}
					<h1 className="text-5xl font-semibold text-black">
						Rolluiken
					</h1>
					{/* Subtitle */}
					<p className="flex flex-col mt-7 text-secondary text-lg gap-y-3">
						<span>Rolluiken zijn functioneel en esthetisch en passen bij elke architecturale stijl. Ze beschermen tegen hitte en fel licht en helpen de binnentemperatuur reguleren, wat energie bespaart.</span>
						<span>Daarnaast verlengen ze de levensduur van ramen en verminderen slijtage door weersinvloeden. Ze bieden extra isolatie en verminderen geluidsoverlast.</span>
						<span>Ook zorgen rolluiken voor privacy en extra beveiliging tegen indringers, wat bijdraagt aan een veilige en comfortabele leefomgeving, zowel overdag als ‘s nachts.</span>
					</p>
					{/* Button */}
					<a
						aria-label="Start je berekening voor de configurator en ontvang een offerte op maat"
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
					src="/images/rolluik-zwart.webp"
					alt="Zwarte rolluik op een witte muur voor een strakke, moderne uitstraling"
					className="md:w-[490px] w-full h-auto"
				/>
			</section>
			{/* Steps */}
			<StepsSection product={"Rolluiken"} />
			{/* Image + Text 1 */}
			<section className="bg-secondaryBackground px-6 md:px-36 flex flex-col md:flex-row items-center py-28 gap-10 md:gap-0">
				<img
					src="/images/rolluiken-huis.webp"
					alt="Moderne woning met zwarte rolluiken op een zwart geverfde gevel"
					className="md:w-[515px] w-full h-auto md:mr-24"
				/>
				<div className="flex flex-col">
					<h2 className="text-3xl font-semibold text-black">
						De nadelen van ramen zonder rolluiken
					</h2>
					<p className="mt-3 text-secondary text-xl">
						Zonder rolluiken kunnen verschillende problemen ontstaan. Fel zonlicht kan een ruimte onaangenaam opwarmen en hinderlijk zijn, vooral op warme dagen. Ramen zonder extra bescherming laten ook meer kou binnen in de winter, wat zorgt voor hogere energiekosten.
						<br/><br/>
						Daarnaast kan geluidsoverlast van buitenaf, zoals verkeer of buren, het wooncomfort verminderen. Privacy is een ander punt: zonder rolluiken zijn ramen volledig zichtbaar van buitenaf, wat niet altijd prettig is. Tot slot vormen onbeveiligde ramen een makkelijker doelwit voor inbraak.
					</p>
				</div>
			</section>

			{/* Image + Text 2 */}
			<section className="bg-secondaryBackground px-6 md:px-36 flex flex-col md:flex-row-reverse justify-between items-center py-28 gap-10 md:gap-0">
				<img
					src="/images/rolluik-wit.webp"
					alt="Witte rolluik op achtertuindeur voor extra privacy en zonwering"
					className="md:w-[570px] w-full h-auto md:ml-24"
				/>
				<div className="flex flex-col">
					<h2 className="text-3xl font-semibold text-black">
						Voordelen van de rolluiken
					</h2>
					<p className="mt-3 text-secondary text-xl">
						Rolluiken verhogen de privacy doordat ze inkijk van buitenaf blokkeren en zorgen tegelijkertijd voor een extra beveiliging, waardoor ramen minder kwetsbaar zijn voor inbraak. Daarnaast verminderen ze geluidsoverlast van buitenaf, wat bijdraagt aan een rustige en comfortabele woonomgeving.
						<br/><br/>
						Ze helpen ook om fel zonlicht en warmte buiten te houden in de zomer, terwijl ze in de winter extra isolatie bieden en energie besparen. Dit zorgt voor een aangenaam binnenklimaat gedurende het hele jaar.
					</p>
				</div>
			</section>

			{/* Image + Text 3 */}
			<section className="bg-secondaryBackground px-6 md:px-36 flex flex-col md:flex-row items-center py-28 gap-10 md:gap-0">
				<img
					src="/images/rolluiken-baksteen-huis.webp"
					alt="Zwarte rolluiken op een bakstenen huis voor een stoere en moderne uitstraling"
					className="md:w-[500px] w-full h-auto md:mr-24"
				/>
				<div className="flex flex-col">
					<h2 className="text-3xl font-semibold text-black">
						Je rolluiken op maat
					</h2>
					<p className="mt-3 text-secondary text-xl">
						BaCu Kozijnen biedt een uitgebreid assortiment rolluiken, waaronder zowel inbouw- als opbouwrolluiken. Met onze gebruiksvriendelijke configurator kun je eenvoudig verschillende opties kiezen, zoals kleuren en afmetingen, zodat je rolluiken volledig naar wens zijn. Je ontvangt direct een prijsopgave, zodat je snel weet waar je aan toe bent.
						<br/><br/>
						Heb je hulp nodig bij het samenstellen van je rolluiken? Ons deskundige team staat altijd klaar om je van advies te voorzien.
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