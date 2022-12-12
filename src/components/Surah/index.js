import { useParams } from "react-router";
import { useEffect } from "react";
import "./style.css";

const Surah = () => {
  const params = useParams();
  useEffect(() => {
    fetch("https://equran.id/api/surat/" + params.id)
      .then((res) => res.json())
      .then((data) => console.log(data.ayat));
  });

  const color = {
    color: "white",
  };

  return (
    <div className="surah">
      <div className="ayat">abcd</div>
    </div>
  );
};

export default Surah;
