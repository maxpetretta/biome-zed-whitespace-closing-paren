/**
 * If possible, put your minimal reproduction in this file, but feel free to
 * create other files elsewhere in the project if necessary.
 *
 * Once you have a minimal reproduction, commit it and push it to a public
 * GitHub repo.
 */

export async function main() {
	// Existing code
	const num = Math.random();
	if (num > 0.5) {
		console.log("Greater than 0.5");
	}

	// Add a new check
	// TODO: try removing and re-adding closing paren
	if (num < 0.5 && num < 0.4) {
		console.log("Less than 0.5");
	}

	// Existing return
	return num;
}
