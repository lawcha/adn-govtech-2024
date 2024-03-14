from fastapi import Depends, FastAPI

#from .llm import admin
#from .qa import items, users

app = FastAPI()
@app.get("/")
async def root():
    return {"message": "hello"}