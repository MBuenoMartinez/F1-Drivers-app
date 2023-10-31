import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    // Cancelar la búsqueda anterior si el usuario sigue escribiendo
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Establecer un nuevo temporizador para la búsqueda después de 300 ms
    setSearchTimeout(
      setTimeout(() => {
        onSearch(newName);
      }, 300)
    );
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        value={name}
        placeholder="Buscar por nombre..."
      />
    </div>
  );
};

export default SearchBar;
