"use client";

import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OfferteForm from "../components/OfferteForm";
import ReviewsSection from "../components/ReviewsSection";
import StepsSection from "../components/StepsSection";

export default function Kozijnen() {
	const faqItems = [
		["Waarom kunststof kozijnen kiezen?", "Kunststof kozijnen zijn duurzaam, isolerend en onderhoudsarm. Ze rotten niet, verkleuren nauwelijks en besparen energie. Verkrijgbaar in diverse stijlen en kleuren, passend bij elke woning. Een slimme, esthetische en langdurige investering."],
		["Hoe lang gaat een kunststof kozijn op maat mee?", "Gemiddeld gaan kunststof kozijnen tot 50 jaar mee. Ze zijn weerbestendig, verkleuren niet snel en vergen weinig onderhoud. Regelmatig schoonmaken volstaat. Dankzij hoogwaardige materialen behouden ze jarenlang hun kwaliteit en isolatiewaarde."],
		["Komen jullie mijn kozijnen inmeten?", "Ja, als je daarvoor kiest. Wij bieden professionele inmeetservice om fouten te voorkomen en een perfecte pasvorm te garanderen. Onze specialist meet nauwkeurig en adviseert over indeling, afwerking en opties — zodat jouw kozijnen precies passen bij jouw woning en wensen."],
		["Wat zijn de levertijden?", "Onze levertijd bedraagt gemiddeld 4 tot 6 weken na akkoord. Elk kozijn wordt op maat geproduceerd en professioneel geplaatst. We houden je tussentijds op de hoogte en plannen montage in overleg, voor een soepele en snelle oplevering."],
		["Zijn kunststof kozijnen geschikt voor elke woningstijl?", "Ja, kunststof kozijnen zijn verkrijgbaar in diverse kleuren, vormen en structuren. Of je woning klassiek, landelijk of modern is — er is altijd een passende stijl. Met houtnerfstructuren zijn ze zelfs nauwelijks van echt hout te onderscheiden."],
		["Waarom BaCu Kozijnen kiezen?", "Bij BaCu krijg je topkwaliteit, deskundig advies en uitstekende service. Wij leveren maatwerk, meten gratis in, werken met A-merken en zorgen voor een vakkundige montage. Afspraak is afspraak, en jouw tevredenheid staat altijd voorop."]
	]
	return (
		<div className="bg-background font-outfit">
			{/* Navbar */}
			<Navbar currentPage={"kozijnen"} />
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
						Kozijnen
					</h1>
					{/* Subtitle */}
					<p
						className="mt-7 text-secondary text-lg"
					>
						Kunststof en aluminium kozijnen van BaCu Kozijnen bieden de perfecte combinatie van stijl, isolatie en duurzaamheid. Ze zijn onderhoudsarm, weerbestendig en gaan jarenlang mee. Of je nu renoveert of nieuw bouwt, onze op maat gemaakte kozijnen passen bij elke woningstijl en dragen bij aan een energiezuinig huis.
						<br/><br/>
						Met onze configurator ontwerp je eenvoudig kozijnen die aansluiten bij jouw wensen. Geniet van optimaal comfort, lagere energiekosten en een moderne uitstraling met de kunststof en aluminium kozijnen van BaCu Kozijnen.
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
					src="/images/kozijn-6-ramen.png"
					alt="Kozijn met 6 ramen afbeelding"
					className="md:w-[500px] h-auto"
				/>
			</section>
			{/* Steps */}
			<StepsSection product={"Kozijnen"} />
			{/* Image + Text 1 */}
			<section
				className="bg-secondaryBackground md:px-36 flex flex-row items-center py-28"
			>
				<img
					src="/images/kozijn-3-ramen.png"
					alt="Kozijn met 3 ramen afbeelding"
					className="md:w-[500px] h-auto mr-24"
				/>
				<div
					className="flex flex-col"
				>
					<h2
						className="text-3xl font-semibold text-black"
					>
						De unieke voordelen van kozijnen
					</h2>
					<p
						className="mt-3 text-secondary text-xl"
					>
						Kunststof en aluminium kozijnen onderscheiden zich door hun lange levensduur en minimale onderhoud. Ze zijn bestand tegen alle weersomstandigheden zonder te verkleuren of te vervormen. Dankzij hun hoge isolatiewaarde zorgen ze voor een energiezuinig en comfortabel binnenklimaat, waardoor stookkosten dalen.
						<br/><br/>
						Daarnaast bieden kunststof en aluminium kozijnen veel ontwerpmogelijkheden. Verschillende kleuren, afwerkingen en stijlen maken ze geschikt voor zowel moderne als klassieke woningen. Hun geluiddempende eigenschappen verhogen het wooncomfort, terwijl de sterke constructie bijdraagt aan inbraakveiligheid.
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
						Vakkundige installatie van uw kozijnen
					</h2>
					<p
						className="mt-3 text-secondary text-xl"
					>
						Na het bestellen van je kozijnen zorgen onze ervaren monteurs voor een professionele en nauwkeurige installatie. We starten met een duidelijke planning en plaatsen elk kozijn perfect op maat, zodat optimale isolatie en functionaliteit gegarandeerd zijn.
						<br/><br/>
						Ook na de installatie bieden we ondersteuning. Bij vragen of problemen staat ons team klaar om te helpen. Zo geniet je zorgeloos van je nieuwe kozijnen!
					</p>
				</div>
				<img
					src="/images/kozijn-6-ramen2.png"
					alt="Kozijn met 6 ramen afbeelding"
					className="md:w-[570px] h-auto ml-24"
				/>
			</section>
			{/* Image + Text 3 */}
			<section
				className="bg-secondaryBackground md:px-36 flex flex-row items-center py-28"
			>
				<img
					src="/images/kleuren-bacu.png"
					alt="Kleuren afbeelding"
					className="md:w-[500px] h-auto mr-24 rounded-xl"
				/>
				<div
					className="flex flex-col"
				>
					<h2
						className="text-3xl font-semibold text-black"
					>
						Je kozijnen op maat
					</h2>
					<p
						className="mt-3 text-secondary text-xl"
					>
						Het juiste kozijn maakt een wereld van verschil voor je woning. Bij BaCu Kozijnen leveren we volledig op maat gemaakte kunststof en aluminium kozijnen die perfect aansluiten bij jouw stijl en wensen. Dankzij de uitgebreide keuzemogelijkheden in kleuren — inclusief het volledige RAL-kleurenpalet — afwerkingen en glasopties geef je jouw woning moeiteloos een moderne of juist klassieke uitstraling.
						<br/><br/>
						Wil je hoogwaardige kozijnen voor de beste prijs? Kies dan voor maatwerk van BaCu Kozijnen!
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