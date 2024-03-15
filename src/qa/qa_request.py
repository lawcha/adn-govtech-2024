from pydantic import BaseModel

class QaRequest(BaseModel):
    answers: list