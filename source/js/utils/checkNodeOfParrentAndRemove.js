export const checkNodeOfParrentByIdAndRemove = (node, parrent) => {
  if (parrent.childNodes) {
    parrent.childNodes.forEach((child) => {
      if (node.id === child.id) {
        parrent.removeChild(node);
      }
    });
  }
};
