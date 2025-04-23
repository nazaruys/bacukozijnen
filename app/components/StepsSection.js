import React from 'react';

function StepsSection({ product = "Kozijnen" }) {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:px-36 md:h-[220px] relative px-8 py-12 md:py-16">
            {/* Line across all steps (desktop only) */}
            <div className="absolute top-1/2 left-0 w-full md:block hidden" style={{ borderTop: "0.5px solid #717171"}}></div>

            {/* Step 1 */}
            <div className="rounded-lg md:w-[290px] w-full h-[130px] md:p-[14px] p-4 bg-white z-10 relative" style={{ border: "0.5px solid #717171" }}>
                <div className="absolute top-[14px] left-[14px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-lg" style={{ border: "0.5px solid #717171" }}>
                    1
                </div>
                {/* SVG */}
                <div className="absolute top-[14px] right-[14px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M30.2222 0H3.77778C1.7 0 0 1.7 0 3.77778V30.2222C0 32.3 1.7 34 3.77778 34H30.2222C32.3 34 34 32.3 34 30.2222V3.77778C34 1.7 32.3 0 30.2222 0ZM30.2222 30.2222H3.77778V3.77778H30.2222V30.2222Z" fill="#ED1B24"/>
                    <path d="M15.5834 8.91559H6.13892V11.7489H15.5834V8.91559Z" fill="#ED1B24"/>
                    <path d="M28.3334 24.0833H18.8889V26.9166H28.3334V24.0833Z" fill="#ED1B24"/>
                    <path d="M28.3334 19.3611H18.8889V22.1944H28.3334V19.3611Z" fill="#ED1B24"/>
                    <path d="M9.44443 28.3333H12.2778V24.5556H16.0555V21.7222H12.2778V17.9445H9.44443V21.7222H5.66666V24.5556H9.44443V28.3333Z" fill="#ED1B24"/>
                    <path d="M20.9478 15.0167L23.6111 12.3534L26.2744 15.0167L28.2767 13.0145L25.6133 10.3322L28.2767 7.66891L26.2744 5.66669L23.6111 8.33002L20.9478 5.66669L18.9456 7.66891L21.6089 10.3322L18.9456 13.0145L20.9478 15.0167Z" fill="#ED1B24"/>
                    </svg>
                </div>
                <p className="w-3/4 md:w-full absolute bottom-[14px] left-[14px] right-[14px] text-lg text-gray-700">
                    <a className="underline font-medium" href="/configurator">
                        Stel je {product.toLowerCase()} zelf samen
                    </a> en bereken de prijs.
                </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-lg md:w-[290px] w-full h-[130px] md:p-[14px] p-4 bg-white z-10 relative" style={{ border: "0.5px solid #717171" }}>
                <div className="absolute top-[14px] left-[14px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-lg" style={{ border: "0.5px solid #717171" }}>
                    2
                </div>
                <div className="absolute top-[14px] right-[14px]">
                    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <g clipPath="url(#clip0_37_84)">
                        <path d="M34.381 21.7143C34.381 18.1857 33.1517 15.1922 30.6932 12.7336C28.2358 10.2763 25.2429 9.04764 21.7143 9.04764V5.42859C23.9762 5.42859 26.0952 5.85805 28.0712 6.71697C30.046 7.5771 31.765 8.73821 33.2283 10.2003C34.6904 11.6636 35.8515 13.3827 36.7116 15.3574C37.5706 17.3334 38 19.4524 38 21.7143H34.381ZM27.1429 21.7143C27.1429 20.2064 26.6151 18.9246 25.5595 17.8691C24.504 16.8135 23.2222 16.2857 21.7143 16.2857V12.6667C24.2175 12.6667 26.3515 13.5485 28.1164 15.3122C29.8801 17.0771 30.7619 19.2111 30.7619 21.7143H27.1429ZM36.1 38C32.2095 38 28.4174 37.1327 24.7235 35.3979C21.0285 33.6644 17.7563 31.3723 14.9069 28.5217C12.0563 25.6723 9.76421 22.4001 8.03068 18.7051C6.29595 15.0112 5.42859 11.2191 5.42859 7.32859C5.42859 6.78573 5.60954 6.33335 5.97145 5.97145C6.33335 5.60954 6.78573 5.42859 7.32859 5.42859H14.6572C15.0794 5.42859 15.4564 5.5643 15.7881 5.83573C16.1199 6.10716 16.3159 6.45399 16.3762 6.87621L17.5524 13.2095C17.6127 13.6318 17.6055 14.016 17.5307 14.3622C17.4547 14.7096 17.281 15.0191 17.0095 15.2905L12.6667 19.7238C13.9334 21.8953 15.5167 23.931 17.4167 25.831C19.3167 27.731 21.4127 29.3746 23.7048 30.7619L27.9572 26.5095C28.2286 26.2381 28.5833 26.0342 29.0212 25.8979C29.4579 25.7628 29.8873 25.7254 30.3095 25.7857L36.5524 27.0524C36.9746 27.1429 37.3214 27.3461 37.5929 27.6622C37.8643 27.9795 38 28.3492 38 28.7714V36.1C38 36.6429 37.8191 37.0953 37.4572 37.4572C37.0953 37.8191 36.6429 38 36.1 38ZM10.9476 16.2857L13.9334 13.3L13.1191 9.04764H9.13811C9.28891 10.2841 9.50002 11.5056 9.77145 12.7119C10.0429 13.9183 10.4349 15.1095 10.9476 16.2857ZM34.381 34.2905V30.3095L30.1286 29.4048L27.1429 32.3905C28.3191 32.9032 29.5103 33.3254 30.7167 33.6572C31.923 33.9889 33.1445 34.2 34.381 34.2905Z" fill="#ED1B24"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_37_84">
                        <rect width="38" height="38" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <p className="w-7/8 md:w-full absolute bottom-[14px] left-[14px] right-[14px] text-lg text-gray-700">
                    Binnen <span className="underline font-medium">24 uur</span> bevestigen wij uw bestelling per telefoon of e-mail.
                </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-lg md:w-[290px] w-full h-[130px] md:p-[14px] p-4 bg-white z-10 relative" style={{ border: "0.5px solid #717171" }}>
                <div className="absolute top-[14px] left-[14px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-lg" style={{ border: "0.5px solid #717171" }}>
                    3
                </div>
                <div className="absolute top-[14px] right-[14px]">
                    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="33" viewBox="0 0 39 33" fill="none">
                        <path d="M33 12.2294V1.94118H27.1765V6.98823L19.4118 0L0 17.4706H5.82353V33H17.4706V21.3529H21.3529V33H33V17.4706H38.8235L33 12.2294ZM29.1176 29.1176H25.2353V17.4706H13.5882V29.1176H9.70588V13.9571L19.4118 5.22176L29.1176 13.9571V29.1176Z" fill="#ED1B24"/>
                        <path d="M15.5294 13.5883H23.2941C23.2941 11.453 21.5471 9.70593 19.4118 9.70593C17.2765 9.70593 15.5294 11.453 15.5294 13.5883Z" fill="#ED1B24"/>
                    </svg>
                </div>
                <p className="w-3/4 md:w-full absolute bottom-[14px] left-[14px] right-[14px] text-lg text-gray-700">
                    {product} <span className="underline font-medium">op tijd</span> geleverd en gemonteerd!
                </p>
            </div>
        </div>
    );
}

export default StepsSection;
