===========================
Configuration Reference
===========================

The following options are accepted in ``html_theme_options`` within your ``conf.py``.

Theme Options Table
===================

.. list-table::
   :widths: 25 15 20 40
   :header-rows: 1

   * - Option Key
     - Type
     - Default
     - Description
   * - ``project_name``
     - ``str``
     - Sphinx project
     - Display name shown in the header brand.
   * - ``logo_text``
     - ``str``
     - None
     - Optional text beside or instead of logo icon.
   * - ``tagline``
     - ``str``
     - None
     - Subtitle or tagline for your project.
   * - ``github_url``
     - ``str``
     - None
     - URL to the project's GitHub repository.
   * - ``discord_url``
     - ``str``
     - None
     - URL to Discord server or community.
   * - ``show_ecosystem_bar``
     - ``bool``
     - ``True``
     - Toggle the top multi-project ecosystem navigation bar.
   * - ``ecosystem_title``
     - ``str``
     - ``"Ecosystem"``
     - Header label for the ecosystem projects group.
   * - ``ecosystem_links``
     - ``list[dict]``
     - ``[]``
     - List of project link definitions (name, url, active, badge).
   * - ``show_theme_toggle``
     - ``bool``
     - ``True``
     - Enable the light/dark mode toggle button.
   * - ``show_toc``
     - ``bool``
     - ``True``
     - Render the right-hand "On this page" secondary TOC.
   * - ``show_breadcrumbs``
     - ``bool``
     - ``True``
     - Display breadcrumbs navigation above articles.
   * - ``announcement``
     - ``str``
     - None
     - Global announcement banner text.
   * - ``code_copy_button``
     - ``bool``
     - ``True``
     - Enable one-click copy buttons on all code snippets.
   * - ``direction``
     - ``str``
     - Auto
     - Layout direction (``"ltr"`` or ``"rtl"``). Auto-detected if ``language = "ar"``, ``"fa"``, etc.
   * - ``show_direction_toggle``
     - ``bool``
     - ``True``
     - Display the interactive RTL/LTR language switcher in the header.
   * - ``footer_tagline``
     - ``str``
     - Default text
     - Custom attribution text in the footer.

Example Complete Configuration
==============================

.. code-block:: python

   # conf.py
   html_theme = "noori_sphinx_theme"

   html_theme_options = {
       "project_name": "Noori",
       "logo_text": "Noori Docs",
       "github_url": "https://github.com/sherullahmohtat/noori-sphinx-theme",
       "show_ecosystem_bar": True,
       "ecosystem_title": "Ecosystem",
       "ecosystem_links": [
           {"name": "Core", "url": "https://example.com/core", "active": True},
           {"name": "Distributed", "url": "https://example.com/dist"},
       ],
       "announcement": "Check out the new v0.1 release!",
       "show_theme_toggle": True,
   }
