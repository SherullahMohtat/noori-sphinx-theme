# Noori Sphinx Theme

<p align="center">
  <img src="https://raw.githubusercontent.com/sherullahmohtat/noori-sphinx-theme/main/docs/_static/logo.png" width="110" height="110" alt="Noori Sphinx Theme Logo" style="border-radius: 50%;" />
</p>

<p align="center">
  <b>A sleek, high-performance Sphinx documentation theme featuring modern deep tech styling, multi-project ecosystem navigation, and complete RTL/LTR bilingual support (Arabic, English, etc.).</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Sphinx-%3E%3D5.0-38bdf8?style=flat-square&logo=sphinx" alt="Sphinx" />
  <img src="https://img.shields.io/badge/Python-%3E%3D3.9-6366f1?style=flat-square&logo=python" alt="Python" />
  <img src="https://img.shields.io/badge/RTL-Arabic%20%7C%20Persian%20%7C%20Urdu-f59e0b?style=flat-square" alt="RTL Support" />
  <img src="https://img.shields.io/badge/License-MIT-10b981?style=flat-square" alt="License" />
</p>

---

## ✨ Features

- **🌐 Multi-Project Ecosystem Bar**: Built-in top bar for managing multi-package documentation ecosystems (e.g. Core, Distributed, ML, SQL, Cloud).
- **🌍 Full RTL & LTR Multilingual Support**: First-class support for Right-to-Left languages (Arabic, Persian/Farsi, Urdu, Hebrew) alongside English and Left-to-Right languages, with automatic direction detection and dynamic toggle.
- **🌓 Modern Deep Tech Palette**: Indigo & Cyan accents with instant Dark/Light mode switching and zero page flicker.
- **🚀 Ultra Lightweight**: 100% custom architecture without bulky third-party framework dependencies.
- **📋 Built-in Code Copy Buttons**: One-click copying for all code blocks with line-number exclusion and animated visual feedback.
- **🔍 Quick Search (⌘K / Ctrl+K)**: Instant keyboard-accessible search bar and dedicated search results page.
- **📍 Sticky On-Page TOC**: Real-time ScrollSpy highlighting current article sections.
- **📱 Fully Responsive**: Smooth mobile drawer navigation and touch-optimized UI.

---

## 📦 Installation

```bash
pip install noori-sphinx-theme
```

Or install in editable mode for theme development:

```bash
git clone https://github.com/sherullahmohtat/noori-sphinx-theme.git
cd noori-sphinx-theme
pip install -e .
```

---

## 🚀 Quick Setup

In your Sphinx project's `conf.py`:

```python
# conf.py

html_theme = "noori_sphinx_theme"

html_theme_options = {
    "project_name": "MyProject",
    "logo_text": "MyProject Docs",
    "github_url": "https://github.com/my-org/my-project",
    
    # Ecosystem navigation (multi-project switcher)
    "show_ecosystem_bar": True,
    "ecosystem_title": "My Ecosystem",
    "ecosystem_links": [
        {"name": "MyProject Core", "url": "https://docs.myproject.org", "active": True},
        {"name": "MyProject Distributed", "url": "https://distributed.myproject.org"},
        {"name": "MyProject ML", "url": "https://ml.myproject.org", "badge": "v2.0"},
    ],
    
    # Feature toggles
    "show_theme_toggle": True,
    "show_toc": True,
    "show_breadcrumbs": True,
    "code_copy_button": True,
}
```

Build the documentation:

```bash
sphinx-build -b html docs _build/html
```

---

## 🛠️ Development & Building Demo Site

```bash
# Activate virtual environment
source .venv/bin/activate

# Install theme locally
uv pip install -e .

# Build demo docs
sphinx-build -b html docs docs/_build/html
```

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
