import { Component } from 'react'
import QuestionItem from '../QuestionItem'
import { connect } from 'react-redux'

class Question extends Component{
    showQuestion(){
        const { questions } = this.props;
        console.log(questions)
        let xhtml = "";
        xhtml = questions.map( element => {
                return (<QuestionItem element = {element} key={element.id} />);
        })
        return xhtml
    }

    render(){
        return (
            <div className="column middle">
                {this.showQuestion()}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    // console.log(state.questions.questions)
    return {
        questions : state.questions
    }
}

export default connect(mapStateToProps,null)(Question)