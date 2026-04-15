import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"



const Sectiontag = HTML_TAGS.SECTION
const Title = HTML_TAGS.H3
const Paragraph = HTML_TAGS.P
const ListTag = HTML_TAGS.UL
const ItemTag = HTML_TAGS.LI


export function TaskList({ tasks }) {
  return (
    <Sectiontag>
      <Title>{TASK_UI_TEXT.LIST_TITLE}</Title>

      {tasks.length === 0 ? (
        <Paragraph>{TASK_UI_TEXT.EMPTY_MESSAGE}</Paragraph>
      ) : (
        <ListTag>
          {tasks.map((task) => (
            <ItemTag key={task.id}>{task.title}</ItemTag>
          ))}
        </ListTag>
      )}
    </Sectiontag>
  )
}