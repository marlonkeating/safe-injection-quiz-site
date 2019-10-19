// @Flow

// export type QuizQuestion = {|
//     question: string,
//     answers: $ReadOnlyArray<string>,
//     extendedInfoParagraphs: $ReadOnlyArray<string>,
// |};

const quizContent: $ReadOnlyArray<QuizQuestion> = [{
    question: "This is the question.  What is the answer?",
    answers: [
        "42",
        "Febtober",
        "African or European Swallow?"
    ],
    extendedInfoParagraphs: [
        "Put any extended information on the subject here",
        "For the benefit of readers on the answer page"
    ]
}];

export default quizContent;