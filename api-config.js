let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'localhost' || hostname === 'localhost.fiddler') {
    backendHost = 'http://localhost:8080';
} else if(hostname === 'ezrent.aoranzhang.com') {
    backendHost = 'http://ezrent-back.aoranzhang.com';
} else {
    backendHost = 'http://ezrent-back.aoranzhang.com';
}

export const API_ROOT = `${backendHost}/graphql`;
export const BACKEND_ROOT = backendHost;