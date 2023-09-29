import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-box',
  templateUrl: './voting-box.component.html',
  styleUrls: ['./voting-box.component.css']
})
export class VotingBoxComponent {
  votingLines:Array<any>=[
  ]
  votingItems:Array<string>=[
    "React",
    "Angular",
    "Vue",
    "React Native"
  ]
  handleLikeVoting(vote:any)
  {
    let {item}=vote;
    let voteLine = this.votingLines.find(line=>line.item==item)
    if (voteLine)
    {
      voteLine.likes++;
    }
    else{
      this.votingLines.push({
        id:this.votingLines.length+1,
        item:item,
        likes:1,
        dislikes:0
      })
    }
  }
  handleDislikeVoting(vote:any)
  {
    let {item}=vote;
    let voteLine = this.votingLines.find(line=>line.item==item)
    if (voteLine)
    {
      voteLine.dislikes++;
    }
    else{
      this.votingLines.push({
        id:this.votingLines.length+1,
        item:item,
        likes:0,
        dislikes:1
      })
    }
  }
}
