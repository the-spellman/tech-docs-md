# Where is stuff in NGINX

- The location of the main Nginx configuration file depends on how Nginx was installed:
  - On many Linux distributions, it can be found at "/etc/nginx/nginx.conf".
  - Alternatively, it might be located at "/usr/local/nginx/conf/nginx.conf" or "/usr/local/etc/nginx/nginx.conf" if not found in the default location.

- The location of available sites:
  - Typically stored in "/etc/nginx/sites-available".

- The location of enabled sites:
  - Usually stored in "/etc/nginx/sites-enabled".
  - Enabled sites are symbolic links to files located in the "sites-available" directory mentioned above.
