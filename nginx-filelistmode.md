# Enabling File List Mode NGINX

If there isn't an `index.html` file in a specific directory you want to view, accessing that URL path will result in a "404 Not Found" error. However, Nginx includes an autoindex module that can automatically generate a directory listing. Adding autoindex to your Nginx configuration is straightforward. Simply add it to the `location` block in your Nginx configuration file like this:

```nginx
location /somedirectory/ {
    autoindex on;
}
```

Once you've made this change, restart your Nginx server using `sudo service nginx restart`. Now, instead of displaying a "404" error, the web server will show a directory listing similar to the one described earlier for the directory/directories defined in your `location` block.
