const fs = require('fs');

const read = (file: string) => {
  new Promise((resolve, reject) => {
    fs.readFile(file, (err: Error, buffer: Buffer) => {
      console.log(buffer);
      if (err) {
        reject(err);
      } else {
        resolve(buffer.toString());
      }
    });
  });
};

(async () => {
  const content = await read('../../../babel.config.json');
  console.log(content);
})();
