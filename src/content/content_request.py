from pydantic import BaseModel

class contentRequest(BaseModel):
    answerChain: [str]