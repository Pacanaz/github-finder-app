import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GitHubContext = createContext()

export const GitHubProvider = ({ children }) => {
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GitHubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}

export default GitHubContext
