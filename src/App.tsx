import { useEffect, useState } from "react";
import { QueryData } from "./types/query";
import SearchQuery from "./utils/searchQuery";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<QueryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        const dataArray = await SearchQuery(query);
        setData(dataArray);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="flex flex-col justify-center items-center w-100% h-100%">
      {/* nav */}
      <div className="flex justify-center items-center p-5 border-y border-y-slate-300 shadow-md w-screen">
        <input
          className="w-96 h-16 rounded-lg bg-gray-100 text-start m-5 p-2 focus:outline-red-200"
          type="text"
          placeholder="Search for topics..."
          onChange={(evt) => setQuery(evt.target.value)}
        />
      </div>
      <div>
        {data.map((item) => (
          <div
            key={item.pageid}
            className="w-96 h-96 border p-10 border-gray-200 shadow-lg m-10 flex flex-col justify-center items-center"
          >
            <h1 className="font-bold m-5">{item.title}</h1>
            <div>{item.extract}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
