const fs        = require('fs');
const jsdom     = require("jsdom");
const { JSDOM } = jsdom;
const inspect   = require('util').inspect;
var libxml = require("libxmljs");

const dom = new JSDOM(fs.readFileSync('Murder2017.html', 'utf8'));

var xml = libxml.parseXmlString(fs.readFileSync('../doc/memories.graphml', 'utf8'), {
  recover: true
});

function parseDom() {
  const root = {
      name: 'root',
      level: 0,
      children: [],
  };

  var nodes = dom.window.document.body.childNodes;
  var parsed = [root, null, null, null, null, null, null];

  for (var i = 0; i < nodes.length; ++i) {
    const node = nodes[i];
    for (var j = 0; j < 7; ++j) {
      if (node.tagName === 'H' + j) {
        parsed = parsed.slice();
        var obj = {
          name: node.getElementsByTagName("span")[0].innerHTML,
          id: node.getAttribute('id'),
          level: j,
          children: []
        };
        parsed[j] = obj;
        var k = j -1;
        while (k >= 0 && parsed[k] == null) {
          k--;
        }
        if (k >= 0 && parsed[k] != null) {
          parsed[k].children.push(obj);
        }
      }
    }
  }
  return root;
}

const memories = {
    chef: [],
    soldat: [],
    erudit: [],
    voyant: [],
    tele: [],
    journalist: [],
    monstre: [],
}

function parseDocument(node, container) {

  var nextContainer = container;
  if (node.level === 2 && node.name.match(/chef/i) !== null) {
    nextContainer = 'chef';
  } else
  if (node.level === 2 && node.name.match(/soldat/i)) {
    nextContainer = 'soldat';
  } else
  if (node.level === 2 && node.name.match(/Roberta/i)) {
    nextContainer = 'erudit';
  } else
  if (node.level === 2 && node.name.match(/voyant/i)) {
    nextContainer = 'voyant';
  } else
  if (node.level === 2 && node.name.match(/odette/i)) {
    nextContainer = 'tele';
  } else
  if (node.level === 2 && node.name.match(/journaliste/i)) {
    nextContainer = 'journalist';
  } else
  if (node.level === 2 && node.name.match(/monstre/i)) {
    nextContainer = 'monstre';
  }

  for(var i = 0; i < node.children.length; ++i) {
    if (container != null) {
      memories[container].push({
        perso: container,
        name: node.children[i].name,
        id: node.children[i].id,
      });
    } else {
      parseDocument(node.children[i], nextContainer);
    }
  }
}

const document = parseDom();
parseDocument(document);
// console.log(inspect(memories, { colors: true, depth: Infinity }));


function createNewNode(txt, id, color, xIndex, yIndex) {
  xIndex *= 255;
  yIndex *= 65;
  const node = new libxml.Element(xml, 'node');
  node.attr({id: id});

  const dataId = new libxml.Element(xml, 'data');
  dataId.attr({key: 'd4'});
  dataId.text(id);

  const data = new libxml.Element(xml, 'data')
  data.attr({key: 'd5'});

  const ShapeNode = new libxml.Element(xml, 'y:ShapeNode');
  const Geometry = new libxml.Element(xml, 'y:Geometry');
  Geometry.attr({height: 45, width: 195, x: xIndex, y: yIndex});
  const Fill = new libxml.Element(xml, 'y:Fill');
  Fill.attr({color: color, transparent: 'false'});
  const BorderStyle = new libxml.Element(xml, 'y:BorderStyle');
  BorderStyle.attr({color:"#000000", type:"line", width:"1.0"});
  // raised:"false"

  const NodeLabel = new libxml.Element(xml, 'y:NodeLabel', txt);
  NodeLabel.attr({alignment:"center", autoSizePolicy:"node_width",
    borderDistance:"2.0", fontFamily:"Dialog", fontSize:"12", fontStyle:"plain",
    hasBackgroundColor:"false", hasLineColor:"false",
    horizontalTextPosition:"center", iconTextGap:"4", modelName:"internal",
    modelPosition:"c", textColor:"#000000", verticalTextPosition:"bottom",
    visible:"true",
    height:"60", width:"250", x:"0", y:"0"});


  const Shape = new libxml.Element(xml, 'y:Shape');
  Shape.attr({type:"rectangle"});

  node.addChild(dataId);
  node.addChild(data);
  data.addChild(ShapeNode);
  ShapeNode.addChild(Geometry);
  ShapeNode.addChild(Fill);
  ShapeNode.addChild(BorderStyle);
  ShapeNode.addChild(NodeLabel);
  ShapeNode.addChild(Shape);

  return node;
}

var graphNode = xml.get('//ns:node[1]', {ns: "http://graphml.graphdrawing.org/xmlns"});
var x = 0;
const colors = {
    chef: '#FFCC00',
    soldat: '#ff0000',
    erudit: '#33cccc',
    voyant: '#cc99ff',
    tele: '#ff9900',
    journalist: '#c0c0c0',
    monstre: '#99cc00',
};


for (const j in memories) {
  for (let i = 0; i < memories[j].length; ++i) {
    var mem = memories[j][i];
    var dataNode = xml.get('//ns:node[@id=' + mem.id + ']' , {ns: "http://graphml.graphdrawing.org/xmlns"});
    var dataId = xml.get(`//text()[. = '${mem.id}']`);
    const text = mem.name.replace(/-/g , "\n")
    if (dataId == null) {
      graphNode.addNextSibling(createNewNode(text, mem.id, colors[j], x, i));
    } else {
      const label = dataId.parent().nextSibling().nextSibling().childNodes()[1].childNodes()[7];
      if (label != null) {
        label.text(text);
      }
    }
  }
  x++
}

console.log(xml.toString(true));
