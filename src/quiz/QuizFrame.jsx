// @Flow
import React from 'react';
import { Button } from '@material-ui/core';
import type {QuizQuestion} from './quizContent.js';

// type Props = {|
//     quizConfig: QuizQuestion,
//     onClickNext: (number) => void
// |}

type State = {|
    answer: number
|};

class QuizFrame extends React.PureComponent<Props, State> {
    handleAnswerSelection(event) {
        this.setState({answer: event.target.value});
    }

    onClick(event) {
        this.props.onClickNext(this.state.answer);
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.quizConfig.question}</h2>
                {this.props.quizConfig.answers.map((answer, idx) => this._renderAnswer(idx, answer))}
                <Button onClick={() => this.onClick()}>
                    Next
                </Button>
            </React.Fragment>
        );
    }

    _renderAnswer(num, answer) {
        return (
        <div className="radio">
            <label>
                <input type="radio" value={num} onChange={this.handleAnswerSelection.bind(this)}/>
                {answer}
            </label>
        </div>
        );
    }
}

export default QuizFrame;