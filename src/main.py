from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .llm import llm_api
from .qa import qa_service
from .content import content_api
app = FastAPI()
app.include_router(llm_api.router)
app.include_router(qa_service.router)
app.include_router(content_api.router)

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def root():
    return {"message": "hello"}