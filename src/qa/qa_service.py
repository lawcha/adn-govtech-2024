import pandas as pd
import os
from .qa_request import QaRequest

df_answers = pd.read_csv(os.path.join(os.path.dirname(__file__), "data/answers.csv"))
df_questions = pd.read_csv(os.path.join(os.path.dirname(__file__), "data/questions.csv"),
                           index_col="id")
from fastapi import APIRouter

router = APIRouter()


def get_next_question(answer):
    next_possible_questions = df_questions[df_questions["level"] == answer.level + 1]

    if len(next_possible_questions) > 1:
        return next_possible_questions[next_possible_questions["answer_id"] == answer.id].squeeze(
            axis=0)

    return next_possible_questions.squeeze(axis=0)


def get_answers(question):
    return df_answers[df_answers["question_id"] == question.name]


@router.post("/qa")
def get_next_question_and_answers(request: QaRequest):
    if len(request.answers) == 0:
        next_question = df_questions[df_questions["level"] == 0].squeeze(axis=0)
        next_answers = get_answers(next_question)
    else:
        answer = df_answers.iloc[request.answers[-1]]
        next_question = get_next_question(answer)
        next_answers = get_answers(next_question)

    return {"question": next_question.to_dict(),
            "answers": next_answers.reset_index().to_dict(orient="records")}

