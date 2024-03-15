#
FROM python:3.11

#
WORKDIR /code

#
COPY ./requirements.txt /.
#
RUN pip install --no-cache-dir --upgrade -r /requirements.txt
RUN pip install openai
#
COPY . .
EXPOSE 8080
#
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8080"]