import React, { useEffect, useState } from "react";
import './Search.css'

function Search() {
  const url = 'http://127.0.0.1:8000/api/produtos/';

  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [filtName, setFiltName] = useState('');

  useEffect(() => {
    fetchData();
  }, [text]);

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
  };

  const handleItemClick = (itemName) => {
    setFiltName(itemName);
    console.log("test")

  };

  const itensFilt = data.filter(item =>
    item.nome.toLowerCase().includes(filtName.toLowerCase())
  );

  const escurecer = () => {
    console.log("test")
  }

  return (
    <div className="APP">
      <input type="search" placeholder="Procure seus produtos..." value={filtName} onChange={searched} onClick={escurecer} className="Search-bar"></input>
      
      <div className="sugestoes">
      <ul>
        {filtName.length > 0 && itensFilt && itensFilt.map(el => <li key={el.id} onClick={() => handleItemClick(el.nome)} className="listas"> {el.nome}</li>)}
      </ul>
      </div>
    </div>
  );
}

export default Search;
