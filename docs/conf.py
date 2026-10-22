# Configuration file for the Sphinx documentation builder.
import os
import sys

# Point to local src for development testing
sys.path.insert(0, os.path.abspath("../src"))

project = "Noori"
copyright = "2026, Sherullah Mohtat"
author = "Sherullah Mohtat"
release = "0.1.0"
version = "0.1"

# General configuration
extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.viewcode",
    "sphinx.ext.napoleon",
]

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

# HTML output configuration
html_theme = "noori_sphinx_theme"
html_title = "Noori Documentation"
html_logo = "_static/logo.png"
html_favicon = "_static/favicon.png"

html_theme_options = {
    "project_name": "Noori",
    "logo_text": "Noori Docs",
    "tagline": "Modern Deep Tech Sphinx Ecosystem",
    "github_url": "https://github.com/sherullahmohtat/noori-sphinx-theme",
    "discord_url": "https://discord.gg/example",
    
    # Ecosystem Multi-Project Bar (multi-project ecosystem navigation)
    "show_ecosystem_bar": True,
    "ecosystem_title": "Noori Ecosystem",
    "ecosystem_links": [
        {"name": "Noori Core", "url": "#", "active": True},
        {"name": "Noori Compute", "url": "https://example.com/compute", "badge": "New"},
        {"name": "Noori ML", "url": "https://example.com/ml"},
        {"name": "Noori SQL", "url": "https://example.com/sql"},
        {"name": "Cloud Hub", "url": "https://example.com/cloud"},
    ],
    
    # Visual & Feature Toggles
    "show_theme_toggle": True,
    "show_toc": True,
    "show_breadcrumbs": True,
    "announcement": "⚡ Noori Sphinx Theme v0.1.0 — High performance & deep tech styling",
    "code_copy_button": True,
    "footer_tagline": "Engineered for high-impact documentation ecosystems.",
}

html_static_path = ["_static"]
