// Asynchronously loads for the component for Images

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
