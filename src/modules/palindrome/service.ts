import { Service } from "typedi";

@Service()
export class PalindromeService {
	public async isPalindrome(text: string): Promise<boolean> {
		const normalized = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

		const cleanText = normalized.toLowerCase().replace(/[^a-z0-9]/g, "");

		const reversed = cleanText.split("").reverse().join("");

		return cleanText === reversed;
	}
}
