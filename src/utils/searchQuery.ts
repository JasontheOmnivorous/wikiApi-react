const SearchQuery = async (topic: string) => {
  const endpoint = "https://simple.wikipedia.org/w/api.php";
  const params =
    "?action=query" +
    "&prop=extracts" +
    "&exsentences=2" +
    "&exlimit=1" +
    `&titles=${topic}` +
    "&explaintext=1" +
    "&format=json" +
    "&formatversion=2" +
    "&origin=*";

  const url = endpoint + params;

  const response = await fetch(url);
  const data = await response.json();

  return data.query.pages;
};

export default SearchQuery;
