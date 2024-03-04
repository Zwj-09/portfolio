export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  const updateLocation = (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", updateLocation);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", updateLocation);
  });

  return {
    x,
    y
  };
}
