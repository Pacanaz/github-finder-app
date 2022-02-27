import RepoItem from './RepoItem'
import PropTypes from 'prop-types'
function RepoList({ repos }) {
  if (repos && repos.length > 0) {
    return (
      <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className='card-body'>
          <h2 className='text-3xl my-4 font-bold card-title'>
            Latest Repositories
          </h2>
          {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    )
  } else {
    return null
  }
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList
