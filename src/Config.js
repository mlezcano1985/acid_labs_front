const Config = {
    baseUrl: (process.env.NODE_ENV === 'production') ? 'https://floating-woodland-62237.herokuapp.com' : `${window.location.protocol}//${window.location.hostname}:3001`,
    mapKey: 'API_KEY'
};

export default Config;
