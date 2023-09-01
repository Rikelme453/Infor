import React, { useEffect, useState, useRef } from "react";
import './Search.css';

function Search() {
  const url = 'http://127.0.0.1:8000/api/produtos/';

  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [filtName, setFiltName] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false); // Adicionado estado para controlar a exibição das sugestões

  const searchWrapperRef = useRef(null); // Referência para o wrapper da busca

  useEffect(() => {
    fetchData();
  }, [text]);

  useEffect(() => {
    // Adiciona um event listener para capturar cliques fora da área de sugestões
    function handleClickOutside(event) {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchData = async () => {
    const endpoint = `${url}?nome=${text}`;

    try {
      const response = await fetch(endpoint, {
        method: 'GET'
      });

      const data = await response.json();
      setData(data);
    } catch (e) {
    }
  };

  const searched = (event) => {
    setFiltName(event.target.value);
    setText(event.target.value);
    setShowSuggestions(true); // Mostra as sugestões ao começar a digitar
  };

  const handleItemClick = (itemName) => {
    setFiltName(itemName);
    setShowSuggestions(false); // Fecha as sugestões ao selecionar um item
  };

  const itensFilt = data.filter(item =>
    item.nome.toLowerCase().includes(filtName.toLowerCase())
  );

  const escurecer = () => {
    console.log("test");
  }

  return (
    <div className="APP" ref={searchWrapperRef}>
      <input 
        type="text"
        placeholder="Procure seus produtos..."
        value={filtName}
        onChange={searched}
        onClick={escurecer}
        className="Search-bar"
      />
      {showSuggestions && ( // Renderiza a lista de sugestões somente quando showSuggestions for true
        <div className="sugestoes">
          <ul>
            {filtName.length > 0 &&
              itensFilt &&
              itensFilt.map(el => (
                <li
                  key={el.id}
                  onClick={() => handleItemClick(el.nome)}
                  className="listas"
                >
                  {el.nome}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
