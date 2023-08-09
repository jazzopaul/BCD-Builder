# aBCD Frontend App

## Running the App

To run the app, run 'npm run dev' in the terminal from the top folder of the repo.

-----------------------------------------------------------------------------------------------------------------------------------

## Components

Description of the application components below.

### App
As this is a Next.js app, exists as _app.tsx in the src/pages directory and wraps all other pages such as index.tsx that exist in the pages directory. Each page file can import and use components, styles, or context defined in the _app.tsx file.


### ItemProvider
The provider for the ItemContext context which wraps all components within the App component
which require or have child components which require access to the ItemContext.


### BcdProvider
The provider for the BcdContext context which wraps all components within the App component
which require or have child components which require access to the BcdContext.


### DataProvider
The provider for the DataContext context which wraps all components within the App component
which require or have child components which require access to the DataContext.


### BcdHeader
The header section of the BCD main page. Contains the aBCD logo, utility buttons, as well as title and owner of the BCD.


### BcdTitle
The section of the header that displays the title of the BCD. Allows the user to update the title by clicking into and then editing the field.

Contains the function:

    - handleBlur - Called on the activation of the onBlur event handler for the title's editable html element. Updates the state of the title name in the BcdContext once the focus of the application leaves the editable html element.


### BcdOwner
The section of the header that diplays the owner of the BCD. Allows the user to update the owners name by clicking into and then editing the field.

Contains the function:

    - handleBlur - Called on the activation of the onBlur event handler for the owner's editable html element. Updates the state of the owners name in the BcdContext once the focus of the application leaves the editable html element.


### BcdUtilityButtons
The section of the header that holds the undo, save, share, and download buttons. These buttons are not currently functional and only display as Font Awesome icons.


### Sidebar
A collapsable sidebar for the page, intended for storing future components such as the legend and tags list.

Contains the function:

    - handleClick - Toggles the collapsed nature of the sidebar.


### ItemCanvas
Component used as a 'canvas' for rendering all Item components onto. The ItemEditorForm is also rendered into this component when active.

Contains the function:

    - renderItems - Takes parameters of an array of Items and recursively renders Items.


### ItemEditorForm
Form used for editing Item components. Currently allows for editing of title, description and status fields for each Item.

Contains the functions:

    - handleSave - Turns off ItemEditor visibility and passes the requested Item changes to handleEditItem function.
    - handleClose - Turns off the ItemEditor visibility without passing Item changes.
    - handleClick - Stops the event propagation of a click so that the activeItem state isn't set to null when the ItemEditorForm is clicked.


### TitleInput
Container used to hold the editable field in the ItemEditorForm for editing the title property of an item.

Contains the function:

    - setActiveItemTitle - Takes a parameter of a new title and uses that to update the state of the newItem variable in the ItemEditorForm.
    - handleBlur - Calls the setActiveItemTitle function when the onBlur event handler fires.


### DescriptionInput
The editable field used to display and edit the description of the currently selected Item from within the ItemEditorForm. 

Contains the function:

    - handleInputChange - Takes the changes from the contentEditable div element and applies them to the newItem state variable by way of the setNewItem setter variable passed down by way of the components props.
    - handleFocus - Highlights all the filler description text in the descriptionInput when it is first clicked if no description has been applied to the item yet.


### StatusInput
The editable field used to display and edit the status of the currently selected item from within the ItemEditorForm.

Contains the function:

    - handleInputChange - Takes the changes from the select element and applies them to the newItem state variable by way of the setNewItem setter variable passed down by way of the components props.


### SaveChangesButton
A button used to submit the desired changes made in the ItemEditorForm to the Items state variable held in the ItemContext.

Contains the function:

    - handleKeyDown - Simulates a click event on the button if the enter key is pressed while the button is in focus.


### Item
Component used for representing each Item displayed within the BCD. The children of each Item are rendered within the body of the Item.

Contains the functions:

    - handleClick - Toggles the active state of the Item.
    - handleCollapse - Toggles the collapsed state of the Item.
    - handleDeleteItem - Removes the activeItem with from the Items state array.


### ItemHeader
The header of each Item component. Contains the relevant buttons for each Item, as well as the Item title.

Contains the functions:

    - handleFocus - Highlights the title text immediately when it is first clicked.
    - handleClick - Stops propagation of the click event.
    - handleTitleQuickAlter - Handles altering of the title when it is changed through the quicker double click method rather than by going through the ItemEditor form.
    - truncateTitle - Handles truncating the title to display if it is too long.


### ModifyButtonsContainer
Container to hold the buttons which modify the Item in some way, and which sit on the left hand side of the ItemHeader. 


### DeleteButton
Button has two uses throughout the application depending on where it is called.
    1. Used to delete the currently selected Item.
    2. Used to close the ItemEditorForm.

Contains the function:

    - handleClick - Calls the passed in function from its props and resets the activeItem state to null.


### CollapseButton
Button used to collapse the body of the selected Item. 

Contains the function:

    - handleClick - Collapses the selected Item.


### EditButton
Button used to edit the selected Item.

Contains the function:

    - handleClick - Turns on the visibility of the ItemEditorForm.


### AddButtonContainer
Container to hold the AddButton component, and which sits on the right hand side of the ItemHeader. 


### AddButton
Button used to add a new Item.

Contains the function:

    - handleClick - Takes in a title, a status, and whether or not the item to add is at the top level of the diagram. If the top level parameter is true, adds a new Item with the given title and status to the top level of the diagram, if false, adds a new Item as a child to the selected Item.

-----------------------------------------------------------------------------------------------------------------------------------

## Contexts
Description of the Contexts used in the application found below.

### ItemContext
Context used to manage the state of Items and states relating to Items. Also contains some functions relating to Items.

Contains the functions:

    - createNewItem - Takes parameters of a title, status, and whether the item is to be added to the top level of the diagram or not. Handles the creation of the new Item object.
    - addItemToItems - Takes parameters of the new Item being added, and whether the add is for the top level of the diagram or not. Handles adding the new item to the items state variable.
    - handleAddItem - Takes parameters of a title, status, and whether the item is to be added to the top level of the diagram or not. Sets the activeItem to null if the new Item is to be added to the top level of the diagram. Handles the case of an attempt to add an Item past the maximum number of levels by returning the function. Otherwise calls the createNewItem and addItemToItems functions.
    - handleEditItem - Takes an Item object which holds the new set of Item attributes and the id of the Item to replace as a parameter, then maps through the items state array until the correct Item is found and swaps it out for the updated Item.


### BcdContext
Context used to manage the state of the BCD's global properties.

Contains the function:

    - loadBcdGlobalDataFromJson - Called by a useEffect hook when the data from a JSON file is successfully loaded. Uses the setter functions provided in the context for setting all the BCD global properties from the data state variable provided by the DataContext.


### DataContext
Context used to import the data from a provided JSON file. The import is done through a useEffect hook and the import path is currently hardcoded.
