
//let orange = color(247, 137, 27);  // fixme: why doesn't it work?

// define the time for init animations
let time;

let t = 0;

// --------------- Suggestions for future scenes -------------------
// todo: 1. be more careful at naming things
// todo: 2. maybe use += to control time
// todo: 3. enable dragging text to the correct location with mouse, instead of hardcoding x and y
// todo: 4. to do 3,
// todo: 5. each trivial object should have a scene number associated with it, otherwise it gets messy in setup()
// todo: 6. incorporate the frames() function into the getT() function (DISCARD)


// scene 1 -- paragraph 1
switch (sn) {
    case 1:  // paragraph 1
        t = frames(19);
        time = {
            axes: frames(2),
            leastSqLine: frames(5),
            formula: frames(8),
            emphasizeBhat: frames(11),
            emphasizeBend: frames(12.5),
            formulabeta: frames(13),
            dottedlineX: t,
            dottedlineY: t,
            rect1: t + 50,
            rects: t,
        };
        break;
    case 2:  // paragraph 2
        t = 0;
        time = {
            axes: t += 30,
            table: t += 30,
            points: t += 50,
            indVar: frames(10),
            depVar: frames(13),
            emphasizeX: frames(15),
            emphasizeXend: frames(17),
            simpleLR: frames(18),
        };
        break;
    case 3:  // paragraph 3, 4
        t = 0;
        time = {
            axes: frames(0),
            linRel: frames(4),
            leastSqLine: frames(8),
            formula: frames(12),
            showSlope: frames(16),
            showIntercept: frames(18),
            emphasizeBhat: frames(21),
            emphasizeB0: frames(22),
            estimates: frames(26),
            emphasizeBend: frames(36),
            emphasizeB0end: frames(36),
            emphasizeYhat: frames(36.7),
            givenx: frames(40) - t,
            estimateLine: frames(42) - t,
            giveny: frames(43) - t,
        };
        break;
    case 5:  // paragraph 5, 6
        t = frames(55);
        time = {
            formula: frames(0),

            emphasizeBhat: frames(3),
            formulabeta: frames(6),
            emphasizeBend: frames(20),
            dottedlineX: frames(21),
            dottedlineY: frames(27),
            showCoord: frames(35),
            showCoordFade: frames(37),
            xMinusXbarLine: frames(38.7),
            xMinusXbar: frames(40.7),
            yMinusYbarLine: frames(44),
            yMinusYbar: frames(46),
            rect1: frames(50),
            formulaFadeOut: frames(52.7),
            areaEq: frames(53),
            rects: t + frames(5),
            areaEqFadeOut: t + frames(9.7),
            sumRectA: t + frames(10),
            emphasizeNumerator: t + frames(13),
            emphasizeNumEnd: t + frames(15),
            emphasizeDenom: t + frames(20)
        };
        break;
    case 7:  // paragraph 7
        time = {
            axes: frames(0),
            dottedlineX: frames(0),
            formulabeta: frames(0),
            sumRectA: frames(0),

            yEqualsx: frames(5),
            toxx: frames(8),
            showCoord: frames(11),
            dottedlineY: frames(16),
            centroid: frames(22),
            rects: frames(23),
            rect1: frames(23) + 47,
            showCoordFade: frames(28),
            xMinusXbarLine: frames(30),
            xMinusXbar: frames(30.5),
            sumSqA: frames(33.5),
            emphasizeDenom: frames(35),
            emphasizeNumerator: frames(43.5)
        };
        break;
    case 8:
        time = {
            axes: frames(0),
            formulabeta: frames(0),
            dottedlineX: frames(0),
            dottedlineY: frames(0),
            sumSqA: frames(0),
            sumRectA: frames(0),
            rects: frames(0),
            rect1: frames(0) + 47,
            toxx: frames(1),

            restore: frames(5),
            bigA: frames(9),
            //bigA_end: frames(6),
            bw_0_and_1: frames(14),
            leastSqLine: frames(20),
            bw_0_and_1_end: frames(26),
            to_b_greater_1: frames(27),
            bigV: frames(30),
            restore2: frames(30.3),       // show square areas
            to_b_smaller_0: frames(31),   // restore
            greater_than_1: frames(35),
        };
        break;
    case 9:   // paragraphs 9 and 10
        time = {
            axes: frames(0),
            formulabeta: frames(0),
            dottedlineX: frames(0),
            dottedlineY: frames(0),
            sumSqA: frames(0),
            sumRectA: frames(0),
            leastSqLine: frames(0),
            rects: frames(0),
            rect1: frames(0) + 47,
            to_b_greater_1: frames(1),

            to_b_smaller_0: frames(5),
            is_negative: frames(8),
            quadrant2: frames(11),
            quadrant4: frames(13.5),
            minuses: frames(17.7),

            y_bar_fade: frames(22),
            toxx: frames(22),      // show square areas
            emphasizeDenom: frames(23.5),
            greater_than_0: frames(24),
            pluses: frames(27),
            restore2: frames(30),  // restore

            showIntercept: frames(36),
            centroid: frames(40),

        };
        break;
    case 10:
        time = {
            axes: frames(0),
            formulabeta: frames(0),
            dottedlineX: frames(0),
            dottedlineY: frames(0),
            sumSqA: frames(0),
            sumRectA: frames(0),
            leastSqLine: frames(0),
            rects: frames(0),
            rect1: frames(0) + 47,
            toxx: frames(1),

            to_b_smaller_0: frames(5),
            ybar_start: frames(5),
            showIntercept: frames(6),
            centroid: frames(10),
            emphasizeNumerator: frames(16.5),
            emphasizeDenom: frames(17),
        };
        break;
    case 11:
        time = {
            axes: frames(0),
            formulabeta: frames(0),
            dottedlineX: frames(0),
            dottedlineY: frames(0),
            sumSqA: frames(0),
            sumRectA: frames(0),
            leastSqLine: frames(0),
            rects: frames(0),
            rect1: frames(0) + 47,
            //to_b_greater_1: frames(1),

            //emphasizeNumerator: frames(1),
            division_line1: frames(5),
            n_1: frames(11),
            cov: frames(12.5),
            //emphasizeNumEnd: frames(4),
            toxx: frames(16.5),
            //emphasizeDenom: frames(15),
            division_line2: frames(17),
            n_2: frames(19.5),
            var: frames(21.5),
        };
        break;
}

let xs = [10, 14, 20, 27, 33, 41];
let ys4 = sn === 8 ? [10, 14, 20, 27, 33, 41] : [40, 36, 24, 19, 7, 4];

let ys = sn >= 9 ? [40, 36, 24, 19, 7, 4] : [11, 17, 18, 29, 31, 37];
let ys1 = [11, 17, 18, 29, 31, 37];
let ys2 = [-2, 4, 18, 29, 36, 49];
let ys3 = sn === 9 || 10 ? [40, 36, 24, 19, 7, 4] : [-2, 4, 18, 29, 36, 49];


class SLR_Plot extends Plot {    // the plot used to illustrate simple linear regression
    constructor(args) {
        // somehow in the super class, the actual coordinate of x_bar is called avgX (xs)
        // and its canvas coordinate is called xbar (ptXs). I should really be more considerate
        // in how I name things...
        super(args);

        // the two dotted lines displaying x-bar and y-bar

        this.xbarLine = new DottedLine({
            x1: this.xbar, x2: this.xbar,
            y1: this.top, y2: this.bottom,
            color: color(77, 177, 247),
            strokeweight: 2,
            start: getT(time.dottedlineX)
        });
        this.ybarLine = new DottedLine({
            x1: this.left, x2: this.right,
            y1: this.ybar, y2: this.ybar,
            color: color(77, 177, 247),
            strokeweight: 2,
            start: getT(time.dottedlineY)
        });

        // the lines showing x1 - x_bar and y1 - y_bar
        let index = this.numPts - 1;
        this.xMinusxbarLine = new Line({
            x1: this.xbar,
            x2: this.ptXs[index],
            y1: this.ptYs[index],
            y2: this.ptYs[index],
            start: getT(time.xMinusXbarLine),
            color: color(247, 137, 27)
        });
        this.yMinusybarLine = new Line({
            x1: this.ptXs[index],
            x2: this.ptXs[index],
            y1: this.ybar,
            y2: this.ptYs[index],
            start: getT(time.yMinusYbarLine),
            color: color(247, 137, 27)
        });

        // We can use the emphasis class as rectangles, with the end time "infinite"
        this.rects = [];
        for (let i = 0; i < this.numPts - 1; ++i) {
            this.rects[i] = new Emphasis({
                x: this.xbar,
                y: this.ybar,
                w: this.ptXs[i] - this.xbar,
                h: this.ptYs[i] - this.ybar,
                start: getT(time.rects) + i * frames(2) / this.numPts,
                end: frames(1000),  // todo
                color: color(207, 207, 27, 87)
            });
        }
        this.rects[index] = new Emphasis({
            x: this.xbar,
            y: this.ybar,
            w: this.ptXs[index] - this.xbar,
            h: this.ptYs[index] - this.ybar,
            start: getT(time.rect1),
            end: frames(1000),  // todo
            color: color(207, 207, 27, 87)
        });

        this.beta0Line = new Line({
            x1: this.centerX, y1: this.centerY,
            x2: this.centerX, y2: this.y_intercept,
            start: getT(time.showIntercept),
            color: color(247, 117, 117)
        });
        this.slopeLine1 = new Line({   // I just hardcoded these values..
            x1: 400, y1: 300,
            x2: 400, y2: 264,
            start: getT(time.showSlope),
            color: color(247, 117, 117)
        });
        this.slopeLine2 = new Line({
            x1: 400, y1: 300,
            x2: 357, y2: 300,
            start: getT(time.showSlope),
            color: color(247, 117, 117)
        });
        this.yEqualsxLine = new Line({
            x1: 0, y1: 650,
            x2: 650, y2: 0,
            start: getT(time.yEqualsx),
            color: color(77, 177, 77),
        });
        if (sn === 9) {
            this.quadrant2 = new Emphasis({
                x: 0, y: 0,
                w: this.xbar, h: this.ybar,
                start: getT(time.quadrant2),
                color: color(77, 77, 177, 77)
            });
            this.quadrant4 = new Emphasis({
                x: this.xbar, y: this.ybar,
                w: this.right - this.xbar, h: this.bottom - this.ybar,
                start: getT(time.quadrant4),
                color: color(77, 77, 177, 77)
            });

            this.plusMinus = [];
            this.plusMinus[0] = new TextFadeIn({
                str: "+",
                mode: 1, font: comic,
                x: this.xbar + (this.right - this.xbar) / 2,
                y: this.ybar / 2 - 50,
                size: 147, color: [247, 77, 97],
                start: getT(time.pluses)
            });
            this.plusMinus[1] = new TextFadeIn({
                str: "-",
                mode: 1, font: comic,
                x: this.xbar / 2,
                y: this.ybar / 2 - 50,
                size: 147, color: [27, 147, 247],
                start: getT(time.minuses)
            });
            this.plusMinus[2] = new TextFadeIn({
                str: "+",
                mode: 1, font: comic,
                x: this.xbar / 2,
                y: this.ybar + (this.bottom - this.ybar) / 2 - 50,
                size: 147, color: [247, 77, 97],
                start: getT(time.pluses)
            });
            this.plusMinus[3] = new TextFadeIn({
                str: "-",
                mode: 1, font: comic,
                x: this.xbar + (this.right - this.xbar) / 2,
                y: this.ybar + (this.bottom - this.ybar) / 2 - 50,
                size: 147, color: [27, 147, 247],
                start: getT(time.minuses)
            });
        }
        // added for scene 3
        let givenx = 450;
        this.givenXPt = new PlotPoint({
            x: givenx + this.centerX,
            y: this.centerY,
            radius: 24,
            start: getT(time.givenx),
            color: [255, 185, 0]
        });
        this.givenYPt = new PlotPoint({
            x: givenx + this.centerX,
            y: this.y_intercept - this.beta * givenx,
            radius: 17,
            start: getT(time.giveny),
            color: [255, 185, 0]
        });
        this.estimateLine = new DottedLine({
            x1: givenx + this.centerX, x2: givenx + this.centerX,
            y2: this.y_intercept - this.beta * givenx, y1: this.centerY,
            color: color(77, 177, 247),
            strokeweight: 2,
            start: getT(time.estimateLine)
        });
        this.centroid = new PlotPoint({
            x: this.xbar, y: this.ybar,
            radius: 17,
            color: [255, 185, 0],
            start: getT(time.centroid)
        });
    }

    // this method should be only called once, i.e. at one specific frame
    reset(xs, ys) {
        this.xo = this.Xs.copyWithin();
        this.yo = this.Ys.copyWithin();
        this.xd = xs.copyWithin();
        this.yd = ys.copyWithin();
        this.timer = new Timer2(frames(1.4));
        this.resetted = true;
    }

    // helper method
    resetting() {
        let t = this.timer.advance();
        for (let i = 0; i < this.numPts; i++) {
            // this.Xs[i] = this.xo[i] + (this.xd[i] - this.xo[i]) * t;
            this.Ys[i] = this.yo[i] + (this.yd[i] - this.yo[i]) * t;
        }
        this.calcCoords();
        for (let i = 0; i < this.numPts; i++) {
            this.points[i].reset(this.ptXs[i], this.ptYs[i]);
        }
        this.calcParams();
        this.LSLine.reset({
            y1: this.y_intercept + this.beta * (this.centerX - this.left),
            y2: this.y_intercept - this.beta * (this.right - this.centerX)
        });
        this.ybarLine.reset({
            y1: this.ybar, y2: this.ybar,
        });
        this.xMinusxbarLine.reset({
            x1: this.xbar,
            x2: this.ptXs[this.numPts - 1],
            y1: this.ptYs[this.numPts - 1],
            y2: this.ptYs[this.numPts - 1],
        });
        for (let i = 0; i < this.numPts; i++) {
            this.rects[i].reset({
                x: this.xbar,
                y: this.ybar,
                w: this.ptXs[i] - this.xbar,
                h: this.ptYs[i] - this.ybar
            })
        }
        if (sn === 9) {
            this.quadrant2.reset({ w: this.xbar, h: this.ybar, });
            this.quadrant4.reset({ x: this.xbar, y: this.ybar,
                w: this.right - this.xbar, h: this.bottom - this.ybar, });
        }
    }


    show() {
        if (this.resetted) {
            this.resetting();
        }
        this.xbarLine.show();
        this.ybarLine.show();
        this.xMinusxbarLine.show();
        this.yMinusybarLine.show();
        for (let r of this.rects) {
            r.show();
        }
        this.showAxes(); // this.showGrid()
        this.showPoints();
        this.LSLine.show();
        this.beta0Line.show();
        this.slopeLine1.show();
        this.slopeLine2.show();
        this.yEqualsxLine.show();
        if (sn === 9) {
            this.quadrant2.show();
            this.quadrant4.show();
            for (let p of this.plusMinus) {
                p.show();
            }
        }
        this.givenXPt.show();
        this.givenYPt.show();
        this.estimateLine.show();
        this.centroid.show();
    }

    getXbar() {
        return this.xbar;
    }

    getYbar() {
        return this.ybar;
    }
}

let hg;
let plot;
let kats = [];
let txts = [];
let lines = [];
let arrows = [];
let emps = [];
let table;
let comic;


function preload() {
    comic = loadFont('../lib/font/comic.ttf');
}

function setup() {
    //pixelDensity(1);
    frameRate(fr);

    createCanvas(cvw, cvh);
    background(0);

    hg = new HelperGrid();
    plot = new SLR_Plot({
        right: 675,
        centerX: 100, centerY: 550,
        stepX: 10, stepY: 10,
        start: getT(time.axes),
        startPt: time.points,
        startLSLine: getT(time.leastSqLine),
        xs: xs, ys: ys
    });
    table = new Table({
        x: 700, y: 170,
        size: 37,
        xs: xs, ys: ys,
        start: getT(time.table),
        font: comic
    });

    txts[0] = new TextWriteIn({
        str: "Independent variable",
        x: 777, y: 57,
        font: comic,
        start: getT(time.indVar),
        color: [57, 147, 247]
    });
    arrows[0] = new Arrow({
        x1: 767, y1: 111,
        x2: 727, y2: 167,
        start: getT(time.indVar) + frames(0.7),
        duration: frames(2),
        color: color(57, 147, 247)
    });

    txts[1] = new TextWriteIn({
        str: "Dependent variable",
        x: 777, y: 327,
        font: comic,
        start: getT(time.depVar),
        color: [247, 77, 247]
    });
    arrows[1] = new Arrow({
        x1: 767, y1: 327,
        x2: 727, y2: 277,
        start: getT(time.depVar) + frames(0.7),
        duration: frames(2),
        color: color(247, 77, 247)
    });

    txts[2] = new TextFadeIn({
        str: "\"Simple\"\nLinear Regression",
        mode: 1,
        x: 950, y: 500,
        font: comic,
        start: getT(time.simpleLR),
    });
    txts[3] = new TextWriteIn({
        str: "Linear relationship",
        x: 777, y: 57,
        font: comic,
        start: getT(time.linRel)
    });

    txts[4] = new TextWriteIn({
        str: "Sum of rectangle areas",
        x: 727, y: sn <= 100 ? 117 : 147,   // fixme
        font: comic,
        color: color(255, 255, 17),
        start: getT(time.sumRectA),
    });

    txts[5] = new TextWriteIn({
        str: "Sum of square areas",
        x: 757, y: sn <= 100 ? 477 : 447,
        font: comic,
        color: color(255, 255, 17),
        start: getT(time.sumSqA),
    });
    if (sn < 11) {
        arrows[2] = new Arrow({
            x1: 920, y1: 170,
            x2: 1000, y2: 280,
            start: getT(time.sumRectA),
            color: color(255, 255, 17)
        });
        arrows[3] = new Arrow({
            x1: 940, y1: 490,
            x2: 1000, y2: 400,
            start: getT(time.sumSqA),
            color: color(255, 255, 17)
        });
    }

    txts[6] = new TextWriteIn({
        str: "\"Estimates\"",
        x: 837, y: 248,
        font: comic,
        color: color(255, 255, 17),
        start: getT(time.estimates)
    });

    kats[0] = new Katex0({
        text: "\\textstyle\\hat{\\beta}=\\frac{\\sum_{i=1}^n (x_i-\\bar{x})(y_i-\\bar{y})} " +
            "{\\sum_{i=1}^n(x_i-\\bar{x})^2}",
        x: 670,
        y: 240,
        start: getT(time.formulabeta),
        fadeIn: true,
        font_size: 54
    });

    kats[5] = new Katex5({
        text: "\\hat{y}=\\hat{\\beta}x+\\hat{\\beta_0}",
        x: 797, y: 107,
        start: getT(time.formula),
        fadeIn: true,
        font_size: 47,
        fadeOut: true,
        end: getT(time.formulaFadeOut)
    });

    kats[1] = new Katex1({
        text: "\\bar{x}",
        x: plot.getXbar() - 7,
        y: height - 160,
        start: getT(time.dottedlineX),
        fadeIn: true,
        font_size: 37
    });

    kats[2] = new Katex2({
        text: sn === 7 ? "\\bar{x}" : "\\bar{y}",
        x: 77,
        y: plot.getYbar() - 57,
        fadeIn: true, start: sn === 10 ? getT(time.ybar_start) : getT(time.dottedlineY),
        fadeOut: true, end: getT(time.y_bar_fade),
        font_size: 37,
    });

    kats[3] = new Katex3({
        text: "x_1 - \\bar{x}",
        x: 375,
        y: sn === 7 ? 47 : 90,  // fixme
        color: color(247, 137, 27),
        start: getT(time.xMinusXbar),
        fadeIn: true,
    });

    kats[4] = new Katex4({
        text: "y_1 - \\bar{y}",
        x: 531,
        y: 187,
        color: color(247, 137, 27),
        start: getT(time.yMinusYbar),
        fadeIn: true,
    });

    kats[6] = new Katex6({
        text: sn === 9 || 10 ? "\\hat{\\beta_0}=\\bar{y}-\\hat{\\beta}\\bar{x}" : "\\hat{\\beta_0}",
        x: 124, y: sn === 9 || 10 ? 7 : 457,
        color: color(247, 117, 117),
        start: getT(time.showIntercept),
        fadeIn: true,
        font_size: sn === 9 || 10 ? 40 : 42
    });
    kats[7] = new Katex7({
        text: "\\hat{\\beta}",
        x: 417, y: 237,
        color: color(247, 117, 117),
        start: getT(time.showSlope),
        fadeIn: true,
        font_size: 42
    });

    kats[8] = new Katex8({
        text: "Area = (x_1 - \\bar{x})(y_1 - \\bar{y})",
        x: 650, y: 77,
        color: color(255, 255, 17),
        fadeIn: true, start: getT(time.areaEq),
        font_size: 42,
        fadeOut: true, end: getT(time.areaEqFadeOut)
    });

    kats[9] = new Katex9({
        text: sn === 7 ? "(x_i, x_i)" : "(x_1, y_1)",
        x: 520, y: sn === 7 ? 100 : 90,
        color: color(247, 137, 27),
        fadeIn: true, start: getT(time.showCoord),
        fadeOut: true, end: getT(time.showCoordFade),
        font_size: 37
    });

    kats[10] = new Katex10({
        text: sn === 7 ? "(\\bar{x}, \\bar{x})" : "(\\bar{x}, \\bar{y})",
        x: plot.getXbar() + 17, y: plot.getYbar() - (sn >= 9 ? 87 : 27),
        fadeIn: true, start: getT(time.centroid)
    });

    if (sn === 8) {
        kats[11] = new Katex11({
            text: "∈(0, 1)",
            x: 637, y: 337, font_size: 37, color: color(247, 137, 27),
            fadeIn: true, start: getT(time.bw_0_and_1),
            fadeOut: true, end: getT(time.bw_0_and_1_end),
        });
        kats[12] = new Katex12({
            text: ">1",
            x: 657, y: 337, font_size: 37, color: color(247, 137, 27),
            fadeIn: true, start: getT(time.greater_than_1),
        });
        kats[13] = new Katex13({
            text: "\\bigwedge",
            x: 857, y: 47, font_size: 167,
            color: color(47, 177, 247),
            fadeIn: true, start: getT(time.bigA),
            fadeOut: true, end: getT(time.bw_0_and_1)
        });
        kats[14] = new Katex14({
            text: "\\bigvee",
            x: 857, y: 47, font_size: 167,
            color: color(47, 177, 247),
            fadeIn: true, start: getT(time.bigV),
            fadeOut: true, end: getT(time.greater_than_1)
        });
    }
    if (sn === 9) {
        kats[11] = new Katex11({
            text: ">0",
            x: 1047, y: 367, font_size: 37, color: color(247, 137, 27),
            fadeIn: true, start: getT(time.greater_than_0),
        });
        kats[12] = new Katex12({
            text: "<0",
            x: 657, y: 337, font_size: 37, color: color(247, 137, 27),
            fadeIn: true, start: getT(time.is_negative),
        });
    }
    if (sn === 11) {
        kats[11] = new Katex11({
            text: "Cov(X, Y)=",
            color: color(37, 236, 97),
            fadeIn: true, start: getT(time.cov),
            x: 817, y: 34
        });
        kats[12] = new Katex12({
            text: "Var(X)=",
            color: color(37, 236, 97),
            fadeIn: true, start: getT(time.var),
            x: 841, y: 395
        });
        lines[0] = new Line({
            x1: 727, x2: 1127,
            y1: 174, y2: 174,
            color: color(255, 255, 17),
            start: getT(time.division_line1)
        });
        lines[1] = new Line({
            x1: 757, x2: 1107,
            y1: 534, y2: 534,
            color: color(255, 255, 17),
            start: getT(time.division_line2)
        });
        txts[7] = new TextFadeIn({
            str: "n - 1",
            x: 897, y: 174,
            font: comic, color: [255, 255, 17],
            start: getT(time.n_1)
        });
        txts[8] = new TextFadeIn({
            str: "n - 1",
            x: 897, y: 534,
            font: comic, color: [255, 255, 17],
            start: getT(time.n_2)
        });

    }

    emps[0] = new Emphasis({
        x: 890, y: 140,
        w: 40, h: 77,
        start: getT(time.emphasizeBhat),
        end: getT(time.emphasizeBend)
    });
    emps[1] = new Emphasis({
        x: 1030, y: 140,
        w: 57, h: 77,
        start: getT(time.emphasizeB0),
        end: getT(time.emphasizeB0end)
    });
    emps[2] = new Emphasis({
        x: 784, y: 150,
        w: 40, h: 67,
        start: getT(time.emphasizeYhat)
    });
    emps[3] = new Emphasis({
        x: 794, y: 280,
        w: 380, h: 60,
        start: getT(time.emphasizeNumerator),
        end: getT(time.emphasizeNumEnd)
    });
    emps[4] = new Emphasis({
        x: 850, y: 340,
        w: 267, h: 60,
        start: getT(time.emphasizeDenom)
    });
    emps[5] = new Emphasis({
        x: 700, y: 177,
        w: 57, h: 40,
        start: getT(time.emphasizeX),
        end: getT(time.emphasizeXend)
    });
}

function draw() {
    background(0);
    showFR();
    //hg.show();
    for (let e of emps) e.show();

    if (frameCount === getT(time.toxx))
        plot.reset(xs, xs);
    if (frameCount === getT(time.restore))
        plot.reset(xs, ys1);
    if (frameCount === getT(time.restore2))
        plot.reset(xs, ys4);
    if (frameCount === getT(time.to_b_greater_1))
        plot.reset(xs, ys2);
    if (frameCount === getT(time.to_b_smaller_0))
        plot.reset(xs, ys3);

    plot.show();
    table.show();

    for (let k of kats) k.show();
    for (let t of txts) t.show();
    for (let a of arrows) a.show();
    for (let l of lines) l.show();
}

