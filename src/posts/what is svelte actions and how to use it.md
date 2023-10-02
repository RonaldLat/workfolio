---
title: What is Svelte Actions and how to use it
author: Ronald Otieno
date: 2023-10-2
layout: blog
published: false
excerpt: Grabbing nodes which are not yet created in DOM can be challenging in Svelte. This is where Actions brings the action.
---

## What is Svelte Actions?
Actions let you write functions for elements not currently in the DOM in advace. This functions will then be run when these nodes are available.

If the description is not clear enought consider this example.
In vanilla JavaScript, you might be using a library that requires a reference an element to initialize.
```js
import example from 'example.js'

example(document.getElementById('myElement'), {options: ''});

```
You might think we should be using `bind:this`. However, you will get an error claiming the element is undefined.
This is because the element is not added to the DOM yet, so you can't get a reference to it.
Alternatively you can use reactive syntax which can be hectic to track.
Another problem you might incur is when you are using `{#each}` blocks, adding dynamic bindings might not be a simple approach to take.

A simple Action might look like this. It will only log itself to the console once it has been created.
```js
function logMe(node){
    console.log(node)
}
```
As you can see, an Action issimple a Javascript function that takes node as a parameter when defined, then runs the same code when the node or element is added to the DOM.
You can apply it to an element with the `use:` Svelte directive after importing it.
```html
<div use:logMe >Hello World </div>
```
This is a more reusable since it can be applied to any element.
But of course Actions can be customized to behave differently on different elements when required.
We can achieve this by passing parameters as second paramenter to allow customization by passing the argument(s) we want during use.
```js
function logMe(node, params){
    console.log(node, params)
```
And you it this way in a component:
```html
<div use:logMe={{'Lorem Ipsum'}} >Hello World </div>
```
We are using double curly braces because we are passing an object to this Action and the other pair is a wrapper for the parameter object itself.

Actions do return two objects, **update** and **destroy**.

The update method runs whenever the parameter passed to the action changes and the destroy will run when the DOM node attached to that action is removed.

Example;
```js
function doSomething(node, params) {
    let foo = fooBaz(node, params);
    return {
     update: (newParams) => {
         foo.setProps(newParams);
     },
     destroy: () => {
         foo.destroy();
     }
    }
}
```

I used Actions on this personal website of mine to interface with a third-party library called Gsap, the one I'm using for scroll animations.

But it can also be useful for things like lazy-loading images, tooltips and adding custom event listeners.
