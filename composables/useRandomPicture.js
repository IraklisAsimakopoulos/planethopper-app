export function useRandomPicture() {
  return computed(() => {
    const urls = [
      "https://images.ferryhopper.com/locations/Skiathos.jpg",
      "https://images.ferryhopper.com/locations/Naxos.jpg",
    ];
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
  });
}
