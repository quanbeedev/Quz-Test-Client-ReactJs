import React, { Component } from 'react'

 class QuestionItem extends Component {
    render() {
        const { element } = this.props
        return (
            <div className="game-quiz-container">

                          <div className="game-details-container">
                            
                              <h1> Question : <span id="question-number"></span> {element.id}/ 10</h1>
                          </div>
              
                          <div className="game-question-container">
                              <h1 id="display-question"> <p>{element.question}</p></h1>
                          </div>
              
                          <div className="game-options-container">
              
                            <div className="modal-container" id="option-modal">
              
                                  <div className="modal-content-container">
                                      <h1></h1>
              
                                      <div className="modal-button-container">
                                          <button onclick="">Continue</button>
                                      </div>
              
                                  </div>
              
                            </div>
              
                              <span>
                                  <input type="radio" id="option-one"  name="option" className="radio" value="optionA" />
                                  <label for="option-one" className="option" id="option-one-label">{element.answera}</label>
                              </span>
              
              
                              <span>
                                  <input type="radio" id="option-two" name="option" className="radio" value="optionB" />
                                  <label for="option-two" className="option" id="option-two-label">{element.answerb}</label>
                              </span>
              
              
                              <span>
                                  <input type="radio" id="option-three" name="option" className="radio" value="optionC" />
                                  <label for="option-three" className="option" id="option-three-label">{element.answerc}</label>
                              </span>
              
              
                              <span>
                                  <input type="radio" id="option-four" name="option" className="radio" value="optionD" />
                                  <label for="option-four" className="option" id="option-four-label">{element.answerd}</label>
                              </span>
              
              
                          </div>
              
                          <div className="next-button-container">
                              <button onclick="">Previus</button>
                              <button className="Next-Question" onclick="">Next Question</button>
                          </div>
              
                      </div>
        )
    }
}
export default QuestionItem
