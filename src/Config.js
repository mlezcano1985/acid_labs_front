const Config = {
    baseUrl: (process.env.NODE_ENV === 'production') ? 'https://floating-woodland-62237.herokuapp.com' : `${window.location.protocol}//${window.location.hostname}:3001`,
    mapKey: 'AIzaSyCnKFbWV13tenNFJ1ANVX5pGCNJ5VkMzM0'
};

export default Config;