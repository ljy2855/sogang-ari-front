import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClubDetail from "../components/ClubDetail";
import { ClubDetailType } from "../types";
import React from "react";

type idParams = {
  id: string;
};

const Detail: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [club, setClub] = useState<ClubDetailType>({
    id: 0,
    download_count: 0,
    like_count: 0,
    runtime: 0,
    title: "",
    year: 0,
    rating: 0,
    large_cover_image: "",
    description_full: "",
    genres: [""],
  });
  const { id } = useParams<idParams>();
  console.log(id);
  console.log(club);
  const getClub = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setClub(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getClub();
  });
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ClubDetail
          id={club.id}
          description_full={club.description_full}
          download_count={club.download_count}
          genres={club.genres}
          like_count={club.like_count}
          title={club.title}
          rating={club.rating}
          runtime={club.runtime}
          large_cover_image={club.large_cover_image}
          year={club.year}
        />
      )}
    </div>
  );
};

export default Detail;
