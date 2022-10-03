import fs  from 'fs'
import FileHound from  'filehound';
import path from 'path'
import { fileURLToPath } from 'url';
import  { exec }  from 'child_process'

function arrumaPath() { 
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);

  const files = FileHound.create()
    .paths(__dirname + '/dist')
    .discard('node_modules')
    .ext('js')
    .find();


  files.then((filePaths) => {

    filePaths.forEach((filepath) => {
      fs.readFile(filepath, 'utf8', (err, data) => {

        if (!data.match(/import .* from /g)) {
          return
        }
        let newData = data.replace(/(import .* from\s+['"]\.)(.*)(?=['"])/g, '$1$2.js')
        if (err) throw err;

        fs.writeFile(filepath, newData, function (err) {
          if (err) {
            throw err;
          }
        });
      })

    })
  });
}

export function build() {
  const command = 'tsc -p tsconfig.json'
  return new Promise(resolve => {

    exec(command, (error, stdout, stderr) => {
      resolve({
        error,
        stdout,
        stderr
      });
    });
  });
}


function deletedDist() { 
  return new Promise(resolve => {
    const dir = 'dist'
    fs.rm(dir, { recursive: true }, err => {
      if (err) {
        throw err
      }

      resolve()
    })
  });
}

(async () => { 
  await deletedDist()
  await build()
  arrumaPath()

  console.log('Build finalizado')
})();