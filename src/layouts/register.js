const modules = import.meta.glob("@/layouts/*.vue", { eager: true });
export function registerLayouts(app) {
    for (const path in modules) {
        const componentName = path.split("/").at(-1).split(".")[0];
        const fn = modules[path].default;
        //console.log(componentName, fn);
        app.component(componentName, fn);
    }
}