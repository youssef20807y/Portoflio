"""Simple development server for the portfolio project.

Run with:
    python serve.py --port 8000
Then open http://localhost:8000 in your browser.
"""

from __future__ import annotations

import argparse
import os
import socket
import sys
from contextlib import closing
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

DEFAULT_HOST = "127.0.0.1"
DEFAULT_PORT = 8000


def find_available_port(start_port: int) -> int:
    """Return the first available port >= start_port."""
    port = start_port
    while port < 65536:
        with closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as s:
            try:
                s.bind((DEFAULT_HOST, port))
                return port
            except OSError:
                port += 1
    raise RuntimeError("No available ports found in the range 1024-65535.")


def parse_args(argv: list[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Serve the site with a simple HTTP server.")
    parser.add_argument("--host", default=DEFAULT_HOST, help="Host/IP to bind (default: %(default)s)")
    parser.add_argument("--port", type=int, default=DEFAULT_PORT, help="Port to bind (default: %(default)s)")
    parser.add_argument("--open", action="store_true", help="Open the site in the default browser after starting.")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv or sys.argv[1:])

    root = Path(__file__).resolve().parent
    os.chdir(root)

    port = args.port
    if not (0 < port < 65536):
        raise ValueError("Port must be between 1 and 65535.")

    try:
        port = find_available_port(port)
    except RuntimeError as exc:
        print(f"Error finding free port: {exc}")
        return 1

    server_address = (args.host, port)
    handler = SimpleHTTPRequestHandler

    try:
        httpd = ThreadingHTTPServer(server_address, handler)
    except OSError as exc:
        print(f"Failed to start server: {exc}")
        return 1

    url = f"http://{args.host}:{port}/"
    print(f"Serving {root} at {url}")

    if args.open:
        try:
            import webbrowser

            webbrowser.open(url)
        except Exception as exc:  # pragma: no cover - best effort only
            print(f"Could not open browser automatically: {exc}")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
    finally:
        httpd.server_close()
        print("Server stopped.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
