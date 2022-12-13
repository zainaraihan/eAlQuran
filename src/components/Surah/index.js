import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "./style.css";

const Surah = () => {
  const params = useParams();
  const [ayat, setAyat] = useState("");
  const [namaLatin, setNamaLatin] = useState("");

  useEffect(() => {
    const aya = [];
    fetch("https://equran.id/api/surat/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setNamaLatin(data.nama_latin);
        data.ayat.forEach((ayat, id) => {
          aya.push(
            <div className="ayat" key={id + 1}>
              <div className="noAyat">
                <div className="nama">{namaLatin}</div>
                <div className="no">{ayat.surah + " : " + ayat.nomor}</div>
              </div>
              <div className="arab">{ayat.ar}</div>
              <div className="makna">
                <div className="latin">{ayat.tr}</div>
                <p className="arti">{ayat.idn}</p>
              </div>
            </div>
          );
        });
        setAyat(aya);
      });
  }, [params, namaLatin]);

  return <div className="surah">{ayat}</div>;
};

export default Surah;
