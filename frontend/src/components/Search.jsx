import React, { useEffect, useState, useRef } from "react";
import './Search.css';

function Search({ onClick }) {
  const url = 'http://127.0.0.1:8000/api/produtos/';

  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [filtName, setFiltName] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchWrapperRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [text]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
        onClick(); // Chama a função onClick para remover o escurecimento
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);

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
    setShowSuggestions(true);
  };


  const itensFilt = data.filter(item =>
    item.nome.toLowerCase().includes(filtName.toLowerCase())
  );

  return (
    <div className="APP" ref={searchWrapperRef}>
      <input
        type="text"
        placeholder="Procure seus produtos..."
        value={filtName}
        onChange={searched}
        onClick={onClick}
        className="Search-bar"
      />
      {showSuggestions && (
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
