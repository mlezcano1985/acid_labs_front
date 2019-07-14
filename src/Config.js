const Config = {
    baseUrl: process.env['BASE_URL'] || `${window.location.protocol}//${window.location.hostname}:3001`,
    mapKey: process.env['API_KEY'] || 'AIzaSyCpw-ITSec2Rq0sJVBcAqwey4x4kB4bSwM'
};

export default Config;
