import { useParams } from "react-router";
import { useEffect } from "react";

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
      <p style={color}>isi surah</p>
    </div>
  );
};

export default Surah;
