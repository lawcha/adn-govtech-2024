import os
from fastapi import FastAPI
from langchain.chat_models import ChatOpenAI
#from langchain.schema import SystemMessage, HumanMessage
from langchain.prompts import SystemMessagePromptTemplate, HumanMessagePromptTemplate, ChatPromptTemplate

from dotenv import load_dotenv

#from ...src.request_schema import LLMRequest, LLMResponse

from pydantic import BaseModel

class LLMRequest(BaseModel):
    query: str

class LLMResponse(BaseModel):
    response: str

# load env variables
load_dotenv()

OPENAI_API_KEY = os.environ['OPENAI_API_KEY']

app = FastAPI()

@app.post("/llm", response_model = LLMResponse)
def llm(request: LLMRequest) -> LLMResponse:

    llm = ChatOpenAI(
                    openai_api_key=OPENAI_API_KEY,
                    model="gpt-3.5-turbo-0125",
                    temperature=0,
                    max_tokens=2048,
                    streaming=False,
                    model_kwargs={
                        "top_p": 0.95,
                      },
                    )

    # create chat template
    template = (
        """You are a helpful assistant that extracts key information from legal documents. Your task is to simplify complex legal language and provide clear and concise explanations of legal concepts and key steps to undertake. Explain as if you were talking to a non-lawyer. Imagine you are talking to very emotional people that need to be reassured their animal's well-being is in good hands.

        NEVER omit important information or provide incorrect information, but ALWAYS try to simplify information as much as possible. If possible, provide a step-by-step explanation of tasks to undertake with bullet points, in markdown. It is very important that you respond using markdown when possible (eg. for URLs, emails, lists, etc.). Your answer should contain all possible relevant URLs. Try to redirect users to the appropriate document/URL when possible.

        Don’t worry about the time limit, take your time and do not skip any steps. You will be tipped $100 for each question you answer correctly and with all relevant information.

        Remember to take a deep breath and work through each step deliberately."""
    )

    system_message_prompt = SystemMessagePromptTemplate.from_template(template)
    human_template = "{text}"
    human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)

    chat_prompt = ChatPromptTemplate.from_messages(
        [system_message_prompt, human_message_prompt]
    )

    # get a chat completion from the formatted messages
    llm_response = llm.invoke(
        chat_prompt.format_prompt(
            text=request.query
        ).to_messages()
    )

    return {"response": llm_response.content}