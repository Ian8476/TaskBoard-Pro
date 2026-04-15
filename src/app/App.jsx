import { TaskBoard } from "../features/tasks/components/TaskBoard"
import { HTML_TAGS } from "../shared/constants/html-tags.constants"

const TitleTag = HTML_TAGS.H1

function App() {
  return <TitleTag>TaskBoard Hooks Lab
    <TaskBoard />
  </TitleTag>
}

export default App