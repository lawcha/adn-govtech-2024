from pydantic import BaseModel, Field, List, Dict

class LLMRequest(BaseModel):
    query: str

class LLMResponse(BaseModel):
    response: str