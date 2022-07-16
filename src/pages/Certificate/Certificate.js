import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Certificate = () => {
  const { id } = useParams();
  const [img, setImg] = useState("");
  useEffect(() => {
    const getCer = async () => {
      const res = await axios.get(
        `https://khoi-hi-vong.herokuapp.com/api/user/certificate/${id}`
      );
      setImg(res.data.certificate.image);
      console.log(res);
    };
    getCer();
  }, []);
  return (
    <div>
      <Navbar />
      <embed
        src={`data:application/pdf;base64,${img}`}
        type="application/pdf"
        width="700px"
        height="700px"
      ></embed>
    </div>
  );
};
export default Certificate;
