// import './ReposResult.scss';
import repos from '../../../data/repos';
// import { Repos } from '../../../@types';

// type ResultsProps = {
//   repos: Repos[];
// };
function ReposResults() {
  const reposDisplay = repos.items.map((repo) => (
    <article className="result-card ui card" key={repo.id}>
      <figure className="result-card__figure image">
        <img className="result-card__img" src={repo.owner.avatar_url} alt="" />
      </figure>
      <div className="result-card__content content">
        <p className="result-card__title header">{repo.owner.login}</p>
        <p className="result-card__subtitle meta">{repo.name}</p>
        <p className="result-card__description description">
          {repo.description}
        </p>
      </div>
    </article>
  ));
  return <section className="result">{reposDisplay}</section>;
}
export default ReposResults;
