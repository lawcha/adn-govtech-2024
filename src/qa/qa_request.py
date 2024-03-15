from pydantic import BaseModel

class QaRequest(BaseModel):
    answerId: str