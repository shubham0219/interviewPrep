import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'interview-prep-project';

  title1 = 'interview';

  title2 = 'interview-Prep';

  constructor(private router: Router) {}
  ngOnInit() {
    this.reverseChars();
    this.splitMethod();
    this.ternaryOprtr();
  }

  reverseChars() {
    const word = 'Neha Sonare';
    const newWord = word.split(' ');
    console.log('new word', newWord);
    const reverseWord = newWord.map((el) => {
      return el.split('').reverse().join('');
    });
    console.log('reversedWord', reverseWord.join(' '));
    console.log('New Reverse', reverseWord.reverse().join(' '));
  }

  splitMethod() {
    const stringArrayBySplit =
      'Hello Hiiiiii Byyyyyeee Tatatatatata Jimmmy Tommmy.';
    console.log('stringArrayBySplit function', stringArrayBySplit);
  }

  ternaryOprtr() {
    let a = 10;
    let b = 15;
    let c = a > b ? 'a is greater than b' : 'a is not greater than b';
    console.log('Ternary oprtr =>', c); //a is not greater than b
  }

  testModule() {
    console.log('clicked');

    this.router.navigate(['/test']);
  }

  secondMax() {
    var arr = [20, 30, 50, 60, 32];
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    console.log("arr",arr);
  }
}
