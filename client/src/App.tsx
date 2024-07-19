import { BinaryIcon, DiffIcon, GitBranchIcon, GithubIcon, GitlabIcon, MenuSquareIcon } from "lucide-react"

const App = () => {
  return (
    <div className="App">
      <nav>
        <p className="font-mono">{ ":// Digitalents Academy" }</p>
      </nav>
      <div className="content">
        <h1 className="text-6xl font-semibold">Digiopintoni 🤓</h1>

        <div className="button-group">
          <button className="selected">
            <GithubIcon />
          </button>
          <button>
            <GitlabIcon />
          </button>
          <button>
            <BinaryIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App