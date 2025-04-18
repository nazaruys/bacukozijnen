"use client";

import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OfferteForm from "../components/OfferteForm";
import ReviewsSection from "../components/ReviewsSection";
import StepsSection from "../components/StepsSection";

export default function Buitendeuren() {
	return (
		<div className="bg-background font-outfit">
			{/* Navbar */}
			<Navbar currentPage={"buitendeuren"} />
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
						Buitendeuren
					</h1>
					{/* Subtitle */}
					<p
						className="mt-7 text-secondary text-lg"
					>
						Kunststof deuren zijn een slimme keuze voor wie duurzaamheid en stijl wil combineren. Ze zijn onderhoudsarm, gaan lang mee en bieden een uitstekende prijs-kwaliteitverhouding. Of het nu gaat om een renovatie of nieuwbouw, kunststof deuren passen altijd.
						<br/><br/>
						Bij BaCu kozijnen leveren we op maat gemaakte kunststof deuren die bestand zijn tegen weer en wind. Ze verkleuren niet, vervormen niet en hoeven nooit geschilderd te worden. Perfect voor voordeuren, achterdeuren en tuindeuren. Kies voor gemak, kwaliteit en een toekomstbestendige oplossing!
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
					src="/images/deur-donker-bruin.png"
					alt="Deur donker bruin afbeelding"
					className="md:w-[500px] h-auto"
				/>
			</section>
			{/* Steps */}
			<StepsSection product={"Buitendeur"} />
			{/* Image + Text 1 */}
			<section
				className="bg-secondaryBackground md:px-36 flex flex-row items-center py-28"
			>
				<img
					src="/images/deur-zwart.png"
					alt="Zwart deur afbeelding"
					className="md:w-[515px] h-auto mr-24"
				/>
				<div
					className="flex flex-col"
				>
					<h2
						className="text-3xl font-semibold text-black"
					>
						Voordelen van buitendeuren
					</h2>
					<p
						className="mt-3 text-secondary text-xl"
					>
						Buitendeuren bieden talloze voordelen voor jouw woning. Dankzij de uitstekende isolerende eigenschappen van onze deuren profiteer je van aanzienlijke energiebesparingen: houd warmte binnen in de winter en buiten in de zomer, wat resulteert in lagere energiekosten.
						<br/><br/>
						Onze buitendeuren zijn volledig onderhoudsvrij. Ze blijven er jarenlang als nieuw uitzien, zonder dat je hoeft te schrobben, verven of repareren. Dit bespaart niet alleen tijd, maar ook extra kosten op de lange termijn.
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
						Sterke & Duurzame Buitendeuren
					</h2>
					<p
						className="mt-3 text-secondary text-xl"
					>
						Buitendeuren van BaCu Kozijnen staan voor stevigheid en duurzaamheid. In tegenstelling tot houten deuren, die kunnen kromtrekken, barsten of rotten door vocht en temperatuurschommelingen, blijven onze deuren jarenlang in topconditie. Ze zijn bestand tegen alle weersomstandigheden en bieden optimale veiligheid voor jouw woning.
					</p>
				</div>
				<img
					src="/images/deur-met-licht.png"
					alt="Deur met licht afbeelding"
					className="md:w-[570px] h-auto ml-24"
				/>
			</section>
			{/* Image + Text 3 */}
			<section
				className="bg-secondaryBackground md:px-36 flex flex-row items-center py-28"
			>
				<img
					src="/images/deur-ramen.png"
					alt="Deur met ramen afbeelding"
					className="md:w-[500px] h-auto mr-24"
				/>
				<div
					className="flex flex-col"
				>
					<h2
						className="text-3xl font-semibold text-black"
					>
						Je buitendeur op maat
					</h2>
					<p
						className="mt-3 text-secondary text-xl"
					>
						Bij BaCu Kozijnen maak je eenvoudig jouw ideale kunststof deur. Met onze online configurator kies je uit verschillende kleuren, glasopties en afwerkingen – en krijg je direct een prijsindicatie.
						<br/><br/>
						Kom je er niet uit? Onze specialisten helpen je graag met advies en maatwerk. Wij staan voor kwaliteit, transparantie en gemak, zodat jij moeiteloos de perfecte deur met stevig kunststof kozijn vindt.
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