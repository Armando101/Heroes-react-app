import { useMemo } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import batman from "../../assets/heroes/dc-batman.jpg"; // Recuso estático

const heroImages = require.context("../../assets/heroes", true);

export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  // const imagePath = `/assets/heroes/${hero.id}.jpg`;
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          // src={imagePath}
          src={heroImages(`./${hero.id}.jpg`)}
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First apperarance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button onClick={handleReturn} className="btn btn-outline-info">
          Go back
        </button>
      </div>
    </div>
  );
};
