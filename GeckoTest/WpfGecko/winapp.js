﻿'use strict';
let WinApp = {
    VIEWID: "__appview",
    viewport: null,
    click: () => { },
    mousemove: (event) => { },
    render: function (canvasElement) {
        this.viewport = this.viewport || document.getElementById(this.VIEWID);
        if (this.viewport == null) {
            this.viewport = document.createElement("img");
            this.viewport.id = this.VIEWID;
            canvasElement.parentNode.insertBefore(this.viewport, canvasElement);
        }
        this.viewport.src = canvasElement.toDataURL("image/png");
    },
}