import "./style.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Card = ({ api, word }) => {
  const mtch = window.matchMedia("(max-width: 720px)");
  gsap.registerPlugin(ScrollTrigger);
  const [card, setCard] = useState("");
  const [ids, setIds] = useState(mtch.matches ? 2 : 11);
  const linkRef = useRef();

  window.addEventListener("scroll", (e) => {
    const math = Math.floor(window.pageYOffset);
    if (math >= ids * 30) {
      setIds(ids + 1);
    }
  });

  useEffect(() => {
    gsap.to(".link" + ids, {
      opacity: 1,
      duration: 0.5,
      ease: "sine.in",
      scrollTrigger: {
        trigger: ".link" + ids,
        start: "top bottom",
        end: "top 600px",
      },
    });
  });

  useEffect(() => {
    const surat = [];
    api
      .filter((el) => {
        return el.nama_latin.toLowerCase().includes(word.toLowerCase());
      })
      .map((sur, id) =>
        surat.push(
          <Link
            className={"link link" + id}
            to={"/" + sur.nomor}
            key={id + 1}
            ref={linkRef}
            style={id > ids ? { opacity: 0 } : { opacity: 1 }}
          >
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
          </Link>
        )
      );
    setCard(surat);
  }, [api, word, ids]);
  console.log(api);

  return (
    <div className="card">
      <div className="cards">{card}</div>
    </div>
  );
};

export default Card;
