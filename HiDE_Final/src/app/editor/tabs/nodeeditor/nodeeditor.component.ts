declare var CanvasInput: any;

import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'app-nodeeditor',
  templateUrl: './nodeeditor.component.html',
  styleUrls: ['./nodeeditor.component.css']
})
export class NodeeditorComponent implements OnInit, AfterViewInit {

  static context = null;
  static currNodeInContextMenu = null;
  static WIDTH = null;
  static HEIGHT = null;
  static nodes = [];
  static connectors = [];
  static globalTootipFontSize = null;
  static terminalStartFlag = 0;
  static currentConnector = null;
  static globalConnectorBezeirOffset = null;
  static globalConnectorWidth = null;
  static globalTerminalOffset = null;
  static gSFactor = 1.0;
  static canvasElement = null;
  static isToolboxOpened = false;
  static globalScaleRatio = 1;
  static downScaleStep = 0.9;
  static upScaleStep = 1.1;
  static globalBaseHeight = null;
  static globalToggleButtonRadius = null;
  static nodeDragFlag = 0;
  static isContextMenuOpened = false;
  static currentDragNode = null;
  static dragDelta = { x: 0, y: 0 };
  static sliderDragFlag = 0;
  static currSlider = null;
  static panStart = { x: 0, y: 0 };
  static panDelta = { x: 0, y: 0 };
  static panFlag = 0;
  static currentContextMenu = null;
  static mousePos = {
    x: 0,
    y: 0
  };

  @ViewChild('nodeEditorContainer') nodeEditorContainer: ElementRef;
  @ViewChild('toolboxContainer') toolboxContainer: ElementRef; // Reference to div element containing all draggable node div's
  @ViewChild('canvas') canvas: ElementRef;
  @Input() tabName: string;

  aspect = null;
  isPlaying = false;
  content = '';

  static resetContextAttr() {
    NodeeditorComponent.context.shadowColor = '#000';
    NodeeditorComponent.context.shadowBlur = 0;
    NodeeditorComponent.context.fillStyle = '#000';
    NodeeditorComponent.context.strokeStyle = '#000';
    NodeeditorComponent.context.lineWidth = '1';
    NodeeditorComponent.context.lineCap = 'butt';
    NodeeditorComponent.context.font = '15px Arial';
    NodeeditorComponent.context.lineStyle = '#000';
  }

  static ultimateRedraw() {
    for (let i = 0; i < NodeeditorComponent.nodes.length; i++) {
      NodeeditorComponent.nodes[i].redraw();
    }
    for (let i = 0; i < NodeeditorComponent.connectors.length; i++) {
      NodeeditorComponent.connectors[i].redraw(
        NodeeditorComponent.connectors[i].terminalEnd.x,
        NodeeditorComponent.connectors[i].terminalEnd.y
      );
    }
  }

  static getNewGUID() {
    const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
  }

  static getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  static ultimateRedrawWithDelta(delta) {
    for (let i = 0; i < NodeeditorComponent.nodes.length; i++) {
      NodeeditorComponent.nodes[i].x = NodeeditorComponent.nodes[i].x + delta.x;
      NodeeditorComponent.nodes[i].y = NodeeditorComponent.nodes[i].y + delta.y;
      NodeeditorComponent.nodes[i].redraw();
    }
    for (let i = 0; i < NodeeditorComponent.connectors.length; i++) {
      NodeeditorComponent.connectors[i].redraw(NodeeditorComponent.connectors[i].terminalEnd.x, NodeeditorComponent.connectors[i].terminalEnd.y);
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.content = this.tabName;
  }

  ngAfterViewInit() {

    NodeeditorComponent.canvasElement = this.canvas.nativeElement;
    this.canvas.nativeElement.width = this.nodeEditorContainer.nativeElement.clientWidth;
    this.canvas.nativeElement.height = this.nodeEditorContainer.nativeElement.clientHeight;
    this.canvas.nativeElement.height = this.canvas.nativeElement.clientHeight;
    NodeeditorComponent.context = this.canvas.nativeElement.getContext('2d');
    this.aspect = this.canvas.nativeElement.width / this.canvas.nativeElement.height;
    NodeeditorComponent.WIDTH = this.canvas.nativeElement.width;
    NodeeditorComponent.HEIGHT = this.canvas.nativeElement.height;
    console.log(
      'Canvas Dimensions: ' +
      NodeeditorComponent.WIDTH +
      ' ' +
      NodeeditorComponent.HEIGHT
    );

    NodeeditorComponent.globalTootipFontSize = NodeeditorComponent.WIDTH * 0.012;
    NodeeditorComponent.globalTerminalOffset = NodeeditorComponent.WIDTH * 0.01;
    NodeeditorComponent.globalBaseHeight = NodeeditorComponent.WIDTH * 0.1 * 0.25;
    NodeeditorComponent.globalToggleButtonRadius = NodeeditorComponent.WIDTH * 0.007;
    NodeeditorComponent.globalConnectorBezeirOffset = NodeeditorComponent.WIDTH * 0.06;
    NodeeditorComponent.globalConnectorWidth = NodeeditorComponent.WIDTH * 0.006;

    NodeeditorComponent.context.roundRect = (x, y, width, height, radius) => {
      if (typeof radius === 'undefined') {
        radius = 5;
      }
      NodeeditorComponent.context.beginPath();
      NodeeditorComponent.context.moveTo(x - (width / 2) + radius, y - (height / 2));
      NodeeditorComponent.context.lineTo(x - (width / 2) + width - radius, y - (height / 2));
      NodeeditorComponent.context.quadraticCurveTo(x - (width / 2) + width, y - (height / 2), x - (width / 2) + width, y - (height / 2) + radius);
      NodeeditorComponent.context.lineTo(x - (width / 2) + width, y - (height / 2) + height - radius);
      NodeeditorComponent.context.quadraticCurveTo(x - (width / 2) + width, y - (height / 2) + height, x - (width / 2) + width - radius, y - (height / 2) + height);
      NodeeditorComponent.context.lineTo(x - (width / 2) + radius, y - (height / 2) + height);
      NodeeditorComponent.context.quadraticCurveTo(x - (width / 2), y - (height / 2) + height, x - (width / 2), y - (height / 2) + height - radius);
      NodeeditorComponent.context.lineTo(x - (width / 2), y - (height / 2) + radius);
      NodeeditorComponent.context.quadraticCurveTo(x - (width / 2), y - (height / 2), x - (width / 2) + radius, y - (height / 2));
      NodeeditorComponent.context.closePath();
    };

    document.addEventListener('dragstart', (event: any) => {
      event.dataTransfer.setData('Text', event.target.innerHTML);
    });

    this.canvas.nativeElement.addEventListener('dragover', (event) => {
      event.preventDefault();
    }, true);

    this.canvas.nativeElement.addEventListener('drop', (event) => {

      NodeeditorComponent.globalScaleRatio = (NodeeditorComponent.nodes.length > 0) ? NodeeditorComponent.nodes[0].scaleRatio : 1;
      event.preventDefault();
      const draggedItemText = event.dataTransfer.getData('Text');
      const pos = NodeeditorComponent.getMousePos(this.canvas.nativeElement, event);

      if (draggedItemText === 'String') {
        const newBoolean = new VarString(pos.x, pos.y, NodeeditorComponent.WIDTH * 0.15 * NodeeditorComponent.globalScaleRatio, NodeeditorComponent.WIDTH * 0.1 * 0.4 * NodeeditorComponent.globalScaleRatio, NodeeditorComponent.nodes.length);
        NodeeditorComponent.nodes.push(newBoolean);
      }
      console.log(draggedItemText);
    }, true);

    this.canvas.nativeElement.addEventListener('click', () => { }, true);

    this.canvas.nativeElement.addEventListener('mousewheel', (e) => {
      if (e.wheelDelta < 0) {
        NodeeditorComponent.gSFactor = NodeeditorComponent.downScaleStep;
        // globalScaleDelta -= 1; //experimental
      } else if (e.wheelDelta > 0) {
        NodeeditorComponent.gSFactor = NodeeditorComponent.upScaleStep;
        // globalScaleDelta += 1; //experimental
      }
      // console.log(gSFactor);
      const pos = NodeeditorComponent.getMousePos(this.canvas.nativeElement, e);

      NodeeditorComponent.globalTootipFontSize *= NodeeditorComponent.gSFactor;
      NodeeditorComponent.globalTerminalOffset *= NodeeditorComponent.gSFactor;
      NodeeditorComponent.globalBaseHeight *= NodeeditorComponent.gSFactor;
      NodeeditorComponent.globalToggleButtonRadius *= NodeeditorComponent.gSFactor;
      NodeeditorComponent.globalConnectorBezeirOffset *= NodeeditorComponent.gSFactor;
      NodeeditorComponent.globalConnectorWidth *= NodeeditorComponent.gSFactor;

      for (let l = 0; l < NodeeditorComponent.nodes.length; l++) {
        if (NodeeditorComponent.nodes[l].x > pos.x && NodeeditorComponent.nodes[l].y > pos.y) {
          NodeeditorComponent.nodes[l].x = (pos.x + NodeeditorComponent.gSFactor * (Math.abs(pos.x - NodeeditorComponent.nodes[l].x)));
          NodeeditorComponent.nodes[l].y = (pos.y + NodeeditorComponent.gSFactor * (Math.abs(pos.y - NodeeditorComponent.nodes[l].y)));
        } else if (NodeeditorComponent.nodes[l].x > pos.x && NodeeditorComponent.nodes[l].y < pos.y) {
          NodeeditorComponent.nodes[l].x = (pos.x + NodeeditorComponent.gSFactor * (Math.abs(pos.x - NodeeditorComponent.nodes[l].x)));
          NodeeditorComponent.nodes[l].y = (pos.y - NodeeditorComponent.gSFactor * (Math.abs(pos.y - NodeeditorComponent.nodes[l].y)));
        } else if (NodeeditorComponent.nodes[l].x < pos.x && NodeeditorComponent.nodes[l].y > pos.y) {
          NodeeditorComponent.nodes[l].x = (pos.x - NodeeditorComponent.gSFactor * (Math.abs(pos.x - NodeeditorComponent.nodes[l].x)));
          NodeeditorComponent.nodes[l].y = (pos.y + NodeeditorComponent.gSFactor * (Math.abs(pos.y - NodeeditorComponent.nodes[l].y)));
        } else if (NodeeditorComponent.nodes[l].x < pos.x && NodeeditorComponent.nodes[l].y < pos.y) {
          NodeeditorComponent.nodes[l].x = (pos.x - NodeeditorComponent.gSFactor * (Math.abs(pos.x - NodeeditorComponent.nodes[l].x)));
          NodeeditorComponent.nodes[l].y = (pos.y - NodeeditorComponent.gSFactor * (Math.abs(pos.y - NodeeditorComponent.nodes[l].y)));
        }
      }

      for (let i = 0; i < NodeeditorComponent.nodes.length; i++) {
        NodeeditorComponent.nodes[i].scale();
      }

      NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
      NodeeditorComponent.ultimateRedraw();
    }, true);

    this.canvas.nativeElement.addEventListener('mousedown', (event) => {
      if (event.which === 1) {
        // console.log("mousedown");
        const inbounds = [];
        const pos = NodeeditorComponent.getMousePos(this.canvas.nativeElement, event);
        for (let i = 0; i < NodeeditorComponent.nodes.length; i++) {
          if (NodeeditorComponent.nodes[i].checkBounds(pos.x, pos.y)) {
            inbounds.push(NodeeditorComponent.nodes[i]);
          }
        }
        const highestOrder = Math.max.apply(Math, inbounds.map(function (o) { return o.order; }));
        const node = inbounds.find(function (o) { return o.order === highestOrder; });
        if ((node != null) && (NodeeditorComponent.nodeDragFlag === 0) && !NodeeditorComponent.isContextMenuOpened) {
          NodeeditorComponent.currentDragNode = node;
          NodeeditorComponent.dragDelta.x = NodeeditorComponent.currentDragNode.x - pos.x;
          NodeeditorComponent.dragDelta.y = NodeeditorComponent.currentDragNode.y - pos.y;
        }
        if (node != null && (node.type === 'Bitcrusher' || node.type === 'Moog' || node.type === 'Panner' || node.type === 'Oscillator' || node.type === 'FrequencyAnalyser' || node.type === 'WaveformAnalyser' || node.type === 'SpectrogramAnalyser')) {
          let slider = null;
          if ((slider = node.checkSliderBounds(pos.x, pos.y)) != null) {
            NodeeditorComponent.currSlider = slider;
            NodeeditorComponent.sliderDragFlag = 1;
          }
        }
        if (node == null) {
          NodeeditorComponent.panStart.x = pos.x;
          NodeeditorComponent.panStart.y = pos.y;
          NodeeditorComponent.panFlag = 1;
        }
      }
    }, true);

    this.canvas.nativeElement.addEventListener('mousemove', (event) => {
      // console.log("mousemove");
      NodeeditorComponent.mousePos = NodeeditorComponent.getMousePos(this.canvas.nativeElement, event);
      if (NodeeditorComponent.terminalStartFlag === 1) {
        NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
        NodeeditorComponent.currentConnector.redraw(NodeeditorComponent.mousePos.x, NodeeditorComponent.mousePos.y);
        NodeeditorComponent.ultimateRedraw();
      }
      if (NodeeditorComponent.currentDragNode != null && NodeeditorComponent.sliderDragFlag === 0 && !NodeeditorComponent.isContextMenuOpened) {
        NodeeditorComponent.nodeDragFlag = 1;
        NodeeditorComponent.currentDragNode.x = NodeeditorComponent.mousePos.x + NodeeditorComponent.dragDelta.x;
        NodeeditorComponent.currentDragNode.y = NodeeditorComponent.mousePos.y + NodeeditorComponent.dragDelta.y;
        NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
        NodeeditorComponent.ultimateRedraw();
      }
      if (NodeeditorComponent.sliderDragFlag === 1) {
        NodeeditorComponent.currSlider.slide(NodeeditorComponent.mousePos.x);
        NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
        NodeeditorComponent.ultimateRedraw();
      }
      if (NodeeditorComponent.panFlag === 1) {
        NodeeditorComponent.panDelta.x = NodeeditorComponent.mousePos.x - NodeeditorComponent.panStart.x;
        NodeeditorComponent.panDelta.y = NodeeditorComponent.mousePos.y - NodeeditorComponent.panStart.y;
        NodeeditorComponent.panStart.x = NodeeditorComponent.mousePos.x;
        NodeeditorComponent.panStart.y = NodeeditorComponent.mousePos.y;
        // redraw everything according to panDelta
        NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
        NodeeditorComponent.ultimateRedrawWithDelta(NodeeditorComponent.panDelta);
      }
    }, true);

    this.canvas.nativeElement.addEventListener('mouseup', (event) => {
      const pos = NodeeditorComponent.getMousePos(this.canvas.nativeElement, event);
      if (event.which === 1) {
        // console.log("mouseup");
        if (NodeeditorComponent.nodeDragFlag === 1) {
          // console.log("node drag ended");
          // node was being dragged
          NodeeditorComponent.currentDragNode = null;
          NodeeditorComponent.nodeDragFlag = 0;
        } else if (NodeeditorComponent.sliderDragFlag === 1) {
          // console.log("slider drag ended");
          // slider was being dragged
          NodeeditorComponent.sliderDragFlag = 0;
          NodeeditorComponent.currSlider = null;
          NodeeditorComponent.currentDragNode = null;
          NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
          NodeeditorComponent.ultimateRedraw();
        } else if (NodeeditorComponent.panFlag === 1) {
          NodeeditorComponent.panFlag = 0;
          NodeeditorComponent.panDelta.x = NodeeditorComponent.panDelta.y = NodeeditorComponent.panStart.x = NodeeditorComponent.panStart.y = 0;
        } else {
          // something is not being dragged (which means something is clicked)
          if (NodeeditorComponent.isContextMenuOpened) {
            if (pos.x > (NodeeditorComponent.currentContextMenu.x - NodeeditorComponent.currentContextMenu.width / 2) && pos.x < (NodeeditorComponent.currentContextMenu.x + NodeeditorComponent.currentContextMenu.width / 2) && pos.y > (NodeeditorComponent.currentContextMenu.y - NodeeditorComponent.currentContextMenu.height / 2) && pos.y < (NodeeditorComponent.currentContextMenu.y + NodeeditorComponent.currentContextMenu.height / 2)) {
              NodeeditorComponent.currentContextMenu.clicked(pos.x, pos.y);
            }
            NodeeditorComponent.isContextMenuOpened = false;
            NodeeditorComponent.currentContextMenu = null;
            NodeeditorComponent.currNodeInContextMenu = null;
            NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
            NodeeditorComponent.ultimateRedraw();
            return;
          }
          const inbounds = [];
          for (let i = 0; i < NodeeditorComponent.nodes.length; i++) {
            if (NodeeditorComponent.nodes[i].checkBounds(pos.x, pos.y)) {
              inbounds.push(NodeeditorComponent.nodes[i]);
            }
          }
          const highestOrder = Math.max.apply(Math, inbounds.map(function (o) { return o.order; }));
          const node = inbounds.find(function (o) { return o.order === highestOrder; });
          if (node != null) {
            node.clicked(pos.x, pos.y);
          }
          NodeeditorComponent.currentDragNode = null;
        }
      } else if (event.which === 3) {
        if (NodeeditorComponent.isContextMenuOpened) {
          NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
          NodeeditorComponent.ultimateRedraw();
        }
        NodeeditorComponent.isContextMenuOpened = true;
        const inbounds = [];
        for (let i = 0; i < NodeeditorComponent.nodes.length; i++) {
          if (NodeeditorComponent.nodes[i].checkBounds(pos.x, pos.y)) {
            inbounds.push(NodeeditorComponent.nodes[i]);
          }
        }
        const highestOrder = Math.max.apply(Math, inbounds.map(function (o) { return o.order; }));
        const node = inbounds.find(function (o) { return o.order === highestOrder; });
        if (node != null) {
          NodeeditorComponent.currNodeInContextMenu = node;
          NodeeditorComponent.currentContextMenu = new ContextMenu(pos.x, pos.y, NodeeditorComponent.WIDTH * 0.07, NodeeditorComponent.WIDTH * 0.07 * 0.25, ['Delete']);
        }
      }
    }, true);

    this.canvas.nativeElement.addEventListener('contextmenu', (event) => { event.preventDefault(); }, true);
  }

  toolboxClicked() {
    NodeeditorComponent.isToolboxOpened = !NodeeditorComponent.isToolboxOpened;
    if (NodeeditorComponent.isToolboxOpened) {
      this.toolboxContainer.nativeElement.style.left = '0';
    } else {
      this.toolboxContainer.nativeElement.style.left = '-20%';
    }
  }
}

class ContextMenu {
  x: any;
  y: any;
  width: any;
  baseHeight: any;
  radius: number;
  noOfOptions: any;
  operations: [];
  fontSize: number;
  height: number;

  constructor(x, y, width, baseHeight, operations) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.baseHeight = baseHeight;
    this.radius = this.baseHeight / 3;
    this.noOfOptions = operations.length;
    this.operations = operations;
    this.fontSize = this.baseHeight * 0.45;
    this.height = this.baseHeight * this.noOfOptions;
    this.draw();
  }

  draw() {
    NodeeditorComponent.context.roundRect(
      this.x,
      this.y,
      this.width,
      this.height,
      this.radius
    );
    NodeeditorComponent.resetContextAttr();
    NodeeditorComponent.context.shadowColor = '#ffffff';
    NodeeditorComponent.context.shadowBlur = 10;
    NodeeditorComponent.context.fillStyle = '#696969';
    NodeeditorComponent.context.lineWidth = '0';
    NodeeditorComponent.context.strokeStyle = '#000';
    NodeeditorComponent.context.fill();
    NodeeditorComponent.context.stroke();
    NodeeditorComponent.context.font = this.fontSize + 'px arial';
    NodeeditorComponent.context.shadowBlur = 0;
    NodeeditorComponent.context.fillStyle = '#000';
    for (let i = 0; i < this.noOfOptions; i++) {
      NodeeditorComponent.context.fillText(
        this.operations[i],
        this.x -
          NodeeditorComponent.context.measureText(this.operations[i]).width / 2,
        this.y + this.baseHeight * i + this.fontSize / 3
      );
    }
  }

  clicked(x, y) {
    const resultOption = Math.floor(
      (y - (this.y - this.baseHeight / 2)) / this.baseHeight
    );
    NodeeditorComponent.currNodeInContextMenu.executeContextOption(
      this.operations[resultOption]
    );
  }
}

class ToggleGroup {
  x: any;
  y: any;
  width: any;
  height: any;
  values: any;
  noOfToggles: any;
  toggles: any[];
  togglesWidth: number;
  togglesHeight: number;
  activeValue: any;

  constructor(x, y, width, height, values, index) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.values = values;
    this.noOfToggles = values.length;
    this.toggles = [];
    for (let i = 0; i < this.noOfToggles; i++) {
      this.toggles.push({ x: 0, y: 0 });
    }
    this.togglesWidth = (this.height / 2) * 0.8;
    this.togglesHeight = (this.height / 2) * 0.8;
    this.activeValue = this.values[index];
    this.redraw();
  }

  redraw() {
    this.togglesWidth = (this.height / 2) * 0.8;
    this.togglesHeight = (this.height / 2) * 0.8;
    for (let j = 0; j < this.noOfToggles; j++) {
      this.toggles[j].x =
        this.x +
        j * (this.width / this.noOfToggles) +
        this.width / (2 * this.noOfToggles);
      this.toggles[j].y = this.y;
    }
    NodeeditorComponent.resetContextAttr();
    NodeeditorComponent.context.lineStyle = '#000';
    for (let i = 0; i < this.noOfToggles; i++) {
      NodeeditorComponent.context.beginPath();
      if (this.values[i] === this.activeValue) {
        NodeeditorComponent.context.fillStyle = '#00ff00';
      } else {
        NodeeditorComponent.context.fillStyle = '#ff0000';
      }
      NodeeditorComponent.context.rect(
        this.toggles[i].x - this.togglesWidth / 2,
        this.toggles[i].y - this.togglesHeight / 2,
        this.togglesWidth,
        this.togglesHeight
      );
      NodeeditorComponent.context.fill();
      NodeeditorComponent.context.stroke();
    }
  }

  clicked(x, y) {
    for (let i = 0; i < this.noOfToggles; i++) {
      if (
        x > this.toggles[i].x - this.togglesWidth / 2 &&
        x < this.toggles[i].x + this.togglesWidth / 2 &&
        y > this.toggles[i].y - this.togglesHeight / 2 &&
        y < this.toggles[i].y + this.togglesHeight / 2
      ) {
        this.activeValue = this.values[i];
        NodeeditorComponent.context.clearRect(
          0,
          0,
          NodeeditorComponent.WIDTH,
          NodeeditorComponent.HEIGHT
        );
        NodeeditorComponent.ultimateRedraw();
        break;
      }
    }
  }
}

class Slider {
  x1: any;
  x2: any;
  y: any;
  value: any;
  min: any;
  max: any;
  length: number;
  thumbRadius: any;
  railHeight: any;
  thumbPosition: { x: number; y: number };

  constructor(x1, x2, y, value, thumbRadius, railHeight, min, max) {
    this.x1 = x1;
    this.x2 = x2;
    this.y = y;
    this.value = value;
    this.min = min;
    this.max = max;
    this.length = this.x2 - this.x1;
    this.thumbRadius = thumbRadius;
    this.railHeight = railHeight;
    this.thumbPosition = { x: 0, y: 0 };
    this.thumbPosition.x =
      ((this.value - this.min) / (this.max - this.min)) * (this.x2 - this.x1) +
      this.x1;
    this.thumbPosition.y = this.y + this.railHeight;
    this.redraw();
  }

  redraw() {
    NodeeditorComponent.context.beginPath();
    NodeeditorComponent.resetContextAttr();
    NodeeditorComponent.context.lineStyle = '#d4d4d4ff';
    NodeeditorComponent.context.lineWidth = '1';
    NodeeditorComponent.context.fillStyle = '#d4d4d4ff';
    NodeeditorComponent.context.rect(
      this.x1,
      this.y + this.railHeight / 2,
      this.x2 - this.x1,
      this.railHeight
    );
    NodeeditorComponent.context.fill();
    NodeeditorComponent.context.stroke();
    NodeeditorComponent.context.beginPath();
    NodeeditorComponent.resetContextAttr();
    NodeeditorComponent.context.shadowColor = '#000';
    NodeeditorComponent.context.shadowBlur = 5;
    NodeeditorComponent.context.fillStyle = '#000000ff';
    NodeeditorComponent.context.strokeStyle = '#000';
    this.thumbPosition.x =
      ((this.value - this.min) / (this.max - this.min)) * (this.x2 - this.x1) +
      this.x1;
    this.thumbPosition.y = this.y + this.railHeight;
    NodeeditorComponent.context.arc(
      this.thumbPosition.x,
      this.thumbPosition.y,
      this.thumbRadius,
      0,
      2 * Math.PI
    );
    NodeeditorComponent.context.fill();
    NodeeditorComponent.context.stroke();
  }

  slide(x) {
    if (x < this.x1) {
      this.value = this.min;
    } else if (x > this.x2) {
      this.value = this.max;
    } else {
      this.value =
        ((x - this.x1) / (this.x2 - this.x1)) * (this.max - this.min) +
        this.min;
    }
  }
}

class ToggleButton {
  x: any;
  y: any;
  radius: any;
  parent: any;

  constructor(x, y, radius, parent) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.parent = parent;
    this.redraw();
  }

  redraw() {
    NodeeditorComponent.context.beginPath();
    NodeeditorComponent.resetContextAttr();
    if (this.parent.bypass) {
      NodeeditorComponent.context.shadowColor = '#00ff00';
      NodeeditorComponent.context.fillStyle = '#00ff00ff';
    } else {
      NodeeditorComponent.context.shadowColor = '#ff0000';
      NodeeditorComponent.context.fillStyle = '#ff0000ff';
    }
    NodeeditorComponent.context.shadowBlur = 5;
    NodeeditorComponent.context.strokeStyle = '#000';
    NodeeditorComponent.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    NodeeditorComponent.context.fill();
    NodeeditorComponent.context.stroke();
    NodeeditorComponent.context.beginPath();
    NodeeditorComponent.context.arc(this.x, this.y, this.radius * 0.6, 0, 2 * Math.PI);
    NodeeditorComponent.context.stroke();
  }

  clicked() {
    if (this.parent.bypass) {
      this.parent.bypass = 0;
    } else {
      this.parent.bypass = 1;
    }
    NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
    NodeeditorComponent.ultimateRedraw();
  }
}

class Tooltip {
  x: any;
  y: any;
  text: any;
  parent: any;

  constructor (x, y, text, parent) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.parent = parent;
    this.redraw();
  }

  redraw () {
    NodeeditorComponent.context.beginPath();
    NodeeditorComponent.resetContextAttr();
    NodeeditorComponent.context.font = NodeeditorComponent.globalTootipFontSize + 'px Arial';
    NodeeditorComponent.context.fillStyle = '#ffffffff';
    NodeeditorComponent.context.fillText(this.text, this.x - NodeeditorComponent.context.measureText(this.text).width / 2, this.y);
  }
}

class Connector {
  terminalStart: any;
  terminalStartNode: any;
  x1: any;
  y1: any;
  guid: any;
  x2: any;
  y2: any;
  x11: any;
  y11: any;
  x22: number;
  y22: any;
  xmid: number;
  ymid: number;
  terminalEnd: any;
  terminalEndNode: any;

  constructor (terminalStart, terminalStartNode) {
    this.terminalStart = terminalStart;
    this.terminalStartNode = terminalStartNode;
    this.x1 = terminalStart.x;
    this.y1 = terminalStart.y;
    this.guid = NodeeditorComponent.getNewGUID();
  }

  redraw (x2, y2) {
    NodeeditorComponent.context.beginPath();
    this.x1 = this.terminalStart.x;
    this.y1 = this.terminalStart.y;
    this.x2 = x2;
    this.y2 = y2;
    this.x11 = this.x1 + NodeeditorComponent.globalConnectorBezeirOffset;
    this.y11 = this.y1;
    this.x22 = this.x2 - NodeeditorComponent.globalConnectorBezeirOffset;
    this.y22 = this.y2;
    this.xmid = (this.x11 + this.x22) / 2;
    this.ymid = (this.y11 + this.y22) / 2;
    NodeeditorComponent.context.moveTo(this.x1, this.y1);
    NodeeditorComponent.context.quadraticCurveTo(this.x11, this.y11, this.xmid, this.ymid);
    NodeeditorComponent.context.moveTo(this.xmid, this.ymid);
    NodeeditorComponent.context.quadraticCurveTo(this.x22, this.y22, this.x2, this.y2);
    NodeeditorComponent.resetContextAttr();
    NodeeditorComponent.context.strokeStyle = '#7fff0088';
    NodeeditorComponent.context.lineWidth = Math.round(NodeeditorComponent.globalConnectorWidth).toString();
    NodeeditorComponent.context.lineCap = 'round';
    NodeeditorComponent.context.shadowColor = '#7fff00';
    NodeeditorComponent.context.shadowBlur = 5;
    NodeeditorComponent.context.stroke();
  }

  connection(terminalEnd, terminalEndNode) {
    if (terminalEnd.type === 'buffer' && (this.terminalStartNode.type === 'LinearConvolver' || this.terminalStartNode.type === 'AudioMerger' || this.terminalStartNode.type === 'Microphone' || this.terminalStartNode.type === 'DrumSequencer' || this.terminalStartNode.type === 'Bitcrusher' || this.terminalStartNode.type === 'Moog' || this.terminalStartNode.type === 'Panner')) {
      // console.log("mismatch");
      NodeeditorComponent.currentConnector.terminalStart.connector = null;
      NodeeditorComponent.currentConnector = null;
      NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
      NodeeditorComponent.ultimateRedraw();
      return;
    } else {
      if (terminalEnd.connector != null) {
        terminalEnd.connector.terminalStartNode.connectedTo = null;
        terminalEnd.connector.terminalStart.isAssociated = false;
        terminalEnd.connector.terminalStart.connector = null;
        terminalEnd.isAssociated = false;
        NodeeditorComponent.connectors.splice(NodeeditorComponent.connectors.indexOf(terminalEnd.connector, 1));
        terminalEnd.connector = null;
      }
      if (terminalEndNode.type === 'LinearConvolver') {
        if (terminalEndNode.inputSampleTerminal.guid === terminalEnd.guid) {
          // console.log("terminal end is convolver inputsample");
          terminalEndNode.inputSampleNode = this.terminalStart.parent;
        } else if (terminalEndNode.impulseResponseTerminal.guid === terminalEnd.guid) {
          // console.log("terminal end is convolver impulseresponse");
          terminalEndNode.impulseRNode = this.terminalStart.parent;
        }
      }
      this.terminalEnd = terminalEnd;
      this.terminalEndNode = terminalEndNode;
      this.x2 = terminalEnd.x;
      this.y2 = terminalEnd.y;
      this.terminalStart.isAssociated = true;
      this.terminalEnd.isAssociated = true;
      this.terminalStart.connector = this;
      this.terminalEnd.connector = this;
      this.terminalStart.parent.connectedTo = this.terminalEnd.parent;

      NodeeditorComponent.connectors.push(NodeeditorComponent.currentConnector);
      // console.log("pushed connector");
      // console.log(currentConnector);
      NodeeditorComponent.currentConnector = null;
      NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
      NodeeditorComponent.ultimateRedraw();
    }
  }
}

class Terminal {
  isAssociated: boolean;
  connector: any;
  x: any;
  y: any;
  radius: any;
  type: any;
  parent: any;
  guid: any;


  constructor (x, y, radius, type, parent) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.type = type;
    this.parent = parent;
    this.guid = NodeeditorComponent.getNewGUID();
    this.redraw();
    this.isAssociated = false;
    this.connector = null;
  }

  redraw() {
    NodeeditorComponent.context.beginPath();
    NodeeditorComponent.resetContextAttr();
    if (this.type === 'string') {
      NodeeditorComponent.context.shadowColor = '#adff2f';
      NodeeditorComponent.context.fillStyle = '#adff2fff';
    } else if (this.type === 'in') {
      NodeeditorComponent.context.shadowColor = '#ff0000';
      NodeeditorComponent.context.fillStyle = '#ff0000ff';
    } else if (this.type === 'buffer') {
      NodeeditorComponent.context.shadowColor = '#ffa500';
      NodeeditorComponent.context.fillStyle = '#ffa500ff';
    } else if (this.type === 'stream') {
      NodeeditorComponent.context.shadowColor = '#4d4dff';
      NodeeditorComponent.context.fillStyle = '#4d4dffff';
    }
    NodeeditorComponent.context.shadowBlur = 5;
    NodeeditorComponent.context.strokeStyle = '#000';
    NodeeditorComponent.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    NodeeditorComponent.context.fill();
    NodeeditorComponent.context.stroke();
  }

  clicked() {
    if (NodeeditorComponent.terminalStartFlag === 0) {
      if (this.type !== 'in' && this.type !== 'buffer') {
        // console.log("not in or buffer");
        if (this.isAssociated) {
          // console.log("terminal already associated");
          this.isAssociated = false;
          this.connector.terminalEnd.isAssociated = false;
          this.connector.terminalEnd.connector = null;
          this.parent.connectedTo = null;
          NodeeditorComponent.connectors.splice(NodeeditorComponent.connectors.indexOf(this.connector), 1);
          this.connector = null;
          // console.log("spliced this terminal");
        }
        NodeeditorComponent.currentConnector = new Connector(this, this.parent);
        // console.log(currentConnector);
      } else {
        return;
      }
      NodeeditorComponent.terminalStartFlag = 1;
    } else if (NodeeditorComponent.terminalStartFlag === 1) {
      if (NodeeditorComponent.currentConnector.terminalStart.guid === this.guid || NodeeditorComponent.currentConnector.terminalStart.type === this.type) {
        // console.log("same type");
        NodeeditorComponent.currentConnector.terminalStart.connector = null;
        NodeeditorComponent.currentConnector.terminalStart.parent.connectedTo = null;
        NodeeditorComponent.currentConnector = null;
        NodeeditorComponent.context.clearRect(0, 0, NodeeditorComponent.WIDTH, NodeeditorComponent.HEIGHT);
        NodeeditorComponent.ultimateRedraw();
      } else {
        // console.log("not same type");
        NodeeditorComponent.currentConnector.connection(this, this.parent);
      }
      NodeeditorComponent.terminalStartFlag = 0;
    }
  }
}

class VarString {
  x: any;
  y: any;
  order: any;
  width: any;
  height: any;
  radius: number;
  type: string;
  guid: any;
  fontSize: number;
  originalWidth: any;
  scaleRatio: number;
  connectedTo: any;
  inputTerminal: Terminal;
  outputTerminal: Terminal;
  tooltip: Tooltip;
  textInput: any;

  constructor(x, y, width, height, order) {
    this.x = x;
    this.y = y;
    this.order = order;
    this.width = width;
    this.height = height;
    this.radius = (this.height) / 4;
    this.type = 'String';
    this.guid = NodeeditorComponent.getNewGUID();
    this.fontSize = this.height * 0.3;
    this.originalWidth = width;
    this.scaleRatio = 1;
    NodeeditorComponent.context.font = 'bold ' + this.fontSize + 'px Arial';
    this.draw();
    this.textInput = new CanvasInput({
      canvas: NodeeditorComponent.canvasElement,
      x: x - width * 0.8 / 2,
      y: y - height * 0.8 / 2,
      width: width * 0.8,
      height: height * 0.8,
      fontSize: height / 2 - 2,
      fontColor: '#fff',
      padding: 0,
      borderWidth: 0,
      borderRadius: 0,
      backgroundColor: '#dedede66',
      boxShadow: '0px 0px 0px rgba(255, 255, 255, 1)',
      innerShadow: '0px 0px 0px rgba(0, 0, 0, 0.4)'
    });
    this.inputTerminal = new Terminal(this.x - this.width / 2 - NodeeditorComponent.globalTerminalOffset, this.y, NodeeditorComponent.globalTerminalOffset / 2, 'string', this);
    this.outputTerminal = new Terminal(this.x + this.width / 2 + NodeeditorComponent.globalTerminalOffset, this.y, NodeeditorComponent.globalTerminalOffset / 2, 'string', this);
    this.tooltip = new Tooltip(this.x, this.y - this.height / 2 - NodeeditorComponent.globalTerminalOffset, 'String', this);
    this.connectedTo = null;
  }

  draw() {
    NodeeditorComponent.context.roundRect(this.x, this.y, this.width, this.height, this.radius);
    NodeeditorComponent.resetContextAttr();
    NodeeditorComponent.context.shadowColor = '#ffffff';
    NodeeditorComponent.context.shadowBlur = 10;
    NodeeditorComponent.context.fillStyle = '#dedede66';
    NodeeditorComponent.context.lineWidth = '1';
    NodeeditorComponent.context.strokeStyle = '#000';
    NodeeditorComponent.context.fill();
    NodeeditorComponent.context.stroke();
  }

  scale () {
    this.width *= NodeeditorComponent.gSFactor;
    this.height *= NodeeditorComponent.gSFactor;
    this.radius = (this.height) / 4;
    this.fontSize = this.height * 0.3;
  }

  redraw() {
    this.draw();
    // recalculate x, y
    this.inputTerminal.x = this.x - this.width / 2 - NodeeditorComponent.globalTerminalOffset;
    this.inputTerminal.y = this.y;
    this.inputTerminal.radius = NodeeditorComponent.globalTerminalOffset / 2;
    this.inputTerminal.redraw();
    this.outputTerminal.x = this.x + this.width / 2 + NodeeditorComponent.globalTerminalOffset;
    this.outputTerminal.y = this.y;
    this.outputTerminal.radius = NodeeditorComponent.globalTerminalOffset / 2;
    this.outputTerminal.redraw();
    NodeeditorComponent.context.font = 'bold ' + this.fontSize + 'px Arial';
    this.tooltip.x = this.x;
    this.tooltip.y = this.y - this.height / 2 - NodeeditorComponent.globalTerminalOffset;
    this.tooltip.redraw();
    this.scaleRatio = this.width / this.originalWidth;
    this.textInput._x = this.x - this.width * 0.8 / 2;
    this.textInput._y = this.y - this.height * 0.8 / 2;
    this.textInput._fontSize = this.height / 2 - 2;
    this.textInput.width(this.width * 0.8);
    this.textInput.height(this.height * 0.8);
  }

  clicked(x, y) {
    if (x > this.textInput.x && x < (this.textInput.x + this.textInput.width) && y > (this.textInput.y) && y < (this.textInput.y + this.textInput.height)) {
      this.textInput.focus();
    } else if (x > (this.inputTerminal.x - this.inputTerminal.radius) && x < (this.inputTerminal.x + this.inputTerminal.radius) && y > (this.inputTerminal.y - this.inputTerminal.radius) && y < (this.inputTerminal.y + this.inputTerminal.radius)) {
      this.inputTerminal.clicked();
    } else if (x > (this.outputTerminal.x - this.outputTerminal.radius) && x < (this.outputTerminal.x + this.outputTerminal.radius) && y > (this.outputTerminal.y - this.outputTerminal.radius) && y < (this.outputTerminal.y + this.outputTerminal.radius)) {
      this.outputTerminal.clicked();
    }
  }

  checkBounds(x, y) {
    if (x > (this.x - (this.width / 2)) && x < (this.x + (this.width / 2) + NodeeditorComponent.globalTerminalOffset + this.outputTerminal.radius) && y > (this.y - this.height / 2) && y < (this.y + this.height / 2)) {
      return true;
    }
    return false;
  }

  executeContextOption(option) {
    if (option === 'Delete') {
      if (NodeeditorComponent.currNodeInContextMenu.connectedTo != null) {
        NodeeditorComponent.currNodeInContextMenu.outputTerminal.connector.terminalEnd.isAssociated = false;
        NodeeditorComponent.currNodeInContextMenu.outputTerminal.connector.terminalEnd.connector = null;
        NodeeditorComponent.connectors.splice(NodeeditorComponent.connectors.indexOf(NodeeditorComponent.currNodeInContextMenu.outputTerminal.connector), 1);
      }
      NodeeditorComponent.nodes.splice(NodeeditorComponent.nodes.indexOf(NodeeditorComponent.currNodeInContextMenu), 1);
      NodeeditorComponent.currNodeInContextMenu = null;
      this.textInput.destroy();
      this.textInput = null;
    }
  }
}
