import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Monsters = {
  id: string;
  name: string;
  email: string;
};
const App = () => {
  const [search, setSearch] = useState("");
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [filterMons, setFiltermons] = useState(monsters);

  const onSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monsters[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const searchText = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search)
    );
    setFiltermons(searchText);
  }, [search, monsters]);
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        handleChange={onSearch}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filterMons} />
    </div>
  );
};
export default App;
