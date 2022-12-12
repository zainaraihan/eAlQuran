import "./style.css";
import { useState, useEffect } from "react";

const Card = () => {
  const [card, setCard] = useState("");

  useEffect(() => {
    const surah = [];
    fetch("https://equran.id/api/surat")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((sur, id) => {
          surah.push(
            <div className="cardList" key={id}>
              <div className="glass">
                <div className="namaSurah">
                  {sur.nomor}.{sur.nama_latin}
                </div>
                <div className="preview">
                  <div className="potonganSurah">{sur.nama}</div>
                  <div className="artiTurun">
                    {sur.arti} - {sur.tempat_turun}
                  </div>
                </div>
              </div>
            </div>
          );
        });
        setCard(surah);
      });
  }, []);

  return <div className="card">{card}</div>;
};

export default Card;
