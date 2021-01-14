import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
// const electron = (<any>window).require('electron');
// const dialog = electron.remote;

@Component({
  selector: 'app-fileannotate',
  templateUrl: './fileannotate.component.html',
  styleUrls: ['./fileannotate.component.scss']
})
export class FileannotateComponent implements OnInit {

  dialog;
  fs: any;
  filePath: string;
  fileData;

  constructor(private electronService: ElectronService) { }

  ngOnInit(): void {
    this.dialog = this.electronService.remote.dialog;
    this.fs = (window as any).fs;

    this.fileData = 'sample data';
  }

  SelectFiletoRead() {
    this.dialog.showOpenDialog().then(result => {
      // console.log(result.canceled)
      // console.log(result.filePaths)

      this.filePath = result.filePaths[0];

      // this.ReadFileContent(this.filePath);
    }).catch(err => {
      console.log(err)
    })
  }

  ReadSelectedFile(){
    this.ReadFileContent(this.filePath);
  }

  HasFilePath(){
    return (this.filePath!==undefined && this.filePath!="");
  }

  WriteFile() {
    if(this.WriteFileContent(this.filePath, this.fileData)){
      alert("Saved");
    }else{
      alert("Error occured");
    }
  }


  ReadFileContent(filePath: string) {
    var sd = this.fs.readFileSync(filePath, 'utf-8');
    // this.fileData=sd;
    this.SetFileData(sd);

    // this.fs.readFile(filePath, 'utf-8', function (err, data) {
    //   if (err) {
    //     console.log("An error ocurred reading the file :" + err.message);
    //   }
    //   const vData=data;
    //   console.log(vData);
    //   this.SetFileData(vData);
    // });
  }

  SetFileData(data) {
    // console.log(data);
    this.fileData = data;
  }

  private AppendFileContent(filePath: string, content: string): boolean {
    try {
      var stream = this.fs.createWriteStream(filePath, { flags: 'a' });
      stream.write(content);
      // console.log(new Date().toISOString());
      // [...Array(10000)].forEach(function (item, index) {
      //   stream.write(index + "\n");
      // });
      // console.log(new Date().toISOString());
      stream.end();
      return true;
    }
    catch {
      return false;
    }
  }

  private WriteFileContent(filePath: string, content: string): boolean {
    try {
      var stream = this.fs.createWriteStream(filePath, { flags: 'w' });
      stream.write(content);
      // console.log(new Date().toISOString());
      // [...Array(10000)].forEach(function (item, index) {
      //   stream.write(index + "\n");
      // });
      // console.log(new Date().toISOString());
      stream.end();
      return true;
    }
    catch {
      return false;
    }
  }
}
