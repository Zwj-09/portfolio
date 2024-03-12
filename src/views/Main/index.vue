<script setup>
// import copyComp from "@/views/demo/copy.vue";

// import pic1 from "@/assets/imgs/1.png";
// import pic2 from "@/assets/imgs/2.png";
// import pic3 from "@/assets/imgs/3.png";
// import pic4 from "@/assets/imgs/4.png";
// const dataURLS = ref("");
// const drawImg = () => {
//   mergeImages([pic1, pic2, pic3, pic4], 1)
//     .then((dataURL) => {
//       // 这里可以使用合成后的图片
//       dataURLS.value = dataURL;
//     })
//     .catch((error) => {
//       // 处理错误
//       console.error(error);
//     });
// };

// function mergeImages(sources, opacity) {
//   return new Promise((resolve, reject) => {
//     const images = sources.map((source) => {
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.onload = function () {
//           resolve(img);
//         };
//         img.onerror = function () {
//           reject(new Error("Could not load image at " + source));
//         };
//         img.src = source;
//       });
//     });

//     Promise.all(images)
//       .then((images) => {
//         const canvas = document.createElement("canvas");
//         const context = canvas.getContext("2d");

//         // 设置canvas的宽高
//         const totalWidth = Math.max(...images.map((img) => img.width));
//         const totalHeight = Math.max(...images.map((img) => img.height));

//         canvas.width = totalWidth;
//         canvas.height = totalHeight;

//         // 在canvas上绘制所有图片
//         images.forEach((img) => {
//           const tempCanvas = document.createElement("canvas");
//           const tempContext = tempCanvas.getContext("2d");
//           tempCanvas.width = img.width;
//           tempCanvas.height = img.height;
//           tempContext.globalAlpha = opacity; // 设置透明度
//           tempContext.drawImage(img, 0, 0, img.width, img.height);
//           context.drawImage(tempCanvas, 0, 0, img.width, img.height);
//         });

//         // 导出合成后的图片
//         resolve(canvas.toDataURL());
//       })
//       .catch(reject);
//   });
// }
</script>

<template>
  <aside>侧边栏</aside>
  <main>
    <header>
      <router-link to="/home">Home</router-link>
      <router-link to="/me">Me</router-link>
      <router-link to="/info">Info</router-link>
      <router-link to="/test">Test</router-link>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>

    <!-- <copy-comp /> -->

    <!-- <div class="picture">
      <img :src="dataURLS ? dataURLS : pic1" alt="" />
    </div>
    <button @click="drawImg">合成</button> -->
  </main>
</template>

<style lang="less" scoped>
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px dotted red;
}
.picture {
  width: 100vw;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
