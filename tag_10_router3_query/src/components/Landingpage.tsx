import { useState } from "react";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Suche nach:", searchTerm);
  };

  return (
    <div>
      <h1>Suche nach Bieren</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Biersorte eingeben..."
        />
        <button type="submit">Suchen</button>
      </form>
    </div>
  );
};

export default Homepage;
