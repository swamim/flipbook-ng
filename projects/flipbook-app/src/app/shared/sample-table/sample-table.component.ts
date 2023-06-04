import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.scss']
})

export class SampleTableComponent implements OnInit {
  customers: any = [
    {
      company: 'ABC Company',
      contact: 'John Doe',
      country: 'USA'
    },
    {
      company: 'XYZ Corporation',
      contact: 'Jane Smith',
      country: 'Canada'
    },
    {
      company: 'Example Ltd.',
      contact: 'Mike Johnson',
      country: 'UK'
    },
    {
      company: 'Acme Inc.',
      contact: 'Sarah Williams',
      country: 'USA'
    },
    {
      company: 'Global Solutions',
      contact: 'David Lee',
      country: 'Australia'
    },
    {
      company: 'Tech Innovators',
      contact: 'Emily Chen',
      country: 'China'
    },
    {
      company: 'Bright Ideas',
      contact: 'Michael Brown',
      country: 'USA'
    },
    {
      company: 'Swift Enterprises',
      contact: 'Sophia Anderson',
      country: 'Canada'
    },
    {
      company: 'Eco Products',
      contact: 'Liam Wilson',
      country: 'Australia'
    },
    {
      company: 'Global Tech',
      contact: 'Olivia Garcia',
      country: 'Spain'
    },
    {
      company: 'Innovative Solutions',
      contact: 'Noah Martinez',
      country: 'USA'
    },
    {
      company: 'Digital Systems',
      contact: 'Ava Hernandez',
      country: 'Mexico'
    },
    {
      company: 'Power Industries',
      contact: 'Isabella Lopez',
      country: 'USA'
    },
    {
      company: 'Smart Technologies',
      contact: 'William Clark',
      country: 'UK'
    },
    {
      company: 'Future Ventures',
      contact: 'Mia Young',
      country: 'Australia'
    },
    {
      company: 'Precision Solutions',
      contact: 'James Walker',
      country: 'Canada'
    },
    {
      company: 'Global Enterprises',
      contact: 'Charlotte Lewis',
      country: 'USA'
    },
    {
      company: 'Elite Services',
      contact: 'Benjamin Rodriguez',
      country: 'Mexico'
    },
    {
      company: 'Tech Pros',
      contact: 'Amelia Hill',
      country: 'USA'
    },
    {
      company: 'Innovate Co.',
      contact: 'Henry Green',
      country: 'Australia'
    },
    {
      company: 'Metro Solutions',
      contact: 'Ella Scott',
      country: 'Canada'
    },
    {
      company: 'Global Motors',
      contact: 'Alexander Mitchell',
      country: 'USA'
    },
    {
      company: 'Digital Innovations',
      contact: 'Sofia Carter',
      country: 'UK'
    },
    {
      company: 'Advanced Tech',
      contact: 'Joseph Turner',
      country: 'Germany'
    },
    {
      company: 'Quality Products',
      contact: 'Victoria Hall',
      country: 'USA'
    },
    {
      company: 'Swift Solutions',
      contact: 'Daniel Young',
      country: 'Australia'
    }
  ];
  constructor() { }

  test(cust: any): void {
    window.alert(cust.country);
  }
  ngOnInit(): void {
  }
}
