import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

function ReviewsSection(props) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
		const fetchReviews = async () => {
		  const response = await fetch('reviews/reviews.json');
		  const data = await response.json();
		  setReviews(data);
		};
	
		fetchReviews();
	}, []);

    return (
        <section
            className="px-6 md:px-36 w-full h-full py-12 md:py-24 text-base bg-secondaryBackground relative"
            id="recensies"
        >
            <h2 className="text-xl md:text-4xl font-semibold text-center mb-16">
                Echte ervaringen van echte klanten.<br/>Lees zelf waarom ze voor BaCu kozen.
            </h2>
            <div className="relative flex items-center">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 h-full w-10 md:w-40 bg-gradient-to-r from-secondaryBackground to-transparent pointer-events-none"></div>

                {/* Left Arrow */}
                <button
                    aria-label="Scroll left through reviews"
                    className="absolute left-2 md:left-6 z-10 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-primary rounded-full text-white hover:bg-primary/80 transition"
                    onClick={() => {
                        const container = document.getElementById('reviews-container');
                        const reviewWidth = container.firstChild.offsetWidth + 153; // Add gap size
                        container.scrollBy({
                            left: -reviewWidth,
                            behavior: 'smooth',
                        });
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-6 h-6 md:w-8 md:h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>

                {/* Scrollable Reviews */}
                <div
                    id="reviews-container"
                    className="flex overflow-x-auto snap-x snap-mandatory gap-[136px] sm:gap-32 w-full px-6 md:px-32 scrollbar-hide"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            avatarPath={review.avatarPath}
                            name={review.name}
                            text={review.text}
                            className="min-w-[80%] md:min-w-[30%] snap-center"
                        />
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    aria-label="Scroll right through reviews"
                    className="absolute right-2 md:right-6 z-10 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-primary rounded-full text-white hover:bg-primary/80 transition"
                    onClick={() => {
                        const container = document.getElementById('reviews-container');
                        const reviewWidth = container.firstChild.offsetWidth + 153; // Add gap size
                        container.scrollBy({
                            left: reviewWidth,
                            behavior: 'smooth',
                        });
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-6 h-6 md:w-8 md:h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 19.5l7.5-7.5-7.5-7.5"
                        />
                    </svg>
                </button>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 h-full w-10 md:w-40 bg-gradient-to-l from-secondaryBackground to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
}

export default ReviewsSection;