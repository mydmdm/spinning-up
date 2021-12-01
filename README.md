# Spinning-Up
A spinning up documentation for Neural Architecture Search (NAS), Model compression and other areas.

## Contribution
This project is hosted by `sphinx` pipeline and could be accessed publicly in [readthedocs](https://my-spinning-up.readthedocs.io/en/latest/). 
If someone want to make contribution, here is some instructions to preview by local serving.

```bash
cd docs
pip install -r sphinx_requirements.txt
sphinx-autobuild . _build/html
```

Above commands will build and serve the latest (hot updated after modification). Then user could access it in browser by `http://127.0.0.1:8000`.