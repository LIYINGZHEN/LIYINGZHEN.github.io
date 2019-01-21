---
title:       "Install nvm with Homebrew"
subtitle:    ""
description: ""
date:        2019-01-17T17:00:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["Node.js"]
---

```
brew update
brew install nvm
mkdir ~/.nvm
vim ~/.zshrc
```

```
vim  ~/.zshrc
```

In your `.zshrc` file (you may be using an other file, according to your shell), add the following :

```
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

Now, you can install node :

```
nvm install 8
```

From now on, you’re using the v8.0.x of node on this shell, you can install your global dependencies such as grunt-cli (they will be tied up to this version of node).

You may want to install other versions, just do :

```
nvm install 6
nvm install 11
...
```

Switch of node version with `nvm use 8` (more infos here).

To have a node activated by default (not to have to nvm use on each new shell), run this (stable being the id of the version):

```
nvm alias default stable
```

Now, you can run multiple versions of node on your computer.
