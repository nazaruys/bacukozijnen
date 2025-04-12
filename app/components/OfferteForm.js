"use client";

import { Formik, Form, ErrorMessage, Field, useFormik, useFormikContext } from "formik";
import * as Yup from "yup";

function OfferteForm() {
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
	const handleSubmit = async (values, { resetForm }) => {
    console.log("Form values:", values);
		alert("Form values: " + JSON.stringify(values));

		resetForm();
  };

	return (
		<section
			className="bg-secondaryBackground md:px-[250px] flex flex-row py-16"
		>
			{/* Modern House Image */}
			<img
				src="/images/moderne-huis.png"
				alt="Modernde huis afbeelding"
				className="w-36 md:w-[436px] h-auto mr-24"
			/>
			{/* Form Container */}
			<div
				className="flex flex-col"
			>
				{/* Title */}
				<span className="text-4xl font-semibold">
					Ontvang gratis je offerte
				</span>
				{/* Subtitle */}
				<p
					className='text-lg text-secondary mt-1 mb-5'
				>
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
												? 'border-primary border-[1px]' // Apply primary border if there's an error
												: 'border-[#909090]' // Default border color
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
												? 'border-primary border-[1px]' // Apply primary border if there's an error
												: 'border-[#909090]' // Default border color
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
												? 'border-primary border-[1px]' // Apply primary border if there's an error
												: 'border-[#909090]' // Default border color
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
												? 'border-primary border-[1px]' // Apply primary border if there's an error
												: 'border-[#909090]' // Default border color
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
												? 'border-primary border-[1px]' // Apply primary border if there's an error
												: 'border-[#909090]' // Default border color
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
												? 'border-primary border-[1px]' // Apply primary border if there's an error
												: 'border-[#909090]' // Default border color
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
											? 'border-primary border-[1px]' // Apply primary border if there's an error
											: 'border-[#909090]' // Default border color
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
							className="cursor-pointer mt-auto w-[135px] group flex justify-center items-center bg-primary hover:bg-primaryDark text-[16px] text-white py-[9px] font-medium rounded-4xl transition-all transform duration-500"
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