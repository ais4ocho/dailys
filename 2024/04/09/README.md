# Daily Build - April 9, 2024

## Description

A personal project today for Lizard Lab just to replace a simple string in the metadata across a bunch of json files in a folder. Would normally approach this with a python script but wanted to try a few things in Javascript / Nodejs.

### References

- ChatGPT prompt:

"I have a folder, /lizard-in, of json files in the following format:

{"name": "Lizard #0", "description": "This is a strong and durable lizard for all your outdoors adventures! It will not rust, fade, or get soggy when submerged in your choice of beverages. Please note that it has not been tested for space travel.", "image": "https://ipfs.lizardlab.io/ipfs/QmRtamhHnHRS8ZqABgysnhh5j3JBJ5pV5VLz5wQvWQnyFK", "attributes": [{"trait_type": "Background Color", "value": "Pink"}, {"trait_type": "Skin Color", "value": "Gray"}, {"trait_type": "Chassis", "value": "Standard"}, {"trait_type": "Skin Mod", "value": "Topo"}, {"trait_type": "Eyes", "value": "Big Pink"}, {"trait_type": "Mouth", "value": "Terminator"}, {"trait_type": "Back", "value": "Plug"}, {"trait_type": "Frequency", "value": "103.5 MHz"}]}

I want to iterate through them, verify they have name, descriptions, image, and an attributes array.

Ideally I would like to make a class for Lizard, have a function that verifies the correct data structure, and then I would like to build out functions to modify the fields, and then finally a function to output the new file to a new folder /lizard

What packages would you recommend to get started, if any?"

This prompt gave me the imports for fs/json and a rough structure of how to model the goal.

### Lessons Learned

- Nothing huge here, just interacting with files some but JSON works natively
- Did some testing w/ console.log vs console.error
