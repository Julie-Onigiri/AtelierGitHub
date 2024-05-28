// import './index.scss';
import repos from '../../../data/repos';
// import { Repos } from '../../../@types';

// type ResultsProps = {
//   repos: Repos[];
// };
function ReposResults() {
  const reposDisplay = repos.items[0];

  return (
    <section className="result">
      <article className="result-card ui card">
        <figure className="result-card__figure image">
          <img
            className="result-card__img"
            src={reposDisplay.owner.avatar_url}
            alt=""
          />
        </figure>
        <div className="result-card__content content">
          <p className="result-card__title header">
            {reposDisplay.owner.login}
          </p>
          <p className="result-card__subtitle meta">{reposDisplay.name}</p>
          <p className="result-card__description description">
            {reposDisplay.description}
          </p>
        </div>
      </article>
    </section>
  );
}
export default ReposResults;
