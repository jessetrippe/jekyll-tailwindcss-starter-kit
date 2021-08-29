# Jekyll TailwindCSS Starter Kit
An opinionated starter project using Jekyll and TailwindCSS that supports Just-in-Time Mode (JIT).

Since JIT was added to TailwindCSS, getting it to work with PostCSS has been a struggle and there is currently an open issue on the PostCSS page. Instead of waiting, I created an alternative setup using TailwindCSS CLI for building and watching CSS files, BrowserSync for serving and browser reloading, and Jekyll only for static page building. It works great.

## Installation
This setup requires the following to already be installed:
* [BrowserSync](https://browsersync.io)
* [TailwindCSS](http://tailwindcss.com)
* [Jekyll](http://jekyllrb.com)

Once those are installed, in your terminal in the root directory of the site, type `yarn install` then `bundle install`.

## Usage

When developing your site, enter the root directory and type `yarn watch` which does the following:
* Initial site build
* Continuous watching and building via Jekyll of page, posts, JS, images, etc.
* Continuous watching and building via TailwindCSS CLI which watches page, posts, JS, HTML for any changes and then builds a new CSS file.
* Continuous watching and browser refreshing of any files being served from the `_site/` folder.

In order to build a production version of the site, type `yarn build`.

## Opinions

I put all pages into a `_pages/` folder to keep the root folder as organized as possible. This requires including the folder in Jekyll builds by adding it to the Jekyll config file.