---
layout: post # Post Layout
title:  "Style" # Post Title
featured: "/assets/images/posts/image-style.jpeg" # featured image
---

Everything but the kitchen sink.

# Front Matter

```yml
---
layout: post # Post Layout
title:  "Theme Style" # Post Title
featured: "/assets/images/posts/image-style.jpeg" # featured image
---
```

# Header Elements

# Header Level 1
## Header Level 2
### Header Level 3
#### Header Level 4
##### Header Level 5
###### Header Level 6

# Alerts
<p class="success">Success</p>
<p class="info">Information</p>
<p class="warn">Warning</p>
<p class="danger">Dangerous</p>

# Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nibh felis. In quis dui sit amet elit elementum finibus non et tortor. Ut vestibulum purus id risus tempus, in condimentum nisl aliquet. Curabitur malesuada vel quam vel finibus. Aenean pellentesque nibh massa, blandit congue diam porta id. In at ornare tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ullamcorper lectus mi. Nulla facilisi. Nunc bibendum libero lacus, vitae feugiat quam luctus eu. Nam commodo enim nulla, a pellentesque lectus laoreet ut.

Donec vel odio eget odio lobortis tincidunt. Phasellus mollis purus pharetra est malesuada, id gravida nisl tristique. In justo enim, finibus et elit dapibus, consectetur pulvinar ante. Donec ornare dui sed lobortis laoreet. Fusce eget mollis tellus. Etiam viverra, risus eget fermentum tristique, nisi est elementum odio, nec sollicitudin purus justo in massa. Donec elementum libero ac velit auctor accumsan. Integer fermentum ligula a risus feugiat vehicula. Aenean varius sed purus eget condimentum. Duis imperdiet, metus eu ultrices cursus, turpis velit interdum ex, in ultrices risus leo ac neque. Praesent tortor lacus, rhoncus nec accumsan at, rutrum non ex.

Maecenas efficitur sem eu augue facilisis, nec tristique leo aliquam. Vestibulum efficitur facilisis augue ut varius. In fringilla fringilla vehicula. Sed pulvinar tincidunt interdum. Pellentesque placerat nulla sit amet sapien varius tincidunt. Vestibulum eu euismod tellus. Praesent pretium nibh et neque sodales, non ultrices elit sollicitudin. Vestibulum purus erat, eleifend vitae erat non, pretium pharetra risus. Maecenas rutrum ligula et justo ullamcorper vehicula in non massa. Mauris aliquet euismod mauris, a elementum mi. Fusce et orci sed ligula accumsan rutrum. Morbi lobortis urna ut enim interdum pulvinar vitae ut dolor. Sed odio arcu, blandit sit amet rhoncus.

# Span Elements

## Links

<a href="{{ '/' | absolute_url }}">Home</a>

## Emphasis

Text can be either be *italic*, **Bold**, <u>underlined</u>, or ~~strikethrough~~.

# Lists

## Unorganized

- Item 1
- Item 2
- Item 3

## Organized

1. Item 1
2. Item 2
3. Item 3

## Mixed

1. Item 1
    - Sub Item 1
    - Sub Item 2
2. Item 2
    - Sub Item 1

# Images

## Normal

![Image]({{ '/assets/images/posts/image-style.jpeg' | absolute_url }})

## Pixelate.js `class="pixelate"`

<img class="pixelate" src="{{ '/assets/images/posts/image-style.jpeg' | absolute_url }}">

# Horizontal Rule

---

# Blockquotes

> I am just a child who has never grown up. I still keep asking these 'how' and 'why' questions. Occasionally, I find an answer.
>
> --- Stephen Hawking

# Code

## Inline Code

Here is some inline code `<h1>Hello World</h1>`

## Codeblock

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello World HTML</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>
```

# Tables

| Title 1 (Default: Aligned Left) | Title 2 (Aligned Center) | Title 3 (Aligned Right) |
| --- | :---: | ---: |
| Row 1, Column 1 | Row 1, Column 2 | Row 1, Column 3 |
| Row 2, Column 1 | Row 2, Column 2 | Row 2, Column 3 |
| Row 3, Column 1 | Row 3, Column 2 | Row 3, Column 3 |
| Row 4, Column 1 | Row 4, Column 2 | Row 4, Column 3 |