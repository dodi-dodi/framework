---
layout: page
title: Modal window
---

<div class="row">
  <div class="col-m-12">
    <button type="button" class="btn btn-primary" data-modal-id="#popup-1">Popup Demo 1</button>
    <button type="button" class="btn btn-primary" data-modal-id="#popup-2">Popup Demo 2</button>
  </div>
</div>

Modals are matched by ID. Define `data-modal-id="#modal_id"` on any button. No scripting required.

**Button which open modal window**

```html
<button type="button" class="btn btn-primary" data-modal-id="#popup-1">Popup</button>
```

**Modal window**

```html
<div class="modal" id="popup-1">
  <div class="modal-body">
    <button type="button" class="close close-button">&times;</button>
    <p>
      Lorem ipsum dolor sit amet magna. Etiam nibh eu lacus. Nullam sit amet, diam.
      Proin dui eu mauris turpis, rutrum et, mollis varius, felis non leo in massa augue,
      vestibulum suscipit lectus. Phasellus sapien leo at orci luctus et accumsan congue.
    </p>
    <button type="button" class="btn btn-primary btn-animated btn-small close">Close</button>
  </div>
</div>
```

<div class="modal" id="popup-1">
  <div class="modal-body">
    <button type="button" class="close close-button">&times;</button>
    <p>
      Lorem ipsum dolor sit amet magna. Etiam nibh eu lacus. Nullam sit amet, diam.
      Proin dui eu mauris turpis, rutrum et, mollis varius, felis non leo in massa augue,
      vestibulum suscipit lectus. Phasellus sapien leo at orci luctus et accumsan congue.
    </p>
    <button type="button" class="btn btn-primary btn-animated btn-small close">Close</button>
  </div>
</div>

<div class="modal" id="popup-2">
  <div class="modal-body">
    <button type="button" class="close close-button">&times;</button>
        <p>Lorem ipsum dolor sit amet magna.</p>
    <button type="button" class="btn btn-primary btn-animated btn-small close">Close</button>
  </div>
</div>
