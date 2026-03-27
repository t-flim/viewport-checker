const viewportEl = document.querySelector("#viewport");
        const breakpointEl = document.querySelector("#breakpoint");

        const breakpoints = [
            { name: "xxl", minWidth: 1400 },
            { name: "xl", minWidth: 1200 },
            { name: "lg", minWidth: 992 },
            { name: "md", minWidth: 768 },
            { name: "sm", minWidth: 576 },
            { name: "xs", minWidth: 0 }
        ];

        function getViewportSize() {
            if (window.visualViewport) {
                return {
                    width: Math.round(window.visualViewport.width),
                    height: Math.round(window.visualViewport.height)
                };
            }

            return {
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        function getBreakpointName(width) {
            const match = breakpoints.find(bp => width >= bp.minWidth);
            return match ? match.name : "xs";
        }

        function update() {
            const { width, height } = getViewportSize();
            const bp = getBreakpointName(width);

            viewportEl.textContent = `Width: ${width}px, Height: ${height}px`;
            breakpointEl.textContent = `Breakpoint: ${bp}`;
        }

        update();

        window.addEventListener("resize", update, { passive: true });
        window.addEventListener("orientationchange", update, { passive: true });

        if (window.visualViewport) {
            window.visualViewport.addEventListener("resize", update, { passive: true });
        }