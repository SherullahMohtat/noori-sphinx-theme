"""Noori Sphinx Theme.

A modern, high-performance Sphinx theme designed for tech projects and multi-package ecosystems.
"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Any, Dict

__version__ = "0.1.0"


def get_html_theme_path() -> str:
    """Return the absolute path to the directory containing this theme."""
    return str(Path(__file__).parent.resolve())


def setup(app: Any) -> Dict[str, Any]:
    """Entry point for Sphinx to register this theme and its assets."""
    theme_dir = Path(__file__).parent.resolve()
    app.add_html_theme("noori_sphinx_theme", str(theme_dir))

    return {
        "version": __version__,
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
