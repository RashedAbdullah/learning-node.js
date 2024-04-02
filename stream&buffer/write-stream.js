const fs = require("fs");

const readStream = fs.createReadStream(`${__dirname}/data.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/stream-write.txt`);

// Reading a file then write the same file in another file:
// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });

// Same work:
readStream.pipe(writeStream);
