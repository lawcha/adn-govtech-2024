from typing import Annotated, Union, List

import pandas as pd
import os
import pandas as pd
from fastapi import APIRouter, Query, HTTPException

router = APIRouter()
myDict = {
    9650: "usecase1",
    9740: "usecase2",
    8721: "usecase3"
}
@router.get("/content")
def get_content(answerIds: Annotated[Union[List[int], None], Query()] = None):
    if len(answerIds) != 4:
        raise HTTPException(status_code=400, detail="not enought answer")
    key = 0
    for idx, x in enumerate(answerIds):
        key = key + pow(10, idx) * x
    #dynamically load content
    try:
        df_content = pd.read_csv(os.path.join(os.path.dirname(__file__), "data/{}.csv".format(myDict[key])))
    except:
        raise HTTPException(status_code=400, detail="unknown answer path")
    result = df_content.to_json(orient="records")
    return result

