---
path: /utils/icons
title: Icons
---

## Types

TODO: Fix render icons
```html
<div class="icons-demo">
   <ul class="env-list env-list--horizontal--fixed env-list--horizontal--fixed--6">
      {% for icon in site.data.icons %}
      <li class="env-list__item" title="env{{ icon.className }}">
         <svg class="env-icon">
            <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#{{ icon.className }}"></use>
         </svg>
      </li>
      {% endfor %}
   </ul>
</div>
```

## Sizes ##

Icon size utility classes are named using the format: `env-icon--{size}`

Valid values for _size_

-  `x-small`
-  `small`
-  `medium`
-  `large`
-  `x-large`
-  `xx-large`

```html
<div class="icons-demo">
   <ul class="env-list env-list--horizontal">
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-small">
            <use
               xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"
            ></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--small">
            <use
               xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"
            ></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--medium">
            <use
               xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"
            ></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--large">
            <use
               xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"
            ></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-large">
            <use
               xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"
            ></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--xx-large">
            <use
               xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"
            ></use>
         </svg>
      </li>
   </ul>
</div>

```

## Access envision icons in SiteVision ##

<p>
   To access envision icons within SiteVision use
   <i>"/sitevision/envision-icons.svg#icon-"</i>
</p>

```html
<svg class="env-icon">
   <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
</svg>

<svg class="env-icon">
   <use xlink:href="/sitevision/envision-icons.svg#icon-user-fill"></use>
</svg>
```

## Inactive ##

An icon can be marked as inactive by adding modifier: `env-icon--inactive` which will lower opacity and add a hover effect. 

```html
<div class="env-d--flex env-justify-content--center">
   <svg class="env-icon env-icon--xx-large env-icon--inactive">
      <use
         xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"
      ></use>
   </svg>
</div>

```
