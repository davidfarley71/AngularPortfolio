import { Component, OnInit } from '@angular/core';
import data from  "../../assets/GoodReads"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  columnDefs = [
    { headerName: 'Title', field: 'Title', sortable: true, filter: true  },
    { headerName: 'Author', field: 'Author', sortable: true, filter: true  },
    { headerName: 'Finished', field: 'Finished', sortable: true, filter: true  },
    { headerName: 'Date Recorded', field: 'DateRecorded', sortable: true, filter: true  },
    { headerName: 'My Rating', field: 'MyRating', sortable: true, filter: true  },
    { headerName: 'Average Rating', field: 'AverageRating', sortable: true, filter: true  },
    { headerName: 'Number Of Pages', field: 'NumberOfPages', sortable: true, filter: true  },
    { headerName: 'Publisher', field: 'Publisher', sortable: true, filter: true  },
    { headerName: 'Year Published', field: 'YearPublished', sortable: true, filter: true  }
  ];
  rowData = data;

  constructor() { }

  ngOnInit() {
  }

}
