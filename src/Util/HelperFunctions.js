export function FormatText(text) {
	return text
		.toLowerCase()
		.replace(/\s/g, '-')
		.replace(/[^a-z\d-]/g, '');
}
