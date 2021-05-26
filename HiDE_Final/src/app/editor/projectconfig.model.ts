export class ProjectConfig {

  directories: any;

  constructor(structure) {
    console.log(structure);
    this.modifyDirectory([structure]);
    console.log(structure);
    this.directories = [structure];
  }

  modifyDirectory(nodes) {
    for (const node of nodes) {
      if (node.type === 'directory') {
        node.expanded = false;
        this.modifyDirectory(node.children);
      }
    }
  }
}
