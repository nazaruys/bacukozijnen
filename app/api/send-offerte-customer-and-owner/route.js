import { NextResponse } from 'next/server';
import sendEmail from "@/app/utils/sendEmail";

// Sends email to the customer and owner
export async function POST(req) {
	const { voornaam, achternaam, adres, plaats, telefoonnummer, email, vragen } = await req.json();

	const owner_email = process.env.EMAIL_USER;
	const owner_password = process.env.EMAIL_PASS;
	const owner_service = process.env.EMAIL_SERVICE;
	const owner_host = process.env.EMAIL_HOST;
	const owner_port = process.env.EMAIL_PORT;
	const owner_secure = process.env.EMAIL_SECURE === 'true';

	// Send email to the owner
	const ownerRespose = await sendEmail({
		service: owner_service,
		host: owner_host,
		port: +owner_port,
		secure: owner_secure,
		from: "Offerte aanvraag",
		from_email: owner_email,
		from_password: owner_password,
		to_email: owner_email,
		subject: `${voornaam ? voornaam : 'Mw. of dhr.'} ${achternaam} heeft een offerte aangevraagd`,
		text: "Hallo eigenaar van BaCu Kozijnen,\n\n" +
			`${voornaam ? voornaam : 'Mevrouw of meneer'} ${achternaam} heeft een offerte aangevraagd.\n\n` +
			`Hier zijn de gegevens van de aanvraag:\n\n` +
			`Voornaam: ${voornaam}\n` +
			`Achternaam: ${achternaam}\n` +
			`Adres: ${adres}\n` +
			`Plaats: ${plaats}\n` +
			`Telefoonnummer: ${telefoonnummer}\n` +
			`E-mailadres: ${email}\n` +
			`Vragen en/of opmerkingen: ${vragen}\n\n` +
			`Met vriendelijke groet,\n` +
			`BaCu Kozijnen Website`
	});

	if (ownerRespose.statusCode !== 200) {
		return NextResponse.json({ error: `Error when sending email to the owner: ${ownerRespose.error}` }, { status: 500 });
	}

	// Send email to the customer
	const customerRespose = await sendEmail({
		service: owner_service,
		host: owner_host,
		port: owner_port,
		secure: owner_secure,
		from: "BaCu Kozijnen",
		from_email: owner_email,
		from_password: owner_password,
		to_email: email,
		subject: "Bedankt voor je offerte aanvraag",
		text: "Hallo " + `${voornaam ? voornaam : 'Mw. of dhr.'} ${achternaam},\n\n` +
		"Bedankt voor je offerte aanvraag bij BaCu Kozijnen! We hebben je aanvraag ontvangen en zullen deze zo snel mogelijk verwerken.\n\n" +
		"Met vriendelijke groet,\n" +
		"BaCu Kozijnen"
	});

	if (customerRespose.statusCode !== 200) {
		return NextResponse.json({ error: `Error when sending email to the customer: ${customerRespose.error}` }, { status: 500 });
	}

	return NextResponse.json({ message: 'All emails sent successfully!' }, { status: 200 });
}
