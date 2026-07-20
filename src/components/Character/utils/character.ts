import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                console.log("Mesh name:", child.name, "Material name:", Array.isArray(mesh.material) ? mesh.material.map((m: any) => m.name) : (mesh.material as any).name);
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                // Outfit color overrides
                const meshName = (child.name as string).toLowerCase();
                const matName = Array.isArray(mesh.material)
                  ? mesh.material.map((m: any) => (m.name as string).toLowerCase()).join(",")
                  : ((mesh.material as any).name as string).toLowerCase();

                const applyColor = (hexColor: number) => {
                  const colorize = (mat: any) => {
                    mat = mat.clone();
                    mat.color = new THREE.Color(hexColor);
                    mat.needsUpdate = true;
                    return mat;
                  };
                  if (Array.isArray(mesh.material)) {
                    mesh.material = mesh.material.map(colorize);
                  } else {
                    mesh.material = colorize(mesh.material);
                  }
                };

                // Red shirt
                if (meshName.includes("shirt") || matName.includes("shirt")) {
                  applyColor(0xff0000);
                }
                // Black pants / trousers
                if (
                  meshName.includes("pant") || meshName.includes("trouser") || meshName.includes("bottom") ||
                  matName.includes("pant") || matName.includes("trouser") || matName.includes("bottom")
                ) {
                  applyColor(0x111111);
                }
                // Blue shoes / boots / sneakers / footwear
                if (
                  meshName.includes("shoe") || meshName.includes("boot") || meshName.includes("sneaker") || meshName.includes("footwear") ||
                  matName.includes("shoe") || matName.includes("boot") || matName.includes("sneaker") || matName.includes("footwear")
                ) {
                  applyColor(0x1a6bff);
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
