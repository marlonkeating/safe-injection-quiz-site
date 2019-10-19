// @Flow
import React from 'react';
import { Button, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import type {QuizQuestion} from './quizContent.js';

type Props = {|
    quizConfig: QuizQuestion,
    onClickNext: (number) => void
|};

type State = {|
    answer: ?number
|};

class QuizFrame extends React.PureComponent<Props, State> {
    constructor(): void {
        super();
        this.state = {
            answer: null
        };
    }
    
    handleAnswerSelection(event) {
        console.log(event.target.value);
        this.setState({answer: event.target.value});
    }

    onClick(event) {
        this.props.onClickNext(this.state.answer);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.quizConfig !== this.props.quizConfig) {
          this.setState({answer: null});
        }
      }
    
    render() {
        // TODO: Disable button when answer not selected
        // disabled={this.state.answer === null}
        return (
            <React.Fragment>
                <h2>{this.props.quizConfig.question}</h2>
                {this._renderAnswerSection()}
                <Button color="primary" onClick={() => this.onClick()}>
                    Next
                </Button>
            </React.Fragment>
        );
    }

    _renderAnswerSection() {
        return (
            <React.Fragment>
                <RadioGroup 
                    aria-label="answer" 
                    name="answer" 
                    value={this.state.answer} 
                    onChange={this.handleAnswerSelection.bind(this)}>
                    {this.props.quizConfig.answers.map((answer, idx) => this._renderAnswer(idx, answer))}
                </RadioGroup>
            </React.Fragment>
        );
    }

    _renderAnswer(num, answer) {
        return (
            <FormControlLabel value={num} control={<Radio />} label={answer} />
        );
    }
}

export default QuizFrame;