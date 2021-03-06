let time = {
    brain: frames(0),
    bubble: frames(5),
    text: [frames(11), frames(12.5), frames(14)]
};

let hg;
let texts = [];
let font;
let brain;

function preload() {
    font = loadFont('../lib/font/comic.ttf');
}

function setup() {
    createCanvas(1200, 675);

    hg = new HelperGrid({});

    brain = new ThoughtBrain({
        start: time.brain,
        font: font,
        size: 57,
        str: "Multiple Regression",
        bubbleStart: time.bubble
    });
    texts[0] = new TextWriteIn({
        font: font,
        str: "Statistics",
        x: 700,
        y: 450,
        start: time.text[0]
    });
    texts[1] = new TextWriteIn({
        font: font,
        str: "Linear Algebra",
        x: 700,
        y: 500,
        start: time.text[1]
    });
    texts[2] = new TextWriteIn({
        font: font,
        str: "Machine Learning",
        x: 700,
        y: 550,
        start: time.text[2]
    });
}

function draw() {
    background(0);
    //hg.show();
    //text1.show();
    //bubble.show();
    brain.show();
    for (let t of texts) t.show();
}