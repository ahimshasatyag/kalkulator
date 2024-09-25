import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanta',
  templateUrl: './vanta.component.html',
  styleUrls: ['./vanta.component.scss']
})
export class VantaComponent implements OnInit {

  todaySdate = "Tanggal " + new Date().toUTCString().slice(5, 16) + '.';
  todayStime = 'Waktu ' + new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) + '.';

  textArray = [ 'Programming', 'is', 'an', 'art'];

  typeDeleteArray = [
    'Selamat datang..',
    '',
    this.todaySdate,
    this.todayStime,
    'Programming is an art 💚'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
