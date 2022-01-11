# Contribution Guide

[![Open Source Love](https://firstcontributions.github.io/open-source-badges/badges/open-source-v1/open-source.svg)](https://github.com/firstcontributions/open-source-badges)  [![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

## Content

- [Resources Qualifications](#resources-qualifications)
- [Adding Resources](#adding-resources)
- [Contributing to the Website](#contributing-to-the-website)
  - [Changes to CSS](#changes-to-css)
  - [Changes to The Layout](#changes-to-the-layout)
  - [Changes to Components](#changes-to-components)

## Resources Qualifications

Resources have to be in the form of links. Allowed resources can be videos, articles, tutorials, or anything similar. It has to be helpful, whether as a tool to be used or as a source of information.

Here are some rules to follow when adding a resource to make sure it qualifies:

1. Make sure the resource is not too specific of a topic. For example, if adding a resource under JavaScript don't add a tutorial on how to check if an element is in viewport. Only add general resources that are related to the topic.
2. Based on the point above, single blog posts are not accepted. This is simply because if single blog posts are allowed then this list would be endless. There could be some exceptions, like if the single post is very extensive or includes details that are hard to find elsewhere. If the resource you're adding falls under the exception then please detail that in the PR.
3. If you want to add multiple links of the same topic under the same website, just include a general link that might lead to all these links. For example, instead of adding multiple Youtube videos under the same series, add the playlist link.
4. Take the time to make sure the resource has not been already added as it saves the maintainers time when reviewing your pull request.
5. Make sure the resource is objective and not opinionated. This means no resources that talks about someone's thoughts of a topic, even if you personally find it helpful.
6. No links to personal projects that have helped you learn something, unless the link is a tutorial or guide on how you did that project.
7. No links to twitter accounts, telegram channels, Youtube channels (Youtube videos and playlists are allowed), and so on.
8. No content with licensing issues.
9. You are allowed to add your own content as a resource as long as it is helpful and follows the other rules detailed above.

## Adding Resources

You can contribute to this repository very easily!

1. Get the resource you want to add ready.

2. Go to the [README](https://github.com/shahednasser/awesome-resources/blob/master/README.md).

3. Click on the edit icon at the top right corner.

![Edit README](https://github.com/shahednasser/awesome-resources/blob/master/assets/edit-README.png)

4. Find the correct category for your resource. For example: If it's a JavaScript tutorial, you need to add it under [Javascript](https://github.com/shahednasser/awesome-resources/blob/master/assets/edit-README.png).
If the category does not exist, you can add it under [Content](https://github.com/shahednasser/awesome-resources/blob/master/assets/edit-README.png). **Resources are added in alphabetical order, except for Other which should stay at last.**

To add a new category, add a list item with the name of the category and the URL to it (hash of the slug of the name). For example:

```markdown
- [New Category](#new-category)
```

Also, don't forget to add a shortcut to content index above the new category heading you are adding. For example:

```markdown

---

**[⬆ Back to Index](#content)**

## Android

```

5. Once you find or add the correct category, add the new resource at the end of the list. It should have the title and the link to the resource. For example:

```markdown
- [How to contribute](https://github.com/shahednasser/awesome-resources/blob/master/CONTRIBUTING.md)
```

6. Once you're done, scroll to the bottom of the list to commit the change. Make sure the title of the commit is relevant. For example: Added How to Contribute under New Category.

7. After adding the commit title, click on propose changes and follow the steps to create a pull request.

**That's it! Congratulations on making your contribution!**

## Contributing to the Website

To contribute to the website, you need to have Jekyll and its prerequisites installed. If you don't, you can check [here](https://jekyllrb.com/docs/).

After cloning the repository, in the folder run the following to install the bundles:

```bash
bundle
```

And then to run the website locally, run the following commands:

```bash
bundle exec jekyll serve --livereload
```

the `--livereload` option ensures the website automatically refreshes on changes to the files.

### Changes to CSS

To edit the CSS of the website, you need to make edits in the files in the folder `css`. All the files are `.sass` files.

### Changes to The Layout

All changes to the layout should be done in `_layouts` folder.

### Changes to Components

To make changes to components like header or footer, changes should be made in `_includes` folder. You can find the list of components in the repository of the default Jekyll theme [Minima](https://github.com/jekyll/minima/tree/v2.5.1/_includes)
