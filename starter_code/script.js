const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(input) {
	let results = [];

	fruit.forEach((val, index)=>{
		let lowerVal = val.toLowerCase();

		if(lowerVal.indexOf(input) !== -1){
			// for boldening the substring in fruits dropdown
			lowerVal = lowerVal.replace(input,'<b>' + input + '</b>' );
			results.push(lowerVal);
		}
	})
	
	return results;
}

function searchHandler(e) {
	
	const inputVal = (input.value).toLowerCase();
	const suggestionsList = search(inputVal);
	showSuggestions(suggestionsList, inputVal)
		
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	if(results.length > 0){
		
		results.forEach((option) => {
			const optionElement = document.createElement('li');
			optionElement.innerHTML = option;
			suggestions.append(optionElement);
		})
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.remove();
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);