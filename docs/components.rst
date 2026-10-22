========================
Components & Typography
========================

Noori includes styled components designed for technical documentation.

Admonition Callouts
===================

Admonitions provide highlighted notices, warnings, and tips.

.. note::
   This is a **Note** callout. Use it to highlight useful background context or secondary explanations.

.. tip::
   This is a **Tip** callout. Use it to provide helpful performance tips, shortcuts, or best practices.

.. important::
   This is an **Important** callout. Use it to emphasize essential prerequisites or key concepts.

.. warning::
   This is a **Warning** callout. Use it to alert users to potential breaking changes or deprecations.

.. caution::
   This is a **Caution** callout. Use it for high-risk operations or potential pitfalls.

Interactive Code Blocks
=======================

Code blocks automatically feature syntax highlighting with deep-tech tones, along with a built-in **Copy button** in the top-right corner.

Python Example
--------------

.. code-block:: python
   :linenos:

   import asyncio
   from dataclasses import dataclass

   @dataclass
   class TaskResult:
       task_id: str
       status: str
       execution_time_ms: float

   async def run_pipeline(batch_id: int) -> TaskResult:
       """Asynchronously execute pipeline job."""
       print(f"Running pipeline batch {batch_id}...")
       await asyncio.sleep(0.05)
       return TaskResult(task_id=f"task-{batch_id}", status="SUCCESS", execution_time_ms=50.2)

   if __name__ == "__main__":
       result = asyncio.run(run_pipeline(42))
       print(result)

Bash Example
------------

.. code-block:: bash

   # Clone repository and build documentation
   git clone https://github.com/sherullahmohtat/noori-sphinx-theme.git
   cd noori-sphinx-theme
   pip install -e .
   sphinx-build -b html docs _build/html

JSON Example
------------

.. code-block:: json

   {
     "theme": "noori_sphinx_theme",
     "version": "0.1.0",
     "features": {
       "ecosystem_bar": true,
       "theme_toggle": true,
       "copy_code": true
     }
   }

Tables
======

Responsive tables with clean borders and hover effects:

.. list-table:: Feature Comparison Matrix
   :widths: 25 35 40
   :header-rows: 1

   * - Feature
     - Traditional Themes
     - Noori Sphinx Theme
   * - **Multi-Project Bar**
     - Rare / custom fork needed
     - Built-in ecosystem bar
   * - **RTL / Arabic Support**
     - Complex or non-existent
     - First-class native support (auto-detect & toggle)
   * - **Dark / Light Switcher**
     - Clunky / flash of unstyled content
     - Instant CSS variable switching
   * - **Dependencies**
     - Heavy third-party frameworks
     - Pure lightweight HTML/CSS/JS
   * - **Copy Code Button**
     - Requires separate extension
     - Native zero-dependency feature

API Signature References
========================

Below is an example of Python function/class signatures rendered with Sphinx styling:

.. py:function:: noori.core.create_cluster(n_workers: int = 4, memory_limit: str = "8GB") -> Cluster

   Initialize and launch a distributed worker cluster across available nodes.

   :param n_workers: Number of worker processes to spawn.
   :param memory_limit: Per-worker RAM ceiling (e.g. ``"4GB"`` or ``"16GB"``).
   :return: An active connected :class:`Cluster` instance.
   :raises ValueError: If ``n_workers`` is less than 1.
