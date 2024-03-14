from fastapi import Depends, FastAPI

from .llm import llm_api
#from .qa import items, users

app = FastAPI()
app.include_router(llm_api.router)
@app.get("/")
async def root():
    return {"message": "hello"}