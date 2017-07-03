import fs = require('fs');

const Samples: { [file: string]: string } = {
  'Hello World': fs.readFileSync('./samples/hello-world.xml', 'utf8'),
  'Minecraft Disco Dancefloor': fs.readFileSync('./samples/disco.xml', 'utf8'),
};

function newSamples() {
  function getSamples() {
    return Object.keys(Samples);
  }

  function getSample(file: string) {
    return Samples[file];
  }

  return {
    getSamples,
    getSample,
  };
}

export {
  newSamples,
};
