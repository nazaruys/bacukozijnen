"use client";

import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import OfferteForm from "./components/OfferteForm";
import ReviewsSection from "./components/ReviewsSection";
import StepsSection from "./components/StepsSection";

export default function Home() {
  return (
    <div className="bg-background font-outfit">
      <Navbar currentPage={""} />
      <ToastContainer />
      {/* Main */}
      <section
        className="flex flex-row justify-between h-[600px] md:px-36 md:py-20"
        id="main"
        style={{
          backgroundImage: 'url("/images/main-background.png")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Main container */}
        <div 
          className="md:w-[450px] bg-base/45 rounded-4xl backdrop-blur-sm md:px-9 md:pt-9 md:pb-7 flex flex-col"
        >
          <h1 className="text-5xl text-white font-medium leading-[1.4]">
            Ontwerp je ideale kozijnen zelf!
          </h1>
          {/* Pros container */}
          <div className='space-y-3 md:mt-5'>
            {/* Pro 1 */}
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="size-6 text-[#41D872]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              <p className="text-white text-[16px] ml-3">Kozijnen inclusief montage</p>
            
            </div>
            {/* Pro 2 */}
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="size-6 text-[#41D872]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              <p className="text-white text-[16px] ml-3">Duurzaam en makkelijk in onderhoud</p>
            
            </div>
            {/* Pro 3 */}
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="size-6 text-[#41D872]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              <p className="text-white text-[16px] ml-3">Offerte op maat, zelf samengesteld</p>
            
            </div>
          </div>
          <a
            href="/configurator"
            className="flex justify-center items-center bg-primary text-lg text-white w-full md:py-3 font-medium rounded-4xl  transition-all transform duration-500 hover:bg-primaryDark mt-auto"
          >
            Begin met samenstellen
          </a>
        </div>
        {/* Review score container */}
        <div 
          className="flex justify-center items-center md:w-[465px] md:h-[65px] bg-base/45 rounded-4xl backdrop-blur-sm mt-auto"
        >
          <a
            className="flex flex-row justify-center items-center"
            href="https://maps.app.goo.gl/j2vAT6gt1CsqoBrA7"
            target="_blank"
          >
            <span className="text-lg text-white">Klanten geven ons een 5/5</span>
            <img
              src="/logos/google-reviews.png"
              alt="Google Reviews Logo"
              className="w-4 md:w-28 h-auto mr-3"
            />
          </a>
        </div>
      </section>
      {/* Steps */}
      <StepsSection product={"Kozijnen"} />
      {/* Welcome */}
      <section 
        className="h-[750px] bg-secondaryBackground md:px-36 md:py-[100px] flex flex-column items-center"
      >
        <img 
          src="/images/sofa.png" 
          alt="Kozijnen afbeelding"
          className="w-36 md:w-[400px] h-auto md:mr-[130px]"
        />
        <div className="h-full">
          <h1 className="text-[32px] font-semibold mb-7">Stop met zoeken.<br/>
            Welkom bij BaCu Kozijnen!
          </h1>
          <p className="text-secondary text-lg">
            Als je op zoek bent naar nieuwe kozijnen of rolluiken, heb je vast al gemerkt: het aanbod is enorm. Maar waar vind je nu écht kwaliteit, service én eerlijke communicatie onder één dak?<br/><br/>Juist – bij BaCu Kozijnen.<br/><br/>
            Wij doen het anders dan de rest. Geen loze beloftes of standaardoplossingen, maar maatwerk van topkwaliteit. Onze kozijnen zijn niet alleen duurzaam en stijlvol, maar bieden ook uitstekende isolatiewaardes en zijn beschikbaar in talloze kleuren en uitvoeringen. Alles om perfect aan te sluiten bij jouw woning en wensen.<br/><br/>

            Onze klanten weten: bij BaCu krijg je niet alleen een product, je krijgt een partner die met je meedenkt. Transparant, betrouwbaar en altijd gericht op het beste resultaat.<br/><br/>Je hebt de juiste keuze gemaakt. Welkom bij BaCu – waar kwaliteit en service samenkomen.
          </p>
        </div>
      </section>
      {/* Products */}
      <section
        className="bg-background md:px-36 md:py-20"
      >
        <h1
          className="font-semibold text-[32px] mb-14"
        >
          Vind de perfecte oplossing voor jouw huis
        </h1>
        <div
          className='flex flex-row justify-between items-center'
        >
          {/* Product 1 */}
          <a
            className="w-[375px] h-[625px] shadow-lg flex flex-col overflow-hidden group"
            href="/kozijnen"
          >
            <div className="flex overflow-hidden">
              <img
                src="/images/kozijn.png"
                alt="Kozijn afbeelding"
                className="w-full h-auto transition-transform duration-500 transform group-hover:scale-103"
              />
            </div>
            <div
              className="p-7 flex flex-col flex-grow"
            >
              <span className="font-medium text-2xl">
                Kozijnen
              </span>
              <p className="text-secondary text-[17px] mt-2">
                Isolatie, minder geluid en een stijlvolle uitstraling – haal meer uit je kozijnen.
              </p>
              {/* List of pros */}
              <div
                className="py-7 gap-y-2 flex flex-col"
              >
                <div
                  className="flex flex-row items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-[#41D872]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px]">Bespaar op je energierekening</span>
                </div>
                <div
                  className="flex flex-row items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-[#41D872]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px]">Verminder geluidsoverlast</span>
                </div>
                <div
                  className="flex flex-row items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-[#41D872]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px]">Verhoog je woningwaarde</span>
                </div>
              </div>
              {/* CTA */}
              <div
                className="flex flex-row items-center mt-auto"
              >
                <span className="mr-1 text-lg">Stel je kozijnen samen</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 transition-transform duration-500 transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

              </div>
            </div>
          </a>
          {/* Product 2 */}
          <a
            className="w-[375px] h-[625px] shadow-lg flex flex-col overflow-hidden group"
            href="/buitendeuren"
          >
            <div className="flex overflow-hidden">
              <img
                src="/images/voordeur.png"
                alt="Buitendeur afbeelding"
                className="w-full h-auto transition-transform duration-500 transform group-hover:scale-103"
              />
            </div>
            <div
              className="p-7 flex flex-col flex-grow"
            >
              <span className="font-medium text-2xl">
                Buitendeuren
              </span>
              <p className="text-secondary text-[17px] mt-2">
                Je buitendeur verwelkomt gasten en houdt kou en indringers buiten.
              </p>
              {/* List of pros */}
              <div
                className="py-7 gap-y-2 flex flex-col"
              >
                <div
                  className="flex flex-row items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-[#41D872]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px]">Verbeter de uitstraling</span>
                </div>
                <div
                  className="flex flex-row items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-[#41D872]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px]">Verhoog de energie-efficiëntie</span>
                </div>
                <div
                  className="flex flex-row items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-[#41D872]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px]">Bescherm je huis tegen inbraak</span>
                </div>
              </div>
              {/* CTA */}
              <div
                className="flex flex-row items-center mt-auto"
              >
                <span className="mr-1 text-lg">Stel je buitendeur samen</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 transition-transform duration-500 transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

              </div>
            </div>
          </a>
          {/* Product 3 */}
          <a
            className="w-[375px] h-[625px] shadow-lg flex flex-col overflow-hidden group"
            href="/rolluiken"
          >
            <div className="flex overflow-hidden">
              <img
                src="/images/rolluiken.png"
                alt="Rolluiken afbeelding"
                className="w-full h-auto transition-transform duration-500 transform group-hover:scale-103"
              />
            </div>
            <div
              className="p-7 flex flex-col flex-grow"
            >
              <span className="font-medium text-2xl">
                Rolluiken
              </span>
              <p className="text-secondary text-[17px] mt-2">
                Meer privacy, zonbescherming en veiligheid – kies voor rolluiken.
              </p>
              {/* List of pros */}
              <div
                className="py-7 gap-y-2 flex flex-col"
              >
                <div
                  className="flex flex-row items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-[#41D872]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px]">Verhoog je privacy</span>
                </div>
                <div
                  className="flex flex-row items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-[#41D872]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px]">Geniet van geluidsisolatie</span>
                </div>
                <div
                  className="flex flex-row items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 text-[#41D872]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[15px]">Verklein de kans op inbraken</span>
                </div>
              </div>
              {/* CTA */}
              <div
                className="flex flex-row items-center mt-auto"
              >
                <span className="mr-1 text-lg">Stel je rolluiken samen</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 transition-transform duration-500 transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

              </div>
            </div>
          </a>

          
        </div>
      </section>
      {/* Why choose us? */}
      <section
        className="min-h-[514px] md:px-36 flex flex-col justify-center"
      >
        <h1 className="font-semibold text-4xl">Waarom voor BaCu Kozijnen kiezen?</h1>
        {/* Cards horizontal */}
        <div
          className="flex flex-row justify-between items-center mt-14"
        >
          {/* Card 1 */}
          <div
            className="flex flex-col w-[350px] bg-secondaryBackground p-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 35" fill="none" className="block mb-6">
            <g clipPath="url(#clip0_227_351)">
            <path d="M23.375 30.2292C18.4596 30.2292 14.21 27.4483 12.095 23.375H23.375V19.4583H10.8025C10.7046 18.8121 10.6458 18.1658 10.6458 17.5C10.6458 16.8342 10.7046 16.1879 10.8025 15.5417H23.375V11.625H12.095C14.21 7.55167 18.4792 4.77083 23.375 4.77083C26.5279 4.77083 29.4263 5.92625 31.6588 7.84542L35.125 4.37917C32.0112 1.57875 27.8792 -0.125 23.375 -0.125C15.6983 -0.125 9.19667 4.79042 6.76833 11.625H-0.125V15.5417H5.8675C5.78917 16.1879 5.75 16.8342 5.75 17.5C5.75 18.1658 5.78917 18.8121 5.8675 19.4583H-0.125V23.375H6.76833C9.19667 30.2096 15.6983 35.125 23.375 35.125C27.8988 35.125 32.0112 33.4213 35.125 30.6208L31.6392 27.1546C29.4262 29.0738 26.5475 30.2292 23.375 30.2292Z" fill="#ED1B24"/>
            </g>
            <defs>
            <clipPath id="clip0_227_351">
            <rect width="35" height="35" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <span className="text-xl font-medium">Eerlijke prijzen</span>
            <p className="text-secondary text-lg mt-2">Transparante offertes zonder verrassingen – topkwaliteit voor een scherpe en eerlijke prijs.</p>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col w-[350px] bg-secondaryBackground p-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 43 43" fill="none" className="block mb-6">
            <g clipPath="url(#clip0_227_354)">
            <path d="M40.625 8.75H36.375V27.875H8.75V32.125C8.75 33.2938 9.70625 34.25 10.875 34.25H34.25L42.75 42.75V10.875C42.75 9.70625 41.7938 8.75 40.625 8.75ZM32.125 21.5V2.375C32.125 1.20625 31.1688 0.25 30 0.25H2.375C1.20625 0.25 0.25 1.20625 0.25 2.375V32.125L8.75 23.625H30C31.1688 23.625 32.125 22.6688 32.125 21.5Z" fill="#ED1B24"/>
            </g>
            <defs>
            <clipPath id="clip0_227_354">
            <rect width="43" height="43" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <span className="text-xl font-medium">Persoonlijk advies</span>
            <p className="text-secondary text-lg mt-2">Samen zoeken we de beste oplossing voor jouw woning – op maat en passend bij jouw wensen.</p>
          </div>
          {/* Card 3 */}
          <div
            className="flex flex-col w-[350px] bg-secondaryBackground p-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none" className="block mb-6">
            <path d="M28.3963 17.9642L31.6858 14.6495L23.8287 6.73238L20.5392 10.047L11.8649 1.32761C10.2306 -0.319163 7.56967 -0.319163 5.93539 1.32761L1.95444 5.33896C0.320158 6.98573 0.320158 9.66701 1.95444 11.3138L10.6078 20.0332L0.655396 30.0827V37.9999H8.51253L18.4859 27.9504L27.1392 36.6698C29.1297 38.6755 31.8116 37.9365 33.0687 36.6698L37.0496 32.6584C38.6839 31.0117 38.6839 28.3304 37.0496 26.6836L28.3963 17.9642ZM13.604 17.0352L4.92968 8.31581L8.88967 4.30446L11.5506 6.98573L9.07824 9.49811L12.0325 12.475L14.5259 9.96258L17.5639 13.0239L13.604 17.0352ZM30.1144 33.6929L21.4611 24.9735L25.442 20.9621L28.4801 24.0234L25.9868 26.5358L28.9411 29.5127L31.4344 27.0003L34.0954 29.6816L30.1144 33.6929Z" fill="#ED1B24"/>
            <path d="M37.762 8.52707C38.5792 7.70369 38.5792 6.37361 37.762 5.55022L32.8592 0.609919C31.8744 -0.382364 30.5125 -0.00234106 29.9049 0.609919L26.0706 4.47349L33.9277 12.3906L37.762 8.52707Z" fill="#ED1B24"/>
            </svg>
            <span className="text-xl font-medium">Vakkundige plaatsing</span>
            <p className="text-secondary text-lg mt-2">Deskundige montage voor perfect resultaat – professioneel, nauwkeurig en tot in de puntjes verzorgd.</p>
          </div>
        </div>
      </section>
      {/* Reviews */}
      <ReviewsSection />
      {/* CTA */}
      <section className="md:px-[250px] flex items-center justify-between py-24">
          {/* Left Column */}
          <div className="flex flex-col justify-between w-[500px]">
            <div>
              <h1 className="font-semibold text-3xl mb-4">Ontwerp jouw perfecte kozijnen</h1>
              <p className="text-secondary text-xl">
                Stel moeiteloos jouw ideale kunststof kozijnen samen met onze configurator! Kies afmetingen, kleur, stijl en extra opties, en zie direct de prijs. Hulp nodig? Ons team staat altijd klaar.</p>
              <p className="text-secondary text-xl mt-4">Begin nu en geef je huis de perfecte uitstraling!</p>
            </div>
            <a
              href="/congigurator"
              className="group flex justify-center items-center gap-2 bg-primary hover:bg-primaryDark text-lg text-white py-[10px] font-medium rounded-4xl transition-all transform duration-500 mt-12 w-[225px]"
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
            src="/images/huis.png"
            alt="Huis afbeelding"
            className="w-36 md:w-[500px] h-auto"
          />
      </section>
      {/* Form */}
      <OfferteForm />
      {/* Footer */}
      <Footer />
    </div>
  );
};