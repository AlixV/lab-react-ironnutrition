

const Search = ({ searchedString, callbackSearch }) => {
	return (
		<>
			<input
				type="text"
				placeholder="Search someone by name"
				value={searchedString}
				onChange={(e) => callbackSearch(e.target.value)}
			/>
		</>
	);
};

export default Search;

let searchedContacts = null;
	if (searchedString !== "") {
		searchedContacts = contacts.filter((contact) => {
			return contact.name.toLowerCase().includes(searchedString.toLowerCase());
		});
	} else {
		searchedContacts = contacts;
	}
