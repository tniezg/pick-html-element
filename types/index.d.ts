declare const create: (customOptions: any) => {
    init: () => void;
    destroy: () => void;
    isActive: () => boolean;
};
export { create };
