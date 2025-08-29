+++
title = "{{ replace .File.ContentBaseName "-" " " | title }}"
date = "{{ .Date }}"
draft = true
description = ""
videos = [
  # "YOUTUBE_ID1",
  # "YOUTUBE_ID2"
]
+++

Write a short intro here. If you prefer, you can remove the videos array and use markdown with {{< youtube ID >}} shortcodes inside the content.
