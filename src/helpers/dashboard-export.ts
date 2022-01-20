export class DashboardExporter {
    static initialised = false;
    static elem: HTMLAnchorElement;

    constructor() {
        DashboardExporter.elem = document.createElement("a");
        DashboardExporter.elem.style.display = "none";
        document.body.appendChild(DashboardExporter.elem);
    }

    public export(data: Blob) {
        let url = window.URL.createObjectURL(data);
        DashboardExporter.elem.href = url;
        DashboardExporter.elem.download = "test.htmldashboard";
        DashboardExporter.elem.click();
        window.URL.revokeObjectURL(url);
    }
}