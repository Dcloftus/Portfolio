# utils.py

import boto3
import math
from botocore.exceptions import NoCredentialsError

import environ

def getAWS_Details():
    # Get environment variables from .env
    env = environ.Env()
    # Use for Local Development
    env.read_env()

    # Use for on the server
    #env.read_env('/srv/env/.env')

    s3_client = boto3.client(
        's3',
        aws_access_key_id=env("AWS_ACCESS_KEY_ID"),
        aws_secret_access_key=env("AWS_SECRET_ACCESS_KEY"),
        region_name=env("AWS_REGION")
    )

    bucket_name = env("AWS_STORAGE_BUCKET_NAME")

    return s3_client, bucket_name

def get_s3_project_urls(project_name, folders):

    """
    Retrieves all image URLs from a specific folder in an S3 bucket.
    """
    s3_client, bucket_name = getAWS_Details()
    
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

def get_s3_resume_url():

    """
    Retrieves link to Resume in S3 bucket.
    """
    s3_client, bucket_name = getAWS_Details()

    resume_key = f'resume/daniel_loftus_resume.pdf'

    try:
        # Generate a pre-signed URL for the resume
        url = s3_client.generate_presigned_url(
            'get_object',
            Params={'Bucket': bucket_name, 'Key': resume_key},
            ExpiresIn=3600  # URL expiration time in seconds (e.g., 1 hour)
        )
        return url
    except NoCredentialsError:
        print("Credentials not available")
        return None