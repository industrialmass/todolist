# Todolist

This program, written in vanilla JavaScript without any frameworks, is a To Do List application - CRUD boiled down to its simplest. 

## Retrospective

### Styling

From the start, I knew that I wanted an application that looked good. Too many of these To Do List applications just look terrible. As I'm not a designer, I shamelessly set out to emulate Todoist, one of the more popular To Do List programs out there. I believe that I largely succeeded in that goal. 

I used a BEM class naming methodology, something I've done on many projects in the past, to help keep the class namespace clean. This was my first time working with Font Awesome icons as a node module rather than imported directly as SVGs. I found several elements of Font Awesome fairly frustrating from a development perspective, especially the inconsistent width of icons, but I still think I'll be using it again. 

One thing I really regret, looking back on the stylesheet, is the haphazard way it was organized. Especially towards the end of development, I found it increasingly difficult to find the right styles when I needed them. In the future, I think I'll make much more extensive use of comments and organize my styles from the beginning. There are a few additional style features I'd like to come back to on this: notably, the application is currently fairly unresponsive on mobile.

### Code

When coding the project, I had separation of concerns at the back of my mind. Logic for the DOM and logic for the data should be kept as separate as possible. It's all too easy to get them mixed - as you can see in this project. While I think I mostly succeeded at keeping things separate, there are a few places where they mixed together a bit more than I'd like. The structure and architecture of an applications is extremely important, and definitely one of the areas of software development I find the most interesting.

I utilized event delegation with bubbling for performance and maintainability reasons, but I think I probably could've split out some of the event handlers into their own modules.

The real challenge of UI development, I think, is effectively managing the application's state. Here, I used a global state module (specifically, an object) that I retrieved and modified using a variety of methods. While this worked pretty well for my purposes, I don't think mutating the object is ideal. I also was, at times, inconsistent in its use. Sometimes, I would retrieve the state inside of the module. Other times I would pass it in as a function parameter. Little inconsistencies like this definitely add up.

Working on this project really solidified my grasp of vanilla JavaScript DOM manipulation. It also highlighted how even the simplest application can involve an incredible amount of work just to get up and running. While I've worked with JavaScript on personal projects for a fairly long time with Node, my exposure to Web APIs has been much more limited - but ultimately I found it fairly easy to pick up. My new favorite DOM method is `Element.closest`, which I detail below.

### Problem and Solution

The behavior of my Edit button was meant to work like so: click the button, close any other editors currently open, and replace a list item with a task editing form. The form would have all of its fields filled in with data related to the task being edited.

I had, earlier, come up with a simple way to close the task editing form. Just rerender the parent list. No problem! Now we can easily put the list item right back where it belongs.

Now, my application has many edit buttons. In order to determine which edit button the user was clicking, it was necessary to loop over the list's elements and check using the `Element.contains` method on `event.target`.

What I didn't realize was that, when I had one editor open and went to edit another, my application would fail. Why? It took me an hour of struggle to figure it out. I was replacing a DOM element that was no longer in the DOM with my task editor - and not throwing any errors!

The solution involved my discovery of a new method: `Element.closest`. This really was a godsend that I wish I had found sooner. Using `Element.closest`, I could find the parent node *before* I rerendered it, then retrieve the newly-rendered node using the old node's ID. I could then proceed with the rest of my operations as normal.
