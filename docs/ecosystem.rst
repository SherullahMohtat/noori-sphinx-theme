=====================
Ecosystem Navigation
=====================

A key capability of modern multi-package frameworks is the **multi-project ecosystem bar**. In modular open-source and enterprise projects, users frequently need to navigate between related packages, micro-services, and client libraries.

**Noori Sphinx Theme** includes a built-in, customizable ecosystem bar displayed at the very top of the page.

Enabling the Ecosystem Bar
==========================

To enable the ecosystem bar, configure `html_theme_options` in your ``conf.py``:

.. code-block:: python

   # conf.py
   html_theme_options = {
       "show_ecosystem_bar": True,
       "ecosystem_title": "Project Ecosystem",
       "ecosystem_links": [
           {
               "name": "Core Library",
               "url": "https://example.com/core",
               "active": True,
           },
           {
               "name": "Distributed",
               "url": "https://example.com/distributed",
               "badge": "v2.0",
           },
           {
               "name": "Machine Learning",
               "url": "https://example.com/ml",
           },
           {
               "name": "Cloud Hub",
               "url": "https://example.com/cloud",
           },
       ],
   }

Ecosystem Link Properties
=========================

Each dictionary in ``ecosystem_links`` supports the following keys:

.. list-table::
   :widths: 20 20 60
   :header-rows: 1

   * - Field
     - Type
     - Description
   * - ``name``
     - string (required)
     - The visible title of the project or tool.
   * - ``url``
     - string (required)
     - Link to the documentation or repository.
   * - ``active``
     - boolean (optional)
     - Highlights the current active project with an indicator pill.
   * - ``badge``
     - string (optional)
     - Small status pill (e.g., "New", "v2.0", "Beta").

Disabling the Bar
=================

If your project is a single standalone package without other sister projects, simply set:

.. code-block:: python

   html_theme_options = {
       "show_ecosystem_bar": False,
   }
