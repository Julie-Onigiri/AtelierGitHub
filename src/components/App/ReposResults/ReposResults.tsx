// import './ReposResult.scss';
import repos from '../../../data/repos';
// import { Repos } from '../../../@types';

// type ResultsProps = {
//   repos: Repos[];
// };
function ReposResults() {
  const reposDisplay = repos.items.map((repo) => (
    <article className="result-card ui card" key={repo.id}>
      <figure>
        <img src={repo.owner.avatar_url} alt="" />
      </figure>
      <div>
        <p>{repo.owner.login}</p>
        <p>{repo.name}</p>
        <p>{repo.description}</p>
      </div>
    </article>
  ));
  return <section className="result">{reposDisplay}</section>;
}
export default ReposResults;
