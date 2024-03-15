from fastapi import Depends, FastAPI

from .llm import llm_api
from .qa import qa_service
from .content import content_api
app = FastAPI()
app.include_router(llm_api.router)
app.include_router(qa_service.router)
app.include_router(content_api.router)
@app.get("/")
async def root():
    return {"message": "hello"}