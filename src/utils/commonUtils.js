function createRelations(list = []) {

  const itemsMap = list.reduce((res, item) => {
    const { id, row, col } = item;
    res[id] = { row, col };

    return res;
  }, {});

  const result = [];
  for (const item of list) {
    const { id, parent, row, col } = item;
    if (!parent) {
      continue;
    }

    const startItem = itemsMap[parent];
    if (!startItem) {
      continue;
    }

    result.push({
      id: `${parent}-${id}`,
      startRow: startItem.row,
      startCol: startItem.col,
      endRow: row,
      endCol: col,
    })
  };

  return result;
}

const commonUtils = {
  createRelations,
};

export {
  commonUtils,
}
