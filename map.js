class yandexmapoffices {
    maps = {}; //global obj with all info
    constructor (props) {
        this.getData(props);
        this.createMaps();
    }
    /**
     * generate maps on page
     */
    createMaps() {
        for (let key in this.maps) {
            let coordinates = [];
            this.maps[key].forEach(el => coordinates.push(el.coordinates));
            let mapParam = {
                center: [58.74, 84.83],
                zoom: 2,
                bounds: ymaps.util.bounds.fromPoints(coordinates)
            }
            this.maps[key].map = new ymaps.Map("map_" + key, mapParam);
            this.maps[key].map.setZoom(this.maps[key].map.action.getCurrentState().zoom - 1)
            this.setPlacemark(coordinates, key);
        }
    }
    /**
     * 
     * @param {*} coordinates 
     * @param {*} mapKey
     * add placemark on map 
     */
    setPlacemark(coordinates, mapKey) {
        coordinates.forEach((coords, index) => {
            let placemark = new ymaps.Placemark(coords, {
                balloonContentHeader: 'ИМЯяяяяяяяяяяя',
                balloonContentBody: 'Телоооооооооооо',
                balloonContentFooter: 'Гороооооод',
            });
            this.maps[mapKey].map.geoObjects.add(placemark); 
        })
    }

    getData (props) {
        for (let key in props) {
            this.maps[key] = props[key].VALUE
        }
    }
}