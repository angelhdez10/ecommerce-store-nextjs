import { Size } from "@/types/type";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
const getSizes = async (): Promise<Size[]> => {
  console.log(URL);
  const res = await axios.get(URL);

  console.log(res);
  return res.data;
};

export default getSizes;
