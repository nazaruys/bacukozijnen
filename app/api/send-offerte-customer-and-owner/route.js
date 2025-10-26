import { NextResponse } from 'next/server';
import sendEmail from "@/app/utils/sendEmail";

// Sends email to the customer and owner
export async function POST(req) {
	const { voornaam, achternaam, adres, plaats, telefoonnummer, email, vragen } = await req.json();

	const owner_email = null;
	const owner_password = null;
	const owner_host = null;
	const owner_port = null;
	const owner_secure = null;

	// Send email to the owner
	const ownerRespose = await sendEmail({
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
		host: owner_host,
		port: owner_port,
		secure: owner_secure,
		from: "BaCu Kozijnen",
		from_email: owner_email,
		from_password: owner_password,
		to_email: email,
		subject: "Bedankt voor je offerte aanvraag",
		html: `
			<!DOCTYPE html>
			<html lang="nl">
			<head>
			<meta charset="UTF-8">
			<title>Offerte Bevestiging</title>
			<style>
				body {
					font-family: Arial, sans-serif;
					color: #333;
					padding: 20px;
					line-height: 1.6;
					font-size: 16px;
				}
				.container {
					max-width: 600px;
					margin: auto;
					background-color: #ffffff;
					padding: 30px;
					border-radius: 8px;
					border: 1px solid #eee;
				}
				.footer {
					margin-top: 40px;
					font-size: 13px;
					color: #999;
				}
				a {
					color: #007BFF;
				}
			</style>
			</head>
			<body>
			<div class="container">
				<a href="https://www.bacukozijnen.nl">
					<img src="https://www.bacukozijnen.nl/logos/BaCu-full.webp" alt="BaCu Kozijnen Logo" style="display: block; margin: 0 auto 20px; max-width: 220px;">
				</a>
		
				<p>Beste ${voornaam} ${achternaam},</p>
		
				<p>Bedankt voor je interesse in <strong>BaCu Kozijnen</strong> en voor het invullen van ons offerteformulier.</p>
		
				<p>We hebben je aanvraag goed ontvangen. Wij nemen binnen <strong>één werkdag</strong> contact met je op om je wensen en de mogelijkheden te bespreken.</p>
		
				<p>Heb je in de tussentijd vragen of aanvullende informatie? Dan kun je altijd reageren op deze e-mail of een kijkje nemen op onze website.</p>
		
				<p>Met vriendelijke groet,</p>
		
				<p>Het team van BaCu Kozijnen<br/>
				<a href="https://www.bacukozijnen.nl">www.bacukozijnen.nl</a></p>
		
				<div class="footer">
					Je ontvangt deze e-mail omdat je een aanvraag hebt gedaan bij BaCu Kozijnen.
				</div>
			</div>
			</body>
			</html>
		`,
	});

	if (customerRespose.statusCode !== 200) {
		return NextResponse.json({ error: `Error when sending email to the customer: ${customerRespose.error}` }, { status: 500 });
	}

	return NextResponse.json({ message: 'All emails sent successfully!' }, { status: 200 });
}
