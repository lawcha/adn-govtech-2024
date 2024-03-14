import os
from fastapi import FastAPI
import langchain

from dotenv import load_dotenv

from ...src.request_schema import LLMRequest, LLMResponse

# load env variables
load_dotenv()

OPENAI_API_KEY = os.environ['OPENAI_API_KEY']

app = FastAPI()

@app.post("/llm", response_model = LLMResponse)
def llm(request: LLMRequest) -> LLMResponse:

    request.query = None

    return None