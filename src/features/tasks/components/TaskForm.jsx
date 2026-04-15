import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"



const Sectiontag = HTML_TAGS.SECTION  
const Title = HTML_TAGS.H3
const InputTag = HTML_TAGS.INPUT
const ButtonTag = HTML_TAGS.BUTTON

export function TaskForm({ taskText, onTaskTextChange, onAddTask }) {
  return (
    <Sectiontag>
      <Title>{TASK_UI_TEXT.FORM_TITLE}</Title>

      <InputTag
        type="text"
        value={taskText}
        onChange={onTaskTextChange}
        placeholder={TASK_UI_TEXT.INPUT_PLACEHOLDER}
      />

      <ButtonTag onClick={onAddTask}>{TASK_UI_TEXT.ADD_BUTTON}</ButtonTag>
    </Sectiontag>
  )
}