import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClubDetail from "../components/ClubDetail";
import { ClubDetailType } from "../types";

type idParams = {
  id: string;
};

const Detail: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [club, setClub] = useState<ClubDetailType>({
    id: 0,
    download: 0,
    like: 0,
    runtime: 0,
    title: "",
    year: 0,
    rating: 0,
    coverImg: "",
    summary: "",
    genres: [""],
  });
  const { id } = useParams<idParams>();
  // console.log(id);
  const getClub = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setClub(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getClub();
  }, []);
  return (
    <div>
      {
        loading ? <h3>Loading...</h3> : null
        // <ClubDetail
        //   key={club.id}
        //   summary={club.description_full}
        //   download={club.download_count}
        //   genres={club.genres}
        //   like={club.like_count}
        //   title={club.title_long}
        //   rating={club.rating}
        //   runtime={club.runtime}
        //   coverImg={club.large_cover_image}
        // />
      }
    </div>
  );
};

export default Detail;
