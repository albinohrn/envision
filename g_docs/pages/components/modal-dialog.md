---
path: /components/modal-dialog
title: 'Modal dialog'
---

### Default modal dialog ###

```html
<div class="env-modal-dialog doc-demo__modal" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="env-modal-dialog__dialog">
      <section class="env-modal-dialog__content">
         <header class="env-modal-dialog__header">
            <h4 class="env-text env-modal-dialog__header__title">Modal Header</h4>
         </header>
         <div class="env-modal-dialog__body">
            <p class="env-text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="env-modal-dialog__footer">
            <button type="button" class="env-button env-button--primary">Save</button>
            <button type="button" data-modal-dialog-dismiss class="env-button env-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

```

### Optional sizes ###

Uses `env-modal-dialog__dialog--large` and footer `env-modal-dialog__footer--right` aligning footer descendents to the right.

```html

<button id="largeBtn" data-modal-dialog data-target="#example1" type="button" class="env-button env-button--primary env-button--large">Show large</button>

<div id="example1" class="env-modal-dialog" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="env-modal-dialog__dialog env-modal-dialog__dialog--large">
      <section class="env-modal-dialog__content">
         <header class="env-modal-dialog__header">
            <h5 class="env-text env-modal-dialog__header__title">Modal Header</h5>
         </header>
         <div class="env-modal-dialog__body">
            <p class="env-text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="env-modal-dialog__footer env-modal-dialog__footer--right">
            <button type="button" class="env-button env-button--primary">Save</button>
            <button type="button" data-modal-dialog-dismiss class="env-button env-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

```

Uses `env-modal-dialog__dialog--small` 
{%example html %}
<button id="smallBtn" data-modal-dialog data-target="#example2" type="button" class="env-button env-button--primary env-button--large">Show small</button>

<div id="example2" class="env-modal-dialog" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="env-modal-dialog__dialog env-modal-dialog__dialog--small">
      <section class="env-modal-dialog__content">
         <header class="env-modal-dialog__header">
            <h6 class="env-text env-modal-dialog__header__title">Modal Header</h6>
         </header>
         <div class="env-modal-dialog__body">
            <p class="env-text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="env-modal-dialog__footer">
            <button type="button" class="env-button env-button--primary">Save</button>
            <button type="button" data-modal-dialog-dismiss class="env-button env-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

```

## Methods ##

Show  
`$('#myModal').envDialog('show')`

Hide   
`$('#myModal').envDialog('hide')`

Toggle   
`$('#myModal').envDialog('toggle')`

## Events ##
`hide.env-modal-dialog`
```javascript
$('#myModal').on('hide.env-modal-dialog', function() { 
   // Do something... 
});
```

`hidden.env-modal-dialog`
```javascript
$('#myModal').on('hidden.env-modal-dialog', function() { 
   // Do something... 
});
```
`show.env-modal-dialog`
```javascript
$('#myModal').on('show.env-modal-dialog', function() { 
   // Do something... 
});
```

`shown.env-modal-dialog`
```javascript
$('#myModal').on('shown.env-modal-dialog', function() { 
   // Do something... 
});
``` 
