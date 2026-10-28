# utils.py
#
# Media lives on disk (formerly S3) under MEDIA_ROOT, served by nginx at MEDIA_BASE_URL:
#   projects/<Project Name>/{logo,cover,spotlight,overflow,video}/<files>
#   resume/<any>.pdf

import os
from urllib.parse import quote

from django.conf import settings


def _find_dir(parent, name):
    """
    Finds a sub folder ignoring case and spaces, so a project named
    'Coffee Drawer Organizer' matches a folder named 'CoffeeDrawerOrganizer'.
    """
    key = name.replace(" ", "").lower()
    try:
        for entry in os.scandir(parent):
            if entry.is_dir() and entry.name.replace(" ", "").lower() == key:
                return entry.path
    except (FileNotFoundError, NotADirectoryError):
        pass
    return None

def _list_files(folder):
    if not folder:
        return []
    entries = sorted(
        (e for e in os.scandir(folder) if e.is_file() and not e.name.startswith('.')),
        key=lambda e: e.name,
    )
    return [_media_url(e.path) for e in entries]

def _media_url(path):
    relative = os.path.relpath(path, settings.MEDIA_ROOT).replace(os.sep, "/")
    return settings.MEDIA_BASE_URL + quote(relative)

def get_project_media_urls(project_name, folders):

    """
    Retrieves all file URLs from each of the given folders of a project.
    """
    projects_dir = _find_dir(settings.MEDIA_ROOT, "projects")
    project_dir = _find_dir(projects_dir, project_name) if projects_dir else None

    media_urls = {}

    for folder in folders:
        file_urls = _list_files(_find_dir(project_dir, folder) if project_dir else None)

        # If the folder is 'cover' and has at least one image, return only the first image URL
        if folder == "cover" and file_urls:
            media_urls[folder] = file_urls[0]
        else:
            media_urls[folder] = file_urls

    return media_urls

def get_resume_url():

    """
    Retrieves link to the first PDF in the resume folder.
    """
    resume_dir = _find_dir(settings.MEDIA_ROOT, "resume")
    pdfs = [url for url in _list_files(resume_dir) if url.lower().endswith(".pdf")]
    return pdfs[0] if pdfs else None
