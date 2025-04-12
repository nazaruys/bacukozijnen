import { useRef, useState } from "react";

function FAQSection() {
	const faqItems = [
		["Welke diensten bieden jullie?", "Wij bieden een breed scala aan diensten aan, waaronder onderhoud, reparatie, APK-keuringen, bandenwissels, banden uitlijnen, injectors testen en reinigen, walnutblasting, kettingrevisie en meer. Ons team van ervaren monteurs staat klaar om uw auto in topconditie te houden."],
		["Hoe lang duurt reparatie van mijn auto?", "De duur van een reparatie is afhankelijk van het type reparatie en de beschikbaarheid van onderdelen. Kleine reparaties zijn vaak dezelfde dag klaar, terwijl complexere reparaties enkele dagen kunnen duren. Wij houden u altijd op de hoogte van de verwachte tijd."],
		["Hoe maak ik een afspraak?", "U kunt eenvoudig een afspraak maken op dit webstie of door ons te bellen, een e-mail te sturen of bij ons langs komen. Wij bevestigen uw afspraak en zorgen dat alles voor u klaarstaat."],
		["Wat zijn de levertijden? 4-6 weken", "Wij bieden een breed scala aan diensten aan, waaronder onderhoud, reparatie, APK-keuringen, bandenwissels, banden uitlijnen, injectors testen en reinigen, walnutblasting, kettingrevisie en meer. Ons team van ervaren monteurs staat klaar om uw auto in topconditie te houden."],
		["Zijn kunststof kozijnen geschikt voor elke woningstijl?", "De duur van een reparatie is afhankelijk van het type reparatie en de beschikbaarheid van onderdelen. Kleine reparaties zijn vaak dezelfde dag klaar, terwijl complexere reparaties enkele dagen kunnen duren. Wij houden u altijd op de hoogte van de verwachte tijd."],
		["Waarom BaCu Kozijnen kiezen?", "U kunt eenvoudig een afspraak maken op dit webstie of door ons te bellen, een e-mail te sturen of bij ons langs komen. Wij bevestigen uw afspraak en zorgen dat alles voor u klaarstaat."]
	]

	const faqItemsLeft = faqItems.slice(0, 3);
	const faqItemsRight = faqItems.slice(-3);

	const [openIndexes, setOpenIndexes] = useState([]);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  // Dynamically set the maxHeight for open/close animation
  const getContentHeight = (index) => {
    return openIndexes.includes(index)
      ? `${contentRefs.current[index]?.scrollHeight}px`
      : '0px';
  };


	return (
		<section
			className="flex flex-col justify-center md:px-36 py-28"
		>
			<h2
				className="text-4xl font-semibold"
			>
				Veelgestelde vragen
			</h2>
			<div
				className="flex flex-row gap-x-24 mt-10"
			>
				<ul className="basis-1/2 text-black">
					{faqItemsLeft.map((item, index) => (
						<li key={index} className={`border-b`}>
							<div className="py-5">
								<button
									onClick={() => toggleFAQ(index)}
									className={`flex tracking-tight items-center w-full text-left font-semibold text-xl md:text-2xl cursor-pointer`}
									aria-expanded={openIndexes.includes(index) ? 'true' : 'false'}
								>
									<span className={`flex-1 text-black text-xl font-medium`}>
										{item[0]}
									</span>

									{/* SVG for + Icon (rotates on click) */}
									<div className="relative w-8 h-8 flex items-center justify-center bg-[#D9D9D9] rounded-full">
										<svg
											className="flex-shrink-0 w-4 h-4 fill-current text-black"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											{/* Horizontal line */}
											<rect
												y="7"
												width="16"
												height="2"
												rx="1"
												className={`transition-transform duration-200 ease-out ${openIndexes.includes(index) ? 'rotate-180' : 'rotate-0'}`}
												style={{ transformOrigin: 'center' }}
											></rect>

											{/* Vertical line */}
											<rect
												y="7"
												width="16"
												height="2"
												rx="1"
												className={`transition-transform duration-200 ease-out ${openIndexes.includes(index) ? 'rotate-0' : 'rotate-[-90deg]'}`}
												style={{ transformOrigin: 'center' }}
											></rect>
										</svg>
									</div>
								</button>

								{/* Answer Section with Animated Height */}
								<div
									ref={(el) => (contentRefs.current[index] = el)}
									className={`transition-all duration-300 ease-in-out overflow-hidden`}
									style={{ maxHeight: getContentHeight(index) }}
								>
									<div className="pt-5 leading-relaxed text-secondary md:text-md">
										<p>{item[1]}</p>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
				<ul className="basis-1/2 text-black">
					{faqItemsRight.map((item, index) => (
						<li key={index + faqItemsLeft.length} className={`border-b cursor-pointer`}>
							<div className="py-5">
								<button
									onClick={() => toggleFAQ(index + faqItemsLeft.length)}
									className={`flex tracking-tight items-center w-full text-left font-semibold text-xl md:text-2xl cursor-pointer`}
									aria-expanded={openIndexes.includes(index + faqItemsLeft.length) ? 'true' : 'false'}
								>
									<span className={`flex-1 text-black text-xl font-medium`}>
										{item[0]}
									</span>

									{/* SVG for + Icon (rotates on click) */}
									<div className="relative w-8 h-8 flex items-center justify-center bg-[#D9D9D9] rounded-full">
										<svg
											className="flex-shrink-0 w-4 h-4 fill-current text-black"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											{/* Horizontal line */}
											<rect
												y="7"
												width="16"
												height="2"
												rx="1"
												className={`transition-transform duration-200 ease-out ${openIndexes.includes(index + faqItemsLeft.length) ? 'rotate-180' : 'rotate-0'}`}
												style={{ transformOrigin: 'center' }}
											></rect>

											{/* Vertical line */}
											<rect
												y="7"
												width="16"
												height="2"
												rx="1"
												className={`transition-transform duration-200 ease-out ${openIndexes.includes(index + faqItemsLeft.length) ? 'rotate-0' : 'rotate-[-90deg]'}`}
												style={{ transformOrigin: 'center' }}
											></rect>
										</svg>
									</div>
								</button>

								{/* Answer Section with Animated Height */}
								<div
									ref={(el) => (contentRefs.current[index + faqItemsLeft.length] = el)}
									className={`transition-all duration-300 ease-in-out overflow-hidden`}
									style={{ maxHeight: getContentHeight(index + faqItemsLeft.length) }}
								>
									<div className="pt-5 leading-relaxed text-secondary md:text-md">
										<p>{item[1]}</p>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			
		</section>
	);
}

export default FAQSection;