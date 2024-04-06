import { createChunk } from "@/utils/createChunk";

// self.addEventListener("message", async (e) => {
//   const {
//     file,
//     CHUNK_SIZE,
//     startChunkIndex: start,
//     endChunkIndex: end
//   } = e.data;

//   const promiseArr = [];

//   for (let i = start; i < end; i++) {
//     promiseArr.push(createChunk(file, i, CHUNK_SIZE));
//   }
//   const chunks = await Promise.all(promiseArr);
//   postMessage(chunks);
// });

onmessage = async (e) => {
  const {
    file,
    CHUNK_SIZE,
    startChunkIndex: start,
    endChunkIndex: end
  } = e.data;

  const promiseArr = [];

  for (let i = start; i < end; i++) {
    promiseArr.push(createChunk(file, i, CHUNK_SIZE));
  }
  const chunks = await Promise.all(promiseArr);
  postMessage(chunks);
};
