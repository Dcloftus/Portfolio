FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /backend

COPY requirements.txt /backend/
RUN pip3 install --no-cache-dir -r requirements.txt

COPY . /backend/

EXPOSE 8000

# Applies migrations, collects admin static files, then starts gunicorn
CMD ["sh", "entrypoint.sh"]
