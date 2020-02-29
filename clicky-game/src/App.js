import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriends: [],
    score: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  //   console.log(id)
  // };

  shuffleDeck = id => {
    let clickedFriends = this.state.clickedFriends
       if(clickedFriends.includes(id)){
         this.setState({ clickedFriends: [], score: 0});
         console.log("you lose")
         return;
       }
       else {
         clickedFriends.push(id)
        if(clickedFriends.length == 12){
          this.setState({score: 12, clickedFriends: []})
          console.log("winner")
          return;
        }
        this.setState({ friends, clickedFriends, score: this.state.score + 1})

        friends.sort((a,b) => 0.5 - Math.random());
       }
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <Score score={this.state.score}/>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleDeck={this.shuffleDeck}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
