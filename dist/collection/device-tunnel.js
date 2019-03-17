import { createProviderConsumer } from '@stencil/state-tunnel';
export default createProviderConsumer({
    device: undefined,
    services: undefined,
    deviceInformation: undefined
}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));
