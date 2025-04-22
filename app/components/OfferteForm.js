"use client";

import { Formik, Form, ErrorMessage, Field, useFormik, useFormikContext } from "formik";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import * as Yup from "yup";

function OfferteForm() {
	const [isLoading, setIsLoading] = useState(false);

	// Formik setup
	const initialValues = {
		voornaam: "",
		achternaam: "",
		adres: "",
		plaats: "",
		telefoonnummer: "",
		email: "",
		vragen: "",
	};
	const validationSchema = Yup.object({
		voornaam: Yup.string()
			.max(50, "Maximaal 50 tekens"),

		achternaam: Yup.string()
			.max(50, "Maximaal 50 tekens")
			.required("Achternaam is verplicht"),
	
		adres: Yup.string()
			.max(100, "Maximaal 100 tekens")
			.required("Adres is verplicht"),
	
		plaats: Yup.string()
			.max(50, "Maximaal 50 tekens")
			.required("Plaats is verplicht"),
	
		telefoonnummer: Yup.string()
			.min(9, "Minimaal 9 cijfers")
			.max(50, "Maximaal 50 symbolen")
			.required("Telefoonnummer is verplicht"),
	
		email: Yup.string()
			.email("Ongeldig e-mailadres")
			.max(100, "Maximaal 100 tekens")
			.required("E-mailadres is verplicht"),
	
		vragen: Yup.string()
			.max(500, "Maximaal 500 tekens"),
	});
	// OnSubmit: send a request to API for sending emails to the customer and the owner
	const handleSubmit = async (values, { resetForm }) => {
		if (isLoading) return;
		setIsLoading(true);
		// Debug
    	console.log("Form values:", values);
		try {
			console.log("HandleSubmit() called...");

			// Send a request to API
			const response = await fetch('/api/send-offerte-customer-and-owner', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						voornaam: values.voornaam,
						achternaam: values.achternaam,
						adres: values.adres,
						plaats: values.plaats,
						telefoonnummer: values.telefoonnummer,
						email: values.email,
						vragen: values.vragen
					}),
			});
			//  Check the response
			if (!response.ok) {
					// Debug
					console.log(await response.json())
					// Show error message
					toast.error('Er is een fout opgetreden. Probeer het opnieuw. Lukt het niet? Neem dan contact met ons op via info@bacukozijnen.nl.', {
						position: "top-right",
						autoClose: 10000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						transition: Bounce,
					});
					setIsLoading(false);
					// Debug
					throw new Error(`Error: ${response.statusText}`);
			}
			// Show success message
			toast.success('Uw gegevens zijn verstuurd!', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
			// Reset the form
			resetForm();
			setIsLoading(false);
			// Debug
			console.log(await response.json())
	} catch (error) {
			// Debug
			console.error('Failed to send email:', error);
	}
		
  };

	return (
		<section
			id="offerte"
			className="bg-secondaryBackground px-6 md:px-[250px] flex flex-col md:flex-row py-12"
			>
			{/* Modern House Image (only on desktop) */}
			<img
				src="/images/moderne-huis.webp"
				alt="Minimalistisch wit huis met moderne voordeur en kozijnen"
				className="hidden md:block w-36 md:w-[436px] h-auto mr-24"
			/>
			{/* Form Container */}
			<div className="flex flex-col w-full">
				{/* Title */}
				<span className="text-4xl font-semibold">
				Ontvang gratis je offerte
				</span>
				{/* Subtitle */}
				<p className='text-lg text-secondary mt-1 mb-5'>
				Vul uw gegevens in en wij nemen snel contact met u op voor een gratis offerte!
				</p>
				{/* Form */}
				<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
				>
				{({ errors, touched }) => (
					<Form className="flex flex-col gap-4 flex-grow">
					{/* First Line */}
					<div className="flex flex-row gap-4">
						<div className="flex flex-col w-full">
						<label className="text-xs text-secondary">Voornaam</label>
						<div className="relative">
							<Field
							name="voornaam"
							type="text"
							className={`bg-white border-[0.1px] h-[45px] px-2 py-1 mt-1 w-full ${
								touched.voornaam && errors.voornaam
								? 'border-primary border-[1px]'
								: 'border-[#909090]'
							}`}
							/>
							<ErrorMessage
							name="voornaam"
							component="div"
							className="text-red-500 text-xs absolute right-0 top-full mt-1"
							/>
						</div>
						</div>
						<div className="flex flex-col w-full">
						<label className="text-xs text-secondary">Achternaam*</label>
						<div className="relative">
							<Field
							name="achternaam"
							type="text"
							className={`bg-white border-[0.1px] h-[45px] px-2 py-1 mt-1 w-full ${
								touched.achternaam && errors.achternaam
								? 'border-primary border-[1px]'
								: 'border-[#909090]'
							}`}
							/>
							<ErrorMessage
							name="achternaam"
							component="div"
							className="text-red-500 text-xs absolute right-0 top-full mt-1"
							/>
						</div>
						</div>
					</div>
					{/* Second Line */}
					<div className="flex flex-row gap-4">
						<div className="flex flex-col w-full">
						<label className="text-xs text-secondary">Adres*</label>
						<div className="relative">
							<Field
							name="adres"
							type="text"
							className={`bg-white border-[0.1px] h-[45px] px-2 py-1 mt-1 w-full ${
								touched.adres && errors.adres
								? 'border-primary border-[1px]'
								: 'border-[#909090]'
							}`}
							/>
							<ErrorMessage
							name="adres"
							component="div"
							className="text-red-500 text-xs absolute right-0 top-full mt-1"
							/>
						</div>
						</div>
						<div className="flex flex-col w-full">
						<label className="text-xs text-secondary">Plaats*</label>
						<div className="relative">
							<Field
							name="plaats"
							type="text"
							className={`bg-white border-[0.1px] h-[45px] px-2 py-1 mt-1 w-full ${
								touched.plaats && errors.plaats
								? 'border-primary border-[1px]'
								: 'border-[#909090]'
							}`}
							/>
							<ErrorMessage
							name="plaats"
							component="div"
							className="text-red-500 text-xs absolute right-0 top-full mt-1"
							/>
						</div>
						</div>
					</div>
					{/* Third Line */}
					<div className="flex flex-col w-full">
						<label className="text-xs text-secondary">Telefoonnummer*</label>
						<div className="relative">
						<Field
							name="telefoonnummer"
							type="text"
							className={`bg-white border-[0.1px] h-[45px] px-2 py-1 mt-1 w-full ${
							touched.telefoonnummer && errors.telefoonnummer
								? 'border-primary border-[1px]'
								: 'border-[#909090]'
							}`}
						/>
						<ErrorMessage
							name="telefoonnummer"
							component="div"
							className="text-red-500 text-xs absolute right-0 top-full mt-1"
						/>
						</div>
					</div>
					{/* Fourth Line */}
					<div className="flex flex-col w-full">
						<label className="text-xs text-secondary">E-mailadres*</label>
						<div className="relative">
						<Field
							name="email"
							type="text"
							className={`bg-white border-[0.1px] h-[45px] px-2 py-1 mt-1 w-full ${
							touched.email && errors.email
								? 'border-primary border-[1px]'
								: 'border-[#909090]'
							}`}
						/>
						<ErrorMessage
							name="email"
							component="div"
							className="text-red-500 text-xs absolute right-0 top-full mt-1"
						/>
						</div>
					</div>
					{/* Fifth Line */}
					<div className="flex flex-col w-full">
						<label className="text-xs text-secondary">Vragen en/of opmerkingen</label>
						<div className="relative">
						<Field
							name="vragen"
							type="text"
							className={`bg-white border-[0.1px] h-[45px] px-2 py-1 mt-1 w-full ${
							touched.vragen && errors.vragen
								? 'border-primary border-[1px]'
								: 'border-[#909090]'
							}`}
						/>
						<ErrorMessage
							name="vragen"
							component="div"
							className="text-red-500 text-xs absolute right-0 top-full mt-1"
						/>
						</div>
					</div>
					{/* Submit Button */}
					<button
						type="submit"
						disabled={isLoading}
						className={`cursor-pointer mt-8 md:mt-auto w-[135px] group flex justify-center items-center bg-primary hover:bg-primaryDark text-[16px] text-white py-[9px] font-medium rounded-4xl transition-all transform duration-500 ${
						isLoading ? 'opacity-70' : ''
						}`}
					>
						Verstuur
					</button>
					</Form>
				)}
				</Formik>
			</div>
			</section>

	);
}

export default OfferteForm;