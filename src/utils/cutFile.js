// 大文件分片
const THREAD_COUNT = navigator.hardwareConcurrency || 4; // 线程

const CHUNK_SIZE = 1024 * 1024 * 5; // 定义每一片的大小
export const cutFile = async (file) => {
  return new Promise((resolve) => {
    const chunkCount = Math.ceil(file.size / CHUNK_SIZE); // 需要分多少片
    const threadChunkCount = Math.ceil(chunkCount / THREAD_COUNT); // 定义每个线程能够分到的分片数

    let finishCount = 0;
    const result = [];

    // 创建线程分配任务
    for (let i = 0; i < THREAD_COUNT; i++) {
      const worker = new Worker(
        new URL("../worker/worker.js", import.meta.url),
        {
          type: "module"
        }
      );

      const start = i * threadChunkCount;
      let end = (i + 1) * threadChunkCount;
      if (end > chunkCount) {
        end = chunkCount;
      }
      worker.postMessage({
        file,
        CHUNK_SIZE,
        startChunkIndex: start,
        endChunkIndex: end
      });

      worker.onmessage = (e) => {
        console.log("ee", e);
        for (let i = start; i < end; i++) {
          result[i] = e.data[i - start];
        }
        worker.terminate();
        finishCount++;
        if (finishCount === THREAD_COUNT) {
          resolve(result);
        }
      };
    }
  });
};
