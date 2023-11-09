export function dogToHumanAge(dogAge) {
	if (typeof dogAge !== "number") {
		return "invalid input";
	}
	const dogHumanAge = dogAge * 7;
	return dogHumanAge;
}
