let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'ezrent.aoranzhang.com') {
    backendHost = 'http://ezrent-back.aoranzhang.com';
} else {
    backendHost = 'http://' + hostname + ':8080';
}

export const API_ROOT = `${backendHost}/graphql`;
export const BACKEND_ROOT = backendHost;