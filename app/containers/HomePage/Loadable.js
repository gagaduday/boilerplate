/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import Loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
