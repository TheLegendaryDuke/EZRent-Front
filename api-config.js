let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'ezrent.aoranzhang.com') {
    backendHost = 'https://ezrent.aoranzhang.com/api';
} else {
    backendHost = 'http://' + hostname + ':8443/api';
}

export const API_ROOT = `${backendHost}/graphql`;
export const BACKEND_ROOT = backendHost;