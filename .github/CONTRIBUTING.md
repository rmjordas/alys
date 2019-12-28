# Contributing

Thank you for your interest in the project.

We definitely appreciate any contributions you can provide. To get started
publishing contributions, please read first the the instructions below.

## Requirements

Ensure you have the following installed in your system:

- Node.js
- `npm`
- Git

When you install Git on Windows, you are also provided with Git Bash. It is
recommended to use this software when interacting with Git. This guide will
assume that you are using Git Bash if you are using Windows. On Linux and Mac,
the default terminal will do.

To verify your installations, enter the following in your terminal:

```console
$  node -v;npm -v;git --version
v8.12.0
6.4.1
git version 2.19.1.windows.1
```

You should see something similar to the output above.

## Quick start

If you know your way around JavaScript projects, simply:

- Fork the repo
- Clone your fork to your machine
- Install dependencies
- Run the development script

```bash
# Assuming you forked rmjordas/alys to your acccount:
git clone https://github.com/<your-github-username>/alys.git
npm install
npm run storybook
```

Open your browser to http://localhost:6006. Make the changes while also ensuring that that project
is building and the tests are passing. Commit those changes and push them to the remote repository
of your fork.

Finally, open a pull request to the upstream repository and include a short summary of your changes.
