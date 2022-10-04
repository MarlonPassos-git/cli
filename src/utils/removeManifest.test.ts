import { removeManifesf } from "./removeManifesf";


describe("unit - removeManifest", () => { 

  it("should remove manifest.json from the end of the string", () => { 
    const imput = [
      "./src/manifest.json",
      "./custon/manifest.json",
      "./manifest.json",
    ]
  
    expect(removeManifesf(imput)).toEqual([
      "./src",
      "./custon",
      ".",
    ])
  });

})