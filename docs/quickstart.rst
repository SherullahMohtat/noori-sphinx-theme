Quickstart Guide
================

This guide walks you through installing and configuring **Noori Sphinx Theme** in your project.

Installation
------------

Install ``noori-sphinx-theme`` using your preferred Python package manager:

.. code-block:: bash

   # Using pip
   pip install noori-sphinx-theme

   # Or using uv
   uv pip install noori-sphinx-theme

Configuration
-------------

In your Sphinx project's ``conf.py``, specify ``noori_sphinx_theme`` as your HTML theme:

.. code-block:: python

   # conf.py

   html_theme = "noori_sphinx_theme"

   html_theme_options = {
       "project_name": "MyProject",
       "logo_text": "MyProject Docs",
       "tagline": "Blazing fast computing for Python",
       "github_url": "https://github.com/my-org/my-project",
       
       # Ecosystem bar
       "show_ecosystem_bar": True,
       "ecosystem_title": "My Ecosystem",
       "ecosystem_links": [
           {"name": "Core", "url": "https://example.com/core", "active": True},
           {"name": "Distributed", "url": "https://example.com/distributed"},
           {"name": "ML", "url": "https://example.com/ml", "badge": "v2.0"},
       ],
       
       # RTL & Multilingual (e.g., Arabic, Persian, English)
       # "direction": "rtl",  # or auto-detected if language = "ar" in conf.py
   }

Building Your Documentation
---------------------------

Run the standard Sphinx build command:

.. code-block:: bash

   # Build HTML documentation
   sphinx-build -b html docs _build/html

Open ``_build/html/index.html`` in your browser to view your beautifully themed site.

Local Development & Live Reload
-------------------------------

For live-reloading during theme development or doc writing:

.. code-block:: bash

   pip install sphinx-autobuild
   sphinx-autobuild docs _build/html --port 8000
