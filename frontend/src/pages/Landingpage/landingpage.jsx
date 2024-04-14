import React, { useEffect, useState } from 'react';
import styles from './landingpage.module.css'; // Import module CSS

const MySVGComponent = () => {
    // State variables
    const [svg, setSvg] = useState(null);
    const [body, setBody] = useState(null);
    const [g, setG] = useState(null);
    const [themeSelector, setThemeSelector] = useState(null);
    const [WIDTH, setWidth] = useState(0);
    const [COLS, setCols] = useState(0);
    const [ROWS, setRows] = useState(0);
    const [TOTAL, setTotal] = useState(0);
    const [CENTERX, setCenterX] = useState(0);
    const [CENTERY, setCenterY] = useState(0);
    const [gridIsBuilding, setGridIsBuilding] = useState(false);

    useEffect(() => {
        // Component initialization
        const svgElem = document.getElementsByTagName("svg")[0];
        const bodyElem = document.getElementsByTagName("body")[0];
        const gElem = svgElem.querySelector("g");
        const themeSelectorElem = document.getElementById("themes");

        setSvg(svgElem);
        setBody(bodyElem);
        setG(gElem);
        setThemeSelector(themeSelectorElem);
    }, []);

    useEffect(() => {
        // Initialize SVG component
        if (svg && body && g && themeSelector) {
            initSVG();
        }
    }, [svg, body, g, themeSelector]);

    const initSVG = () => {
        // Set up event listeners
        themeSelector.addEventListener("change", buildGrid);
        body.onload = () => buildGrid(false);
    };

    const setWindowValues = () => {
        // Update window values
        const minFactor = Math.min(svg.clientWidth, svg.clientHeight);
        const newWidth = minFactor > 1200 ? 65 : minFactor > 950 ? 55 : minFactor > 750 ? 45 : 35;
        setWidth(newWidth);
        setCols(Math.floor(svg.clientWidth / newWidth));
        setRows(Math.floor(svg.clientHeight / newWidth));
        setTotal((COLS + 1) * (ROWS + 1));
        setCenterX(Math.floor(COLS / 2));
        setCenterY(Math.floor(ROWS / 2));
    };

    const buildGrid = async (doDelay = true) => {
        setWindowValues();
        if (doDelay) await delay(2000);
        const theme = themes[themeSelector.value];
        g.innerHTML = '';
        g.style = '';
        g.style.fill = theme.base;
        body.className = theme.className || "";
        body.style.backgroundImage = theme.url ? `url('${theme.url}')` : "";

        buildBoxes(theme.base, theme.gutter);
        theme.func();
        maze(); // Call maze function after building the grid
    };

    // Helper functions...
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Add the maze function and its helper functions here...
    async function maze() {
        let blockFactor = 0.23;
        let time =
            TOTAL > 500 ? 30 : TOTAL > 250 ? 40 : TOTAL > 150 ? 50 : 60;

        mazer(0, 0, time);
        mazer(ROWS, COLS, time);
        mazer(0, COLS, time);
        if (TOTAL > 100) mazer(ROWS, 0, time);
        if (TOTAL > 500) {
            mazer(CENTERY, CENTERX, time);
        }

        await delay(1500);
        let rp1 = getRandomPoint();
        lostSquare(
            getTarget(rp1.row, rp1.col),
            TOTAL > 1000 ? 80 : 100,
            getRandomDirection(),
            "solid1"
        );
        let rp2 = getRandomPoint();
        lostSquare(
            getTarget(rp2.row, rp2.col),
            TOTAL > 1000 ? 55 : 75,
            getRandomDirection(),
            "solid2"
        );
        let rp3 = getRandomPoint();
        lostSquare(
            getTarget(rp3.row, rp3.col),
            TOTAL > 1000 ? 25 : 35,
            getRandomDirection(),
            "solid3"
        );
        let rp4 = getRandomPoint();
        lostSquare(
            getTarget(rp4.row, rp4.col),
            TOTAL > 1000 ? 10 : 25,
            getRandomDirection(),
            "solid4"
        );

        async function mazer(row, col, time) {
            if (gridIsBuilding || themeSelector.value !== "Maze") return false;

            let rando = Math.random();
            let target = getTarget(row, col);
            target.setAttribute(
                "class",
                `${rando < blockFactor ? "blocker" : "base"}`
            );
            let next = getRandomMove(new Point(row, col), rando);

            await delay(time);
            mazer(next.row, next.col, time);
        }

        async function lostSquare(target, time, direction, className) {
            if (gridIsBuilding || themeSelector.value !== "Maze") return false;

            target.setAttribute("class", className);
            let nextPoint = getNextPointInDirection(
                new Point(target.getAttribute("row"), target.getAttribute("col")),
                direction
            );
            let nextTarget = getTarget(nextPoint.row, nextPoint.col);

            await delay(time);
            target.setAttribute("class", "base");

            if (!nextTarget || nextTarget.classList.contains("blocker")) {
                let newDirection = getRandomDirection(direction);
                lostSquare(target, time, newDirection, className);
            } else {
                //no loops
                if (Math.random() > 0.95) {
                    lostSquare(
                        nextTarget,
                        time,
                        getRandomDirection(direction),
                        className
                    );
                } else {
                    lostSquare(nextTarget, time, direction, className);
                }
            }
        }
    }

    
    function drawSquare(row, col, x, y, w, h, color) {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        rect.setAttribute("x", x)
        rect.setAttribute("y", y)
        rect.setAttribute("row", row)
        rect.setAttribute("col", col)
        rect.setAttribute("width", w)
        rect.setAttribute("height", h)
        g.appendChild(rect)

    }

    function buildBoxes(color, gutter) {
        gutter = gutter === undefined ? 1 : gutter;
        for (var col = 0; col <= COLS; col++) {
            for (var row = 0; row <= ROWS; row++) {
                let x = WIDTH * col;
                let y = WIDTH * row;
                drawSquare(row, col, x, y, WIDTH - gutter, WIDTH - gutter, color);
            }
        }
    }

    function Point(row, col, type) {
        this.col = parseInt(col);
        this.row = parseInt(row);
        this.type = type;
    }

    function getNextPoint(point) {
        let isEndOfRow = point.col == COLS;
        let newRow = isEndOfRow ? point.row + 1 : point.row;
        let newCol = isEndOfRow ? 0 : point.col + 1;
        if (newRow > ROWS) return undefined;
        return new Point(newRow, newCol);
    }

    function getNextPointInDirection(point, direction) {
        let row = point.row;
        let col = point.col;
        switch (direction) {
            case "north":
                return new Point(row - 1, col);
                break;
            case "south":
                return new Point(row + 1, col);
                break;
            case "east":
                return new Point(row, col + 1);
                break;
            case "west":
                return new Point(row, col - 1);
                break;
            case "northEast":
                return new Point(row - 1, col + 1);
                break;
            case "southEast":
                return new Point(row + 1, col + 1);
                break;
            case "northWest":
                return new Point(row - 1, col - 1);
                break;
            case "southWest":
                return new Point(row + 1, col - 1);
                break;
        }
    }

    function getRandomMove(from, xRando = Math.random(), yRando = Math.random()) {
        var xMove = xRando > 0.66 ? 1 : xRando > 0.33 ? 0 : -1;
        var yMove = yRando > 0.66 ? 1 : yRando > 0.33 ? 0 : -1;

        if (from.row + yMove > ROWS) yMove = 0;
        if (from.row + yMove < 0) yMove = 0;
        if (from.col + xMove < 0) xMove = 0;
        if (from.col + xMove > COLS) xMove = 0;

        return new Point(from.row + yMove, from.col + xMove);
    }

    function getRandomPoint() {
        let row = Math.floor(Math.random() * (ROWS + 1));
        let col = Math.floor(Math.random() * (COLS + 1));
        return new Point(row, col);
    }

    function getRandomDirection(not) {
        var generate = () => {
            let seed = Math.random();
            return seed > 0.75 ? "south" : seed > 0.5 ? "north" : seed > 0.25 ? "east" : "west";
        };
        let which = generate();
        while (not && which == not) {
            which = generate();
        }
        return which;
    }

    function getTarget(row, col) {
        return document.querySelector(`rect[col='${col}'][row='${row}']`);
    }

    function isBoundary(el) {
        let row = el.getAttribute("row");
        let col = el.getAttribute("col");
        return row == 0 || row == ROWS || col == 0 || col == COLS;
    }

    function whichBoundary(el) {
        let row = el.getAttribute("row");
        let col = el.getAttribute("col");
        return row == 0 ? "up" : row == ROWS ? "down" : col == 0 ? "left" : col == COLS ? "right" : undefined;
    }

    function isCorner(el) {
        let row = el.getAttribute("row");
        let col = el.getAttribute("col");
        return (
            (row == 0 && col == 0) ||
            (col == 0 && row == ROWS) ||
            (col == COLS && row == ROWS) ||
            (row == 0 && col == COLS)
        );
    }

    return (
        <svg>
            <g></g>
            <select id="themes"></select>
        </svg>
    );
};

export default MySVGComponent;
