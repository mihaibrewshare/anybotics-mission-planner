import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mpl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) {}

  copyToClipboard(text: string) {
    this.clipboard.copy(text);
    this.openSnackBar('Code successfully copied!');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
