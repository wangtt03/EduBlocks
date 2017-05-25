function loadBlocks() {
  loadFiles('a');
}

async function loadFiles(group: string) {
  return Promise.all([
    loadFile(`/src/blocks/${group}/toolbox.xml`),
  ]);
}

async function loadFile(url: string) {
  const req = await fetch(url);
  return req.text();
}

export {
  loadBlocks,
};
