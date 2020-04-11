import React from "react"
import FormControl from "react-bootstrap/FormControl"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Select from "../../../widgets/Select"

export const defaultProps = {
  questionTypes: ['radio', 'date'],
  categories: [
    "contact",
    "personalInfo",
    "symptoms",
    "respiratorySymptoms",
    "illnesses",
    "medication"
  ]
}

export const NewQuestionComponent = props => {

  const {
    newQuestion,
    handleChangeNewQuestion,
    questionTypes,
    categories
  } = props
  const { id, category, text, inputType } = newQuestion

  return (
    <div style={{textAlign: "center"}}>
          <Row>
            <Col xs={6}>
              <FormControl placeholder="Enter new question name"
                defaultValue={id} onChange={(event) => handleChangeNewQuestion(event.target.value, "id")} />
            </Col>
            <Col xs={6}>
              <FormControl placeholder="Enter new question text"
                defaultValue={text} onChange={(event) => handleChangeNewQuestion(event.target.value, "text")} />
            </Col>
            <Col xs={6}>
              <Select value={inputType} emptySelectText="Please select type"
                onChangeHandler={(event) => handleChangeNewQuestion(event.target.value, "inputType")}
                options={questionTypes} keyPrefix="newQuestionInputType" />
            </Col>
            <Col xs={6}>
              <Select value={category} emptySelectText="Please select category"
                onChangeHandler={(event) => handleChangeNewQuestion(event.target.value, "category")}
                options={categories} keyPrefix="newQuestionCategory" />
            </Col>
          </Row>
    </div>
  )
}

NewQuestionComponent.defaultProps = defaultProps

export default NewQuestionComponent