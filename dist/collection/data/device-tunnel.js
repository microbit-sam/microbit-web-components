import { createProviderConsumer } from '@stencil/state-tunnel';
export default createProviderConsumer({
    device: undefined,
    services: undefined
}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));
