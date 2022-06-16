//Synchronous
// 1. Put popocorn
// 2. Wait
// 3. Pour drink
// 4. Start Movie
//Asynchronous
// 1. Put popocorn
// 2. Pour drink
// 3. Wait
// 4. Start Movie

async function setupMovieNight() {
  await cookPopcorn();
  await pourDrink();
  startMovie();
}

function cookPopcorn() {
  return promise;
}
