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

Yarn watch. Yarn build.