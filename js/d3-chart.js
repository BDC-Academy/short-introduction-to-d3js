/**
 * D3.js is in essence a DOM manipulation library.
 * It can be used to manipulate any DOM, be it HTML, SVG, Canvas or some other shiny DOM from the future (as long as you can use JavaScript with it).
 *
 * D3.js is actually a bundle of different packages
 * - that contain utils like d3-array, d3-format, d3-time, etc.
 * - that contain functionality that make it easier to work with the (SVG) DOM like d3-shape, d3-path, d3-polygon, etc.
 * - that make it a breeze to calculate positions and sizes like d3-interpolate, d3-random and d3-scale, etc.
 * - that make it possible to generate whole parts or components of a chart like d3-axis and d3-brush
 * - but also packages that are specifically designed to help with creating certain (complex) visualisations like d3-force, d3-hierarchy, d3-geo, etc.
 * 
 * Of all these packages, there is one that is at the base of everything and probably the most important, and that is d3-selection.
 * D3 selections are used to manipulate DOM elements and join data and and DOM elements, effectively 'binding' data-items to DOM elements.
 * It uses the same chaining syntax that JQuery does, making it easier to do a lot of small updates in quick succession.
 * A selection can contain multiple, one or no elements, but works the same no matter how many elements it contains.
 * 
 * In the assigments below, we will mostly look at using d3 selections.
 * Besides that we will touch on some array and formatting utils and use d3-scale and d3-axis to create x and y axis and calculate elements x,y,height and width.
 * D3.js can get kinda complex pretty easy, so don't worry if you don't understand everything right away. It is a short introduction after all ;) 
 *
 * We are going to recreate the chart we made with SVG only with D3.js. 
 * Before we begin, there are already some pieces of code written below to make live a bit easier. 
 * Everything that is surrounded by ##readonly## should, as you would guess, not be altered.
 * 
 * !important!: D3 will search the whole HTML document when using d3.select and d3.selectAll, so make sure you are selecting from the correct svg element with id d3-chart.
*/

/**
 * We start with drawing the rectangles or columns manually with D3.js.
 * We will use the functions d3.select, d3.selectAll, d3.append and d3.attr to achieve this.
 */
 function manuallyAppendColumn() {
  // TODO 1.1: Use the d3.select function to select the svg element by its id attribute 'd3-chart'.
  // Store the result in a variable 'svgSelection'. The result will be of type D3 'Selection'.
  

  // TODO 1.2: Use the d3.append function on the svgSelection and append a 'rect' to it.
  // The append function receives a string which represents the name of the element to be created.
  // Store the selection containing the rect element in a variable 'rectSelection'.
  // You can see in the DOM that D3 already has appended the rect to the svg element.


  // TODO 1.3: Use the d3.attr function on the rect variable to set the attribute 'width' of the rect to 40.
  // After that also set the following attributes using chaining syntax:
  // height: 200, x: 180, y: 150 and fill: green
  // This will be our 'woensdag' rect.


  // TODO 1.4: Create 4 more columns using the append function on the svgSelection variable.
  // Create a column for each of the remaining days in the dataset and position them correctly just like we did with the SVG only chart.
  // Make the rects blue, 40px wide and put 10 pixels between each rect.
  // Set their height based on the dataset values, the same as we did with the SVG only chart.
  // Tip: Remember where svg y=0 was and how the rect is drawn?
  

  // Woop woop! We created our first columns using D3.js!
  // But we did it manually and not based on any data, That's not very useful..


  // TODO 1.5: Use the .selectAll function on the svg variable to select every rect that is a direct child of this svg and store the result in a variable 'allRects'.
  // This result will also be of type 'Selection'. See what the result looks like by using the browsers debugging tools.


  // TODO: 1.6 Change the color of all rects we selected to 'red', by using the .attr function on 'allRects'.
  // You can treat a selection that contains more elements the same way as a selection with one element.


  // TODO: 1.7 Finally, remove all the rects again by calling the .remove function on 'allRects'.
}

/**
 * Adding a rectangle or column manually is not very practical.
 * We probably want to add columns based on some dataset we have laying around... o.O
 * Let's do that again but based on our actual dataset we already defined below.
 * We will use the functions d3.selectAll, selection.data and selection.enter to achieve this.
 * 
 * Note: D3.js selections and data joining c??n become pretty magical pretty fast.
 * It's not a problem if you can't wrap your mind around it right away. You will eventually, someday.. maybe..
 */
function dynamicallyAppendColumn() {
  // TODO 2.1: Use the d3.select function to select the svg element again and store the resulting selection in variable 'svgSelection'.


  // TODO 2.2: Use the .selectAll function on 'svgSelection' to selectAll rect's inside the svg and store it in variable 'allRectSelection'.
  // But wha? There are no rect's inside our svg yet... That's right, so our selection will be empty initially.


  // TODO 2.3: Bind our dataset to the selection and store the result in a variable 'boundRectSelection'
  // There is this function called .data on every D3 selection. You can supply it with every value you want, as long as it is iterable.
  // When you do this all kinds of magic happens under water. D3.js is actually 'joining' the elements in our selection with our data, much like an SQL join works.. sorta.
  // After you bound the dataset to our selection, use the browser debugger tools to see what our selection 'boundRects' looks like and ask your teacher wtf.
  // Notice that allRects and boundRects are not the same selection anymore.


  // TODO: 2.4: use the .enter function that is now available on our 'boundRectSelection'
  // To get the selection of elements that do not exist in the DOM yet but do exist in data, we use the selections 'enter' function after we bound data to it. 
  // Store the result in a variable 'enterSelection'.
  // Inspect the result again using debugger. The enter selection contains five items that are 'placeholders' for DOM elements.


  // TODO: 2.5: Add a rect element for each placeholder element that is in our enterSelection.
  // You can treat the enter selection the same as every other, so you can chain append or attr for example.
  // Call the append function on the enterSelection, append a 'rect' and store the result in variable 'appendedSelection'.
  // Inspect the result again using debugger. The enter selection now contains five items that are svg rect elements.
  // The DOM will now also contain the rects.


  // TODO 2.6: Set the attrs of the rects in our appendedSelection.
  // But what value do we use for our attr width, height, etc.? Well that is where our data comes in.
  // You can supply a function as an argument for most of the D3 chaining functions, including attr.
  // These functions are called 'accessor functions' (see link 'controlling flow of data' in readme).
  // Accessor functions always get three arguments supplied to them: (d)ata-item, (i)ndex and (n)odes
  // and return a numeric or string value, depending on the attr you want to set.
  // The data-item is actually one of the items in the dataset we used with the .data function,
  // the index is the current iteration index (D3 is actually iterating under water) and nodes are all the nodes in our current selection.
  // You can define an accessor function as an anonymous (arrow) function like so: enterSelection.attr('height', (d, i, n) => ...return a number...)

  // We will still need to manually calculate our rectangle's width, height, x and y for now.
  // Set the attrs width, height, x and y on our appendedSelection using accessor functions, except for width which should always be fixed 40px.
  // - to calculate the height: divide our max bar height (300) by 100 and then multiply by the value of the data-item.
  // - to calculate the y position: 
  //  - take the 'svgHeight' variable and substract the height of the rect from it (need to calculate height again)
  //  - To create the bottom margin you need to substract another 50 (px)
  // - to calculate the x position: 
  //  - Take the width of the column (40) 
  //  - add the padding between the columns to it (10)
  //  - multiply the result by the column index (i)
  //  - lasty, add the space/margin we want on the left of the chart (50)
  // Note: are you not familiar with arrow functions? Scream, shout and let it all out (ask your teacher).


  // TODO 2.8: delete every column again (sorry)
  // Call the .remove function on the appendedSelection to remove all rectangles again.


   // TODO Extra: redo step 2.2 to 2.6 in one chain
  // I though D3.js could chain all the things? Yes it can but this was easier to learn and see what was happening.
  // Instead of storing a new selection every step, you can chain everything from step 2.2 to 2.6, so go do it.
  

  // TODO Extra: How could you make the 3rd column appear green again?

}

/**
 * We added our columns dynamically, but we still had to manually calculate the positions and sizes.
 * D3.js has utils for that, so let's use those instead.
 * We can use d3-scales to convert our data into y, x, height and width values. 
 * D3 converts values to pixels on screen, colors, categories or other output ranges using interpolation.
 * We will use the functions d3.scaleLinear, d3.scaleBand.
 */
function positioningAndSizingUsingScales() {
  // TODO 3.1: Start by calling d3.scaleLinear which will return a scaling function. Store the scaling function as yScale.
  // Why do we use a linear scale for our y? When we created the y axis in our SVG only chart, it went from number 0 to 100 in equally divided steps, i.e. a linear scale.


  // TODO 3.2: Configure the yScale using the property setter functions it provides.
  // You can configure scales by (chain) calling the setter functions it exposes.
  // The most important one's are domain and range, which accept an array as a single argument.
  // Domain defines the minimum and maximum (number) between which our data values will / must reside.
  // Range defines the (range of) values that are used in the scales underlying interpolation.
  // In other words it maps a specific domain value, in this case a number, to a specific range value (usually a number that represents a y or x coordinate).
  // Call the .domain function on the yScale and set it to our min and maximum values: [0, 100]
  // After that chain call the .range function on the yScale and set it's value to the
  // y position/pixels that we want to make available to our columns: [350, 50]. Huh? but these values are inverted! jup, because y=0 is at the top of the grid.
  // Note: usually, the max value is calculated using for example d3.max and sometimes the min value is calculated also, but it usually 0.
  

  // TODO 3.3: Create our xScale function by calling d3.scaleBand and set its domain and range.
  // Our x scale is not a linear or numeric scale. It actually is a 'categorical dimension', as it is divided into the categories maandag, dinsdag, woensdag, donderdag, vrijdag.
  // A scale band takes all our categories as domain and takes a numeric range. It maps (interpolates) each category to a specific number in the range.
  // Create the xScale scaling functions using d3.scaleBand, set its domain to ['maandag','dinsdag','woensdag','donderdag','vrijdag'] and its range to [70, 330].
  // Note1: The range is 50 margin left or right + 20px padding
  // Note2: to get the domain of the xScale, you could/should use dataset.map
  

  // TODO 3.4: Create a colorScale scaling function by calling d3.scaleLinear and set its domain and range.
  // We can actually create a scale to give a different color to each of our columns, using interpolation.
  // We will use a linear scale again (other scales can also be used) but we need to specificy our domain and range a bit different.
  // Create another scaleLinear and call it 'colorScale'. 
  // Set the colorScale's domain to the minimum index of the dataset (0) and the maximum index of the dataset (length - 1).
  // Set the colorScale's range to start with 'red' and end with 'blue'.
  // Note: remember, domain and range accept an array as a single argument.
  // Note: we could (and should) use an ordinalScale to one on one map a category to a fixed color, but this is way color.
  

  // TODO 3.5: Create the columns again and use the scales to get the x,y and width and height values.
  // Now that we created our scales we can use them to calculate the position and sizing of elements, based on our data.
  // Select our #d3-chart using d3.select and create the columns again like we did in assigment 2.
  // Use the scales to calculate what the values for x, y, width, height and fill should be.
  // You can get the value or label you need from d in the accessor functions (d, i, nodes) =>
  // - calculate width: scaleBand has another function you can use to get the width of a column / category called .bandwidth()
  // - calculate x: call xScale with the category/label from d
  // - calculate y: call yScale with the value from d
  // - calculate height: take the max y position (350) and substract the yScale result of d.value (because, you know, y=0)
  // - calculate fill: use the colorScale with (i)ndex


  // TODO 3.6: Add inner and outer padding to the xScale
  // You will notice that the columns are squished together.
  // That is because we did not set any so called (inner) padding between the bars nor on the outside (outer padding).
  // We can set the inner and outer padding at the same time with the setter .padding function on the bandScale, which accepts an array with a single value in it.
  // Set the padding to [0.2]


  // TODO 3.7: Return our scales so we may use them in our next assigment
  // This time you may keep the columns you created as they are perfect ;)
  // In fact, we need the scales we created in the next assigment so we want to return them here as a result of this function.
  
  // return { yScale, xScale, colorScale };
}

/**
 * We created scales and used them to position our elements and calculate their size.
 * We can also use these scales to generate an axis with D3. D3 will actually use the scale the same way 
 * we did with the columns, to generate lines and 'ticks' and position them correctly.
 * We will use the functions d3.axisBottom and d3.axisLeft to generate our axis. The result of these functions are generators that generate an axis 'component'.
 * After that we can use setter functions on the axis to configure and tweak it visually.
 */
function appendingAxis(scales) {
  // Note: we need our scales to generate axis with D3, uncomment the following code
  // const { yScale, xScale } = scales;

  // TODO 4.1: Create a g element that functions as a container for an axis
  // Before we generate an axis we need a place to put it in the DOM, a container group element.
  // Select our svg with id 'd3-chart' and append a g element to it with id 'x-axis'. store the g element as variable 'xAxis'.
 

  // TODO 4.2: Use the d3.axisBottom to generate our xAxis
  // To generate an axis with D3, we create an axis generator using the axis functions.
  // You just need to provide a D3 scale as a single argument, our xScale, to the axis function and it will return a generator.
  // Call the d3.axisBottom function and store the resulting generator function in a variable 'xAxisGenerator'.
  // Note: By the way, it is called axisBottom because D3 will put the 'ticks' below the horizontal line. Guess what axisTop, axisLeft axisRight do :)
  

  // TODO 4.3: Use the generator function and pass our g container element xAxis as a single argument to generate our x axis
  // The generator will use the scale and any other configuration to create an axis component and add it as a child to the xAxis container.
  

  // TODO 4.4: Position the axis correctly by transforming the group element xAxis.
  // An axis will always be generated at the 'origin' position so our xAxis is now hanging from the ceiling..
  // Why? because our scale is one-dimensional, from the left to the right, horizontal. So y will always be 0, which is at the top of the svg.
  // Now that the axis is visible we can edit it's appearance by modifying it's DOM elements and the g container and also by using the generator's setter functions.
  // Start by adding an attr 'transform' to the g element and set its value to translate(0, 350).


  // TODO 4.5: Use the generator setter functions to change the tick appearances
  // Wow, it fits perfectly! It's even centered beneath the column correctly. It still is ugly though..
  // First of all, we don't want to see the full label, just the first 2 letters. You can do this by using the generator's tickFormat setter.
  // The tickFormat function receives an accessor function as a single argument, with d being a 'tick' which in this case is a label from our xScale's domain.
  // Call the .tickFormat on the generator using chaining (.axisBottom().tickFormat(...)) and return a substr of d of the first 2 letters.
  // We also don't want those ugly vertical lines pointing to our tick values.
  // Remove these by chaining another setter function to the generator .tickSize, and set it to 0.


  // TODO 4.6: Manually changing the styling of our axis elements
  // To actually change the style of our axis and make it appear bold, red, etc. we need to select the correct elements and set their attrs.
  // Inspect the DOM if you haven't already and see what elements the axis has.
  // Select the #d3-chart #x-axis with D3 and set the following attributes to make it appear the same as our SVG only chart: font-size, font-family, font-weight, color.
  // Note: instead of using attributes, you can also set/override most of the styling with a 'style' attr that takes a CSS string.
  

  // TODO 4.7: now create the yAxis the same way you did the xAxis
  // Not gonna tell you how yet, you figure it out!


  // Wooptiedoo, almost there!
}

/**
 * We only need to add gridlines to finish our chart.
 * We will once again use our scales to calculate the position of the line elements, based on the dataset and ticks.
 * We won't be using any new D3 functions, except for getting the ticks that our yScale generates based on it's configuration,
 * which we will use to generate a dataset for the gridlines.
 */
function appendingValuesAndGridLines(scales) {
  // Note: we need our scales to calculate position, uncomment the following code
  // const { yScale, xScale } = scales;
  // const svg = d3.select('#d3-chart');

  // TODO 5.1: Create horizontal grid lines using the array of ticks the yScale generates
  // To create our tick lines we use multiple line elements just like we did at the svg only chart.
  // To know how many gridlines we need and where to put them, we need to know what ticks are generated by the yScale.
  // We can get an array of all ticks that our current configuration of the yScale generates with the .tick function.
  // Call the .tick function on the yScale and store the result in variable 'yTicks'.
  // The yTicks array contains all tickvalues that our y-axis is showing, including 0.
  // We don't want a gridline at the 0 tick so remove it from the array using the JavaScript #array#.shift() function (google it).

  // Now we can use the ticks as our data to generate the gridlines.
  // Append a g element to the svg and .selectAll line in it (no lines yet, so results in an empty selection).
  // Chain call the .data function and supply the yTicks as dataset.
  // Now .enter and .append 'line' to actually add the lines to the DOM.
  // Give each line a stroke, stroke-width and stroke-dasharray.
  // Finally, to calculate each line's x1, x2, y1 and y2 we use our scales again.
  // The y's are both the same and are exactly the same as the y of the ticks.
  // The accessor function d value will be the tick which we can use with the yScale to calculate the correct y1 and y2 positions. Do it, do it now!
  // To calculate x, we need to know where our scale range starts. You can get the range of a scale by calling the .range function on said scale without arguments.
  // It will return the exact value you put into it [70, 330].
  // Set x1 to the start of the range of xScale and x2 to the end of the range of xScale.

  // You've probably noticed that the order of svg elements is important, as our gridlines are now on top our bars... :S
  // You can fix this by using svg.insert() instead of .append. insert takes two arguments: the element name and secondly a css element selector.
  // use .insert instead of append at the g container element and use :first-child as second argument.


  // Our beautiful column chart is finally finished!
  // No position, width or height was calculated manually, we did it all by using scales!
  // Of course there is so much more to learn about creating charts with D3.js, we just got started with the column chart!
  // how do we create a legend or a tooltip?
  // what if we add another dimension to our column chart and the columns need to be stacked?
  // How the h*ll do we animate these static svg elements?
  // How do we update the chart when our dataset changes?
  // Alas, we are out of time (are we?).
  // If you want to learn more, you can follow this twelve hour course on youtube (who has the time?!) https://www.youtube.com/watch?v=_8V5o2UHG0E
  // Or ask your teacher about the full introduction course.

  // TODO Extra: If we still have time, we can venture into the lands of the enter + update + exit pattern
  // (and scramble your brain a bit) to create a dynamic chart that can updates when the dataset changes.
  // After that we can also look at the join function, which makes the enter + update + exit pattern way easier.
}

//## readonly ##
/**
 * The draw function is just some boilerplate function to run the assigments.
 */
function draw() {
  manuallyAppendColumn();
  dynamicallyAppendColumn();
  const scales = positioningAndSizingUsingScales();
  appendingAxis(scales);
  appendingValuesAndGridLines(scales);
}
// This dataset is globally accessible in this file and is used in the assigments
const dataset = [
  { label: 'maandag', value: 33 },
  { label: 'dinsdag', value: 50 },
  { label: 'woensdag', value: 66 },
  { label: 'donderdag', value: 83 },
  { label: 'vrijdag', value: 100 },
];

/**
 * Already doing some d3 selection voodoo here and using chaining syntax.
 * @param {*} width 
 * @param {*} height 
 * @param {*} id 
 * @returns 
 */
function createSVGSVGElement(width, height, id) {
  // Select the element we want to add our svg graphic to, our root div.
  // Selecting elements from the DOM with D3 is done with css-selectors (element name, id or class and even selecting nested elements for, example 'div p #myTextId'
  // D3 select and selectAll functions return a D3 selection which contain zero, one or multiple elements.
  // Selections are used to manipulate all the DOM elements that it contains, without having to iterate them.
  const rootSelection = d3.select('#root');
  // Append an svg element to our root element with D3.
  // Appending elements to the DOM with D3 is done by element name, for example 'svg' or 'rect' or 'div'
  const svgSelection = rootSelection.append('svg');

  // Using chaining syntax. The updated D3 selection is returned after every attr call, making the chaining syntax possible.
  // Most of the other D3 functions that can be chained also return the updated D3 selection, with one or two exceptions.
  svgSelection
    .attr('id', id)
    .attr('class', 'my-graphic')
    .attr('width', width)
    .attr('height', height);

  return svgSelection;
}

const svgWidth = 400, svgHeight = 400;
createSVGSVGElement(svgWidth, svgHeight, 'd3-chart');
draw();
// ##readonly##