import {Cliente} from "./Cliente.model";

export class PaginatedCliente {

  constructor(
    public content: Cliente[],
    public empty: boolean,
    public first: boolean,
    public last: boolean,
    public number: number,
    public numberOfElements: number,
    public size: number,
    public totalElements: number,
    public totalPages: number,
    public pageable: {
      offset: number,
      pageNumber: number,
      pageSize: number,
      paged: boolean,
      sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
      },
      unpaged: boolean
    },
    public sort: {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
    },
  ) {
  }
}
