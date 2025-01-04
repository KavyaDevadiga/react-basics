import React from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/KavyaDevadiga")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers:{data.followers}
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  );
};

export default GitHub;

export const githubInfoLoader = async () => {
  let res = await fetch("https://api.github.com/users/KavyaDevadiga");
  return res.json();
};
