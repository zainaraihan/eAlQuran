import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Surah = () => {
  const params = useParams();
  const [ayat, setAyat] = useState("");
  const [namaLatin, setNamaLatin] = useState("");
  const [jumlahAyat, setJumlahAyat] = useState("");

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach((t) => t.kill());

  useEffect(() => {
    const aya = [];
    fetch("https://equran.id/api/surat/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setNamaLatin(data.nama_latin);
        setJumlahAyat(data.jumlah_ayat);
        data.ayat.forEach((ayat, id) => {
          aya.push(
            <div className="ayat" key={id + 1}>
              <div className="noAyat">
                <div className="nama">{namaLatin + " : " + ayat.surah}</div>
                <div className="no nomor">
                  <span style={{ fontWeight: "800" }}>{ayat.nomor}</span>
                  {"/"}
                  <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                    {jumlahAyat}
                  </span>
                </div>
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
  }, [params, namaLatin, jumlahAyat]);

  return <div className="surah">{ayat}</div>;
};

export default Surah;
