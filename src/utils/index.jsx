import { lazy } from "react";

export const delayImport = (comp) => lazy(() => {
    return Promise.all([
        comp,
        new Promise(resolve => setTimeout(resolve, 250))
    ]).then(([moduleExports]) => moduleExports);
});

export * from 'utils/constants';
export * from 'utils/cookie';
