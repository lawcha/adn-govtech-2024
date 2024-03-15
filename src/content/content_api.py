from typing import Annotated, Union, List

import pandas as pd
import os
from fastapi import APIRouter, Query, HTTPException

router = APIRouter()
@router.get("/content")
def get_content(answerIds: Annotated[Union[List[str], None], Query()] = None):
    if len(answerIds) != 4:
        raise HTTPException(status_code=400, detail="Wrong")

