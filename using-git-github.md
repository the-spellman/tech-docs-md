## Using Git with GitHub (Passwordless Authentication)

Since GitHub no longer supports password authentication for Git, here's how to connect using SSH keys:

**1. Generate SSH Key Pair**

Open your terminal and run the following command, replacing `<your_email>` with your actual email address:

```ssh-keygen -t ed25519 -e -m "<your_email>"```

This will prompt you for a passphrase (optional) and save the key pair to your local machine (usually `~/.ssh/`).

**2. Add Public Key to GitHub**

* Go to your GitHub account settings.
* Navigate to the "SSH and GPG keys" section.
* Click "New SSH key" and provide a title for your key.
* Copy the contents of the file `~/.ssh/id_rsa.pub` (public key) and paste it into the key field on GitHub.
* Click "Add SSH key".

**3. Verify Connection**

In your terminal, run the following command to test the connection:

```ssh -T git@github.com```


If successful, you should see a welcome message from GitHub.

**4. Cloning a Repository**

Now you can use the `git clone` command followed by the SSH URL of the repository to clone it locally. You'll find the SSH URL on the repository homepage on GitHub.  The URL will look something like `git@github.com:<username>/<repository_name>.git`.

**Example:**

```git clone git@github.com/<username>/<repository_name>.git```

**Subsequent Pushes**

Once you've made changes and added/committed them, you can push them to your remote repository on GitHub using:

```git push origin <branch_name>```

**Notes:**

* Replace `<username>`, `<repository_name>`, and `<branch_name>` with your actual details.
* This guide covers basic usage. Refer to the official [Git documentation](https://git-scm.com/) for more advanced commands.
