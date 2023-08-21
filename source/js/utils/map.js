const maps = function () {
  const tabletWidth = window.matchMedia(`(max-width:1199px)`);
  const mobileWidth = window.matchMedia(`(max-width:767px)`);

  const mapInitial = function () {
    const mapOptions = {
      center: [55.77630161793747, 37.62909021520653],
      zoom: 15,
      scrollWheelZoom: false,
    };

    const iconOptions = {
      iconUrl: './img/svg/map-marker.svg',
      iconSize: [34, 46],
      iconAnchor: [24, 36],
    };

    if (tabletWidth.matches) {
      iconOptions.iconSize = [30, 40];
      mapOptions.center = [55.77607161793747, 37.62909021520653];
    }

    if (mobileWidth.matches) {
      iconOptions.iconSize = [20, 26];
      mapOptions.center = [55.77629261793747, 37.62899721520653];
    }


    const customIcon = L.icon(iconOptions);

    const markerOptions = {
      clickable: true,
      draggable: true,
      icon: customIcon,
    };

    const map = new L.map('map', mapOptions);
    const layer = new L.TileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=StFld3NCrvag1TMtL9m1');

    map.addLayer(layer);

    const marker = L.marker({lat: 55.774864204309026, lng: 37.6326414970373}, markerOptions);

    marker.addTo(map);
  }

  mapInitial();
};

export {maps};
