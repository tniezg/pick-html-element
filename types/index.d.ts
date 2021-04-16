declare const create: (customOptions: any) => {
    init: () => void;
    isActive: () => boolean;
    destroy: () => void;
};
export { create };
