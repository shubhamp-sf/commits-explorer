import { Component } from '@angular/core';

interface CommitResponse{
  commit:{
    message: string,
  },
  author: {
    avatar_url: string,
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  JSON=JSON;
  commits: CommitResponse[] = [];
  title = 'commits-explorer';
  // /https://api.github.com/repos/sourcefuse/loopback4-microservice-catalog/commits
  fetchCommits(){
    fetch(`https://api.github.com/repos/sourcefuse/loopback4-microservice-catalog/commits?per_page=100`).then(e => e.json()).then((commits: CommitResponse[]) => {
      this.commits = commits;
    })
  }
}
