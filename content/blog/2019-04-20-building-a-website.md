---
title:       "Building a website"
date:        2019-04-20T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["hugo"]
---

Since I started programming, I’ve found myself interested in many subjects and technologies. However, despite a few efforts, I never managed to get interested in front-end development.

I have tried several frameworks: [Bootstrap](https://getbootstrap.com/), [React](https://reactjs.org/), and a few more. I admit I enjoy way more developing something with `React` than doing plain `HTML`/`CSS`/`JS`, but let’s face it, it’s just not my cup of tea. Sometimes I have to work on front-end projects, but whenever I can avoid it, I do it.

So, when I decided to built this website, I made a list of required properties:

- Write the less code possible
- Don’t write any CSS
- Have both a Dark and Light mode
- Build something responsive
- Build something deployable as a static web page

With those constraints, I quickly found out I needed a `static site generator` and learnt about [Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io/). For the hosting part, a [Github](https://pages.github.com/) Page with enforced HTTPS (because who releases a plain HTTP website in 2019 ?).

![](https://d33wubrfki0l68.cloudfront.net/30790d6888bd8af863fb2b5c33a7f337cdbda243/4e867/images/hugo-logo-wide.svg)

As for the choice of a `static site generator`, I decided to go with `Hugo`. The reason ? [The theme I liked the most](https://themes.gohugo.io/hugo-theme-hello-friend-ng/) was built for it, and as I really didn’t want to write any `CSS`, that was a major factor. Also, I’m more familiar with the `Go` environment than the `Ruby` one, that might have been another factor.

Even if `Hugo`’s documentation is very complete, I still experienced a few issues while deploying the website to `GitHub Pages`.

The way I handled the situation:

- My `GitHub` repository is private
- My website’s files are on a `develop` branch
- The website’s content is on the `master` branch
- I’m using a custom domain name

All my development happens on the `develop` branch, and I deploy to `master` using this script:

```bash
#!/usr/bin/env sh

DIR=$(dirname "$0")

echo "Deleting old publication"
rm -rf public

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B master public origin/master

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
hugo

echo "Updating master branch"
cd public && git add --all && git commit -m "Publishing to master (publish.sh)"
git push origin master
cd ..
rm -rf public
```

In order to resolve any issues with the custom domain, I had to create `CNAME` file, as described [here](https://gohugo.io/hosting-and-deployment/hosting-on-github/#use-a-custom-domain)

```
echo "www.maxlivinci.com" > static/CNAME
```

> Heavily inspired by: https://gohugo.io/hosting-and-deployment/hosting-on-github/#put-it-into-a-script-1

I hope this will be useful to anyone experiencing any difficulties with deploying a `Hugo`-generated website to `GitHub Pages`!


