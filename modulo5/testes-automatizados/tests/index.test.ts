import { performPurchase } from "../src"
import { User } from "../src/types"

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Ádria",
		balance: 3000
	};

	const result = performPurchase(user, 2000);
	
	expect(result).toEqual({
		name: "Ádria",
		balance: 1000
	});
});

test("Testing balance iqual to value", () => {
	const user: User = {
		name: "Ádria",
		balance: 3000
	};

	const result = performPurchase(user, 3000);
	
	expect(result).toEqual({
		name: "Ádria",
		balance: 0
	});
});