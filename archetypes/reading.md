+++
title = "{{ replace .File.ContentBaseName "-" " " | title }}"
date = "{{ .Date }}"
draft = false
status = "reading" # reading | finished | abandoned
started = "{{ .Date }}"
finished = ""
rating = 0
author = ""
isbn13 = ""
publisher = ""
published = "" # Date Published (YYYY-MM-DD)
cover = "/images/reading/placeholder.jpg"
coverAlt = "Cover of {{ replace .File.ContentBaseName "-" " " | title }}"
summary = "One-line blurb of the book."
toc = false
+++

Brief thoughts / notes...
