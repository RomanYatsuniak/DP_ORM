import { TableMap } from '../../common/models/table-map';

export class Tables {
  private tableMaps: TableMap[] = [];
  private nameToTableMap: Map<string, TableMap> = new Map();

  add(element: TableMap): void {
    this.tableMaps.push(element);
    this.nameToTableMap.set(element.tableName, element);
  }

  get(name: string): TableMap {
    if (this.nameToTableMap.has(name)) return this.nameToTableMap.get(name);

    throw new Error('There is no TableMap with that name');
  }

  getNames(): string[] {
    return Array.from(this.nameToTableMap.keys());
  }
}
