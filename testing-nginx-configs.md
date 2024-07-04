# Testing NGINX configs

## Run the test command

Run it by executing this commnand in the terminal:

```nginx -t```

## Interpret output

* If the configs were valid and have no syntax errors, you'll see an output like:

```nginx: configuration file /etc/nginx/nginx.conf test is successful```

* If there are errors/warnings, nginx will provide details.
