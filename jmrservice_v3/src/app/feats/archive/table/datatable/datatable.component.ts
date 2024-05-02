import { Component, Input, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent implements OnInit{
  @Input() data: any;
  @Input() visibleCols: any;
  @Input() linkCol: string | null = null;

  public filteredData: any;
  public sortOrder: 'asc' | 'desc' = 'asc';

  constructor() { }

  ngOnInit() {
    this.filteredData = [...this.data];
  }

  public search(searchStr: string) {
    this.filteredData = this.data.filter((row: any) => {
      return Object.keys(row).some((key: any) => {
        return String(row[key]).toLowerCase().includes(searchStr.toLowerCase());
      });
    });
  }

  public sort(column: string): void {
    this.filteredData.sort((a: any, b: any) => {
      const valueA = a[column];
      const valueB = b[column];

      if (this.sortOrder === 'asc') {
        return this.compareValues(valueA, valueB);
      } else {
        return this.compareValues(valueB, valueA);
      }
    });

    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  private compareValues(valueA: any, valueB: any): number {
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueA - valueB;
    } else {
      return String(valueA).localeCompare(String(valueB));
    }
  }

  public hasKey(obj: any, key: string): boolean {
    return Object.keys(obj).includes(key);
  }
}
