let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'ezrent.aoranzhang.com') {
    backendHost = 'http://ezrent.aoranzhang.com/api';
} else {
    backendHost = 'https://' + hostname + ':8443';
}

export const API_ROOT = `${backendHost}/graphql`;
export const BACKEND_ROOT = backendHost;