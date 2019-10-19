// @Flow

// export type QuizQuestion = {|
//     question: string,
//     answers: $ReadOnlyArray<string>,
//     extendedInfoParagraphs: $ReadOnlyArray<string>,
// |};

export const quizContent: $ReadOnlyArray<QuizQuestion> = [{
    question: "How many people are experiencing homelessness in the city of Seattle?",
    answers: [
        "2,000",
        "5,000",
        "12,500",
        "20,000"
    ],
    extendedInfoParagraphs: [
        "12,500",
        "The homeless population in Seattle and King County continues to be the third largest in the country by numbers, outranked only by New York City and Los Angeles."
    ]
}, {
    question: "How many safe injection sites are there within Seattle city limits?",
    answers: [
        "0",
        "1",
        "4",
        "10"
    ],
    extendedInfoParagraphs: [
        "0",
        "There are no safe injection facilities in Seattle or in the US in general, despite a growing trend worldwide (120 locations in the world: Australia, Canada, Denmark, France, Germany, Luxembourg, the Netherlands, Norway, Spain and Switzerland)."
    ]
}, {
    question: "How many needle exchange sites are there in Seattle?",
    answers: [
        "0",
        "1",
        "4",
        "10"
    ],
    extendedInfoParagraphs: [
        "4",
        "There are over 200 safe injection sites across the US, 4 of which are in the Seattle area. A recent study US study from Austin, TX showed that the proportion of people who shared syringes dropped from 74% to 22% after introducing a needle-share program. Studies have found that cities that have exchange programs have seen a decrease in HIV among people who inject drugs (PWID) by 6 percent a year. Cities that do not have these programs have seen an increase of HIV by 6 percent a year among PWID. - The Daily, UW"        
    ]
}, {
    question: "What percentage of all people living with AIDS acquired HIV infection directly or indirectly through injection drug use?",
    answers: [
        "5%",
        "25%",
        "40%",
        "50%"
    ],
    extendedInfoParagraphs: [
        "25%",
        "Best worldwide evidence from cohort and modeling studies suggests that SISs are associated with lower overdose mortality (88 fewer overdose deaths per 100 000 person-years [PYs]), 67% fewer ambulance calls for treating overdoses, and a decrease in HIV infections. Effects on hospitalizations are unknown."        
    ]
}, {
    question: "What percentage of individuals encountered in encampments have substance abuse disorders?",
    answers: [
        "65%",
        "70%",
        "80%",
        "95%"
    ],
    extendedInfoParagraphs: [
        "80%",
        "In Europe, more people using safe consumption spaces ultimately seek out treatment resources to address their disorders and are less likely to participate in risky behavior such as sharing syringes, reusing syringes, rushing injections, and injecting in public spaces..."
    ]
}];
