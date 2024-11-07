# utils.py

import boto3
from botocore.exceptions import NoCredentialsError
from django.conf import settings

import environ

def get_s3_project_urls(project_name, folders):
    # Get environment variables from .env
    env = environ.Env()
    environ.Env.read_env()

    """
    Retrieves all image URLs from a specific folder in an S3 bucket.
    """
    s3_client = boto3.client(
        's3',
        aws_access_key_id=env("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key=env("AWS_SECRET_ACCESS_KEY"),
        region_name=env("AWS_REGION")
    )
    bucket_name = env("AWS_STORAGE_BUCKET_NAME")

    base_path = f'projects/{project_name.replace(" ", "")}/'

    s3_urls = {}

    for folder in folders:
        try:
            folder_path = f'{base_path}{folder}/'
            # List objects in the folder
            response = s3_client.list_objects_v2(Bucket=bucket_name, Prefix=folder_path)

            # Filter to include only the URLs of the objects (ignore the folder path)
            file_urls = [
                f"https://{bucket_name}.s3.amazonaws.com/{item['Key']}"
                for item in response.get('Contents', [])
                if item['Key'] != folder_path  # Exclude the main folder path
            ]

            # If the folder is 'cover' and has at least one image, return only the first image URL
            if folder == "cover" and file_urls:
                s3_urls[folder] = file_urls[0]
            else:
                s3_urls[folder] = file_urls

        except NoCredentialsError:
            print("Credentials not available")

    return s3_urls
