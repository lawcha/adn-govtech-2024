#docker image
FROM python:3.11
#
WORKDIR /code
#
COPY ./requirements.txt ./requirements.txt
#copy the env template to set the .env file
COPY ./.env.template ./.env
#install dependencies
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
#
COPY ./src ./app
#
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
