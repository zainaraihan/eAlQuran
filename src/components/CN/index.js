import { useState, useEffect } from "react";
import Card from "../Card";
import Nav from "../Nav";

const CardNav = () => {
  const [key, setKey] = useState("");
  const [allQuran, setAllquran] = useState([]);

  const fetchSurah = async () => {
    try {
      const surah = [];
      const data = await (await fetch("http://equran.id/api/surat")).json();
      data.forEach((item) => {
        surah.push(item);
      });

      setAllquran(surah);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (word) => {
    setKey(word);
  };

  useEffect(() => {
    fetchSurah();
  }, []);

  return (
    <div className="cardNav">
      <Nav searchKey={key} searchChange={handleChange} />
      <Card api={allQuran} word={key} />
    </div>
  );
};

export default CardNav;
