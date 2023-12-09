import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    selectQuestionNo: {},
    answers: []
}

export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestions: (state, { payload }) => {
            state.questions = payload
        },
        setSelectedQuestion: (state, { payload }) => {
            state.selectQuestionNo = payload
        },
        setAnswer: (state, { payload }) => {
            state.answers = payload
        }
    }
})

export const { setQuestions, setSelectedQuestion, setAnswer } = questionSlice.actions;
export default questionSlice.reducer;