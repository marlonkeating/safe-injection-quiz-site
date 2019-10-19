// @Flow
import React from 'react';
import quizContent from './quiz/quizContent.js'
import QuizFrame from './quiz/QuizFrame.jsx'

// type State = {|
//     answerIndices: Array<number>,    
//     currentQuestion: number
// |};

class MainFrame extends React.PureComponent<{||}, State> {
    constructor(): void {
        super();
        this.state = {
            currentQuestion: 0,
            answerIndices: []
        };
    }
    
    handleAnswerSelection(answerNumber) {
        this.state.answerIndices.push(answerNumber);
        this.setState({
            answerIndices: this.state.answerIndices,
            currentQuestion: this.state.currentQuestion + 1
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <QuizFrame
                    quizConfig={quizContent[this.state.currentQuestion]}
                    onClickNext={this.handleAnswerSelection.bind(this)}
                />
            </React.Fragment>
        );
    }
}

export default MainFrame;