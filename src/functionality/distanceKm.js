// function getDistanceInKm(lat1, lon1, lat2, lon2) {
//   const R = 6371;
//   const dLat = deg2rad(lat2 - lat1);
//   const dLon = deg2rad(lon2 - lon1);
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(deg2rad(lat1)) *
//     Math.cos(deg2rad(lat2)) *
//     Math.sin(dLon / 2) *
//     Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const d = R * c; // Distance in km
//   return d;
// }

// function deg2rad(deg) {
//   return deg * (Math.PI / 180);
// }

// export default getDistanceInKm;


    // locationDistance = arr => {
    //   const sorted = arr.sort((a, b) => {
    //     a = distanceKm(
    //       coord.latitude,
    //       coord.longitude,
    //       a.latitude,
    //       a.longitude
    //     );
    //     b = distanceKm(
    //       coord.latitude,
    //       coord.longitude,
    //       b.latitude,
    //       b.longitude
    //     );

    //     return a - b;
    //   });
    //   return sorted;
    // };






    // return 
    // {this.locationDistance(mappedLocations)}