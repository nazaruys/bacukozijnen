"use client";

import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import OfferteForm from "../components/OfferteForm";

export default function Contact() {
	return (
		<div className="bg-background font-outfit">
			<title>Neem contact met ons op | BaCu Kozijnen</title>
			{/* Navbar */}
			<Navbar currentPage={"contact"} />
			{/* Main section */}
			<section className="px-6 md:px-36 flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-16 gap-10 md:gap-0">
				{/* Left Column */}
				<div className="flex flex-col w-full md:w-1/2">
					{/* Title */}
					<h1 className="text-4xl font-semibold text-black">
						Neem contact met ons op
					</h1>
					{/* Subtitle */}
					<p className="flex flex-col gap-y-5 mt-7 text-secondary text-xl">
					<span>Heb je vragen over onze kozijnen, advies nodig of wil je een afspraak maken voor het inmeten? Neem gerust contact met ons op en we helpen je graag verder!</span>
					<span>Werkgebied: ongeveer binnen 50 km van Almere</span>
					<span>Openingstijden:</span>
					<ul className="list-disc ml-12">
						<li>Ma – Vr: 09:00 – 18:00</li>
						<li>Za – Zo: Gesloten</li>
					</ul>
					</p>
				</div>
				{/* Right Image */}
				<img
					src="/images/beige-kozijn.webp"
					alt="Beige kozijnen voor een warme en natuurlijke uitstraling van het huis"
					className="w-full md:w-[435px] h-auto"
				/>
				</section>
			{/* Contact methods */}
			<section className="px-8 flex flex-col md:flex-row justify-between md:px-36 py-16 md:py-20 gap-10 md:gap-0 items-center">
				{/* First */}
				<a
					className="w-full md:w-[370px] h-[200px] bg-white rounded-[10px] flex flex-col items-center justify-between p-6"
					style={{ border: "0.5px solid #717171" }}
					href="https://api.whatsapp.com/send/?phone=31614438309"
					target="_blank"
					aria-label="Stuur ons een bericht via WhatsApp voor direct contact"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
						<g clipPath="url(#clip0_175_595)">
						<path d="M44.2126 7.68419C39.3817 2.82752 32.9492 0.166687 26.1034 0.166687C11.9984 0.166687 0.502566 11.6625 0.502566 25.7675C0.502566 30.2884 1.6909 34.68 3.91257 38.555L0.295898 51.8334L13.8584 48.2684C17.6042 50.3092 21.8151 51.3942 26.1034 51.3942C40.2084 51.3942 51.7042 39.8984 51.7042 25.7934C51.7042 18.9475 49.0434 12.515 44.2126 7.68419ZM26.1034 47.0542C22.2801 47.0542 18.5342 46.0209 15.2534 44.0834L14.4784 43.6184L6.4184 45.7367L8.56257 37.8834L8.0459 37.0825C5.92757 33.6984 4.7909 29.7717 4.7909 25.7675C4.7909 14.0392 14.3492 4.48085 26.0776 4.48085C31.7609 4.48085 37.1084 6.70252 41.1126 10.7325C45.1426 14.7625 47.3384 20.11 47.3384 25.7934C47.3901 37.5217 37.8317 47.0542 26.1034 47.0542ZM37.7801 31.1409C37.1342 30.8309 33.9826 29.2809 33.4142 29.0484C32.8201 28.8417 32.4067 28.7384 31.9676 29.3584C31.5284 30.0042 30.3142 31.4509 29.9526 31.8642C29.5909 32.3034 29.2034 32.355 28.5576 32.0192C27.9117 31.7092 25.8451 31.0117 23.4167 28.8417C21.5051 27.1367 20.2392 25.0442 19.8517 24.3984C19.4901 23.7525 19.8001 23.4167 20.1359 23.0809C20.4201 22.7967 20.7817 22.3317 21.0917 21.97C21.4017 21.6084 21.5309 21.3242 21.7376 20.9109C21.9442 20.4717 21.8409 20.11 21.6859 19.8C21.5309 19.49 20.2392 16.3384 19.7226 15.0467C19.2059 13.8067 18.6634 13.9617 18.2759 13.9359C17.8884 13.9359 17.4751 13.9359 17.0359 13.9359C16.5967 13.9359 15.9251 14.0909 15.3309 14.7367C14.7626 15.3825 13.1092 16.9325 13.1092 20.0842C13.1092 23.2359 15.4084 26.2842 15.7184 26.6975C16.0284 27.1367 20.2392 33.595 26.6459 36.3592C28.1701 37.0309 29.3584 37.4184 30.2884 37.7025C31.8126 38.1934 33.2076 38.1159 34.3184 37.9609C35.5584 37.78 38.1159 36.4109 38.6326 34.9125C39.1751 33.4142 39.1751 32.1484 38.9942 31.8642C38.8134 31.58 38.4259 31.4509 37.7801 31.1409Z" fill="#ED1B24"/>
						</g>
						<defs>
						<clipPath id="clip0_175_595">
						<rect width="52" height="52" fill="white"/>
						</clipPath>
						</defs>
					</svg>
					<span className="text-2xl">WhatsApp</span>
					<span className="font-medium underline">Stuur ons een bericht via WhatsApp</span>
				</a>
				{/* Second */}
				<a
					className="w-full md:w-[370px] h-[200px] bg-white rounded-[10px] flex flex-col items-center justify-between p-6"
					style={{ border: "0.5px solid #717171" }}
					href="tel:031212345678"
					target="_blank"
					aria-label="Bel naar BaCu Kozijnen voor direct contact"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 38 38" fill="none">
					<path d="M7.64222 16.4456C10.6822 22.42 15.58 27.2967 21.5544 30.3578L26.1989 25.7133C26.7689 25.1433 27.6133 24.9533 28.3522 25.2067C30.7167 25.9878 33.2711 26.41 35.8889 26.41C37.05 26.41 38 27.36 38 28.5211V35.8889C38 37.05 37.05 38 35.8889 38C16.0656 38 0 21.9344 0 2.11111C0 0.95 0.95 0 2.11111 0H9.5C10.6611 0 11.6111 0.95 11.6111 2.11111C11.6111 4.75 12.0333 7.28333 12.8144 9.64778C13.0467 10.3867 12.8778 11.21 12.2867 11.8011L7.64222 16.4456Z" fill="#ED1B24"/>
					</svg>
					<span className="text-2xl">Bellen</span>
					<span className="font-medium underline">Bel naar +31 2 12345678</span>
				</a>
				{/* Third */}
				<a
					className="w-full md:w-[370px] h-[200px] bg-white rounded-[10px] flex flex-col items-center justify-between p-6"
					style={{ border: "0.5px solid #717171" }}
					href="mailto:info@voorbeeld.nl"
					target="_blank"
					aria-label="Stuur een e-mail naar BaCu Kozijnen"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="57" height="45" viewBox="0 0 57 45" fill="none">
					<path d="M51.3 0H5.7C2.565 0 0.0285 2.53125 0.0285 5.625L0 39.375C0 42.4688 2.565 45 5.7 45H51.3C54.435 45 57 42.4688 57 39.375V5.625C57 2.53125 54.435 0 51.3 0ZM51.3 39.375H5.7V11.25L28.5 25.3125L51.3 11.25V39.375ZM28.5 19.6875L5.7 5.625H51.3L28.5 19.6875Z" fill="#ED1B24"/>
					</svg>
					<span className="text-2xl">E-mail</span>
					<span className="font-medium underline">Mail ons op info@voorbeeld.nl</span>
				</a>
			</section>
			{/* Offerte Form */}
			<OfferteForm />
			{/* Footer */}
			<Footer />
		</div>
	);
}