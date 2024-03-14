from fastapi import Depends, FastAPI

#from .llm import admin
#from .qa import items, users

app = FastAPI(dependencies=[Depends(get_query_token)])

app.include_router(
    admin.router,
    prefix="/admin",
    tags=["admin"],
    dependencies=[Depends(get_token_header)],
    responses={418: {"description": "I'm a teapot"}},
)
@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}