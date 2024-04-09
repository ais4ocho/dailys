const fs = require("fs");
const path = require("path");

class Lizard {
  constructor(data) {
    this.data = data;
  }

  updateLizardImage = () => {
    const oldBaseImageUrl = "https://ipfs.lizardlab.io/ipfs/";
    const newBaseImageUrl = "https://gateway.ipfs.io/ipfs/";

    this.data.image = this.data.image.replace(oldBaseImageUrl, newBaseImageUrl);

    console.log(`Updated image URL to: ${this.data.image}`);
  };

  toJSON = () => {
    return JSON.stringify(this.data, null, 4);
  };
}

function processLizards() {
  // get all of the lizard metadata objects
  const directoryPath = path.join(__dirname, `/lizard-in`);
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.error(`Unable to scan directory: ${err}`);
    }

    // iterate through the lizards
    files.forEach((file) => {
      const fullPath = path.join(directoryPath, file);

      // build and verify a lizard
      fs.readFile(fullPath, "utf8", (err, data) => {
        if (err) {
          console.error(`Could not read file: ${err}`);
        }

        const lizardData = JSON.parse(data);
        const lizard = new Lizard(lizardData);

        // update the image
        lizard.updateLizardImage();

        //output the new lizard object
        const newFilePath = fullPath.replace("/lizard-in", "/lizard");

        fs.writeFile(newFilePath, lizard.toJSON(), (err) => {
          if (err) throw err;
          console.error(`Lizard saved to ${newFilePath}`);
        });
      });
    });
  });

  return;
}

processLizards();
